bubble = ()=> {
    const myArray = [10,20,90,40,60,50]

    for(let i=0; i <myArray.length; i++){
        for(let j=0; j < myArray.length; j++){
            if(myArray[i] < myArray[j]){
                let temp = myArray[i];

                myArray[i] = myArray[j]
                myArray[j] = temp;
            }
        }
    }

    console.log(myArray)
}


bubble();