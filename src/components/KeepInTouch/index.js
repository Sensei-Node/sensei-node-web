import React, { useState } from 'react';

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

const index = ({ keepInTouchInfo, token, language }) => {
	const [formValues, setFormValues] = useState({});

	const handleOnChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	return (
		<KeepInTouch>
			<Content>
				<Title>{keepInTouchInfo.title}</Title>
				<KeepInTouchDescription>
					{keepInTouchInfo.description}
				</KeepInTouchDescription>
				<ThanksText>{keepInTouchInfo.thanksText}</ThanksText>

				<Form
					action='https://senseinode.us5.list-manage.com/subscribe/post?u=9a345a8d92f88e03240efcfb6&amp;id=8beaca3651'
					method='post'
					id='mc-embedded-subscribe-form'
					name='mc-embedded-subscribe-form'
					className='validate'
					target='_blank'
					novalidate
				>
					<FormInputs>
						{keepInTouchInfo.formInputs.map((input) => (
							<TextField
								id={input.id}
								name={input.name}
								placeholder={input.placeholder}
								type={input.name === 'EMAIL' ? 'email' : 'text'}
								required={input.name === 'EMAIL'}
								value={formValues[input.name]}
								onChange={handleOnChange}
							/>
						))}
						<input
							type='hidden'
							value={token.toUpperCase()}
							name='PROTOCOL'
							className=''
							id='mce-PROTOCOL'
						/>
						<Button type='submit'>{keepInTouchInfo.buttonText}</Button>
					</FormInputs>
					<FormLinks>
						{keepInTouchInfo.formLinks.map((link) => (
							<FormLink>{link.text}</FormLink>
						))}
					</FormLinks>
				</Form>
				<CardsContainer>
					<CardTitle>{keepInTouchInfo.cardsTitle}</CardTitle>
					<Cards isProtocol={true} token={token} language={language} />
				</CardsContainer>
			</Content>
		</KeepInTouch>
	);
};

export default index;
