 export class Node {
    constructor(value = null, next = null){
        this._value = value;
        this._nextNode = next;
    }

    get value(){
        return this._value;
    }

    set value(newValue){
        this._value = newValue;
    }
    get nextNode(){
        return this._nextNode;
    }

    set nextNode(next){
        this._nextNode = next;
    }
};