class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        // console.log(this.currentLength === this.capacity? "THis queue is full" : "This queue has still some space");
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        // console.log(this.currentLength === 0? "This queue is empty" : "This queue is not empty")
        return this.currentLength ===0;
    }

    enQueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
        return this.items


    }

   
    deQueue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        let item = this.items[this.front];
        this.items[this.front] = null;
        this.front = this.front + 1;
        this.currentLength -= 1;
        if(this.front ===-1){
            this.front = this.rear
        }
        return item;
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        if(!this.isEmpty()){
            let str = ""
            for(var i = this.front; i < this.currentLength; i++){
                str += this.items[i] + "    "
            }
            console.log(str)
        }
    }


}


const circularQueue = new CircularQueue(5);
circularQueue.enQueue('Anish')
circularQueue.enQueue('Niraj')
circularQueue.enQueue('Sugam')
circularQueue.enQueue('niscahl')
circularQueue.enQueue('Bibek')

