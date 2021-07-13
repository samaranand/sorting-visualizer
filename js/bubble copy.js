const bubbleSort = async () => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (array[i] > array[j]) {
        const bar1 = document.getElementById(`bar-${i}`)
        const bar2 = document.getElementById(`bar-${j}`)
        bar1.style.background = 'yellow';
        bar2.style.background = 'yellow';
      }
    }
  }
};



// btn2.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (!checkAlgo()) {
//       alert("Choose Sorting Algorithm");
//     } else {
//       //lets see how i will cal algo
//       // createNewArray();
//       bubbleSort();
//     }
//   });