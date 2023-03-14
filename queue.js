let array = [1,2,3,4,5]
currLength = array.length
maxSize = 5

function enqueue(newVal){
    array[currLength] = newVal;
    currLength++
    console.log(array)
}
function dequeue(){
    if(currLength > 0){
    for(let i = 0;i<currLength;i++){
        array[i] = array[i+1]
    }
    array.length-=1
    currLength = array.length
    }
    else{
        console.log('already empty')
    }
}

function front(){
    arr[0]
}
function rear(){
    arr[currLength]
}

dequeue()
dequeue()