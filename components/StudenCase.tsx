import React from 'react'

export default function StudentCase() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-4 lg:container lg:h-[500px]'>
			<h2 className='text-3xl text-white font-bold mb-4 text-center'>
				🔥 Кейс учениці 🔥
			</h2>
			<div className='aspect-[429/762] w-full overflow-hidden rounded-xl shadow-lg border-4 border-white'>
				<iframe
					width='100%'
					height='100%'
					src='https://www.youtube.com/embed/E0Q9h0268Nw'
					title='Кейс: учасниця марафону'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
					className='rounded-xl'
				></iframe>
			</div>
			<p className='text-white text-center mt-4'>
				Надихаюча історія з нашого марафону. Подивіться відео!
			</p>
		</div>
	)
}
