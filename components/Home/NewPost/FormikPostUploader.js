import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import  validUrl from 'valid-url'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "Caption has reached charachter limits."),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbmail, setThumbmail] = useState(
    "https://via.placeholder.com/100x100"
  );
  return (
    <View>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.goBack();
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
            <View
              style={{
                margin: 20,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: validUrl.isUri(thumbmail)
                    ? thumbmail
                    : "https://via.placeholder.com/100x100",
                }}
                style={{ width: 100, height: 100 }}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  placeholder="Write a caption"
                  multiline={true}
                  style={{ fontSize: 20 }}
                  value={values.caption}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                />
              </View>
            </View>
            <Divider width={0.6} vertical />
            <TextInput
              onChange={(e) => setThumbmail(e.nativeEvent.text)}
              placeholder="Enter Image Url"
              style={{ fontSize: 18 }}
              value={values.imageUrl}
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
            />
            {errors.imageUrl && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button title="Share" disabled={!isValid} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormikPostUploader;
