import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

export const languages = [{ value: 'ES' }, { value: 'US' }, { value: 'PT' }];

export const socialNetworks = [
	{
		title: 'Github',
		Icon: () => <GitHub />,
		url: 'https://github.com/Sensei-Node',
	},
	{
		title: 'Twitter',
		Icon: () => <Twitter />,
		url: 'https://twitter.com/SenseiNode',
	},
	{
		title: 'LinkedIn',
		Icon: () => <LinkedIn />,
		url: 'https://www.linkedin.com/company/senseinode?originalSubdomain=ar',
	},
];

export const menuItems = [
	{ title: { us: 'Products' }, url: '', variant: null, visible: false },
	{ title: { us: 'Clients' }, url: '', variant: null, visible: false },
	{
		title: { us: 'About', es: 'Acerca de', pt: 'Nós' },
		url: '',
		variant: null,
		visible: true,
	},
	{
		title: { us: 'Contact Us', es: 'Contactanos', pt: 'Contate-Nos' },
		url: '',
		variant: 'primary',
		visible: true,
	},
];
