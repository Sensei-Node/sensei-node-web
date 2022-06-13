import React from 'react';

import {
	Content,
	Title,
	KeepInTouch,
	KeepInTouchDescription,
	ThanksText,
	Form,
	FormInputs,
	FormLinks,
	FormLink,
	TextField,
	Button,
	CardsContainer,
	CardTitle,
	Cards,
} from './styles';

const index = ({ protocol, token }) => {
	return (
		<KeepInTouch>
			<Content>
				<Title>{protocol.keepInTouch.title}</Title>
				<KeepInTouchDescription>
					{protocol.keepInTouch.description}
				</KeepInTouchDescription>
				<ThanksText>{protocol.keepInTouch.thanksText}</ThanksText>
				<Form>
					<FormInputs>
						{protocol.keepInTouch.formInputs.map((input) => (
							<TextField placeholder={input.placeholder} />
						))}
						<Button>Send</Button>
					</FormInputs>
					<FormLinks>
						{protocol.keepInTouch.formLinks.map((link) => (
							<FormLink>{link.text}</FormLink>
						))}
					</FormLinks>
				</Form>
				<CardsContainer>
					<CardTitle>{protocol.keepInTouch.cardsTitle}</CardTitle>
					<Cards isProtocol={true} token={token} />
				</CardsContainer>
			</Content>
		</KeepInTouch>
	);
};

export default index;
