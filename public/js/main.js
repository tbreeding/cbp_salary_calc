const submitBtnHandleClick = (e) => {
    const values = [
        parseFloat(document.getElementById("perHour").value), 
        parseFloat(document.getElementById("perDay").value), 
        parseFloat(document.getElementById("perMonth").value)
    ]
    const total = (!values.includes(NaN)) ? values.reduce((acc, next) => acc * next) : 0;
    document.getElementById("value").innerText = `${(document.getElementById("studentNo").checked == true) ? 
        new Intl.NumberFormat("cs", {}).format(total) :
        new Intl.NumberFormat("cs", {}).format(total * 1.1)} USD`    
}
    
document.getElementById("submitBtn").addEventListener("click", e => {
    e.preventDefault();
    submitBtnHandleClick();
}, false);