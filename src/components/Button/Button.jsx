import Link from 'next/link'

const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<button className='p-5 cursor-pointer bg-lightGreen border-none rounded-sm max-w-fit text-white'>{text}</button>
		</Link>
	)
}

export default Button
