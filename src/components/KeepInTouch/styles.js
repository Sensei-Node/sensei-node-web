import {
	Grid,
	Typography,
	TextField as MUITextField,
	Button as MUIButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import News from '../news';

export const Content = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	min-height: 750px;
	max-height: 80%;
	padding: 120px 140px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

export const Title = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 20px;
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
`;

export const ThanksText = styled(Title)`
	margin: 60px 0;
`;

export const Form = styled('form')`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
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
`;
export const Cards = styled(News)``;
