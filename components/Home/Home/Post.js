import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
export default function Post({ post }) {
  return (
    <View style={styles.postContainer}>
      <Divider />
      <PostHeader post={post} />
      <PostImage imageUrl={post.imageUrl} />
      <View style={{ marginTop: 10, marginHorizontal: 15 }}>
        <PostFooter post={post} />
        <Likes likes={post.likes} />
        <Caption user={post.user} caption={post.caption} />
        <Comments comments={post.comments} />
      </View>
    </View>
  );
}

const PostHeader = ({ post }) => (
  <View style={styles.postHeader}>
    <View style={styles.postHeaderImageSection}>
      <Image
        source={{ uri: post.profilePicture }}
        style={styles.profilePicture}
      />
      <Text style={{ color: "black", marginLeft: 10, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <View style={styles.postHeaderOptionSection}>
      <TouchableOpacity>
        <Text style={{ color: "black", fontWeight: "900" }}>...</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PostImage = ({ imageUrl }) => (
  <View style={{ width: "100%", height: 300 }}>
    <Image source={{ uri: imageUrl }} style={styles.postImage} />
  </View>
);

const PostFooter = ({ post }) => (
  <View style={styles.postFooterHeader}>
    <View style={styles.postFooterHeaderOptions1}>
      {/* like */}
      <TouchableOpacity>
        <Feather
          name="heart"
          size={24}
          color="black"
          style={{ marginRight: 12 }}
        />
      </TouchableOpacity>

      {/* comment */}
      <TouchableOpacity>
        <EvilIcons
          name="comment"
          size={30}
          color="black"
          style={{ marginRight: 12 }}
        />
      </TouchableOpacity>

      {/* send */}
      <TouchableOpacity>
        <Feather
          name="send"
          size={24}
          color="black"
          style={{ marginRight: 12 }}
        />
      </TouchableOpacity>
    </View>
    {/* save */}
    <View>
      <TouchableOpacity>
        <Feather name="bookmark" size={26} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ likes }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={styles.postFooterLikes}>
      {likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ user, caption }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      <Text style={{ color: "black", fontWeight: "600" }}>{user}</Text>
      <Text style={{ color: "black" }}> {caption}</Text>
    </Text>
  </View>
);

const Comments = ({ comments }) => (
  <View style={{ marginTop: 5 }}>
    {!!comments.length && (
      <Text style={{ color: "grey" }}>
        View {comments.length > 1 ? "all" : ""} {comments.length}{" "}
        {comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
    {comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "black" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  postFooterLikes: { color: "black", fontWeight: "600" },
  postFooterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postFooterHeaderOptions1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "32%",
  },
  postContainer: { marginBottom: 30, color: "black" },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  postHeaderImageSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderOptionSection: {},
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
});
