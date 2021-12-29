import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";

const SearchScreen = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text style={{ color: "black" }}>Count : {count} </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="Increment"
          onPress={() => {
            dispatch(increment());
          }}
        />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
