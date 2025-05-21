function ledOn(){
  console.log("LED ON");
  var ref = database.ref("led");
  ref.update({
    led: 1
  })
}

function ledOff(){
  console.log("LED OFF");
  var ref = database.ref("led");
  ref.update({
    led: 0
  })
}

var config = {
    apiKey: "AIzaSyBgNGQvrIRZijJjtKKVoZFPYCjGp1HqIq4",
    authDomain: "myweb-e22c4.firebaseapp.com",
    databaseURL: "https://myweb-e22c4-default-rtdb.firebaseio.com",
    projectId: "myweb-e22c4",
    storageBucket: "myweb-e22c4.firebasestorage.app",
    messagingSenderId: "829364340736",
    appId: "1:829364340736:web:e941c9c6f116e61df6b0e5",
    measurementId: "G-2Q2GF2FCWE"
}

//Firebase 데이터베이스 만들기
firebase.initializeApp(config);
database = firebase.database();

// Firebase 데이터베이스 정보 가져오기
var ref = database.ref("led");
ref.on("value", gotData);


function gotData(data) {
  var val = data.val();

  if (val.led == 0){
    //document.getElementById("ledstatus").innerHTML = "led가 현재 꺼짐";
    document.getElementById("img").src = "ledoff.png";}
  else {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 켜짐";
    document.getElementById("img").src = "ledon.png";}

  console.log(val)
}