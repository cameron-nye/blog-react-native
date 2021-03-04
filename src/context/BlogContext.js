import React, { createContext } from "react"
import { useState } from "react"

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
	const [ blogPosts, setBlogPosts ] = useState([
		{
			title: "Blog #1"
		},
		{
			title: "Blog #2"
		}
	])
	const addBlogPost = () => {
		setBlogPosts([ ...blogPosts, { title: `Blog #${blogPosts.length + 1}` } ])
	}

	return <BlogContext.Provider value={{ blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
}

export default BlogContext
