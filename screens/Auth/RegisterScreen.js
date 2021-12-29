import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import RegisterForm from "../../components/Auth/RegisterForm";

export default function RegisterScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLhPFM1rUklrfBcDlkIT7jL2luW_9O3-kRJS6t806dVrLS2GQGGy0OnoM1KtlWXYH2O0&usqp=CAU",
            }}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <RegisterForm navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 60,
  },
});
