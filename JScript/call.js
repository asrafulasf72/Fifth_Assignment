// Coin element select
const coinElement = document.getElementById("Coin");
// Call buttons select
const callButtons = document.querySelectorAll(".Call-btn");
// Call history list container select
const historyList = document.getElementById("historyList");
// Clear button select
const clearBtn = document.getElementById("clearBtn");

let coins = parseInt(coinElement.textContent);


for (let btn of callButtons) {
  btn.addEventListener("click", function () {

    let card = btn.closest(".shadow-md");
    let title = card.querySelector("p").innerText;
    let number = card.querySelectorAll("h2")[1].innerText;

    if (coins >= 20) {
      alert("Calling "+title + ": " + number);

      coins -= 20;
      coinElement.innerText = coins;

      let now = new Date();
      let time = now.toLocaleTimeString();

      let div = document.createElement("div");
      div.className = "flex justify-between items-start px-6 py-4 bg-[#fafafa] rounded-[8px] my-4 mx-4";

      let titleElement = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = title;
      h3.className = "font-bold text-[1.2rem]";

      let p = document.createElement("p");
      p.innerText = number;
      p.className = "text-black-600 font-semibold text-[1rem]";

      titleElement.appendChild(h3);
      titleElement.appendChild(p);

     
      let timeElement = document.createElement("span");
      timeElement.innerText = time;
      timeElement.className = "text-gray-800 font-semibold text-[14px]";

     
      div.appendChild(titleElement);
      div.appendChild(timeElement);

      
      historyList.appendChild(div);

    } else {
      alert(" Don't have enough coins. It takes 20 coins to make a call.");
    }
  });
}

document.getElementById('Clear-btn')
.addEventListener("click", function () {
  historyList.innerHTML = "";
});
