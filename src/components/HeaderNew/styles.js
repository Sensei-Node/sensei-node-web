import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HashLink as Link } from 'react-router-hash-link';

export const Header = styled(Grid)`
	font-family: 'Nimbus Sans D OT', sans-serif;
	position: relative;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #f6f6f6;
	z-index: 10;
`;

export const Navbar = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	height: 100%;
	padding-top: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TopArea = styled(Grid)`
	width: 100%;
	max-width: 1280px;
	height: 100%;
	box-sizing: border-box;
	padding-top: 12px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #c4c4c4;
`;

export const Languages = styled(Grid)`
	display: flex;
	align-items: center;
	width: auto;
`;

export const Language = styled(Link)`
	font-size: 16px;
	font-weight: 700;
	line-height: 16px;
	margin-right: 12px;
`;

export const SocialNetworks = styled(Grid)`
	display: flex;
`;

export const SocialNetworksIcon = styled(Grid)`
	margin-left: 12px;
	& > svg {
		width: 24px;
		height: 24px;
	}
`;

export const Logo = styled('img')`
	width: 420px;
`;

export const Menu = styled(Grid)``;

export const MenuItem = styled(Link)(
	(props) => `
	font-size: 16px;
	line-height: 16px;
	margin-left: 12px;
	background-color: ${props.variant === 'primary' ? '#34C55D' : ''};
	border-radius: 12px;
	padding: 8px 14px;
`
);
