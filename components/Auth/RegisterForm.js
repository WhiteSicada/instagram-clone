import React from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Text } from "react-native-elements";
import Validator from "email-validator";
const uploadPostSchema = Yup.object().shape({
  email: Yup.string().email().required("A email is required"),
  username: Yup.string().required("A email is required"),
  password: Yup.string()
    .required("A password is required")
    .min(8, "your password should be at least 8 chx"),
});

export default function RegisterForm({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("LoginIndex");
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor={"#444"}
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <TextInput
              placeholder="Enter username"
              placeholderTextColor={"#444"}
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length > 7
                      ? "#ccc"
                      : "red",
                },
              ]}
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
            />
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={"#444"}
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length > 7
                      ? "#ccc"
                      : "red",
                },
              ]}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
              textContentType="password"
            />
            <View style={{ marginBottom: 25, alignItems: "flex-end" }}>
              <Text h6 style={{ color: "blue" }}>
                Forgot Password?
              </Text>
            </View>

            <Button
              title="Register"
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={{ marginVertical: 25, alignItems: "center" }}
        onPress={() => navigation.navigate("LoginIndex")}
      >
        <Text h6 style={{ color: "blue" }}>
          Don't Have an Account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
});
