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
import { Input, Button, Text } from "react-native-elements";
import Validator from "email-validator";
const uploadPostSchema = Yup.object().shape({
  email: Yup.string().email().required("A email is required"),
  password: Yup.string()
    .required("A password is required")
    .min(8, "your password should be at least 8 chx"),
});

export default function LoginForm({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("TabIndex");
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
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
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
            />
            <View style={{ marginBottom: 25, alignItems: "flex-end" }}>
              <Text h6 style={{ color: "blue" }}>
                Forgot Password?
              </Text>
            </View>

            <Button title="Login" disabled={!isValid} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={{ marginVertical: 25, alignItems: "center" }}
        onPress={() => navigation.navigate("RegisterIndex")}
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
