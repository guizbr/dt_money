import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Pagination } from './components/Pagination'
import { SearchForm } from './components/SearchForm'
import {
	PriceHighligh,
	TransactionsContainer,
	TransactionsTable,
} from './styles'

export function Transaction() {
	const transactions = useContextSelector(TransactionsContext, (context) => {
		return context.transactions
	})

	const [currentPage, setCurrentPage] = useState(1)
	const [transactionsPerPage] = useState(2)

	const indexOfLastTransaction = currentPage * transactionsPerPage
	const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
	const currentPosts = transactions.slice(
		indexOfFirstTransaction,
		indexOfLastTransaction,
	)
	const totalTransactions = transactions.length

	const paginate = (pageNumber: number) => {
		currentPage !== pageNumber && setCurrentPage(pageNumber)
	}

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const nextPage = () => {
		if (currentPage < Math.ceil(totalTransactions / transactionsPerPage)) {
			setCurrentPage(currentPage + 1)
		}
	}

	return (
		<div>
			<Header></Header>
			<Summary></Summary>

			<TransactionsContainer>
				<SearchForm></SearchForm>
				<TransactionsTable>
					<tbody>
						{currentPosts.map((transaction) => (
							<tr key={transaction.id}>
								<td width="50%">{transaction.description}</td>
								<td>
									<PriceHighligh variant={transaction.type}>
										{transaction.type === 'outcome' && '- '}
										{priceFormatter.format(transaction.price)}
									</PriceHighligh>
								</td>
								<td>{transaction.category}</td>
								<td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
							</tr>
						))}
					</tbody>
				</TransactionsTable>
				<Pagination
					transactionsPerPage={transactionsPerPage}
					totalTransactions={totalTransactions}
					paginate={paginate}
					previousPage={previousPage}
					nextPage={nextPage}
				></Pagination>
			</TransactionsContainer>
		</div>
	)
}
