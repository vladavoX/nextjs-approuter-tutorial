import Image from 'next/image'
import Link from 'next/link'

async function getData() {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-cache'
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Blog = async () => {
	const data = await getData()
	return (
		<div>
			{data.map(item => (
				<Link
					key={item.id}
					href={`/blog/${item._id}`}
					className='flex items-center gap-12 mb-12'
				>
					<Image
						className='object-cover'
						src={item.image}
						alt=''
						width={400}
						height={250}
					/>
					<div>
						<h1 className='mb-2'>{item.title}</h1>
						<p className='text-lg text-[#999]'>{item.desc}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Blog
