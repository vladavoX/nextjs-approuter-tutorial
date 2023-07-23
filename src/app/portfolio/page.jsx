import Link from 'next/link'

const Portfolio = () => {
	return (
		<div>
			<h1 className='my-5'>Choose a gallery</h1>
			<div className='flex gap-12'>
				<Link
					href='/portfolio/illustrations'
					className='border-solid border-gray border-4 rounded-md w-[300px] h-[400px] relative bg-[url("/illustration.png")] bg-cover group'
				>
					<span className='absolute right-2 bottom-2 text-4xl font-semibold group-hover:text-lightGreen'>
						Illustrations
					</span>
				</Link>
				<Link
					href='/portfolio/websites'
					className='border-solid border-gray border-4 rounded-md w-[300px] h-[400px] relative bg-[url("/websites.jpg")] bg-cover group'
				>
					<span className='absolute right-2 bottom-2 text-4xl font-semibold group-hover:text-lightGreen'>Websites</span>
				</Link>
				<Link
					href='/portfolio/applications'
					className='border-solid border-gray border-4 rounded-md w-[300px] h-[400px] relative bg-[url("/apps.jpg")] bg-cover group'
				>
					<span className='absolute right-2 bottom-2 text-4xl font-semibold group-hover:text-lightGreen'>
						Applications
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Portfolio
