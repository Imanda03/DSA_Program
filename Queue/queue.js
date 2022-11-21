class Queue{
    constructor(){
        this.item = []
    }

    enQueue(element){
        this.item.push(element)
        console.log(`${element} has been added.`)
        return this.item;
    }

    deQueue(){
        console.log(`${this.item[0]} has been removed`)
        return this.item.shift()
    }

    getSize(){
        console.log(`The size of the queue is ${this.item.length}`)
        return this.item.length
    }

    print(){
        let str = ''
        for(var i=0; i<this.item.length; i++){
            str += this.item[i] + "   "
        }

        return str;
    }

    isEmpty(){
        console.log(this.getSize === 0?"Queue is empty" : "Queue is not empty")
    }
}

const queue = new Queue();
queue.enQueue('Anish');
queue.enQueue('Aashaish');
queue.enQueue('Nabin');