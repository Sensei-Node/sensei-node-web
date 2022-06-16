import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
	Card,
	Header,
	TopAreaHeader,
	Protocol,
	Logo,
	Name,
	MarketCap,
	Divider,
	AddressContainer,
	AddressType,
	Address,
	CopyIcon,
	Tooltip,
	TooltipTitle,
	Body,
	Column,
	Label,
	Value,
} from './styles';

import { marketCapAPI } from './constants';
import { breakpoints } from '../../util/breakpoints.js';

const index = ({ protocol, cardInfo }) => {
	const { token, logo, name, address } = protocol;
	const { addressType, cardData } = cardInfo;
	const [marketCap, setMarketCap] = useState(
		localStorage.getItem(`${token}_marketcap`)
	);
	const [showTooltip, setShowTooltip] = useState(false);
	const isMobile = useMediaQuery(`(max-width:${breakpoints.md})`);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: marketCapAPI[token],
			params: { market_data: 'true' },
			headers: {
				'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
				'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(({ data: { market_data } }) => {
				const marketcap = parseInt(market_data.market_cap.usd / 1000000000);
				setMarketCap(marketcap);
				localStorage.setItem(`${token}_marketcap`, marketcap);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleCopyAddress = () => {
		setShowTooltip(true);
		setTimeout(() => {
			setShowTooltip(false);
		}, 2000);
	};

	const truncate = (str) => {
		return str.length > 30
			? str.substr(0, 9) + '...' + str.substr(str.length - 8, str.length)
			: str;
	};

	return (
		<Card>
			<Header>
				<TopAreaHeader>
					<Protocol>
						<Logo src={logo} alt='Protocol Logo' />
						<Name>{name}</Name>
					</Protocol>
					<MarketCap>${marketCap}B</MarketCap>
				</TopAreaHeader>
				<Divider />
				<AddressContainer>
					<AddressType>{addressType}</AddressType>
					<Address>{isMobile ? truncate(address) : address}</Address>
					<CopyToClipboard onCopy={() => handleCopyAddress()} text={address}>
						<Tooltip
							open={showTooltip}
							disableFocusListener
							disableHoverListener
							disableTouchListener
							title={<TooltipTitle>Address copied!</TooltipTitle>}
							arrow
						>
							<CopyIcon />
						</Tooltip>
					</CopyToClipboard>
				</AddressContainer>
			</Header>
			<Body>
				{cardData.map((data) => (
					<Column key={data.title}>
						<Label>{data.title}</Label>
						<Value>{data.value}</Value>
					</Column>
				))}
			</Body>
		</Card>
	);
};

export default index;
