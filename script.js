// let person = prompt("Enter your name")

// if (person != null){
//     alert("Hohohoii! " + person + " welcome to my web")
// }


const section = document.querySelector("section"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal"),
    cloneBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () => section.classList.remove("active"));

closeBtn.addEventListener("click", () => section.classList.remove("active"));