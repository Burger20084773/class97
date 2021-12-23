var firebaseConfig = {
      apiKey: "AIzaSyAntsvrBT8HrjwXNrkApgYpXfVf-9GMdxw",
      authDomain: "kwitter-1-8617f.firebaseapp.com",
      databaseURL: "https://kwitter-1-8617f-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-8617f",
      storageBucket: "kwitter-1-8617f.appspot.com",
      messagingSenderId: "1018188470828",
      appId: "1:1018188470828:web:a0f1da07b632031a99cf89",
      measurementId: "G-GLCBCKMH74"
    };
 firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                 console.log("Room Name -" + Room_names);
                 row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                 document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}