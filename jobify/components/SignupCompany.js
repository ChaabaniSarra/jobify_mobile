import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";
import axios from "axios";

export default function SignupCompany({ navigation }) {
  const sendmsg = () => {
    var mailOptions = {
      from: "bob479402@gmail.com",
      to: email,
      subject: "jobify",
      text: "bob",
    };
    axios
      .post("http://localhost:4000/nodemailer/nodemailer", mailOptions)
      .then((data) => {
        console.log(data);
        console.log("==========", Email);
      })
      .catch((error) => {
        console.error("/////////////////////////////////////////", error);
      });
  };
  const post = () => {
    // axios.post('http://localhost:4000/worker/signup/',data,(req,res)=>{
    //   console.log(req.body)
    //   res.send(data)
    // })
    var newCompany = { firstName, lastName, email, password, phoneNumber };

    axios
      .post("http://localhost:4000/company/signup", newCompany)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    Alert.alert(
      "Confirm",
      "Are You Sure About Your Informations ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirme", onPress: () => navigation.navigate("Login") },
      ],
      { cancelable: false }
    );

    sendmsg();
  };
  const [bussinessField, onChangeBussinessfield] = useState(null);
  const [label, onChangelabel] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangepassWord] = useState(null);
  const [phoneNumber, onChangePhoneNumber] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Bussiness Field"
          onChangeText={onChangeBussinessfield}
          value={bussinessField}
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Label"
          onChangeText={onChangelabel}
          value={label}
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={email}
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          secureTextEntry={true}
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={(styles.blockInput, styles.one)}>
        <TextInput
          placeholder="passWord"
          onChangeText={onChangepassWord}
          value={password}
          secureTextEntry={true}
          style={styles.inputs}
        ></TextInput>
      </View>

      <Button color="#5FCFFF" title="Sign Up" onPress={() => post()} />
      <StatusBar style="auto" />
      <Text style={styles.signuptext}>Or You Can Singup With</Text>
      <View style={styles.passport}>
        <Button
          color="#5FCFFF"
          title="Facebook"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          color="#5FCFFF"
          title="Google"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <Text onPress={() => navigation.navigate("Login")} style={styles.text}>
        I Already Have An Account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    height: 50,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    padding: 15,
  },
  blockInput: {
    margin: 10,
  },
  signup: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 60,
    color: "white",
  },
  one: {
    marginBottom: 30,
    marginTop: 10,
  },
  passport: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    marginBottom: 30,
  },
  signuptext: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
  },
});
