document.getElementById("predictBtn").addEventListener("click", function () {
    let period = document.getElementById("periodInput").value;

    if (period === "" || isNaN(period)) {
        alert("Please enter a valid period number");
        return;
    }

    // Simple AI-style fake logic
    let num = parseInt(period);

    let bigSmall = num % 2 === 0 ? "BIG" : "SMALL";
    let color = num % 3 === 0 ? "RED" : "GREEN";
    let lucky = (num % 10);

    document.getElementById("result").innerHTML = `
        <h2>AI Prediction Result</h2>
        <p><strong>BIG/SMALL:</strong> ${bigSmall}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Lucky Number:</strong> ${lucky}</p>
    `;
});function predict(){
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
