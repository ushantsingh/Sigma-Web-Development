let button =document.getElementById("btn")

// button.addEventListener("click", () => {
button.addEventListener("dblclick", () => {
    // alert("I was clicked. yayy!")
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click!"
})
