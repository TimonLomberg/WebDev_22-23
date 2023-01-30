document.addEventListener("DOMContentLoaded", onDOMLoaded);

// Interact functionality
function onDOMLoaded() {
	let main = document.getElementById("services-main");
	let services = document.getElementsByClassName("service-category");

	for (let item of services) {
		item.onclick = () => {
			for (let element of services) {
				if (element === item) {
					if (element.dataset.selected === "true") {
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
		};
	}

	let e = window.matchMedia("only screen and (max-width: 1200px)");
	response(e);
	e.addEventListener("change", response);

	function response(e) {
		if (e.matches) {
			for (let item of services) {
				let url = item.getElementsByTagName("a")[0].href;
				item.onclick = () => {
					window.open(url, "_self");
				};
			}
		} else {
			for (let item of services) {
				item.onclick = () => {
					for (let element of services) {
						if (element === item) {
							if (element.dataset.selected === "true") {
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
				};
			}
		}
	}
}
