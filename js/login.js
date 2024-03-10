document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(email, password);

    // danger: don't verify email password on client side
    // verify email password
    if(email == 'sontan@bap.com' && password == 'secret'){
        window.location.href = 'bank.html';
    }
  else{
    alert('toke ami teijjo goshuna korlam.tui tur baap er bank er password vule gecos')
  }
});