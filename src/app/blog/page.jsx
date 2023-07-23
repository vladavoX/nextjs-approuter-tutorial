import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
	return (
		<div>
			<Link
				href='/blog/testId'
				className='flex items-center gap-12 mb-12'
			>
				<div>
					<Image
						className='object-cover'
						src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
						alt=''
						width={400}
						height={250}
					/>
				</div>
				<div>
					<h1 className='mb-2'>Test</h1>
					<p className='text-lg text-[#999]'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, animi magnam soluta reprehenderit
						provident quisquam nemo molestiae aut, voluptas quo modi fuga delectus rerum? Velit quibusdam earum tenetur
						sapiente doloribus?
					</p>
				</div>
			</Link>
			<Link
				href='/blog/testId'
				className='flex items-center gap-12 mb-12'
			>
				<div>
					<Image
						className='object-cover'
						src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
						alt=''
						width={400}
						height={250}
					/>
				</div>
				<div>
					<h1 className='mb-2'>Test</h1>
					<p className='text-lg text-[#999]'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, animi magnam soluta reprehenderit
						provident quisquam nemo molestiae aut, voluptas quo modi fuga delectus rerum? Velit quibusdam earum tenetur
						sapiente doloribus?
					</p>
				</div>
			</Link>
			<Link
				href='/blog/testId'
				className='flex items-center gap-12 mb-12'
			>
				<div>
					<Image
						className='object-cover'
						src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
						alt=''
						width={400}
						height={250}
					/>
				</div>
				<div>
					<h1 className='mb-2'>Test</h1>
					<p className='text-lg text-[#999]'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, animi magnam soluta reprehenderit
						provident quisquam nemo molestiae aut, voluptas quo modi fuga delectus rerum? Velit quibusdam earum tenetur
						sapiente doloribus?
					</p>
				</div>
			</Link>
		</div>
	)
}

export default Blog
