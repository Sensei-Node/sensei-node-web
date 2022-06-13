import {
	Link,
	DelegateFooterContainer,
	DelegateFooterLogo,
	ThanksImage,
} from './styles';

//SENSEINODE
import senseiNodeLogoWhite from '../../../public/sensei-logo-white.png';

//AVAX IMAGES
import AvalancheLogo from '../../../public/avalanche.png';
import Transfer2PChain1 from '../../../public/images/stake/avax/transfer2p-chain(1).png';
import Transfer2PChain2 from '../../../public/images/stake/avax/transfer2p-chain(2).png';
import delegateToSensei from '../../../public/images/stake/avax/delegate-to-senseinode.png';

export const protocols = {
	avax: {
		backgroundColor: '#e84142',
		color: '#fff',
		name: 'Avalanche',
		logo: AvalancheLogo,
		title: 'AVAX validator',
		description:
			'AVAX holders are incentivized to stake their tokens to secure Avalanche, while receiving a reward in return. Stake your AVAX, and earn AVAX rewards.',
		marketCap: '$325B',
		addressType: 'Validator Address',
		address: 'NodeID-F3SZA2ZNdRjTBe3GYyRQFDaCXB3DyaZQQ',
		cardData: [
			{
				title: 'Expected Rewards',
				value: '9.43%',
			},
			{
				title: 'Fees',
				value: '10%',
			},
			{
				title: 'Min Staking Period',
				value: '2 weeks',
			},
			{
				title: 'Max Staking Period',
				value: '1 year',
			},
			{
				title: 'Delegated to us',
				value: '2,700 AVAX',
			},
			{
				title: 'Payout frequency',
				value: '8 seconds every block',
			},
			{
				title: 'Official Site',
				value: 'www.avax.network/',
			},
		],
		guide: {
			title: 'AVAX Staking Guide',
			steps: [
				{
					title: 'First Steps',
					description: null,
					instructions: [
						{
							text: <strong>Open your Avalanche wallet.</strong>,
							helperText: (
								<>
									Don’t have one? Get the Official AVAX Wallet here:
									<br />
									<Link href='https://wallet.avax.network/' target='_blank'>
										[https://wallet.avax.network/]
									</Link>{' '}
									and follow the steps inside{' '}
									<strong>“create new wallet”</strong> button.
								</>
							),
							images: [],
						},
						{
							text: (
								<span>
									You need a <strong>minimum of 25 AVAX to stake.</strong> Send
									them to your address (which can be found next to the QR) if
									you don’t already have them.
								</span>
							),
							helperText: null,
							images: [],
						},
					],
				},
				{
					title: 'Transfer to P-Chain',
					description: (
						<span>
							Your funds are not available to stake yet. You have to transfer
							the amount you want to stake to the P-Chain in order to continue.
						</span>
					),
					instructions: [
						{
							text: (
								<span>
									Click <strong>'Earn'</strong> on the right sidebar and then
									click the <strong>'Transfer'</strong> button.
								</span>
							),
							helperText: null,
							images: [
								{ src: Transfer2PChain1, alt: 'Transfer to P-Chain 1' },
								{ src: Transfer2PChain2, alt: 'Transfer to P-Chain 2' },
							],
						},
						{
							text: (
								<span>
									Enter the amount you want to stake plus 0.001 AVAX, that is
									the fee that will cost you to do this transfer. Click again in
									<strong>‘TRANSFER’</strong> to confirm.
								</span>
							),
							helperText: null,
							images: [],
						},
					],
				},
			],
		},
		delegate_to_us: {
			title: 'Delegate to SenseiNode AVAX validator',
			steps: [
				{
					title: (
						<span>
							Now you're ready to stake by delegating your funds to our Node ID
							or
						</span>
					),
					instructions: [
						{
							text: (
								<span>
									Return to the <strong>‘EARN’</strong> page then click on{' '}
									<strong>'Add Delegator’</strong>.
								</span>
							),
							images: [
								{ src: delegateToSensei, alt: 'Delegate to SenseiNode' },
							],
						},
					],
				},
				{
					title: (
						<span>
							There will be a list of validators ordered by the total amount
							staked.
						</span>
					),
					instructions: [
						{
							text: (
								<span>
									Insert{' '}
									<strong>NodeID-F3SZA2ZNdRjTBe3GYyRQFDaCXB3DyaZQQ</strong> in
									the "Search Node ID" field and press the "Select" button.
								</span>
							),
							images: [],
						},
					],
				},
				{
					title: <span>You'll get to the delegate page.</span>,
					instructions: [
						{
							text: (
								<span>
									You can choose the <strong>Staking Period</strong> to
									configure the lock of your funds for a settled time.
									(Remember: you cannot stake longer than what’s described on
									our validator’s <strong>‘End Time’</strong>)
								</span>
							),
							images: [],
						},
					],
				},
				{
					title: null,
					instructions: [
						{
							text: (
								<span>
									Enter the amount that you want to delegate in the
									<strong>‘Stake Amount </strong> section and specify the Reward
									Address’ if you don't want to receive rewards on the same
									address from which you're staking.
								</span>
							),
							images: [],
						},
					],
				},
				{
					title: null,
					instructions: [
						{
							text: (
								<span>
									Press <strong>'CONFIRM'</strong> and then{' '}
									<strong>'SUBMIT'</strong> to confirm the delegation.
								</span>
							),
							images: [],
						},
						{
							text: <span>Wait until the transaction is confirmed.</span>,
							images: [],
						},
					],
				},
			],
			footer: (
				<DelegateFooterContainer>
					You’re now earning AVAX with{' '}
					<DelegateFooterLogo src={senseiNodeLogoWhite} />
				</DelegateFooterContainer>
			),
		},
		keepInTouch: {
			title: 'Monitor Your Stake and Stay in Touch!',
			description:
				'If you’d like to keep in touch with us after your delegation, leave your public address and any contact info of your preference in the form below. ',
			thanksText: (
				<>
					Thanks for choosing
					<ThanksImage src={senseiNodeLogoWhite} />
				</>
			),
			formInputs: [
				{
					placeholder: 'Public $AVAX address',
				},
				{
					placeholder: 'Email',
				},
				{
					placeholder: 'Discord ID',
				},
			],
			formLinks: [
				{
					text: (
						<>
							Join the #avax{' '}
							<a href='/' target='_blank'>
								chatroom
							</a>{' '}
							in our Discord.
						</>
					),
				},
				{
					text: (
						<>
							Follow us on{' '}
							<a href='https://twitter.com/SenseiNode' target='_blank'>
								Twitter
							</a>
						</>
					),
				},
			],
			cardsTitle: (
				<>
					<img src={AvalancheLogo} />
					<span>Avalanche Tools and Info</span>
				</>
			),
		},
		getInTouch: {
			title: 'Need help?',
			description:
				'Quick personal assistence for both beginner and experienced inquiries.',
			buttonText: 'Get in Touch',
		},
	},
};
