import styled from 'styled-components'

export const PaginationContainer = styled.div``

export const PaginationList = styled.ul`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`

export const PaginationNumber = styled.li`
	padding: 0.5rem 0.75rem;
	border: 0;
	border-radius: 6px;
	background: ${(props) => props.theme['green-700']};

	color: ${(props) => props.theme['gray-100']};
	font-weight: 700;

	display: flex;
	align-items: center;
	text-align: center;

	cursor: pointer;

	&:hover {
		background: ${(props) => props.theme['green-300']};
		color: ${(props) => props.theme.white};
		transition: background-color 0.2s, color 0.2s;
	}
`

export const PaginationLeftArrow = styled.li``

export const PaginationRightArrow = styled.li``
