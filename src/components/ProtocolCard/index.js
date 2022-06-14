import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

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

const index = ({ protocol }) => {
	const { token, logo, name, addressType, address, cardData } = protocol;
	const [marketCap, setMarketCap] = useState(
		localStorage.getItem(`${token}_marketcap`)
	);
	const [showTooltip, setShowTooltip] = useState(false);

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
					<Address>{address}</Address>
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
