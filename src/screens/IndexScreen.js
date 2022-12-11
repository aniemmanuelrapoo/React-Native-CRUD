import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList 
        data={blogPosts}
        keyExtractor={(blogPosts) => blogPosts.title }
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})