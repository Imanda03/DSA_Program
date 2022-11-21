class Stack{
    constructor(){
        this.item = [];
        this.count = 0;
    }


    //Adding the element in the stack
    push(element){
        this.item[this.count] = element;
        console.log(`${element} has been added to ${this.count}`)
        this.count += 1
        return this.count - 1;
    }


    // Removing the element from the stack
    pop(){
        if(this.count == 0) return undefined

        console.log(`${this.item[this.count - 1]} has been removed`)
        this.count -= 1;
        return this.item[this.count]
    }


    //To chack the top position of the stack
    peek(){
        console.log(`The top element in stack is ${this.item[this.count - 1]}`)
        return this.item[this.count - 1]
    }


    //TO check whether the stack is empty or not
    isEmpty(){
        console.log(this.count == 0? "Stack is empty":"Stack is non empty")
    }


    //To print the element inside the stack
    print(){
       let str = ''
        for(var i=0; i<this.item.length; i++){
            str += this.item[i] + "     "
        }
    }


    //To print the size of the stack
    size(){
        console.log(`The size of stack is ${this.item.length}`)
        return this.item.length;
    }


    //To clear the stack or to make the stack empty
    clear(){
        this.item = []
        this.count = 0;

        console.log('Stack has been cleared')
        return this.item
    }
}


const stack = new Stack()

stack.push('100')
stack.push('200')
stack.push('300')