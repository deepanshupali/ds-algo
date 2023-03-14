
// class example
class stack{
    array = [];
    currSize;
    maxSize;
    constructor(size){
        this.maxSize = size
        this.currSize = this.array.length 
    }
    push(newVal){
        if(this.currSize<this.maxSize)
        {
        this.array[this.currSize] = newVal
        this.currSize++
        console.log(this.array)
    }
        else
        console.log('stack max')
    }
    pop(){
        this.array.length-=1
        this.currSize = this.array.length
        console.log(this.array)

    }
}
let obj = new stack(5)
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.push(6)
obj.pop()
