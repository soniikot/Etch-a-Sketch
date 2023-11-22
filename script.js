const container = document.querySelector('#container'); 
           
function createScreen(grids){
    for (i=1; i<grids*grids+1;i++){
        if (i%grids==0){
           
const block = document.createElement('div');
block.addEventListener('mouseenter',()=>{
    block.style.backgroundColor ='black';
})
container.appendChild(block);
            block.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
          

           
const newLine = document.createElement('div');
           newLine.classList.add('break');
           container.appendChild(newLine);
        

        }
        else{
            
        const block = document.createElement('div');
        block.addEventListener('mouseenter',()=>{
            block.style.backgroundColor ='black';
        })
        //block.classList.add('blocks');
        container.appendChild(block);
        block.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }
            


    }}


createScreen(16);



/*const blocks = document.querySelectionAll('block'); s
blocks.forEach((block)=>{
    block.addEventListener("mouseover", () => {
block.style.backgroundColor ="blue";

});
});*/


    


   