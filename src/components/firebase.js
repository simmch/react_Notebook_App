import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCh0BE1TEI7Z6mWVgwhAev1yEQCXCpHa0M",
    authDomain: "notebookapp-89ee2.firebaseapp.com",
    databaseURL: "https://notebookapp-89ee2.firebaseio.com",
    projectId: "notebookapp-89ee2",
    storageBucket: "",
    messagingSenderId: "802660265768"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');
