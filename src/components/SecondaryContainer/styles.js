import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import SecondaryContainerBG from '../../../public/landing-secondary-container-bg.png';

export const SecondaryContainer = styled(Grid)`
	background: url(${SecondaryContainerBG}), #1b1b1b;
	background-size: cover;
	background-position-y: center;
	color: #f6f6f6;
	width: 100%;
	min-height: 150vh;
	display: flex;
	justify-content: center;
`;

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

export const SubTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	margin-top: 64px;
`;

export const InstructionText = styled(Typography)`
	position: relative;
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	padding: 0 20px;
	&:before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #f6f6f6;
		position: absolute;
		top: 16px;
		left: 0;
	}
`;

export const Image = styled('img')`
	margin: 40px auto;
`;

export const DelegateFooter = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 40px;
	font-weight: 700;
`;
