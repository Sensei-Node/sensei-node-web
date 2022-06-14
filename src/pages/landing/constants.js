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
		token: 'avax',
		address: 'NodeID-F3SZA2ZNdRjTBe3GYyRQFDaCXB3DyaZQQ',
		logo: AvalancheLogo,
		us: {
			title: 'AVAX validator',
			description:
				'AVAX holders are incentivized to stake their tokens to secure Avalanche, while receiving a reward in return. Stake your AVAX, and earn AVAX rewards.',
			addressType: 'Validator Address',
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
										You need a <strong>minimum of 25 AVAX to stake.</strong>{' '}
										Send them to your address (which can be found next to the
										QR) if you don’t already have them.
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
								the amount you want to stake to the P-Chain in order to
								continue.
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
										the fee that will cost you to do this transfer. Click again
										in
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
								Now you're ready to stake by delegating your funds to our Node
								ID
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
										<strong>‘Stake Amount </strong> section and specify the
										Reward Address’ if you don't want to receive rewards on the
										same address from which you're staking.
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
					// {
					// 	text: (
					// 		<>
					// 			Join the #avax{' '}
					// 			<a href='/' target='_blank'>
					// 				chatroom
					// 			</a>{' '}
					// 			in our Discord.
					// 		</>
					// 	),
					// },
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
				buttonText: 'Send',
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
		es: {
			title: 'Validador AVAX',
			description:
				'Los holders de AVAX están incentivados a hacer stake de sus tokens para asegurar Avalanche, recibiendo una recompensa a cambio. Haz stake de tus AVAX y gana recompensas de AVAX.',
			addressType: 'Dirección del Validator',
			cardData: [
				{
					title: 'Ganancia Estimada',
					value: '9.43%',
				},
				{
					title: 'Comisiones',
					value: '10%',
				},
				{
					title: 'Periodo Min Staking ',
					value: '2 semanas',
				},
				{
					title: 'Periodo Max Staking ',
					value: '1 año',
				},
				{
					title: 'Delegado a nosotros',
					value: '2,700 AVAX',
				},
				{
					title: 'Frecuencia de pago',
					value: '8 segundos cada bloque',
				},
				{
					title: 'Sitio Oficial',
					value: 'www.avax.network/',
				},
			],
			guide: {
				title: 'Guía Staking de AVAX ',
				steps: [
					{
						title: 'Primeros pasos',
						description: null,
						instructions: [
							{
								text: <strong>Abrí tu billetera de Avalanche.</strong>,
								helperText: (
									<>
										¿No tenés una? Obtené la billetera oficial de Avax aquí:
										<br />
										<Link href='https://wallet.avax.network/' target='_blank'>
											[https://wallet.avax.network/]
										</Link>{' '}
										y seguí la creación paso a paso haciendo clic en el botón{' '}
										<strong>“create new wallet”</strong>
									</>
								),
								images: [],
							},
						],
					},
					{
						title: 'Transferir a P-Chain',
						description: (
							<span>
								Para colocar AVAX en stake, primero debes transferir la cantidad
								de AVAX (mín. 25 AVAX) a la P-Chain.
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Haz click en <strong>'Earn'</strong> en la barra lateral
										derecha y luego haz click en el botón
										<strong>'Transfer'</strong>.
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
										Asegúrate de transferir la cantidad que deseas apostar más
										0.001 AVAX, esa es la tarifa que pagarás para hacer la
										transferencia entre las cadenas. Cliquea nuevamente en
										<strong>‘TRANSFER’</strong> para confirmar. Y ten en cuenta
										que la cantidad mínima para colocar en stake y delegar es de
										25 AVAX, así que asegúrate de transferir al menos 25.001
										AVAX de X-Chain a P-Chain.
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
				title: 'Delegar al validador AVAX de SenseiNode',
				steps: [
					{
						title: (
							<span>
								Ahora que tienes tus AVAX en la dirección de la P-Chain, estás
								listo para delegar tu stake a nuestro NodeID.
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Regresa a la página <strong>‘EARN’</strong> y haz click en{' '}
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
								Se te presentará una lista de validadores ordenados por el monto
								total en stake, busca nuestro Nodo:{' '}
								<strong>Sensei o NodeID</strong>
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Una vez que hayas elegido nuestro validador, puedes hacer
										click en <strong>"Select"</strong>.
									</span>
								),
								images: [],
							},
						],
					},
					{
						title: <span>Luego se mostrará la página de delegado.</span>,
						instructions: [
							{
								text: (
									<span>
										Puedes elegir el <strong>Staking Period</strong>. (recuerda:
										no puede apostar más tiempo que nuestro validador), la
										cantidad que deseas delegar en la sección Stake Amount y
										especificar la Dirección de recompensa, si no desea recibir
										recompensas en la misma dirección que estás usando para
										delegar.
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
										Cuando hayas ingresado toda la información, puedes
										simplemente hacer click en <strong>'CONFIRM'</strong> para
										confirmar los datos que ingresaste y luego{' '}
										<strong>'SUBMIT'</strong> para confirmar la delegación, y
										eso es todo.
									</span>
								),
								images: [],
							},
						],
					},
				],
				footer: (
					<DelegateFooterContainer>
						Ahora estás ganando AVAX con{' '}
						<DelegateFooterLogo src={senseiNodeLogoWhite} />
					</DelegateFooterContainer>
				),
			},
			keepInTouch: {
				title: 'Monitorea tu Stake y Mantente en contacto!',
				description:
					'Si desea mantenerse en contacto con nosotros después de su delegación, deje su dirección pública y cualquier información de contacto de su preferencia en el siguiente formulario.',
				thanksText: (
					<>
						Gracias por elegir
						<ThanksImage src={senseiNodeLogoWhite} />
					</>
				),
				formInputs: [
					{
						placeholder: 'Dirección $AVAX pública',
					},
					{
						placeholder: 'Email',
					},
					{
						placeholder: 'Discord ID',
					},
				],
				formLinks: [
					//{
					// text: (
					// 	<>
					// 		Join the #avax{' '}
					// 		<a href='/' target='_blank'>
					// 			chatroom
					// 		</a>{' '}
					// 		in our Discord.
					// 	</>
					// ),
					//},
					{
						text: (
							<>
								Síguenos en{' '}
								<a href='https://twitter.com/SenseiNode' target='_blank'>
									Twitter
								</a>
							</>
						),
					},
				],
				buttonText: 'Enviar',
				cardsTitle: (
					<>
						<img src={AvalancheLogo} />
						<span>Herramientas e información sobre Avalanche</span>
					</>
				),
			},
			getInTouch: {
				title: '¿Necesitás ayuda?',
				description:
					'Asistencia personal rápida para consultas de principiantes y experimentados.',
				buttonText: 'Contactanos',
			},
		},
		pt: {
			title: 'Validador AVAX',
			description:
				'Os portadores de AVAX são incentivados a apostar as suas fichas para garantir a Avalanche, enquanto recebem uma recompensa em troca. Aposte o seu AVAX, e ganhe recompensas AVAX.',
			addressType: 'Address do validador',
			cardData: [
				{
					title: 'Recompensas previstas',
					value: '9.43%',
				},
				{
					title: 'Taxas',
					value: '10%',
				},
				{
					title: 'Período Min de Staking',
					value: '2 semanas',
				},
				{
					title: 'Período Max de  Staking ',
					value: '1 ano',
				},
				{
					title: 'Delegar para nós',
					value: '2,700 AVAX',
				},
				{
					title: 'Frequência de pagamento',
					value: '8 segundos por bloco',
				},
				{
					title: 'Site Oficial',
					value: 'www.avax.network/',
				},
			],
			guide: {
				title: 'Guia de Estacação AVAX',
				steps: [
					{
						title: 'Primeiros passos',
						description: null,
						instructions: [
							{
								text: (
									<strong>
										O primeiro passo é acessar sua carteira AVAX{' '}
										<Link href='https://wallet.avax.network/' target='_blank'>
											[https://wallet.avax.network/]
										</Link>
										.
									</strong>
								),
								helperText: (
									<>
										Se você ainda não criou uma, pode seguir o passo a passo da
										criação clicando no botão:{' '}
										<strong>“Criar Nova Carteira”</strong>
									</>
								),
								images: [],
							},
						],
					},
					{
						title: 'Transferência para P-Chain',
						description: (
							<span>
								Para apostar AVAX, você deve primeiro transferir a quantidade de
								AVAX (mín. 25 AVAX) para o P-Chain.
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Clique em <strong>'Ganhar'</strong>na barra lateral direita
										e depois clique no botão
										<strong>'Transfer'</strong>.
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
										Certifique-se de transferir o valor que deseja apostar mais
										0,001 AVAX, que é a taxa que você pagará para transferir
										entre as redes. Clique novamente em
										<strong>‘Transfer’</strong>para confirmar. E lembre-se de
										que o valor mínimo para apostar e delegar é de 25 AVAX,
										portanto, certifique-se de transferir pelo menos 25.001 AVAX
										de X-Chain para P-Chain.
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
				title: 'Delegado ao validador AVAX do SenseiNode',
				steps: [
					{
						title: (
							<span>
								Agora que você tem seu AVAX no endereço P-Chain, você está
								pronto para delegar seu stake para o nosso NodeID.
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Volte para a página <strong>Ganhar</strong>e clique em{' '}
										<strong>'Adicionar Delegador’</strong>.
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
								Ser-lhe-á apresentada uma lista de validadores ordenados pelo
								valor total apostado, procure o nosso Node:{' '}
								<strong>Sensei ou NodeID</strong>
							</span>
						),
						instructions: [
							{
								text: (
									<span>
										Depois de ter escolhido nosso validador, você pode clicar em{' '}
										<strong>"Select"</strong>.
									</span>
								),
								images: [],
							},
						],
					},
					{
						title: <span>Em seguida, a página do delegado será exibida.</span>,
						instructions: [
							{
								text: (
									<span>
										Você pode escolher o <strong>Período de Aposta</strong>.
										(lembre-se: você não pode apostar mais do que nosso
										validador), o valor que deseja delegar na seção Valor da
										Aposta e especificar o Endereço de Recompensa, se você não
										deseja receber recompensas no mesmo endereço que está usando
										Delegar.
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
										Quando tiver introduzido toda a informação, pode basta
										clicar em <strong>'Confirm'</strong> para confirmar os dados
										introduzidos e depois <strong>'Enviar'</strong> para
										confirmar a delegação, e ponto final.
									</span>
								),
								images: [],
							},
						],
					},
				],
				footer: (
					<DelegateFooterContainer>
						Está agora a ganhar AVAX com{' '}
						<DelegateFooterLogo src={senseiNodeLogoWhite} />
					</DelegateFooterContainer>
				),
			},
			keepInTouch: {
				title: 'Monitorize a sua Stake e mantenha-se em contacto!',
				description:
					'Se desejar manter-se em contacto connosco após a sua delegação, deixe o seu endereço público e qualquer informação de contacto à sua escolha no formulário abaixo.',
				thanksText: (
					<>
						Obrigado por escolher
						<ThanksImage src={senseiNodeLogoWhite} />
					</>
				),
				formInputs: [
					{
						placeholder: 'Endereço $AVAX público',
					},
					{
						placeholder: 'Email',
					},
					{
						placeholder: 'Discord ID',
					},
				],
				formLinks: [
					//{
					// text: (
					// 	<>
					// 		Join the #avax{' '}
					// 		<a href='/' target='_blank'>
					// 			chatroom
					// 		</a>{' '}
					// 		in our Discord.
					// 	</>
					// ),
					//},
					{
						text: (
							<>
								Síguenos en{' '}
								<a href='https://twitter.com/SenseiNode' target='_blank'>
									Twitter
								</a>
							</>
						),
					},
				],
				buttonText: 'Enviar',
				cardsTitle: (
					<>
						<img src={AvalancheLogo} />
						<span>Ferramentas e informação sobre a Avalanche</span>
					</>
				),
			},
			getInTouch: {
				title: 'Precisa de ajuda?',
				description:
					'Assistência pessoal rápida para principiantes e utilizadores experientes.',
				buttonText: 'Contate-nos',
			},
		},
	},
};
