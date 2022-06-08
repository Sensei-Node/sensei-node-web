import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import MainContainerBG from '../../../public/landing-main-container-bg.png';

export const Container = styled(Grid)`
	background: url(${MainContainerBG}), #f4f4f4;
	background-size: contain;
	background-position-y: bottom;
	width: 100%;
	min-height: 150vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25rem 0;
`;

export const Guide = styled(Grid)`
	background: #f6f6f6;
	width: 100%;
	max-width: 1280px;
	min-height: 750px;
	max-height: 80%;
	padding: 100px 140px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1.5px solid #c4c4c4;
	border-radius: 20px;
`;

export const GuideHeader = styled(Grid)`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Logo = styled('img')`
	width: 68px;
	height: 68px;
`;

export const GuideTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 36px;
	color: #e84142;
	margin-top: 40px;
`;

export const GuideBody = styled(Grid)`
	width: 100%;
	margin-top: 80px;
	display: flex;
	flex-direction: column;
`;

export const StepTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-weight: 700;
	font-size: 40px;
	margin-bottom: 40px;
`;

export const StepDescription = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	margin-bottom: 24px;
`;

export const InstructionText = styled(Typography)`
	position: relative;
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
	padding: 20px;
	&:before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #000;
		position: absolute;
		top: 36px;
		left: 0;
	}
`;

export const InstructionHelperText = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 30px;
`;

export const InstructionImage = styled('img')`
	background: #fff;
	border-radius: 20px;
	margin: 24px 0 48px 0;
	padding: 25px 50px;
`;

export const Divider = styled('div')`
	width: 60%;
	border-bottom: 0.5px solid #c4c4c4;
	margin: 60px auto;
`;
