let n = 9;
let firstElemNum = (n % 10) + 1;
let secondElemNum = firstElemNum + 1; 

let firstClicked = false;
let secondClicked = false;

document.getElementById(`elem${firstElemNum}`).addEventListener("click", function() {
    firstClicked = !firstClicked;
    this.style.backgroundColor = firstClicked ? "#2a4d69" : "#fafafa";
    this.style.color = firstClicked ? "white" : "#222";
});

document.querySelector(`#elem${secondElemNum}`).addEventListener("click", function() {
    secondClicked = !secondClicked;
    this.style.backgroundColor = secondClicked ? "#f18d9e" : "#fafafa";
    this.style.color = secondClicked ? "white" : "#222";
});

let imgContainer = document.querySelector("a");

document.getElementById("addBtn").addEventListener("click", function() {
    let newImg = document.createElement("img");
    newImg.src = "pic/lviv.jpg";
    newImg.alt = "Додаткове фото Львова";
    newImg.classList.add("dynamicImg"); 
    newImg.width = 600;
    imgContainer.after(newImg);
});

document.getElementById("incBtn").addEventListener("click", function() {
    document.querySelectorAll("img").forEach(img => {
        img.width += 50;
    });
});

document.getElementById("decBtn").addEventListener("click", function() {
    document.querySelectorAll("img").forEach(img => {
        if (img.width > 100) img.width -= 50;
    });
});

document.getElementById("delBtn").addEventListener("click", function() {
    document.querySelectorAll("img").forEach(img => img.remove());
});
