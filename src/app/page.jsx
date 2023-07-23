import Image from 'next/image'

import Button from '@/components/Button/Button'

import Hero from 'public/hero.png'

export default function Home() {
	return (
		<div className='flex items-center gap-24'>
			<div className='flex-1 flex flex-col gap-12'>
				<h1 className='text-7xl font-semibold bg-gradient-to-b from-darkGreen to-gray bg-clip-text text-transparent'>
					Better design for your digital products.
				</h1>
				<p className='text-2xl font-light'>
					Turning your Idea into Reality. We bring together the teams from the global tech industry.
				</p>
				<Button
					url='/portfolio'
					text='See Our Works'
				/>
			</div>
			<div className='flex-1 flex flex-col gap-12'>
				<Image
					src={Hero}
					alt='hero'
					className='w-full h-full object-contain animate-move'
				/>
			</div>
		</div>
	)
}
