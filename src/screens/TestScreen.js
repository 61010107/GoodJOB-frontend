import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import API from "../API/API";
import manageUser from "../API/user/manage";
import CreateJobScreen from "./CreateJobScreen";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/actions/user.action";
import * as actionJob from "../redux/actions/jobemployer.action";
import { Value } from "react-native-reanimated";

const TestScreen = (props) => {
  const job_lists = useSelector(({ jobEmployerReducer }) => jobEmployerReducer);
  const dipatch = useDispatch();
  
  const getUID = () => {
    manageUser.getUserID().then((uid) => {
      console.log("UID = ", uid);
      alert(uid);
    });
  };
  const getUser = () => {
    API.user.getUser().then((user) => {
      console.log("User = ", user);
      // this.user = user.email
      //this.state = false;
      alert("UserEmail = " + user.lastname);
    });
  };
  const getIdToken = () => {
    manageUser.getIdToken().then((idToken) => {
      console.log("idToken = ", idToken);
      alert(idToken);
    });
  };
  const uploadImage = async () => {
    var file = await ImagePicker.launchImageLibraryAsync();
    let link = await API.user.update.image(file);
    console.log("Link = ", link);
  };
  const getJob = async () => {
  
    const job_list = await API.job.getJobEmployer();
    dipatch(actionJob.setJobEmployer(job_list));

  }
  const printjob = () => {
    console.log(job_lists)
    // job_lists.map(value => {
    //   console.log(value.title);
    // })
  }


  const userReducer = useSelector(({ userReducer }) => userReducer);
  
  return (
    <SafeAreaView>
      <View style={(styles.container, { margin: 0 })}>
        <Button title="Sign out" onPress={() => API.auth.signOut()} />
        <Text>{"\n"}</Text>
        <Button title="Get idToken" onPress={() => getIdToken()} />
        <Button title="Get UID" onPress={() => getUID()} />
        <Button title="Get USer" onPress={() => getUser()} />

        <Text>{"\n"}</Text>
        <Button title="Upload Image" onPress={() => uploadImage()} />
        <Text>{"\n"}</Text>
        <Button
          title="Create Job"
          onPress={() => props.navigation.navigate("CreateJobScreen")}
        />
        <Text>{"\n"}</Text>
        <Text>{userReducer.email}</Text>
        <Text>{userReducer.role}</Text>
        <Button
          title="rename"
          onPress={() => dipatch(action.setUser("Boat"))}
        />
        <Button
          title="test GetJob"
          onPress={() => getJob()}
        />
        <Button
          title="printJob"
          onPress={() => printjob()}
        />

        <Text>{job_lists.lists.length}</Text>

        {job_lists.lists.map(value=>{
          return(
            <Text>{value.title}</Text>
          )
        })}

      </View>
    </SafeAreaView>
  );
};
export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  popUpContainer: {
    margin: 20,
    alignItems: "center",
  },
});
