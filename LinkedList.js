class Node{
    data;
    ref;
    constructor(data){
        this.data=data;
        this.ref=null;
    }
} 
class LinkedList{
    constructor(){
        this.head=null;
    }
    addAtBegin(value){
        let newnode=new Node(value);
        newnode.ref=this.head;
        this.head=newnode;
    }
    addAtEnd(value){
        if(this.head==null){
            this.addAtBegin(value);
        }
        else{
            let n=this.head;
            while(n.ref!=null){
                n=n.ref;
            }
        let newnode=new Node(value);
        n.ref=newnode;
        }
    }
    addAtIndex(value,index){
        if(this.head==null || index==0){
            this.addAtBegin(value);
        }
        else{
            let temp=this.head;
            let count=1;
            while(temp!=null){
                if(count==index){  
                    let newnode=new Node(value);
                    newnode.ref=temp.ref;
                    temp.ref=newnode;
                }
                temp=temp.ref;
                count++;
            }
        }
    }
    deleteAtBegin(){
        if(this.head==null){
            console.log("Linked list is empty");
        }
        else{
            this.head=this.head.ref;
        }
    }
    deleteAtEnd(){
        if(this.head==null){
            console.log("Linked list is empty");
        }
        else if(this.head.ref==null){
            this.head=null;
        }
        else{
            let n=this.head;
            while(n.ref.ref!=null){
                n=n.ref;
            }
            n.ref=null;
        }
    }
    deleteAtIndex(index){
        if(this.head==null){
            console.log("Linked list is empty");
        }
        else if(index==0){
            this.deleteAtBegin();
        }
        else{
            let count=1;
            let temp=this.head;
            while(temp!=null){
                if(count==index){
                    temp.ref=temp.ref.ref;
                }
                temp=temp.ref;
                count++;
            }

        }
    }
    printLinkedList(){
        if(this.head==null){
            console.log("Linked list is empty");
        }
        else{
        let temp=this.head;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.ref;
        }
        }
    }

}
let obj=new LinkedList();
obj.addAtBegin(11);
obj.addAtEnd(10);
obj.addAtIndex(20,1);
obj.addAtIndex(30,1);
obj.addAtBegin(11);
obj.addAtEnd(10);
obj.deleteAtBegin();
obj.deleteAtEnd();
obj.deleteAtIndex(1);
console.log("print");
obj.printLinkedList();

