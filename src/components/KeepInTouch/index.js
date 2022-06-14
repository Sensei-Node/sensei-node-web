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

const index = ({ keepInTouchInfo, token }) => {
	return (
		<KeepInTouch>
			<Content>
				<Title>{keepInTouchInfo.title}</Title>
				<KeepInTouchDescription>
					{keepInTouchInfo.description}
				</KeepInTouchDescription>
				<ThanksText>{keepInTouchInfo.thanksText}</ThanksText>
				<Form>
					<FormInputs>
						{keepInTouchInfo.formInputs.map((input) => (
							<TextField placeholder={input.placeholder} />
						))}
						<Button>{keepInTouchInfo.buttonText}</Button>
					</FormInputs>
					<FormLinks>
						{keepInTouchInfo.formLinks.map((link) => (
							<FormLink>{link.text}</FormLink>
						))}
					</FormLinks>
				</Form>
				<CardsContainer>
					<CardTitle>{keepInTouchInfo.cardsTitle}</CardTitle>
					<Cards isProtocol={true} token={token} />
				</CardsContainer>
			</Content>
		</KeepInTouch>
	);
};

export default index;
