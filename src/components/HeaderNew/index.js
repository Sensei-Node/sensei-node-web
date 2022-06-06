import senseiLogo from '../../../public/sensei-logo-white.png';

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

const index = () => {
	return (
		<Header>
			<TopArea>
				<Languages>
					{languages.map((language) => (
						<Language key={language.value} to={language.value}>
							{language.value}
						</Language>
					))}
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
