console.log("welcome to imanda claas. You will learn binary search here")




 binarySearch = (myArray, data)=>{
    let l = 0;
    let r = myArray.length -1;
    
    while(l<r){
        let mid = Math.floor((l+r)/2)

        // console.log(myArray[mid])
        
        if(data == myArray[mid]){
            // console.log(`${data} has been found`)
            return data
        }
        else if(data < myArray[mid]){
            r = mid - 1;
        } else{
            l = mid + 1
        }
        
    }
    return false
    
}

const myArray = [10,20,30,40,50,60,70,80];
data = 50

if (binarySearch(myArray ,data, 0, myArray.length - 1)){
    console.log("Data has been found..")
}else console.log("Not found")
