var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.querySelector(".add-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitlein = document.getElementById("book-title-input");
var bookauthorin = document.getElementById("book-author-input");
var bookdesin = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitlein.value}</h2>
        <h5>${bookauthorin.value}</h5>
        <p>${bookdesin.value}</p>
        <button onclick="del(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    booktitlein.value = "";
    bookauthorin.value = "";
    bookdesin.value = "";
});

function del(event) {
    event.target.parentElement.remove();
}
