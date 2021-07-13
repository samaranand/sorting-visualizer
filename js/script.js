const t = document.getElementById("customRange1");
const sizeRange = document.getElementById('sizeRange')
const speedRange = document.getElementById('speedRange')
const bars = document.getElementById('bars');

const btn1 = document.getElementById("btn1");

const clearArray = ()=>{
    bars.innerHTML = ''
}
let array = [];

const createNewArray = (val=0)=>{
    clearArray()
    const noOfBars = 80 + 12*val
    // creating an array of random numbers 
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}


btn1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(t.value);
  createNewArray(120)
});

sizeRange.addEventListener('change', e =>{
    console.log(sizeRange.value)
    createNewArray(sizeRange.value)
})




// function that will start on load
const init = ()=>{
    console.log('e')
    createNewArray();
}

init()