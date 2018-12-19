// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-3.3.1.min
//= require bootstrap
//= require popper.min
//= require_self
window.addEventListener('load', function() {
    document.getElementById('inpName').addEventListener('keyup', inputAlphabet);
    document.getElementById('inpLog').addEventListener('keyup', inputAlphabet);
    document.getElementById('inpPass').addEventListener('keyup', inputPass);
    document.getElementsByClassName('inpSubmit')[0].addEventListener('click', inputALL);
});



function inputAlphabet(){
    var alphaExp = /^[a-zA-Zа-яА-ЯіІєЄїЇ]+$/;
    if (event.key != ''){
        if(event.path[0].value.match(alphaExp)){
            event.path[0].nextElementSibling.style = 'visibility: hidden;';
            event.path[0].style = 'color: black';
            event.path[0].focus();

        }else{
            event.path[0].nextElementSibling.style = 'visibility: visible;';
            if (event.path[0].value == ''){
                event.path[0].nextElementSibling.innerHTML = "Can't be empty!";
            } else {event.path[0].nextElementSibling.innerHTML = 'Invalid Symbol';}
            event.path[0].style = 'color: red';
            event.path[0].focus();
            return false;
        }
    }
}

function inputPass(){
    var passExp = /^[a-zA-Z]+$/;
    if (event.key != ''){
        if(event.path[0].value.match(passExp)){
            event.path[0].nextElementSibling.style = 'visibility: hidden;';
            event.path[0].style = 'color: black';
            event.path[0].focus();
            if (event.path[0].value.length < 8){
                event.path[0].nextElementSibling.style = 'visibility: visible;';
                event.path[0].nextElementSibling.innerHTML = "Can't be less then 8 now " + event.path[0].value.length + "!";
            }
        }else{
            event.path[0].nextElementSibling.style = 'visibility: visible;';
            if (event.path[0].value == ''){
                event.path[0].nextElementSibling.innerHTML = "Can't be empty!";
            } else {event.path[0].nextElementSibling.innerHTML = 'Invalid Symbol Alphabet ONLY!';}
            event.path[0].style = 'color: red';
            event.path[0].focus();
        }
    }
}



function inputALL(){
    var checksumm = 0;
    var data = {
        userName : '',
        login : '',
        password : '',
    };

    if (!( data.userName = document.getElementById('inpName').value)){
        document.getElementById('errorName').style = 'visibility: visible;';
    } else {checksumm++}
    if (!( data.login = document.getElementById('inpLog').value)){
        document.getElementById('errorLog').style = 'visibility: visible;';
    } else {checksumm++}
    if (!( data.password = document.getElementById('inpPass').value)){
        document.getElementById('errorPASS').style = 'visibility: visible;';
    } else if ( data.password.length >= 8 ){checksumm++}

    if (+checksumm >= 3){
        getData(data);
    }
}



function  getData(data){
    var request = new XMLHttpRequest();
    function reqReadyStateChange() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                document.getElementById("output").innerHTML=request.responseText;
            }
        }
    }
// строка с параметрами для отправки
    var body = "firstname=" + data.firstName + "&lastname=" + data.login + "&password=" + data.password;
    request.open("GET", "#"+body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
}

