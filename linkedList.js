import { Node } from "./node.js";

export class LinkedList {
    constructor(nodeValue = null){
        this._startingNode = new Node(nodeValue);
        if(nodeValue != null){
            this._listSize = 1;
        }else{
            this._listSize = 0;
        }
    }

    //adds a new node containing the new value to the end of the list.
    append(value){
        let newNode = new Node(value);
        if(this.size() == 0){
            this._listSize++;
            this._startingNode = newNode;
            return;
        }

        let selectedNode = this.tail();
        this._listSize++;
        if (selectedNode.nextNode == null){
            selectedNode.nextNode = newNode;
        };
    }

    //adds a new node containing the new value to the start of the list.
    prepend(value){
        let newNode = new Node(value);
        if(this.size() == 0){
            this._listSize++;
            this._startingNode = newNode;
            return;
        }else{
            this._listSize++;
            newNode.nextNode = this.head();
            this._startingNode = newNode;
        }
    }

    //returns the value of listSize which contains the number of nodes in the list.
    size(){
        return this._listSize;
    }

    //returns the first node in the list.
    head(){
        return this._startingNode;
    }

    //returns the last node in the list, if there is any.
    tail(){
        let selectedNode = new Node();
        if(this.size() == 0){
            selectedNode = null;
        }else{
            selectedNode = this._startingNode;
            let nextNode;
            let index = 1;
            while(index < this._listSize){
                index++;
                nextNode = selectedNode.nextNode;
                selectedNode = nextNode;
            };
        }
        return selectedNode;
    }

    //returns the node in the position given by the set index.
    at(index){
        let selectedNode;
        if(this.size() == 0){
            selectedNode = null;
        }else if( this.size()-1 < index){
            selectedNode = null;
        }else{
            let selectedNode = this._startingNode;
            let nextNode;
            let found = false;
            let CurrentIndex = 0;
            while(CurrentIndex < this.size()-1 || found == false){
                nextNode = selectedNode.nextNode;
                if (CurrentIndex == index){
                    found = true;
                }else{
                    selectedNode = nextNode;
                    nextNode = selectedNode.nextNode;
                    CurrentIndex++;
                };
            };
        }
        return selectedNode;
        
    }

    //removes the last element(node) from the list.
    pop(){
        if(this.size() == 0){
            return;
        }else if ( this.size() == 1){
            this._startingNode = null;
        }else{
            //its this.size()-2 because it takes into account that the index start at 0 instead of 1.
            let auxNode = this.at(this.size()-2);
            auxNode.nextNode == null;
        }
    }
    
    //returns true or false if the element is in the list or not.
    contains(value){
        let found = false;
        if(this.size() == 0){
            return found;
        }else{
            let selectedNode = this._startingNode;
            let nextNode;
            let CurrentIndex = 1;
            while(CurrentIndex <= this.size() || found == false){
                nextNode = selectedNode.nextNode;
                if (selectedNode.value == value){
                    found = true;
                };
                selectedNode = nextNode;
                nextNode = selectedNode.nextNode;
                CurrentIndex++;
            };
        }
        return found;
    }

    //returns the index of the node containing the given value.
    find(value){
        let selectedNode = new Node();
        if(this.contains(value) == true){
            let i = 1;
            selectedNode = this.head();
            let nextNode;
            while(i <= this.size() && found == false){
                nextNode = selectedNode.nextNode;
                if (selectedNode.value == value){
                    found = true;
                };
                selectedNode = nextNode;
                nextNode = selectedNode.nextNode;
                CurrentIndex++;
            }
            return selectedNode;
        }else{
            return selectedNode;
        }
    }

    //print the list in the console in the format: (value) -> (value) -> null
    toString(){
        //create an array that saves the values from the list nodes and use a for() to print them.
        if(this.size() == 0){
            return "null";
        }else{
            let valuesArray = [];
            let currentNode = new Node();
            currentNode = this.head();
            let nextNode = new Node();
            let index = 0;
            while(index < this.size()){
                if(currentNode != null){
                    valuesArray.push(`( ${currentNode.value} )`);
                    nextNode = currentNode.nextNode;
                }
                if(currentNode.nextNode == null){
                    valuesArray.push("null");
                };
                currentNode = nextNode;
                index++;
            };
            return valuesArray.join(" --> ");
        }
    }
}