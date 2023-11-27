const container = document.querySelector('#container'); 
           
function createScreen(grids){
    for (i=1; i<grids*grids+1;i++){
        if (i%grids==0){
           
const block = document.createElement('div');
block.addEventListener('mouseenter',()=>{
    block.style.backgroundColor ='black';
})
container.appendChild(block);
            block.style.cssText = `border: 1px solid black; height: 800px/${grids}; width: 800px/${grids};`
            block.classList.add('block');

           
const newLine = document.createElement('div');
           newLine.classList.add('break');
           container.appendChild(newLine);
        

        }
        else{
            
        const block = document.createElement('div');
        block.addEventListener('mouseenter',()=>{
            block.style.backgroundColor ='black';
        })
        block.classList.add('block');
        container.appendChild(block);
        block.style.cssText = `border: 1px solid black; height: 800px/${grids}; width: 800px/${grids}`;
}
       


    }}


createScreen(16);

const cleanBtn=document.querySelector('#cleanBtn');
cleanBtn.addEventListener("click", () => {
  let userSize = Number(prompt('Size of new grid? Print a number less than 100'));
 const blocks = document.querySelectorAll('.block');
   for (const block of blocks){
  block.remove();}
createScreen(userSize);
     
    });
  



  

  

  const newScreenBtn=document.querySelector('.newScreen')
  newScreenBtn.addEventListener("click", () => {
    const destroyOldScreen =document.querySelector('#container');
    container.remove();
        createScreen(input.value);
      });
    

    





   