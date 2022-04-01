let raNums = []
let total = 0
let p1 = document.createElement("p")
p1.textContent = ".";
document.body.appendChild(p1)
for (let x = 1; x <= 100; x++) {
    let rndNum = parseInt(Math.random() * (1000 - 1) + 1)
    let p = document.createElement("p")
    p.textContent = rndNum
    raNums.push(rndNum)
    total += rndNum
    //document.getElementById("numbers").appendChild(p)
    document.body.appendChild(p)
}
document.getElementById("largest").textContent = "Maximum Number: " + Math.max(...raNums)
document.getElementById("sum").textContent = "Total: " + total