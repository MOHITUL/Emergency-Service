const heartCountElement = document.getElementById("heartCount");
let count = 0;

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(btn =>{
    btn.addEventListener("click", () => {
        count++;
        heartCountElement.textContent = count;
    })
})