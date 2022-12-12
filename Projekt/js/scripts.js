document.addEventListener("DOMContentLoaded", OnDOMLoaded);

function OnDOMLoaded() {
}


function generateTrianglePattern(className, RowOffset) {
    let allTargets = document.getElementsByName(className);
    for(let target of allTargets) {

        for (let i = 0; i <= 6; ++i) {
            let row = document.createElement("div");
            row.classList.add("triangle-row")
            target.appendChild(row);
            for (let j = 0; j <= 6; ++j) {
                let tri = document.createElement("div");
                tri.classList.add("triangle-up");
                row.appendChild(tri);
            }
        }

    }
}