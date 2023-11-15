function createScreen(){
const container = document.querySelector('#container');
const block = document.createElement('div');
block.textContent='I am block';
container.appendChild(block);

}


for (i=0;i<16;i++){
    createScreen()
};