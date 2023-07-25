'use client'

import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const Dashboard = () => {
	// const [data, setData] = useState([])
	// const [error, setError] = useState(false)
	// const [isLoading, setIsLoading] = useState(false)

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setIsLoading(true)
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
	// 			cache: 'no-cache'
	// 		})

	// 		if (!res.ok) {
	// 			setError(true)
	// 		}

	// 		const data = await res.json()

	// 		setData(data)
	// 		setIsLoading(false)
	// 	}

	// 	getData()
	// }, [])

	const session = useSession()
	console.log(session)

	const fetcher = (...args) => fetch(...args).then(res => res.json())

	const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

	return <div>Dashboard</div>
}

export default Dashboard
