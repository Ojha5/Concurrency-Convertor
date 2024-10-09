

let selects = document.querySelectorAll(".dropdown select");

for(let select of selects){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        select.append(newOption)

        if(select.className == "from" && currCode == "INR"){
            newOption.selected = "selected";
        }

        if(select.className == "to" && currCode == "USD"){
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