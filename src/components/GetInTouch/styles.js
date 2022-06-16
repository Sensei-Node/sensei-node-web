import { Grid, Typography, Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { breakpoints } from '../../util/breakpoints.js';

export const GetInTouch = styled(Grid)`
	width: 100%;
	height: 30vh;
	background: #14302b;
	color: #fff;
	display: flex;
	align-items: center;

	@media (max-width: ${breakpoints.md}) {
		height: auto;
	}
`;

export const GetInTouchContent = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0px 140px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (max-width: ${breakpoints.md}) {
		grid-template-columns: 1fr;
		padding: 0 50px;
	}

	@media (max-width: ${breakpoints.sm}) {
		padding: 0 20px;
	}
`;

export const GetInTouchPanel = styled(Grid)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: ${breakpoints.lg}) {
		padding: 25px 0;
	}
`;

export const GetInTouchTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 0px;

	@media (max-width: ${breakpoints.lg}) {
		font-size: 32px;
		margin-bottom: 12px;
	}

	@media (max-width: ${breakpoints.md}) {
		font-size: 28px;
	}

	@media (max-width: ${breakpoints.sm}) {
		font-size: 24px;
	}
`;

export const GetInTouchSubTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	margin-top: 0px;

	@media (max-width: ${breakpoints.lg}) {
		font-size: 24px;
		margin-bottom: 12px;
	}

	@media (max-width: ${breakpoints.md}) {
		font-size: 20px;
	}

	@media (max-width: ${breakpoints.sm}) {
		font-size: 16px;
	}
`;

export const Button = styled(MUIButton)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	width: 100%;
	padding: 8px 16px;
	font-size: 24px;
	font-weight: 300;
	color: #fff;
	background: #34c55d;
	text-transform: none;
	&:hover {
		background: #33af54;
	}
`;

export const Link = styled('a')`
	@media (max-width: ${breakpoints.md}) {
		align-self: center;
	}
`;
