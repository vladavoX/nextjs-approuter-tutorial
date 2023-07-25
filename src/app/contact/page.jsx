import Image from 'next/image'

import Button from '@/components/Button/Button'

export const metadata = {
	title: 'Contact',
	description: 'This is contact page'
}

const Contact = () => {
	return (
		<div>
			<h1 className='text-4xl text-center mb-24 font-semibold'>Let&apos;s keep in touch</h1>
			<div className='flex gap-24 items-center'>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='/contact.png'
						alt=''
						fill
						className='object-contain animate-move'
					/>
				</div>
				<form className='flex-1 flex flex-col gap-5'>
					<input
						type='text'
						placeholder='name'
						className='p-5 bg-transparent outline-none text-gray border-solid border-2 border-gray text-lg font-semibold'
					/>
					<input
						type='email'
						placeholder='email'
						className='p-5 bg-transparent outline-none text-gray border-solid border-2 border-gray text-lg font-semibold'
					/>
					<textarea
						placeholder='message'
						cols='30'
						rows='10'
						className='p-5 bg-transparent outline-none text-gray border-solid border-2 border-gray text-lg font-semibold'
					></textarea>
					<Button
						text='Send'
						url='#'
					/>
				</form>
			</div>
		</div>
	)
}

export default Contact
