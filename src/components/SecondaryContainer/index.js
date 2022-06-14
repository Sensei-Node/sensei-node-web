import React from 'react';

import {
	SecondaryContainer,
	Content,
	Title,
	SubTitle,
	InstructionText,
	Image,
	DelegateFooter,
} from './styles';

const index = ({ delegateInfo }) => {
	return (
		<SecondaryContainer>
			<Content>
				<Title>{delegateInfo.title}</Title>
				{delegateInfo.steps.map((step, index) => (
					<>
						<SubTitle>{step.title}</SubTitle>
						{step.instructions.map((inst, index) => (
							<>
								<InstructionText>{inst.text}</InstructionText>
								{inst.images.length > 0 &&
									inst.images.map((img) => (
										<Image src={img.src} alt={img.alt} />
									))}
							</>
						))}
					</>
				))}
				{delegateInfo.footer && (
					<DelegateFooter>{delegateInfo.footer}</DelegateFooter>
				)}
			</Content>
		</SecondaryContainer>
	);
};

export default index;
