import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
	return (
		<div>
			<h1 className='text-lightGreen text-3xl font-semibold'>{params.category}</h1>
			<div className='[&>*:nth-child(2n+1)]:flex-row-reverse'>
				<div className='flex gap-12 mt-12 mb-24'>
					<div className='flex-1 flex flex-col gap-5 justify-center'>
						<h2 className='text-2xl font-semibold'>Test</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, voluptatum minima. Quo quisquam earum hic,
							nesciunt in dolore eaque obcaecati sunt quam accusamus, molestias nobis vero sequi reprehenderit eum
							ipsam!
						</p>
						<Button
							text='See More'
							url='#'
						/>
					</div>
					<div className='flex-1 h-[500px] relative'>
						<Image
							src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
							alt=''
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div className='flex gap-12 mt-12 mb-24'>
					<div className='flex-1 flex flex-col gap-5 justify-center'>
						<h2 className='text-2xl font-semibold'>Test</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, voluptatum minima. Quo quisquam earum hic,
							nesciunt in dolore eaque obcaecati sunt quam accusamus, molestias nobis vero sequi reprehenderit eum
							ipsam!
						</p>
						<Button
							text='See More'
							url='#'
						/>
					</div>
					<div className='flex-1 h-[500px] relative'>
						<Image
							src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
							alt=''
							fill
							className='object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Category
