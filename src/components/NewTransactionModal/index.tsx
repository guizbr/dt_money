import { useContextSelector } from 'use-context-selector'
import { Controller, useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from './styles'

import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
	const createTransaction = useContextSelector(
		TransactionsContext,
		(context) => {
			return context.createTransaction
		},
	)

	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
	})

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		const { description, price, category, type } = data

		await createTransaction({
			description,
			price,
			category,
			type,
		})

		reset()
	}

	return (
		<Dialog.Portal>
			<Overlay></Overlay>

			<Content>
				<Dialog.Title>Nova transação</Dialog.Title>

				<CloseButton>
					<X size={24}></X>
				</CloseButton>

				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						{...register('description')}
						type="text"
						placeholder="Descrição"
						required
					/>
					<input
						{...register('price', { valueAsNumber: true })}
						type="number"
						placeholder="Preço"
						required
					/>
					<input
						{...register('category')}
						type="text"
						placeholder="Categoria"
						required
					/>

					<Controller
						control={control}
						name="type"
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionTypeButton variant="income" value="income">
										<ArrowCircleUp size={24}></ArrowCircleUp>
										Entrada
									</TransactionTypeButton>

									<TransactionTypeButton variant="outcome" value="outcome">
										<ArrowCircleDown size={24}></ArrowCircleDown>
										Saída
									</TransactionTypeButton>
								</TransactionType>
							)
						}}
					></Controller>

					<button type="submit" disabled={isSubmitting}>
						Cadastrar
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	)
}
