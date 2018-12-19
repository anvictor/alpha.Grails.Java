<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>
        <g:layoutTitle default="Grails"/>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico"/>

    <asset:stylesheet src="application.css"/>

    <g:layoutHead/>
</head>

<body>





<div class="wrap">
    <h2>Grail first time test task for <p>Viktor Andreichenko</p></h2>

    <form method="get" action="#">
        <div class="row">
            <div class="inpFld">
                <label id="lblName" for="inpName">User name<span class="mandatory">*</span>:</label>
                <input id="inpName" placeholder="User Name" type="text" name="name" value="">
                <span class="errMSG" id="errorName">Can't be empty!</span>
            </div>
            <div class="inpFld">
                <label id="lblLog" for="inpLog">login<span class="mandatory">*</span>:</label>
                <input id="inpLog" placeholder="login" type="text" name="login" value="">
                <span class="errMSG" id="errorLog">Can't be empty!</span>
            </div>
            <div class="inpFld">
                <label for="inpPass">Password<span class="mandatory">*</span>:</label>
                <input id="inpPass" type="password" placeholder="••••••••" name="password" value="">
                <span class="errMSG" id="errorPASS">Can't be empty!</span>
            </div>
<input class="inpSubmit" type="button" name="send" value="Submit">
        </div>


    </form>
</div>




<asset:javascript src="application.js"/>

</body>
</html>
