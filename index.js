let bt0 = document.getElementById("btn0");
let bt1 = document.getElementById("btn1");
let bt2 = document.getElementById("btn2");
let bt3 = document.getElementById("btn3");
let bt4 = document.getElementById("btn4");
let bt5 = document.getElementById("btn5");
let bt6 = document.getElementById("btn6");
let bt7 = document.getElementById("btn7");
let bt8 = document.getElementById("btn8");
let bt9 = document.getElementById("btn9");
let span = document.createElement("span");
let pg =document.getElementById("pg")

let h_2 = document.createElement("h2");
let txt = document.createTextNode(" The Correct Number Is ");

h_2.appendChild(txt);
document.body.appendChild(h_2);
h_2.appendChild(span);

/// THIS IS FOR THE INCORRECT NUMBER
let h2 = document.createElement("h2");
let ts = document.createTextNode(" wrong, the number was ");

// document.body.appendChild(h2);

const result = document.getElementById("result");

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numIndex = Math.floor(Math.random() * nums.length);

h2.appendChild(ts);
h_2.appendChild(span);
// span.innerHTML=nums[numIndex]
// console.log(h_2);

bt0.addEventListener("click",function(){
  pop.play()
})


bt0.addEventListener("click", function () {

    if ((bt0 = nums[numIndex])) {
        span.innerHTML = nums[numIndex];
        result.innerHTML = 0;
        h_2.classList.add("h24");
    
    
      }
    });
    
    
    
    bt1.addEventListener("click", function () {
      
      
      if ((bt1 = nums[numIndex])) {
        span.innerHTML = nums[numIndex];
        result.innerHTML = 1;
        h_2.classList.add("h24"); 
      }   
      
    });
    bt2.addEventListener("click", function () {
      if ((bt2 = nums[numIndex])) {
        result.innerHTML = 2;
        span.innerHTML = nums[numIndex];
        h_2.classList.add("h24");
      }
    });
    bt3.addEventListener("click", function () {
      if ((bt3 = nums[numIndex])) {
        result.innerHTML = 3;
        span.innerHTML = nums[numIndex];
        h_2.classList.add("h24");
      }
    });
    
    bt4.addEventListener("click", function () {
      if ((bt4 = nums[numIndex])) {
        result.innerHTML = 4;
    span.innerHTML = nums[numIndex];
    h_2.classList.add("h24");
  };
 
});
bt5.addEventListener("click", function () {
  if ((bt5 = nums[numIndex])) {
    result.innerHTML = 5;
    span.innerHTML = nums[numIndex];
    h_2.classList.add("h24");
  }
});
bt6.addEventListener("click", function () {
  if ((bt6 = nums[numIndex])) {
    result.innerHTML = 6;
    span.innerHTML = nums[numIndex];
    h_2.classList.add("h24");
  } 
});
bt7.addEventListener("click", function () {
  if ((bt7 = nums[numIndex])) {
    result.innerHTML = 7;
    span.innerHTML = nums[numIndex];
    h_2.classList.add("h24");
  } 
});
bt8.addEventListener(
  "click",
  function () {
    if ((bt8 = nums[numIndex])) {
      result.innerHTML = 8;
      span.innerHTML = nums[numIndex];
      h_2.classList.add("h24");
    }
  },
  bt9.addEventListener("click", function () {
    if ((bt9 = nums[numIndex])) {
      result.innerHTML = 9;
      span.innerHTML = nums[numIndex];
      h_2.classList.add("h24");
    }
  })
  );
  pg.addEventListener("click",function(){
    window.location.reload()
  
  })

  document.addEventListener('DOMContentLoaded', function() {
  
    var pop = new Audio("imgs/rclick-13693.mp3");
    
    
    bt0.addEventListener('click', function() {
     
      pop.play();
      
    });
 
    bt1.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt2.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt3.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt4.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt5.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt6.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt7.addEventListener('click', function() {
     
      pop.play();
      
    }); bt8.addEventListener('click', function() {
     
      pop.play();
      
    });
    bt9.addEventListener('click', function() {
     
      pop.play();
      
    });

  });

