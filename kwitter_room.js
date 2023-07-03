const firebaseConfig = {
      apiKey: "AIzaSyCEWqw5hkRhD2stFK0vgbhbOMixvX6VHRk",
      authDomain: "kwitter-2c1a6.firebaseapp.com",
      databaseURL: "https://kwitter-2c1a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c1a6",
      storageBucket: "kwitter-2c1a6.appspot.com",
      messagingSenderId: "183288136549",
      appId: "1:183288136549:web:3d64474f43cc702be7978c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ; 
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
