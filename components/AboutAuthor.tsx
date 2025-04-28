import Image from 'next/image'
import author from '@/assets/author.png'

export default function AboutAuthor() {
	return (
		<div className='container mx-auto pt-16 lg:flex justify-between items-center'>
			<Image
				src={author}
				alt='YS Vocal Coach'
				className='mx-auto lg:w-[400px] lg:h-[300px]'
			/>

			<div className='p-[1rem] flex flex-col gap-6'>
				<p className='text-[18px]'>
					Привіт Я Яна — викладач сучасного, рок- та екстремального вокалу,
					співачка, музикант та автор пісень. Маю понад 15 років досвіду в
					музиці та 8 років у вокалі. Я автор навчальних продуктів для
					вокалістів і викладачів вокалу, а також веду вокальний блог, де ділюся
					корисними порадами та прийомами.
				</p>
				<p className='text-[18px]'>
					За свою кар’єру я провела тисячі уроків вокалу, організувала вокальні
					марафони, в яких брали участь сотні учасників, провела десятки
					майстер-класів з екстремальних прийомів для вокалістів і тренерів,
					випустила власну збірку вокальних вправ у стилі рок під назвою «ROCK
					ETUDES».
				</p>
				<p className='text-[18px]'>
					Моя мета - допомогти вокалістам та викладачам освоїти складні техніки
					вокалу та розвинути їхні навички на найвищому рівні.
				</p>
			</div>
		</div>
	)
}
