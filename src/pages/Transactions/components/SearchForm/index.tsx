import { useContextSelector } from 'use-context-selector'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer, Title } from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const fetchTransactions = useContextSelector(
		TransactionsContext,
		(context) => {
			return context.fetchTransactions
		},
	)

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	function handleSearchTransactions(data: SearchFormInputs) {
		fetchTransactions(data.query)
	}

	return (
		<>
			<Title>Transações</Title>
			<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
				<input
					type="text"
					placeholder="Busque por transações"
					{...register('query')}
				/>

				<button type="submit" disabled={isSubmitting}>
					<MagnifyingGlass size={20}></MagnifyingGlass>
					<span>Buscar</span>
				</button>
			</SearchFormContainer>
		</>
	)
}
