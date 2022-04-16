var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyCpcjpxkweTw7EasJ9n--ohfTrz629HsXY",
    authDomain: "bmsce-sgpa-calculator-e2854.firebaseapp.com",
    projectId: "bmsce-sgpa-calculator-e2854",
    storageBucket: "bmsce-sgpa-calculator-e2854.appspot.com",
    messagingSenderId: "1057810286679",
    appId: "1:1057810286679:web:e471bcd883b6e1a750fb12",
    measurementId: "G-7PH1CRW089"


};
// Initialize Firebase

if (!hasInit) {
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}

var mainApp = {};
(function() {
    var mainContainer = document.getElementById("main_container");

    var logtout = function() {
        firebase.auth().signOut().then(function() {
            console.log('success');
            window.location.replace("index.html");
        }, function() {})
    }

    var init = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log("stay");
                mainContainer.style.display = "";
            } else {
                // No user is signed in.
                mainContainer.style.display = "none";
                console.log("redirect");
                window.location.replace("index.html");
            }
        });
    }

    init();

    mainApp.logout = logtout;
})();

let name = localStorage.getItem("name-key");

for (let i = 0; i < document.getElementsByClassName("name").length; i++) {
    document.getElementsByClassName("name")[i].innerHTML = name
}

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        $("#panel_left").addClass("panel_left");
        $("#panel_right").addClass("panel_right");
        $("#loader").addClass("loaded-circle");
        $("#loader-img").addClass("loaded-img");
        $("#preloader").addClass("loaded-img");
    }
}