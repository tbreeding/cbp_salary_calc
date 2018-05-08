const submitBtn = document.getElementById("submitBtn");

const submitBtnHandleClick = (e) => {
    const values = [
        parseFloat(document.getElementById("perHour").value),
        parseFloat(document.getElementById("perDay").value),
        parseFloat(document.getElementById("perMonth").value)
    ]
    
    if(!values.includes(NaN)) {
        const total = new Intl.NumberFormat("cs", {}).format(values.reduce((acc, next) => acc * next));
        document.getElementById("value").innerText = `${total} USD`
    }     
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    submitBtnHandleClick();
}, false);