import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import FormikPostUploader from "./FormikPostUploader";

export default function AddNewPost({ navigation }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
}

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <SimpleLineIcons name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.headerText}>New POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "700",
    marginRight: 25,
    fontSize: 20,
  },
});
