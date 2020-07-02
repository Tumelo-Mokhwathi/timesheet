import store from "@/store/index";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAwpHgsiA2ycpuz98MgEsJk6eV7u1tMNqs",
  authDomain: "timesheet-7e043.firebaseapp.com",
  databaseURL: "https://timesheet-7e043.firebaseio.com",
  projectId: "timesheet-7e043",
  storageBucket: "timesheet-7e043.appspot.com",
  messagingSenderId: "431912523308",
  appId: "1:431912523308:web:5f73738fb9ccac74366389",
  measurementId: "G-B03TW5NSXV"
};

const database = firebase.initializeApp(firebaseConfig);

database.resetPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    store.commit("setCurrentUser", null);
  } catch (error) {
    return error;
  }
};

database.signUp = async (username, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(username, password);
    store.commit("setCurrentUser", firebase.auth().currentUser.email);
    return true;
  } catch (error) {
    return error;
  }
};

database.createNewUser = async (username, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(username, password);
    return true;
  } catch (error) {
    return error;
  }
};

database.signIn = async (username, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(username, password);
    store.commit("setCurrentUser", firebase.auth().currentUser.email);
    return true;
  } catch (error) {
    return error;
  }
};

database.signOut = async () => {
  try {
    await firebase.auth().signOut();
    store.commit("setCurrentUser", null);
    return true;
  } catch (error) {
    return error;
  }
};

export default database;
