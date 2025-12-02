function predict(){
    let p = document.getElementById("periodInput").value;
    if(p === ""){
        alert("Enter period number first!");
        return;
    }

    let bigsmall = (p % 2 === 0) ? "BIG" : "SMALL";
    let color = (p % 3 === 0) ? "GREEN" : "RED";
    let number = p % 10;

    document.getElementById("output").innerHTML = `
        <h3>Prediction Result</h3>
        <p>Big/Small: <b>${bigsmall}</b></p>
        <p>Colour: <b>${color}</b></p>
        <p>Lucky Number: <b>${number}</b></p>
    `;
}
