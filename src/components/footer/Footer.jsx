import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='h-12 flex items-center justify-between text-sm'>
			<div>2023 Lamamia. All rights reserved.</div>
			<div className='flex items-center gap-2'>
				<Image
					src='/1.png'
					alt='lamadev facebook'
					width={15}
					height={15}
					className='opacity-60 cursor-pointer'
				/>
				<Image
					src='/2.png'
					alt='lamadev instagram'
					width={15}
					height={15}
					className='opacity-60 cursor-pointer'
				/>
				<Image
					src='/3.png'
					alt='lamadev twitter'
					width={15}
					height={15}
					className='opacity-60 cursor-pointer'
				/>
				<Image
					src='/4.png'
					alt='lamadev youtube'
					width={15}
					height={15}
					className='opacity-60 cursor-pointer'
				/>
			</div>
		</footer>
	)
}

export default Footer
