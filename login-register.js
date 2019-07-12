//show login page register click
$("#btnSubmit").click(function () {
    $("#loginpage").show();
});

//login and register forms
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

//register
$("#createBtn").click(function () {
    let data = {
        email: $('#exampleInputEmail1-reg').val(),
        password: $('#exampleInputPassword1-reg').val()
    };
    if (data.email != '' && data.password != '') {
        firebase.auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(function (user) {
                alert("Successfully created user account", user);
                console.log("Successfully created user account", user);
            })
            .catch(function (error) {
                alert('There was an error');
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorCode + ' - ' + errorMessage);
            });
    } else {
        alert("You have to fill both fields");
    }
});

//log in
$("#loginBtn").click(function () {
    if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
        let data = {
            emailLoginput: $('#exampleInputEmail1-log').val(),
            passwordLoginput: $('#exampleInputPassword1-log').val()
        };
        let auth = null;
        firebase
            .auth()
            .signInWithEmailAndPassword(data.emailLoginput, data.passwordLoginput)
            .then(function (user) {
                console.log("Authenticated successfully", user.email);
                auth = user;

            })
            .catch(function (error) {
                console.log("Login Failed!", error);
            });
    } else {
        console.log('You have to fill both fields');
    }
});

//Log out
$("#logout").click(function () {
    firebase.auth().signOut().then(function () {
        $("form")[0].reset();
        console.log('Sign-out successful.');
        $("#logout").hide();
    }).catch(function (error) {
        alert('There was an error');
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode + ' - ' + errorMessage);
    });
});

//State of user
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("You are now log in as", firebaseUser.email);
        $("#loginpage").hide();
        $("#logout").append('<button id="btnLogout" type="button" class="btn btn-outline-success" style="margin:5px;">Log out</button>');
        console.log("You can now add recipes");
        // $("#addRecipes").appendTo("body").modal('show');
    } else {
        console.log('Not logged in.');
        //$("#logout").hide();
    }
})