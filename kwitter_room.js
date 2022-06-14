
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {

      apiKey: "AIzaSyAQXDuLI1e_uRjFJf5_9xLpK5k6uUQq18I",
      authDomain: "classtest2-5585e.firebaseapp.com",
      databaseURL: "https://classtest2-5585e-default-rtdb.firebaseio.com",
      projectId: "classtest2-5585e",
      storageBucket: "classtest2-5585e.appspot.com",
      messagingSenderId: "647591593108",
      appId: "1:647591593108:web:4105ce600e29e299eae081"
  
    };
  
  
    // Initialize Firebase
  
    const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
