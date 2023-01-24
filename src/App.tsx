import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transaction } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle></GlobalStyle>
			<TransactionsProvider>
				<Transaction></Transaction>
			</TransactionsProvider>
		</ThemeProvider>
	)
}
