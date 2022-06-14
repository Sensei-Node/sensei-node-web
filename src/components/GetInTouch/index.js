import React from 'react';

import {
	Button,
	GetInTouch,
	GetInTouchContent,
	GetInTouchPanel,
	GetInTouchTitle,
	GetInTouchSubTitle,
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
					<Button>{protocol.buttonText}</Button>
				</GetInTouchPanel>
			</GetInTouchContent>
		</GetInTouch>
	);
};

export default index;
