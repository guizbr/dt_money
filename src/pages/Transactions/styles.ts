import styled from 'styled-components'

export const TransactionsContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 4rem auto 0;
	padding: 0 1.5rem;

	@media (max-width: 638px) {
		margin-top: 1rem;
	}
`

export const TransactionsTable = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 0.5rem;
	margin-top: 1.5rem;
	overflow: hidden;

	td {
		padding: 1.25rem 2rem;
		background: ${(props) => props.theme['gray-700']};

		> svg {
			display: none;
		}

		&:first-child {
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;
		}

		&:last-child {
			border-top-right-radius: 6px;
			border-bottom-right-radius: 6px;
		}
	}

	@media (max-width: 638px) {
		margin-top: 0.25rem;

		td {
			width: 100%;
		}

		tr {
			display: grid;
			grid-template-columns: 50% 50%;
			grid-template-areas:
				'desc desc'
				'price price'
				'type date';

			& + tr {
				margin-top: 0.5rem;
			}

			td {
				padding-left: 1.5rem;
				padding-right: 1.5rem;

				display: flex;
				align-items: center;

				> svg {
					display: flex;
					line-height: 0;
					margin-right: 0.25rem;
				}
			}

			td:nth-child(1) {
				grid-area: desc;
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
				border-bottom-left-radius: 0;

				padding-bottom: 0;
			}

			td:nth-child(2) {
				grid-area: price;
				font-size: 1.25rem;
				font-weight: bold;

				padding-top: 0.75rem;
				padding-bottom: 0;
			}

			td:nth-child(3) {
				grid-area: type;
				border-bottom-left-radius: 6px;

				color: ${(props) => props.theme['gray-500']};
			}

			td:nth-child(4) {
				grid-area: date;
				border-bottom-right-radius: 6px;
				border-top-right-radius: 0;
				text-align: right;

				color: ${(props) => props.theme['gray-500']};
			}
		}
	}

	@media (max-width: 375px) {
		tr {
			max-width: 275px;
		}
	}
`

interface PriceHighlighProps {
	variant: 'income' | 'outcome'
}

export const PriceHighligh = styled.span<PriceHighlighProps>`
	color: ${(props) =>
		props.variant === 'income'
			? props.theme['green-300']
			: props.theme['red-300']};
`
