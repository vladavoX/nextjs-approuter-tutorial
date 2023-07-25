import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		cache: 'no-cache'
	})

	if (!res.ok) {
		return notFound()
	}

	return res.json()
}

export async function generateMetadata({ params }) {
	const post = await getData(params.id)
	return {
		title: post.title,
		description: post.desc
	}
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id)
	return (
		<div>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between gap-8'>
					<h1 className='text-4xl'>{data.title}</h1>
					<p className='text-lg font-light'>{data.desc}</p>
					<div className='flex items-center gap-2'>
						<Image
							src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
							alt=''
							width={40}
							height={40}
							className='object-cover rounded-full'
						/>
						<p>{data.username}</p>
					</div>
				</div>
				<div className='flex-1 h-[300px] relative'>
					<Image
						src={data.image}
						alt=''
						fill
						className='object-cover'
					/>
				</div>
			</div>
			<div className='mt-12 text-lg font-light text-[#999] text-justify'>
				<p>{data.content}</p>
			</div>
		</div>
	)
}

export default BlogPost
