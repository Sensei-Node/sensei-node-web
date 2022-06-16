import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ContentCopy } from '@mui/icons-material';
import { default as MUITooltip } from '@mui/material/Tooltip';

import { breakpoints } from '../../util/breakpoints.js';

export const Card = styled(Grid)`
	position: absolute;
	top: 75%;
	width: 60%;
	max-width: 850px;
	background: #fff;
	border: 1.5px solid #e84142;
	border-radius: 20px;

	@media (max-width: ${breakpoints.xl}) {
		width: 70%;
	}

	@media (max-width: ${breakpoints.lg}) {
		width: 80%;
	}

	@media (max-width: ${breakpoints.md}) {
		width: 90%;
	}

	@media (max-width: ${breakpoints.md}) {
		top: 70%;
	}
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

	@media (max-width: ${breakpoints.sm}) {
		margin-left: 12px;
		font-size: 20px;
		margin-right: 0px;
		&::after {
			content: 'Market cap';
			font-size: 12px;
			position: relative;
			top: -16px;
			left: -4px;
			white-space: nowrap;
		}
	}
`;

export const Protocol = styled(Grid)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled('img')`
	@media (max-width: ${breakpoints.sm}) {
		height: 52px;
		width: 52px;
	}
`;

export const Name = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 36px;
	color: #e84142;
	margin-left: 36px;

	@media (max-width: ${breakpoints.sm}) {
		margin-left: 8px;
		font-size: 20px;
	}
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

	@media (max-width: ${breakpoints.md}) {
		width: 90%;
		display: grid;
		justify-content: flex-start;
		grid-template-areas:
			'type . . . . '
			'address address address address icon';
	}
`;

export const AddressType = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	background: #3f3ff9;
	color: #fff;
	font-size: 16px;
	padding: 4px 12px;
	border-radius: 4px;

	@media (max-width: ${breakpoints.lg}) {
		font-size: 14px;
	}

	@media (max-width: ${breakpoints.md}) {
		grid-area: type;
	}
`;

export const Address = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 16px;
	color: #2e2e2e;
	font-weight: 700;
	margin: 0 12px 0 20px;

	@media (max-width: ${breakpoints.md}) {
		margin: 8px 8px 0 0;
		grid-area: address;
	}
`;

export const CopyIcon = styled(ContentCopy)`
	padding: 5px;
	box-sizing: content-box;
	transition: all 0.5s ease;
	&:hover {
		background: rgba(0, 0, 0, 0.075);
		border-radius: 5px;
		cursor: pointer;
	}

	@media (max-width: ${breakpoints.md}) {
		grid-area: icon;
	}
`;

export const Body = styled(Grid)`
	height: 60%;
	width: 85%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 3fr 2fr 3fr 3fr;
	grid-template-rows: 125px 100px;

	@media (max-width: ${breakpoints.lg}) {
		grid-template-rows: 100px 75px;
	}

	@media (max-width: ${breakpoints.md}) {
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 75px;
	}

	@media (max-width: ${breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 75px);
	}
`;

export const Column = styled('div')`
	display: flex;
	flex-direction: column;

	@media (min-width: ${breakpoints.md}) {
		&:nth-of-type(6) {
			grid-column: 2 / 4;
		}
	}
`;

export const Label = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 18px;

	@media (max-width: ${breakpoints.lg}) {
		font-size: 16px;
	}

	@media (max-width: ${breakpoints.md}) {
		font-size: 14px;
	}
`;

export const Value = styled(Typography)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	font-size: 24px;
	font-weight: 700;

	@media (max-width: ${breakpoints.xl}) {
		font-size: 20px;
	}

	@media (max-width: ${breakpoints.lg}) {
		font-size: 18px;
	}

	@media (max-width: ${breakpoints.md}) {
		font-size: 16px;
	}
`;

export const Tooltip = styled(MUITooltip)``;

export const TooltipTitle = styled('span')`
	font-family: 'Nimbus Sans D OT', sans-serif;
	color: #fff;
	font-size: 12px;
`;
