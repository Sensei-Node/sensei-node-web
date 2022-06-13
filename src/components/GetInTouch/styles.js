import { Grid, Typography, Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GetInTouch = styled(Grid)`
	width: 100%;
	height: 30vh;
	background: #14302b;
	color: #fff;
	display: flex;
	align-items: center;
`;

export const GetInTouchContent = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0px 140px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const GetInTouchPanel = styled(Grid)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const GetInTouchTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 0px;
`;
export const GetInTouchSubTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	margin-top: 0px;
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
