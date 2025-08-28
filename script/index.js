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

        //   time
         const time = new Date().toLocaleTimeString();
    

        const li = document.createElement("li");
        li.innerHTML = `<span class = "font-bold text-lg">${serviceName}</span> <span class = "font-bold text-lg">${time}</span>   <br> ${serviceNumber}`;
        
        callHistory.appendChild(li);
    })
})


// clear history

const clearHistoryBtn = document.getElementById("clearHistory");
clearHistoryBtn.addEventListener("click", () => {
    callHistory.innerHTML = "";
})

// copy section

let copyCount = 2;
const copyCountElement = document.getElementById("copyCount");
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".bg-white");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        navigator.clipboard.writeText(serviceNumber);

        copyCount++;
        copyCountElement.textContent = copyCount;

        alert(`Copied ${serviceName} (${serviceNumber}) to clipboard`)
    })
})



