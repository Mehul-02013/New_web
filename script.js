let boxs = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
let msg = document.querySelector('#win');
let count = 0,j = 0;

const winProb = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];


reset.addEventListener('click',()=>{
   
     count = 0;
   
    for (let prop of boxs) {
        prop.disabled = false;
        prop.innerText = "";
    }
    
    msg.classList.add('hide');
})


boxs.forEach((val) => {
   
   val.addEventListener('click', () => {

      if (count % 2 == 0) {
         val.innerText = 'X';
         val.style.color = "#E0184C";
      } else {
         val.innerText = 'O';
         val.style.color = "#12E447";
      }

      findWinner();
      
      val.disabled = true;
      count++;
      if(count >= 9){
         draw();
      }

   });
});


function findWinner() {
   
   for (let i of winProb)
   {
     
      p1 = boxs[i[0]].innerText;
      p2 = boxs[i[1]].innerText;
      p3 = boxs[i[2]].innerText;

      if(p1 != "" &&  p2 != "" &&  p3 != "")
      {
         if (p1 == p2 && p2 == p3) {
            showWin(p1);
         }
      }
   }
}

function showWin(win) {
    let p = msg.firstElementChild;
    p.innerText = `Congratulations Winner is ${win}`;
    msg.classList.remove('hide');
    
    for (let prop of boxs) {
        prop.disabled = true;
    }
    
    count = 0;
} 

function draw() {
   msg.firstElementChild.innerText = 'Game is Draw';
   msg.classList.remove('hide');
   
}

console.log('hello')