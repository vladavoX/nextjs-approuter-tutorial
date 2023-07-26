import { NextResponse } from 'next/server'

import connect from '@/utils/db'
import Post from '@/models/Post'

export const GET = async req => {
	const url = new URL(req.url)
	const username = url.searchParams.get('username')
	try {
		await connect()
		const posts = await Post.find(username && { username })
		return new NextResponse(JSON.stringify(posts), { status: 200 })
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 })
	}
}

export const POST = async req => {
	const body = await req.json()
	const newPost = new Post(body)

	try {
		await connect()
		await newPost.save()
		return new NextResponse('Post has been created', { status: 201 })
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}

export const DELETE = async (req, { params }) => {
	const { id } = params

	try {
		await connect()
		await Post.findByIdAndDelete(id)
		return new NextResponse('Post has been deleted', { status: 200 })
	} catch (error) {
		return new NextResponse('Database error', { status: 500 })
	}
}
