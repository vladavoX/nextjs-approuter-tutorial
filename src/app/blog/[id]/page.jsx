import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
	return (
		<div>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between gap-8'>
					<h1 className='text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, expedita.</h1>
					<p className='text-lg font-light'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sapiente aliquam sit illo minus
						voluptates autem. Dolore voluptatem tenetur perspiciatis quae, maiores nesciunt ex ratione ullam, vitae,
						quasi rem assumenda!
					</p>
					<div className='flex items-center gap-2'>
						<Image
							src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
							alt=''
							width={40}
							height={40}
							className='object-cover rounded-full'
						/>
						<p>John Doe</p>
					</div>
				</div>
				<div className='flex-1 h-[300px] relative'>
					<Image
						src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
						alt=''
						fill
						className='object-cover'
					/>
				</div>
			</div>
			<div className='mt-12 text-lg font-light text-[#999] text-justify'>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde eius sunt impedit iste aspernatur commodi fuga
					expedita blanditiis numquam, quos iusto animi nihil magni reprehenderit quis doloremque quasi, placeat
					possimus. At laboriosam quia magni voluptas ipsum fugit totam quisquam, dolore vel, numquam magnam cupiditate
					omnis minus, iste optio repellat vitae explicabo molestias asperiores quam! Ab neque ratione maiores tempora
					nihil! Minus, iste doloremque illo ex perspiciatis ullam quas numquam, reiciendis culpa sed qui. Molestiae
					explicabo, autem magnam vel cumque ipsum eum excepturi laboriosam porro saepe eos reprehenderit. Libero, eos
					neque!
				</p>
			</div>
		</div>
	)
}

export default BlogPost
