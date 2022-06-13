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

const index = ({ protocol }) => {
	return (
		<SecondaryContainer>
			<Content>
				<Title>{protocol.delegate_to_us.title}</Title>
				{protocol.delegate_to_us.steps.map((step, index) => (
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
				{protocol.delegate_to_us.footer && (
					<DelegateFooter>{protocol.delegate_to_us.footer}</DelegateFooter>
				)}
			</Content>
		</SecondaryContainer>
	);
};

export default index;
