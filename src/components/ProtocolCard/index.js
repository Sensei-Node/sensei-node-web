import { ContentCopy } from '@mui/icons-material';

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
	Body,
	Column,
	Label,
	Value,
} from './styles';

const index = ({ protocol }) => {
	const { logo, name, marketCap, addressType, address, cardData } = protocol;

	return (
		<Card>
			<Header>
				<TopAreaHeader>
					<Protocol>
						<Logo src={logo} alt='Protocol Logo' />
						<Name>{name}</Name>
					</Protocol>
					<MarketCap>{marketCap}</MarketCap>
				</TopAreaHeader>
				<Divider />
				<AddressContainer>
					<AddressType>{addressType}</AddressType>
					<Address>{address}</Address>
					<ContentCopy />
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
