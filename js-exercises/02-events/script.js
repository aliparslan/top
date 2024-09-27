// ! METHOD 2
btn = document.getElementById('btn'); 
btn.onclick = () => alert('hello world');

// ! METHOD 3
btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", () => {
    alert("Hello world");
});

// is the same as
// btn2.addEventListener("click", function() {
//     alert("Hello world");
// });

// ! METHOD 4
// is the same as
// function alertHello() {
//     alert("hello world!");
// }
// btn2.addEventListener("click", alertHello())

// ! targets
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

// ! listener to a group
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});