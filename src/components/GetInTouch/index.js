import React from 'react';

import {
	Button,
	GetInTouch,
	GetInTouchContent,
	GetInTouchPanel,
	GetInTouchTitle,
	GetInTouchSubTitle,
	Link,
} from './styles.js';

const index = ({ protocol }) => {
	return (
		<GetInTouch>
			<GetInTouchContent>
				<GetInTouchPanel>
					<GetInTouchTitle>{protocol.title}</GetInTouchTitle>
					<GetInTouchSubTitle>{protocol.description}</GetInTouchSubTitle>
				</GetInTouchPanel>
				<GetInTouchPanel alignItems='end'>
					<Link
						href='https://us5.list-manage.com/contact-form?u=9a345a8d92f88e03240efcfb6&form_id=d832bc00fc84c97d62fa9aa05161379d'
						target='_blank'
					>
						<Button>{protocol.buttonText}</Button>
					</Link>
				</GetInTouchPanel>
			</GetInTouchContent>
		</GetInTouch>
	);
};

export default index;
