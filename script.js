let p=document.querySelector(".right-pane-up")
let p1=document.querySelector(".left-pane")
let p2=document.querySelector(".red-bar")
let p3=document.querySelector(".right-pane")
let p4=document.querySelector(".left-pane-up")
let q=document.querySelector(".bt2")
let q1=document.querySelector("#b2")
q.addEventListener('click', () => {
    p.classList.add("act")
    p1.classList.add("act")
    p2.classList.add("act")
    p3.classList.add("act")
    p4.classList.add("act")
});
q1.addEventListener('click', () => {
    p.classList.remove("act")
    p1.classList.remove("act")
    p2.classList.remove("act")
    p3.classList.remove("act")
    p4.classList.remove("act")   
});

