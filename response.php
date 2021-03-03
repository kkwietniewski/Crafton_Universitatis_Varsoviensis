<?php
  $uname = $_POST['uname'];
  $surname = $_POST['surname'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  echo<<<RESPONSE
  <div>
    <p>Imię: $uname</p>
    <p>Nazwisko: $surname</p>
    <p>Email: $email</p>
    <p>Wiadomość: $message</p>
  </div>
RESPONSE;
?>