import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeroBG from '../../../public/protocol-hero-bg.png';

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

//

export const Hero = styled(Grid)(
	(props) => `
	font-family: 'Nimbus Sans D OT', sans-serif;
	height: 100vh;
	background: url(${HeroBG}), ${props.backgroundColor};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: bottom;
	display: flex;
	justify-content: center;
`
);

export const HeroInfoContainer = styled(Grid)`
	width: 60%;
	max-width: 768px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Isotype = styled('img')`
	width: 85px;
	height: 120px;
`;

export const MainTitle = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	color: #fff;
	font-size: 96px;
	font-weight: 300;
`;

export const Description = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	color: #fff;
	font-size: 24px;
	font-weight: 300;
	max-width: 580px;
	width: 100%;
	margin-bottom: 100px;
	text-align: center;
`;

export const Link = styled('a')`
	text-decoration: underline;
	text-decoration-thickness: from-font;
	font-style: italic;
`;

export const DelegateFooterLogo = styled('img')`
	margin-left: 16px;
	width: 370px;
`;

export const DelegateFooterContainer = styled(Grid)`
	display: flex;
	align-items: center;
	margin: 80px auto;
`;

export const ThanksImage = styled('img')`
	width: 250px;
	margin-left: 8px;
`;
