let sheading = document.querySelector(".sheading");
let game = document.querySelector(".game");
let bheading = document.querySelector(".bottomheading");
let win = document.querySelector(".win");
let wwin = document.querySelector(".wbtn");
let clickedbtn;
let res = 0;
let m=0;
let arr = ["", "", "", "", "", "", "", "", ""];

let sbtn = document.querySelector("#pgame");
sbtn.addEventListener("click", () => {
    let head = document.querySelector(".heading");
    let head1 = document.querySelector(".startbtn");
    let back = document.querySelector(".tic");
    back.style.backgroundImage = "url('https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";
    back.style.backgroundSize = "100% 100%";
    head.classList.toggle("hide");
    head1.classList.toggle("hide");

    sheading.classList.toggle("hide");
    game.classList.toggle("hide");
    bheading.classList.toggle("hide");
   

});


let btn = document.querySelectorAll(".numbtn");
let n = btn.length;
for (let i = 0; i < n; i++) {
    btn[i].addEventListener("click", () => { clickedbtn = i; print(); res++; winner(); });

}
function print() {
   
    let cnd = btn[clickedbtn].innerText;
 
    if (res % 2 == 0) {
        if (cnd != "O" && cnd != "X") {
            btn[clickedbtn].innerText = "X";
            m++;
            arr[clickedbtn] = "x";
            
        }
        else {
            alert("already");
            res--;
         
        }

    }
    else {
        if (cnd != "O" && cnd != "X") {
            btn[clickedbtn].innerText = "O";
            m++;
            arr[clickedbtn] = "o";
           
        }
        else {
            alert("already");
            res--;
           
        }

    }
    

};
function winner() {
    let twn=document.querySelector("#tres");

    if (arr[0] == "x" && arr[1] == "x" && arr[2] == "x")
     {

        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;
       
    }
    else if (arr[0] == "o" && arr[1] == "o" && arr[2] == "o") 
    {

        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;
    }
    else if (arr[3] == "x" && arr[4] == "x" && arr[5] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;
    }
    else if (arr[3] == "o" && arr[4] == "o" && arr[5] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;
    }
    else if (arr[6] == "x" && arr[7] == "x" && arr[8] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;
    }
    else if (arr[6] == "o" && arr[7] == "o" && arr[8] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;
    }
    else if (arr[0] == "x" && arr[3] == "x" && arr[6] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;
    }
    else if (arr[0] == "o" && arr[3] == "o" && arr[6] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;
    }
    else if(arr[1] == "x" && arr[4] == "x" && arr[7] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;
    }
    else if (arr[1] == "o" && arr[4] == "o" && arr[7] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;

    }
    else if (arr[2] == "x" && arr[5] == "x" && arr[8] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;

    }
    else if(arr[2] == "o" && arr[5] == "o" && arr[8] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;

    }
    else if (arr[0] == "x" && arr[4] == "x" && arr[8] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;

    }
    else if (arr[0] == "o" && arr[4] == "o" && arr[8] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;

    }
    else if (arr[2] == "x" && arr[4] == "x" && arr[6] == "x") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - X - won";
        m++;

    }
    else if (arr[2] == "o" && arr[4] == "o" && arr[6] == "o") {
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Player - O - won";
        m++;

    }
    if(m==9)
    {
       
        sheading.classList.toggle("hide");
        game.classList.toggle("hide");
        bheading.classList.toggle("hide");
        win.classList.toggle("hide");
        wwin.classList.toggle("hide");
        twn.innerText="Game Tie";
      

    }

}
let home=document.querySelector("#h");
let pa=document.querySelector("#pa");
home.addEventListener("click",()=>{location.reload()});
pa.addEventListener("click",()=>{
    win.classList.toggle("hide");
    wwin.classList.toggle("hide");
    sheading.classList.toggle("hide");
    game.classList.toggle("hide");
    bheading.classList.toggle("hide");
    let n = btn.length;
for (let i = 0; i < n; i++) {
    btn[i].innerText="";
}
m=0;
res=0;

for(let i=0;i<arr.length;i++)
{
    arr[i]=" ";
}


});



