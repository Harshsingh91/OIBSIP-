function convertTemp() {

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(isNaN(temp)){
        result.innerHTML = "Please enter a valid number";
        return;
    }

    let c,f,k;

    if(unit==="c"){
        if(temp < -273.15){
            result.innerHTML = "Invalid! Below absolute zero.";
            return;
        }

        f=(temp*9/5)+32;
        k=temp+273.15;
    }

    else if(unit==="f"){
        c=(temp-32)*5/9;

        if(c < -273.15){
            result.innerHTML = "Invalid! Below absolute zero.";
            return;
        }

        k=c+273.15;
        f=temp;
    }

    else{
        if(temp < 0){
            result.innerHTML = "Invalid! Kelvin cannot be negative.";
            return;
        }

        c=temp-273.15;
        f=(c*9/5)+32;
        k=temp;
    }

    if(unit==="c"){
        result.innerHTML=
        `${temp} °C <br>
        ${f.toFixed(2)} °F <br>
        ${k.toFixed(2)} K`;
    }

    if(unit==="f"){
        result.innerHTML=
        `${c.toFixed(2)} °C <br>
        ${temp} °F <br>
        ${k.toFixed(2)} K`;
    }

    if(unit==="k"){
        result.innerHTML=
        `${c.toFixed(2)} °C <br>
        ${f.toFixed(2)} °F <br>
        ${temp} K`;
    }
}