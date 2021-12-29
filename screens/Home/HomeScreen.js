import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Home/Home/Header";
import Post from "../../components/Home/Home/Post";
import Stories from "../../components/Home/Home/Stories";
import { posts } from "../../data/posts";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
