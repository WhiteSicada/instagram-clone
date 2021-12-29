import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import AddNewPost from "../../components/Home/NewPost/AddNewPost";

export default function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}
