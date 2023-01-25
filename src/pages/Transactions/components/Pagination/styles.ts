import styled from 'styled-components'

export const PaginationContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 2.5rem 0;

	@media (max-width: 992px) {
		margin-top: 1rem;
	}
`

export const PaginationList = styled.ul`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`

interface PaginationTypeButtonProps {
	variant: 'current' | 'not-current'
}

export const PaginationNumber = styled.li<PaginationTypeButtonProps>`
	padding: 0.5rem 0.75rem;
	border: 0;
	border-radius: 6px;
	background: ${(props) =>
		props.variant === 'current'
			? props.theme['green-700']
			: props.theme['gray-600']};

	color: ${(props) =>
		props.variant === 'current'
			? props.theme['gray-100']
			: props.theme['gray-400']};
	font-weight: 700;

	display: flex;
	align-items: center;
	text-align: center;

	cursor: pointer;

	&:hover {
		opacity: 0.6;
		transition: background-color 0.2s, color 0.2s;
	}
`

interface LimitPaginationTypeArrowsProps {
	variant: boolean
}

export const PaginationLeftArrow = styled.li<LimitPaginationTypeArrowsProps>`
	line-height: 0;
	cursor: pointer;
	color: ${(props) =>
		props.variant ? props.theme['gray-600'] : props.theme['green-500']};

	&:hover {
		opacity: 0.6;
		transition: color 0.2s;
	}
`

export const PaginationRightArrow = styled.li<LimitPaginationTypeArrowsProps>`
	line-height: 0;
	cursor: pointer;
	color: ${(props) =>
		props.variant ? props.theme['green-500'] : props.theme['gray-600']};

	&:hover {
		opacity: 0.6;
		transition: color 0.2s;
	}
`
