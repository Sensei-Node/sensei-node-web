import senseiLogo from '../../../public/sensei-logo-white.png';
import { useLocation } from 'react-router-dom';

import {
	Header,
	TopArea,
	Languages,
	Language,
	SocialNetworks,
	SocialNetworksIcon,
	Navbar,
	Logo,
	Menu,
	MenuItem,
} from './styles';

import { languages, socialNetworks, menuItems } from './constants';

const index = ({ token }) => {
	const { pathname } = useLocation();

	return (
		<Header>
			<TopArea>
				<Languages>
					{languages.map(
						({ value }) =>
							pathname.split('/')[1] !== value.toLowerCase() && (
								<Language
									key={value}
									to={`/${value.toLocaleLowerCase()}/stake/${token}`}
								>
									{value}
								</Language>
							)
					)}
				</Languages>
				<SocialNetworks>
					{socialNetworks.map((sn) => (
						<SocialNetworksIcon key={sn.title}>
							<sn.Icon />
						</SocialNetworksIcon>
					))}
				</SocialNetworks>
			</TopArea>
			<Navbar>
				<Logo src={senseiLogo} alt='Sensei Node Logo' />
				<Menu>
					{menuItems.map(
						(item) =>
							item.visible && (
								<MenuItem key={item.title} to={item.url} variant={item.variant}>
									{item.title}
								</MenuItem>
							)
					)}
				</Menu>
			</Navbar>
		</Header>
	);
};

export default index;
