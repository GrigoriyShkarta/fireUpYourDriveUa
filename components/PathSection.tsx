export default function PathSection() {
	return (
		<section className='py-16 px-6 max-w-5xl mx-auto'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				Шлях учасників марафону:
			</h2>
			<div className='grid md:grid-cols-2 gap-10 text-lg mb-[40px]'>
				<div className='relative rounded-2xl overflow-hidden shadow-[0_0_0_2px_#ffb52c]'>
					<div className='bg-[url("../assets/start.jpg")] bg-cover p-6 relative z-10'>
						<div className='absolute inset-0 bg-black/70 z-0' />
						<div className='relative z-10 text-white'>
							<h3 className='text-2xl font-semibold mb-4'>Точка А:</h3>
							<ul className='space-y-4'>
								<li>
									– Хочуть додати драйв у вокал, але не знають з чого почати.
								</li>
								<li>
									– Пробували робити хрип, але звучить нестабільно, не так, як у
									професіоналів.
								</li>
								<li>
									– Виникає дискомфорт, напруження або швидка втома голосу.
								</li>
								<li>
									– Впевнені, що драйв шкідливий або потребує природного
									«хрипкого» голосу.
								</li>
								<li>
									– Не знають, як впровадити драйв у пісні, щоб він звучав
									органічно.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='relative rounded-2xl overflow-hidden shadow-[0_0_0_2px_#ffb52c]'>
					<div className=' p-6 rounded-2xl relative bg-[url("../assets/end.jpg")] bg-cover'>
						<div className='absolute inset-0 bg-black/70 z-0' />
						<div className='relative z-10'>
							<h3 className='text-2xl font-semibold mb-4'>Точка Б:</h3>
							<ul className='space-y-4'>
								<li>
									+ Розуміють механіку драйву та знають, як його контролювати
									без шкоди для голосу.
								</li>
								<li>
									+ Вміють робити чистий, потужний драйв, який звучить
									професійно та виразно.
								</li>
								<li>
									+ Навчилися впроваджувати драйв у пісні, роблячи звучання
									більш емоційним та впевненим.
								</li>
								<li>
									+ Відчувають свободу у вокалі та впевненість у своїх
									можливостях.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* <p>
				📌 Підсумок: марафон допоможе перестати гадати, як правильно робити
				драйв, і дасть чітку систему, щоб впевнено використовувати цю техніку у
				своєму вокалі. 🔥🎤
			</p> */}
		</section>
	)
}
