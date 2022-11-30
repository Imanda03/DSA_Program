myInsertionSort = ()=>{
    const myArray = [10,20,90,40,60,50];

    for(let i = 1; i < myArray.length; i++){
        let temp =myArray[i];
        let j = i - 1;

        while(j >= 0 && myArray[j] > temp){
            myArray[j + 1] = myArray[j];
            j--;
        }
        myArray[j + 1] = temp;
    }

    console.log(myArray)
}


myInsertionSort()