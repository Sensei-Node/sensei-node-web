import Header from '../../components/HeaderNew';
import ProtocolCard from '../../components/ProtocolCard';
import MainContainer from '../../components/MainContainer';
import SecondaryContainer from '../../components/SecondaryContainer';
import KeepInTouch from '../../components/KeepInTouch';
import GetInTouch from '../../components/GetInTouch';

import Footer from '../../layouts/Footer';

import senseiIso from '../../../public/sensei-logo-footer.png';

import {
	Hero,
	HeroInfoContainer,
	Isotype,
	MainTitle,
	Description,
} from './styles';
import { protocols } from './constants';

const LandingPage = (props) => {
	const token = props.match.params.token;
	const protocol = protocols[token];

	return (
		<>
			<Header token={token} />
			<Hero backgroundColor={protocol.backgroundColor}>
				<HeroInfoContainer>
					<Isotype src={senseiIso} alt='Sensei Node Iso' />
					<MainTitle component='h1'>{protocol.title}</MainTitle>
					<Description>{protocol.description}</Description>
					<ProtocolCard protocol={protocol} />
				</HeroInfoContainer>
			</Hero>
			<MainContainer protocol={protocol} />
			<SecondaryContainer protocol={protocol} />
			<KeepInTouch protocol={protocol} token={token} />
			<GetInTouch protocol={protocol} />
			<Footer />
		</>
	);
};

export default LandingPage;
