document.getElementById('login-button').addEventListener('click', function () {
    //    catch user gmail
    const gamilField = document.getElementById('user-gmail');
    const userGmail = gamilField.value;
    //  catch user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // condition decleration
    if (userGmail == 'trail@gmail.com' && userPassword == 'accessOn') {

        window.location.href = "banking.html"
    }
    else {
        window.location.href = "wrong information.html"
    }

})