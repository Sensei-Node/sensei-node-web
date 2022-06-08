import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Grid)`
	position: absolute;
	top: 75%;
	width: 60%;
	max-width: 850px;
	background: #fff;
	border: 1.5px solid #e84142;
	border-radius: 20px;
`;

export const Header = styled(Grid)`
	height: 40%;
	padding: 32px 18px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TopAreaHeader = styled(Grid)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const MarketCap = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 36px;
	color: #e84142;
	margin-right: 40px;
	&::after {
		content: 'Market cap';
		font-size: 16px;
		position: relative;
		top: -26px;
	}
`;

export const Protocol = styled(Grid)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled('img')``;

export const Name = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 36px;
	color: #e84142;
	margin-left: 36px;
`;

export const Divider = styled('div')`
	width: 75%;
	border-bottom: 0.5px solid #c4c4c4;
`;

export const AddressContainer = styled(Grid)`
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AddressType = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	background: #3f3ff9;
	color: #fff;
	font-size: 16px;
	padding: 4px 12px;
	border-radius: 4px;
`;

export const Address = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 16px;
	color: #2e2e2e;
	font-weight: 700;
	margin: 0 12px 0 20px;
`;

export const Body = styled(Grid)`
	height: 60%;
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 3fr 2fr 3fr 3fr;
	grid-template-rows: 125px 100px;
`;

export const Column = styled('div')`
	display: flex;
	flex-direction: column;
	&:nth-of-type(6) {
		grid-column: 2 / 4;
	}
`;

export const Label = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 18px;
`;

export const Value = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 24px;
	font-weight: 700;
`;
