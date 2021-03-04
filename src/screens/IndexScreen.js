import React, { useContext } from "react"
import { StyleSheet, Text, View, FlatList, Button } from "react-native"
import BlogContext from "../context/BlogContext"

const IndexScreen = () => {
	const { blogPosts, addBlogPost } = useContext(BlogContext)
	return (
		<View>
			<Text>Home</Text>
      <Button title='Add Post' height={50} width={150} onPress={addBlogPost}/>
			<FlatList
				data={blogPosts}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>
				}}
				keyExtractor={bp => bp.title}
			/>
		</View>
	)
}

export default IndexScreen

const styles = StyleSheet.create({})
