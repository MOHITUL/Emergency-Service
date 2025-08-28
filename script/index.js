// heart count
const heartCountElement = document.getElementById("heartCount");
let count = 0;

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(btn =>{
    btn.addEventListener("click", () => {
        count++;
        heartCountElement.textContent = count;
    })
})

// call
let coins = 100;
const coinCountElement = document.getElementById("coinCount");
const callHistoryElement = document.getElementById("callHistory");
const clearHistoryElement = document.getElementById("clearHistory");

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".bg-white");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        if(coins < 20){
            alert("Don't Have Enough Coins!");
            return;
        }

        coins -= 20;
        coinCountElement.textContent = coins;

        alert(`Calling ${serviceName} (${serviceNumber})...`);

        const li = document.createElement("li");
        li.textContent = `${serviceName} - ${serviceNumber}`;
        callHistory.appendChild(li);
    })
})

