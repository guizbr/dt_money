import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
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

	return (
		<div>
			<Header></Header>
			<Summary></Summary>

			<TransactionsContainer>
				<SearchForm></SearchForm>
				<TransactionsTable>
					<tbody>
						{transactions.map((transaction) => (
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
			</TransactionsContainer>
		</div>
	)
}
