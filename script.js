
let BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies"; // Api end point
let btn = document.querySelector(".btn")
let selects = document.querySelectorAll(".dropdown select");
let message = document.querySelector(".msg")

for(let select of selects){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        select.append(newOption)

        if(select.className == "from" && currCode == "USD"){
            newOption.selected = "selected";
        }

        if(select.className == "to" && currCode == "INR"){
            newOption.selected = "selected"
        }
    }

    select.addEventListener("change" , (event) => {
        changeImage(event.target)
    })
}

let changeImage = (event) => {
    let currCode = event.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    event.previousElementSibling.src = newSrc
}

btn.addEventListener("click" , async() => {
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(isNaN(amountVal) == true || amountVal <= 0){
        amountVal = 1;
        amount.value = "1";
    }
    
    let fromCurr = selects[0].value;
    let toCurr = selects[1].value;
    let url = `${BASE_URL}/${fromCurr.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json()
    let rate = amountVal * data[fromCurr.toLowerCase()][toCurr.toLowerCase()];
    message.innerText = `${amountVal} ${fromCurr} = ${rate} ${toCurr}`
})