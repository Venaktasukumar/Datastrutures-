class Node{
    data;
    ref;
    constructor(data){
        this.data=data;
        this.ref=null;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    enqueue(value){
        let newnode=new Node(value);
        if(this.rear==null){
            this.front=newnode;
            this.rear=newnode;
        }
        else{
            this.rear.ref=newnode;
            this.rear=newnode;
        }
    }
    dequeue(){
        if(this.front==null){
            console.log("Queue is empty");
        }
        else{
            console.log("Dequed element is : "+this.front.data)
            this.front=this.front.ref;
            if(this.front==null){
                this.rear=null;
            }
        }
    }
    frontt(){
        if(this.front==null){
            console.log("queue is empty");
            return
        }
        console.log(this.front.data);
    }
    back(){
        if(this.rear==null){
            console.log("Queue is empty");
            return
        }
        console.log(this.rear.data);
    }
    print(){
        if(this.front==null){
            console.log("Queue is empty");
        }
        else{
            let temp=this.front;
            while(temp!=null){
                console.log(temp.data);
                temp=temp.ref
            }
        }
    }
}
let obj=new Queue();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.print();
obj.dequeue();
obj.print();
obj.back();
obj.frontt();
