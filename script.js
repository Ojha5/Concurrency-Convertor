

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
}