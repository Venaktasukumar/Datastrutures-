class Node{
    constructor(data){
        this.data=data;
        this.link=null;
    }
}
class StackUsingSingleLinkedList{
    constructor(){
        this.top=null;
    }
    isempty(){
        if(this.top==null){
            console.log("stack is empty");
        }
        else{
            console.log("stack is not empty");
        }
    }
    push(data){
        let newnode=new Node(data);
        if(newnode==null){
            console.log("Stack is overflow");
        }
        else{
            newnode.link=this.top;
            this.top=newnode;
        }
    }
    pop(){
        if(this.top==null){
            console.log("stack is empty");
        }
        else{
            this.top=this.top.link;
        }
    }
    peek(){
        if(this.top==null){
            console.log("stack is empty");
        }
        else{
            console.log(this.top.data);
        }
    }
    display(){
        if(this.top==null){
            console.log("stack is empty");
        }
        else{
            let temp=this.top;
            while(temp!=null){
                console.log(temp.data);
                temp=temp.link;
            }
        }
    }
}
let obj=new StackUsingSingleLinkedList();
obj.push(1);
obj.push(2);
obj.push(3);
obj.display();
obj.isempty()
obj.pop()
obj.pop()
obj.display();
obj.peek()
