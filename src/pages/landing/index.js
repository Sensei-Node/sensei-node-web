import { useState } from 'react';

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
	const [lang, setLang] = useState('us');
	const token = props.match.params.token;
	const protocol = protocols[token];

	return (
		<>
			<Header token={token} setLang={setLang} lang={lang} />
			<Hero backgroundColor={protocol.backgroundColor}>
				<HeroInfoContainer>
					<Isotype src={senseiIso} alt='Sensei Node Iso' />
					<MainTitle component='h1'>{protocol[lang].title}</MainTitle>
					<Description>{protocol[lang].description}</Description>
					<ProtocolCard protocol={protocol} cardInfo={protocol[lang]} />
				</HeroInfoContainer>
			</Hero>
			<MainContainer logo={protocol.logo} guide={protocol[lang].guide} />
			<SecondaryContainer delegateInfo={protocol[lang].delegate_to_us} />
			<KeepInTouch
				logo={protocol.logo}
				keepInTouchInfo={protocol[lang].keepInTouch}
				token={token}
				language={lang}
			/>
			<GetInTouch protocol={protocol[lang].getInTouch} />
			<Footer />
		</>
	);
};

export default LandingPage;
