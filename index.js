var config = {
    apiKey: "AIzaSyC-_2HikBwa9tPUKmEx_4eVxGxYB0fyZUI",
    authDomain: "algo-read.firebaseapp.com",
    projectId: "algo-read",
    storageBucket: "algo-read.appspot.com",
    messagingSenderId: "598689664538",
    appId: "1:598689664538:web:b39e422747f050b2eb8ba3",
    measurementId: "G-2D4PCYPTVL"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;
$("#btn-login").click(function()
{
    var email =$("#email").val();
    var password =$("#password").val();
   if(email!="" && password!="")
   {
        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage =error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage); 
        });
   } 
   else{
       window.alert("form is incomplete. Please fill out all fields.")
   }
   
});


$("#btn-signup").click(function()
{
    var email =$("#email").val();
    var password =$("#password").val();
    var cPassword =$("#confirmPassword").val();
   if(email!="" && password!="" && cPassword!="")
   {

        if(password == cPassword)
        {
            var result = firebase.auth().createUserWithEmailAndPassword(email,password);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage =error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage); 
        });
        }
        else
        {
            window.alert("Password does not match with the Confirm Password.")
        }
   } 
   else{
       window.alert("form is incomplete. Please fill out all fields.")
   }
   
});

$("#btn-logout").click(function()
{
    firebase.auth().signOut();
});

