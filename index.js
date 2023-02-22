(function(){
  
    let screen = document.querySelector(".screen");
      let buttons = document.querySelectorAll('.btn');
      let equal = document.querySelector(".equal");
      let clear = document.querySelector(".clear");
      
      buttons.forEach(function(button){
    button.addEventListener("click", function(e){
      let value = e.target.dataset.num;
      screen.value += value;
    })
      });
      
      equal.addEventListener('click', function(){
        if(screen.value ==''){
          screen.value = 'enter an evaluation';
        }
        else{
          screen.value = eval(screen.value);
        }
      })
      
      clear.addEventListener('click', function(){
        screen.value= ' ';
      })
    })();