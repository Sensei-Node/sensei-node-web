import {
	Grid,
	Typography,
	TextField as MUITextField,
	Button as MUIButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import News from '../news';

import { breakpoints } from '../../util/breakpoints.js';

export const Content = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	min-height: 750px;
	max-height: 80%;
	padding: 120px 140px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media (max-width: ${breakpoints.md}) {
		padding: 100px 50px;
	}

	@media (max-width: ${breakpoints.sm}) {
		padding: 80px 20px;
	}
`;

export const Title = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 20px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 36px;
		margin-bottom: 12px;
	}

	@media (max-width: ${breakpoints.sm}) {
		font-size: 32px;
	}

	@media (max-width: ${breakpoints.xs}) {
		font-size: 28px;
	}
`;

export const KeepInTouch = styled(Grid)`
	width: 100%;
	min-height: 150vh;
	background: #e84142;
	color: #fff;
	display: flex;
	justify-content: center;
`;

export const KeepInTouchDescription = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 26px;
	}

	@media (max-width: ${breakpoints.sm}) {
		font-size: 22px;
	}
`;

export const ThanksText = styled(Title)`
	@media (max-width: ${breakpoints.md}) {
		margin: 30px 0;
	}
`;

export const Form = styled('form')`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;

	@media (max-width: ${breakpoints.md}) {
		grid-template-columns: 1fr;
		row-gap: 40px;
	}
`;

export const FormInputs = styled(Grid)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const FormLinks = styled(Grid)`
	width: 100%;
	padding-left: 20px;
`;

export const FormLink = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 42px;
	margin-bottom: 24px;
	font-weight: 700;
	& a {
		text-decoration: underline;
	}

	@media (max-width: ${breakpoints.lg}) {
		font-size: 36px;
		margin-bottom: 12px;
	}

	@media (max-width: ${breakpoints.md}) {
		font-size: 32px;
	}

	@media (max-width: ${breakpoints.sm}) {
		font-size: 28px;
	}
`;

export const TextField = styled(MUITextField)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	width: 100%;
	background: #fff;
	margin-bottom: 20px;
	border: none !important;
	border-radius: 4px;
	&::hover {
		border: none;
	}
	.MuiInputLabel-root {
		color: #000 !important;
		font-size: 24px;
	}
	.Mui-focused {
		color: #000 !important;
		border: none;
	}
	.Mui-focused .MuiOutlinedInput-notchedOutline {
		border: none;
	}
	.MuiOutlinedInput-root {
		border: none;
		font-size: 24px;
	}
	.MuiOutlinedInput-root::hover {
		border: none;
	}
`;

export const Button = styled(MUIButton)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	width: 50%;
	font-size: 24px;
	font-weight: 300;
	color: #fff;
	background: #34c55d;
	text-transform: none;
	&:hover {
		background: #33af54;
	}
`;

export const CardsContainer = styled(Grid)`
	margin-top: 80px;

	@media (max-width: ${breakpoints.md}) {
		margin-top: 40px;
	}
`;

export const CardTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: #fff;
	display: flex;
	align-items: center;
	& span {
		padding-top: 10px;
	}

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
export const Cards = styled(News)``;
