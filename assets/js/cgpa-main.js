let name = localStorage.getItem("name-key");
let usn = localStorage.getItem("usn-key");
document.getElementById("usn").innerHTML = usn;
for (let i = 0; i < document.getElementsByClassName("name").length; i++) {
    document.getElementsByClassName("name")[i].innerHTML = name
}

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



function myFunction() {
    window.print();
}

var db = firebase.firestore();

function savedata() {


    var usn = document.getElementById("usn").innerHTML;


    var cgpa = document.getElementById("result").value;
    var Percentage = document.getElementById("percent").value;



    var m1 = document.getElementById("m1").innerText;
    var m2 = document.getElementById("m2").innerText;
    var m3 = document.getElementById("m3").innerText;
    var m4 = document.getElementById("m4").innerText;
    var m5 = document.getElementById("m5").innerText;
    var m6 = document.getElementById("m6").innerText;
    var m7 = document.getElementById("m7").innerText;
    var m8 = document.getElementById("m8").innerText;

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var n5 = document.getElementById("n5").value;
    var n6 = document.getElementById("n6").value;
    var n7 = document.getElementById("n7").value;
    var n8 = document.getElementById("n8").value;


    db.collection("USERS").doc(usn).collection("SEMESTERS").doc("BRANCH").collection("UPDATED").doc("CGPA").set({


        usn: usn,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        m7: m7,
        m8: m8,

        n1: n1,
        n2: n2,
        n3: n3,
        n4: n4,
        n5: n5,
        n6: n6,
        n7: n7,
        n8: n8,

        CGPA: cgpa,
        PERCENTAGE: Percentage

    });
    document.getElementById("save_data").disabled = true;
    swal({
        title: "GREAT!",
        text: "DATA STORED SUCCESSFULLY.",
        icon: "success",

    });


    setTimeout(function() {
        window.location.reload(1);
    }, 1500);

}

const list_div_cgpa = document.getElementById("list_div_cgpa");

var usn1 = document.getElementById("usn").innerHTML;
console.log(usn1);


db.collection(`USERS/${usn}/SEMESTERS/BRANCH/UPDATED`).where("usn", "==", usn1).
onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            list_div_cgpa.innerHTML += "<div class='list-item'><span>" + change.doc.data().m1 + " </span><br><span>" + "=> " + change.doc.data().n1 + " </span><br><span>" + change.doc.data().m2 + " </span><br><span>" + "=> " + change.doc.data().n2 + " </span><br><span>" + change.doc.data().m3 + " </span><br><span>" + "=> " + change.doc.data().n3 + " </span><br><span>" + change.doc.data().m4 + " </span><br><span>" + "=> " + change.doc.data().n4 + " </span><br><span>" + change.doc.data().m5 + " </span><br><span>" + "=> " + change.doc.data().n5 + " </span><br><span>" + change.doc.data().m6 + " </span><br><span>" + "=> " + change.doc.data().n6 + " </span><br><span>" + change.doc.data().m7 + " </span><br><span>" + "=> " + change.doc.data().n7 + " </span><br><span>" + change.doc.data().m8 + " </span><br><span>" + "=> " + change.doc.data().n8 + " </span><br><span>" + " </span><br><br><h5>" + "FINAL CGPA : " + change.doc.data().CGPA + " </span><br><br><h5>" + "FINAL PERCENTAGE : " + change.doc.data().PERCENTAGE + "%" + "</h4></div><br><hr>"
        }
    })
});

function delete_data() {
    var txt;
    var r = swal({
            title: "ARE YOU SURE?",
            text: "ONCE DELETED YOU CANNOT RECOVER YOUR DATA!",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
        .then((willDelete) => {
            if (willDelete) {
                swal("DATA DELETED SUCCESSFULLY!", {
                    icon: "success",

                });
                var delete_doc = db.collection(`USERS/${usn}/SEMESTERS/BRANCH/UPDATED`).where("usn", "==", usn1);
                delete_doc.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        doc.ref.delete();
                    });
                });
                setTimeout(function() {
                    window.location.reload(1);
                }, 1500);
            } else {
                swal("GREAT! DATA STILL SAFE.");
            }
        });
}




function csecgpa() {
    var percent, i, credSum = 0;

    var n1 = (document.getElementById('n1').value);
    var n2 = (document.getElementById('n2').value);
    var n3 = (document.getElementById('n3').value);
    var n4 = (document.getElementById('n4').value);
    var n5 = (document.getElementById('n5').value);
    var n6 = (document.getElementById('n6').value);
    var n7 = (document.getElementById('n7').value);
    var n8 = (document.getElementById('n8').value);

    var array1 = new Array(8);

    array1[0] = parseFloat(n1);
    array1[1] = parseFloat(n2);
    array1[2] = parseFloat(n3);
    array1[3] = parseFloat(n4);
    array1[4] = parseFloat(n5);
    array1[5] = parseFloat(n6);
    array1[6] = parseFloat(n7);
    array1[7] = parseFloat(n8);

    var oper = document.getElementById('operators').value;

    if (oper === '+') {

        if (array1[0] > 0) {
            credSum += 24;
        }
        if (array1[1] > 0) {
            credSum += 24;
        }
        if (array1[2] > 0) {
            credSum += 28;
        }
        if (array1[3] > 0) {
            credSum += 28;
        }
        if (array1[4] > 0) {
            credSum += 26;
        }
        if (array1[5] > 0) {
            credSum += 26;
        }
        if (array1[6] > 0) {
            credSum += 24;
        }
        if (array1[7] > 0) {
            credSum += 20;
        }

        var r1 = parseFloat((array1[0] + array1[1]) * 24 + (array1[2] + array1[3]) * 28 + (array1[4] + array1[5]) * 26 + array1[6] * 24 + array1[7] * 20).toFixed(2);

        document.getElementById('result').value = parseFloat(r1 / credSum).toFixed(2);
        var r2 = parseFloat(r1 / credSum);

        document.getElementById('percent').value = parseFloat((r2 - 0.75) * 10).toFixed(2);

        document.getElementById("save_data").disabled = false;



    }
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

function bootnavbar(el = 'main_navbar', options) {
    let defaultOption = {

    }

    options = {...defaultOption,
        ...options
    }


    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    this.init = function() {
        var dropdowns = document.getElementById(el).getElementsByClassName("dropdown");
        console.log(dropdowns);
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns.item(i);
            dropdown.addEventListener("mouseover", function() {
                this.classList.add('show');
                this.getElementsByClassName("dropdown-menu")[0].classList.add('show');
            });
            dropdown.addEventListener("mouseout", function() {
                this.classList.remove('show');
                this.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
            });
        }
        // document.getElementById(el).getElementsByClassName("dropdown").forEach(dropdown => {
        //     dropdown.addEventListener("mouseover", function(){
        //         dropdown.classList.add('show');
        //         dropdown.getElementsByClassName("dropdown-menu")[0].classList.add('show');
        //     });
        //     dropdown.addEventListener("mouseout", function(){
        //         dropdown.classList.remove('show');
        //         dropdown.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
        //     });
        // });
    }

    this.init();
}