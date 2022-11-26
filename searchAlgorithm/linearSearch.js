
const myArray = ["Anish", "Imanda", "Sugam"];


linearSearch = (data) =>{

    for(let i=0; i<myArray.length; i++){
        
        
        if(myArray[i] == data){
            console.log(`${data} has been found`)
            return data
        }
        else "Not found"
    }
}
// linearSearch("Manish")
