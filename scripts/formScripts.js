const inputs = document.querySelectorAll(".contact__inputs div input");
const labels = document.querySelectorAll(".contact__inputs div label");

inputs.forEach((input, index) =>{
  input.addEventListener("change", ()=>{
    if(input.value != "" && index < 3){
      labels[index].style.top = "3px";
      labels[index].style.fontSize = "9px";
    }else{
      labels[index].style = "";
    }
  });
});

function sendRequest(data){
  const xhr = new XMLHttpRequest();

  xhr.onload = function (){
    const serverResponse = document.getElementById("serverResponse");

    serverResponse.innerHTML = this.responseText;
  };

  xhr.open("POST", "response.php");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`uname=${data.uname}&surname=${data.surname}&email=${data.email}&message=${data.message}`);
}

const rodo = document.querySelector(".rodo");
let isRodoChecked = document.querySelector("#rodo").checked;
const errorAlert = document.createElement("div");
const data = {
}

function removeAlert(){
  if(data.uname != "" || data.surname != "" || data.email == "" || pattern.test(data.email) == true || data.message != "" || isRodoChecked == true){
    errorAlert.remove();
  }
}

function validate() {
  isRodoChecked = document.querySelector("#rodo").checked;
  data.uname = document.getElementById("uname").value;
  data.surname = document.getElementById("surname").value;
  data.email = document.getElementById("email").value;
  data.message = document.getElementById("message").value;

  data.uname = data.uname.charAt(0).toUpperCase()+data.uname.slice(1);
  data.surname = data.surname.charAt(0).toUpperCase()+data.surname.slice(1);
  
  let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
  errorAlert.classList.add("errorAlert");

  if(data.uname == ""){
    errorAlert.textContent = "Uzupełnij pole Imię!";
    rodo.prepend(errorAlert);
  }else if(data.surname == ""){
    errorAlert.textContent = "Uzupełnij pole Nazwisko!";
    rodo.prepend(errorAlert);
  }else if(data.email == ""){
    errorAlert.textContent = "Uzupełnij pole Adres e-mail!";
    rodo.prepend(errorAlert);
  }else if(pattern.test(data.email) == false){
    errorAlert.textContent = "Podaj adres w odpowiedniej formie(np. xxx@xx.xx)";
    rodo.prepend(errorAlert);
  }else if(data.message == ""){
    errorAlert.textContent = "Uzupełnij pole Treść wiadomości";
    rodo.prepend(errorAlert);
  }else if(isRodoChecked == false){
    errorAlert.textContent = "Zaznacz zgodę na przetwarzanie danych!"
    rodo.prepend(errorAlert);
  }else{
    removeAlert();
    sendRequest(data);
  }
}

document.querySelector(".btnSubmit a").addEventListener("click", validate);


document.getElementById("uname").addEventListener("click", removeAlert);
document.getElementById("surname").addEventListener("click", removeAlert);
document.getElementById("email").addEventListener("click", removeAlert);
document.getElementById("message").addEventListener("click", removeAlert);
document.getElementById("rodo").addEventListener("click", removeAlert);
