document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded() {
    let main = document.getElementById("services-main");
    let services = document.getElementsByClassName("service-category");

    for (let item of services) {
        item.addEventListener("click", () => {
            for (let element of services) {
                if(element === item) {
                    if(element.dataset.selected === "true") {
                        element.dataset.selected = "false";
                        main.dataset.anySelected = "false";
                    } else {
                        element.dataset.selected = "true";
                        main.dataset.anySelected = "true";
                    }
                } else {
                    element.dataset.selected = "false";
                }
            }
        })
    }

}