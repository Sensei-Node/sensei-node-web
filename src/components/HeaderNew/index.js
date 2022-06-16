import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import senseiIso from '../../../public/sensei-logo-footer.png';
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
import { breakpoints } from '../../util/breakpoints.js';

const index = ({ token, setLang, lang }) => {
	const { pathname } = useLocation();
	const isMobile = useMediaQuery(`(max-width:${breakpoints.md})`);

	useEffect(() => {
		setLang(pathname.split('/')[1]);
	}, []);

	return (
		<Header>
			<TopArea>
				<Languages>
					{languages.map(({ value }) => {
						const lang = value.toLowerCase();

						return (
							pathname.split('/')[1] !== lang && (
								<Language
									key={value}
									to={`/${lang}/stake/${token}`}
									onClick={() => setLang(lang)}
								>
									{value}
								</Language>
							)
						);
					})}
				</Languages>
				<SocialNetworks>
					{socialNetworks.map((sn) => (
						<a href={sn.url} target='_blank'>
							<SocialNetworksIcon key={sn.title}>
								<sn.Icon />
							</SocialNetworksIcon>
						</a>
					))}
				</SocialNetworks>
			</TopArea>
			<Navbar>
				<Logo src={isMobile ? senseiIso : senseiLogo} alt='Sensei Node Logo' />
				<Menu>
					{menuItems.map(
						(item) =>
							item.visible && (
								<MenuItem
									key={item.title[lang]}
									to={item.url}
									variant={item.variant}
								>
									{item.title[lang]}
								</MenuItem>
							)
					)}
				</Menu>
			</Navbar>
		</Header>
	);
};

export default index;
