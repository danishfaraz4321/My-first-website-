// Button click par alert
document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(btn.innerText + " - Beautiful Nature!");
    });
});
console.log("Nature Beauty Website Loaded Successfully!");