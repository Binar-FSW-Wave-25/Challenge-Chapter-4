/* Start */
const  vs = document.querySelectorAll(".vs"),
       boxes = document.querySelectorAll("#player1 buttton");
var start = function(){
    vs.style.color = #BD0000;

    let i = 0;
    while(i < 3){
        boxes[i].classList.add("box-hover");
        boxes[i].classList.add("box-active");
        i++;
    }
}
