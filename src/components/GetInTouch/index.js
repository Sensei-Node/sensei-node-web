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
					<GetInTouchTitle>{protocol.getInTouch.title}</GetInTouchTitle>
					<GetInTouchSubTitle>
						{protocol.getInTouch.description}
					</GetInTouchSubTitle>
				</GetInTouchPanel>
				<GetInTouchPanel alignItems='end'>
					<Button>{protocol.getInTouch.buttonText}</Button>
				</GetInTouchPanel>
			</GetInTouchContent>
		</GetInTouch>
	);
};

export default index;
