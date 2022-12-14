import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Text>Index Screen</Text>
      <Button 
        title='Add Post'
        onPress={addBlogPost} 
      />
      <FlatList 
        data={state}
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