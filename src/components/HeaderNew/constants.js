import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

export const languages = [{ value: 'ES' }, { value: 'US' }, { value: 'PT' }];

export const socialNetworks = [
	{ title: 'Github', Icon: () => <GitHub /> },
	{ title: 'Twitter', Icon: () => <Twitter /> },
	{ title: 'LinkedIn', Icon: () => <LinkedIn /> },
];

export const menuItems = [
	{ title: 'Products', url: '', variant: null, visible: false },
	{ title: 'Clients', url: '', variant: null, visible: false },
	{ title: 'About', url: '', variant: null, visible: true },
	{ title: 'Contact Us', url: '', variant: 'primary', visible: true },
];
