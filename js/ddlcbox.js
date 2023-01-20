const ddlcSelected = document.querySelector(".ddlc-selected");
const ddlcOptionsContainer = document.querySelector(".ddlc-options-container");

const ddlcOptionsList = document.querySelectorAll(".ddlc-option")

ddlcSelected.addEventListener("click", () => {
    ddlcOptionsContainer.classList.toggle("active");
});

ddlcOptionsList.forEach(o => {
    o.addEventListener("click", () => {
        ddlcSelected.innerText = o.querySelector("label").innerText;
        ddlcSelected.id = o.querySelector(".radio").id;
        ddlcOptionsContainer.classList.remove("active");
    });
});