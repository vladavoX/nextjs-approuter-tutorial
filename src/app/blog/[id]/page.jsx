import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'no-cache'
	})

	if (!res.ok) {
		return notFound()
	}

	return res.json()
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id)
	return (
		<div>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between gap-8'>
					<h1 className='text-4xl'>{data.title}</h1>
					<p className='text-lg font-light'>{data.body}</p>
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
