import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { users } from "../../../data/users";

export default function Stories() {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((item, index) => (
          <View style={styles.storyContainer} key={index}>
            <Image source={{ uri: item.image }} style={styles.storyImage} />
            <Text style={styles.storyTitle}>
              {item.user.length > 11
                ? item.user.slice(0, 10).toLowerCase() + "..."
                : item.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    resizeMode: "contain",
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storyTitle: {
    paddingTop: 10,
    color: "black",
  },
  storyContainer: {
    alignItems: "center",
  },
});
