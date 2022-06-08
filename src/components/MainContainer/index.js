import React from 'react';

import {
	Container,
	Guide,
	GuideHeader,
	Logo,
	GuideTitle,
	GuideBody,
	StepTitle,
	StepDescription,
	InstructionText,
	InstructionHelperText,
	InstructionImage,
	Divider,
} from './styles';

const index = ({ protocol }) => {
	return (
		<Container>
			<Guide>
				<GuideHeader>
					<Logo src={protocol.logo} />
					<GuideTitle>{protocol.guide.title}</GuideTitle>
				</GuideHeader>
				<GuideBody>
					{protocol.guide.steps.map((step, index) => {
						return (
							<React.Fragment key={step.title}>
								<StepTitle>{step.title}</StepTitle>
								<StepDescription>{step.description}</StepDescription>
								{step.instructions.map((inst, index) => {
									return (
										<React.Fragment key={`${inst.text}-${index}`}>
											<InstructionText>{inst.text}</InstructionText>
											<InstructionHelperText>
												{inst.helperText}
											</InstructionHelperText>
											{inst.images.map((img) => (
												<InstructionImage
													key={img.src}
													src={img.src}
													alt={img.alt}
												/>
											))}
										</React.Fragment>
									);
								})}
								{index < protocol.guide.steps.length - 1 && <Divider />}
							</React.Fragment>
						);
					})}
				</GuideBody>
			</Guide>
		</Container>
	);
};

export default index;
