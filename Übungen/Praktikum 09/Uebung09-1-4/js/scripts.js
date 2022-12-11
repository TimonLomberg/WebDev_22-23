const form = document.getElementById("bestellung");
form.onsubmit = function submitform() {
    let formData = new FormData(form);
    console.log(formData);
};
const benutzername = document.getElementById("benutzerName");
benutzername.onblur = function (e) {
    const benErr = document.getElementById("benErr");
    if(benutzername.value.length < 5) {
        benErr.innerText = "Der Benutzername muss mindestens 5 Zeichen lang sein";
    } else {
        benErr.innerText = "";
    }

}