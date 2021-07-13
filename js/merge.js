const merge = async (array, left, mid, right) => {
  let tmpArr = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let p = 0;
  while (i <= mid && j <= right) {
    if (array[i] < array[j]) {
      tmpArr[p] = array[i];
      i += 1;
    } else {
      tmpArr[p] = array[j];
      j += 1;
    }
    p += 1;
  }
  while (i <= mid) {
    tmpArr[p] = array[i];
    i += 1;
    p += 1;
  }
  while (j <= right) {
    tmpArr[p] = array[j];
    j += 1;
    p += 1;
  }
  for(i=0; i<p; i++){
      array[left+i] = tmpArr[i]
  }
};

const callAlgo = async (array, left, right) => {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    await callAlgo(array, left, mid);
    await callAlgo(array, mid + 1, right);
    await merge(array, left, mid, right);
  }
};

const mergeSort = async () => {
  let n = array.length;
  await callAlgo(array, 0, n - 1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        const bar1 = document.getElementById(`bar-${i}`);
        const bar2 = document.getElementById(`bar-${j}`);
        bar1.style.background = "yellow";
        bar2.style.background = "yellow";
        await delayAlgo();
        array[j] = array[j] + array[i];
        array[i] = array[j] - array[i];
        array[j] = array[j] - array[i];
        const t = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = t;
        bar1.style.background = "orange";
        bar2.style.background = "orange";
      }
    }
  }
};
