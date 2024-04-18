window.onload = function() {
    document.getElementById("news").click();
};

let buttons = document.querySelectorAll(".btn");
let allH1 = document.querySelectorAll(".contents");

buttons.forEach((btns, index) => {
    btns.addEventListener("click", () => {
        removeAllh1();
        buttons[index].style.color="#fff"
        allH1[index].style.display = "block";
        allH1[index].style.width = "100%";

    
        buttons.forEach((btn) => {
            btn.style.backgroundColor = ""; 
        });

        let bgColor = window.getComputedStyle(allH1[index]).getPropertyValue("background-color");
        btns.style.backgroundColor = bgColor;
    });
});

function removeAllh1() {
    allH1.forEach((elem,index) => {
        elem.style.display = "none";
        buttons[index].style.color="black"
    });
}
