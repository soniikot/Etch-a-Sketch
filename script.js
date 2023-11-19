

function createScreen(){
    for (i=1; i<257;i++){
        if (i%16==0){
           const container = document.querySelector('#container'); 
            const block = document.createElement('div');
            block.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
          
          block.classList.add('block');
container.appendChild(block);
           
const newLine = document.createElement('div');
           newLine.classList.add('break');
           container.appendChild(newLine);
        

        }
        else{
const block = document.createElement('div');
block.classList.add('block');
container.appendChild(block);
block.style.cssText = "border: 1px solid black; height: 25px; width: 25px";

    }}}


createScreen();
    
   