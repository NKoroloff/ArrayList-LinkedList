const ArrayList = {
    Collection: [] ,
    Length: 0 ,

    clearArray: function () {
        this.length = 0;
        this.List = [];
    },

    push: function(el){
        if(arguments.length > 1 || arguments.length < 1) return false;
        this.Collection[this.Length] = el;
        this.Length++;
    },

    pop: function(){
        let tempArray = [];
        for(let i = 0; i < this.Length - 1; i++){
            tempArray[i] = this.Collection[i];
        }
        this.Collection = tempArray;
        this.Length--;
    },

    size: function () {
        return `ArrayList size = ${this.Length}`;
    },

    shift: function () {
        let tempArray = [];
        let k = 0;
        for (let i = 1; i < this.Length; i++){
            tempArray[k] = this.Collection[i];
            k++;
        }
        this.Collection = tempArray;
        this.Length--;
        return this.Collection;

    },

    unshift: function(el){
        let tempArray = [];
        let k = 0;
        for (let i = 0; i < this.Length; i++){
            tempArray[k + 1] = this.Collection[i];
            k++;
        }
        this.Collection = tempArray;
        this.Collection[0] = el;
        this.Length++;
    },

    makeString: function () {
        let tempArray = '';
        for (let i = 0; i < this.Length; i++){
            tempArray += `${this.Collection[i]},`;
        }
        tempArray = tempArray.substring(0, tempArray.length - 1);
        this.Collection = tempArray;

    },

    sortSelect: function () {
        for (let i = 0; i < this.Collection.length; i++) {
            for (let k = i; k < this.Collection.length; k++) {

                if (this.Collection[k] < this.Collection[i]) {
                    let tempArr = this.Collection[i];
                    this.Collection[i] = this.Collection[k];
                    this.Collection[k] = tempArr;
                }
            }
        }
    },

};

const LinkedList = {
    root: {
        head : null,
        tail :null,
        length :0,
    },
    createNode: function(el) {
        return {
            data: el,
            prev : null,
            next: null,
        };
    },
    size: function () {
        return `LinkedList size = ${this.root.length}`;
    },
    push: function(el) {
        let node =  this.createNode(el);

        if(!this.root.head){
            this.root.head = node;
            this.root.tail = node;
        }else{
            node.prev = this.root.tail;
            this.root.tail.next = node;
            this.root.tail = node;
        }
        this.root.length++;
    },
    pop: function(){
        if(!this.root.head) return null

        const prevNode = this.root.tail.prev

        if(prevNode){
            prevNode.next = null;
            this.root.tail = prevNode;
        }else{

            this.root.head = null;
            this.root.tail = null;
        }
        this.root.length--;
    },
    unshift: function(el){
        let node =  this.createNode(el);

        if(!this.root.head) {
            this.root.head = node;
            this.root.tail = node;
        }else{
            this.root.head.prev = node
            node.next = this.root.head;
            this.root.head = node;
        }
        this.root.length++;

    },
    shift: function(){
        if(!this.root.head) return null;
        const node = this.root.head.next;
        if(node){
            node.prev = null
            this.root.head = node
        }else{
            this.root.head = null
            this.root.tail = null
        }
        this.root.length--;
    },
/*    toString: function(){
        if(!this.root.head) return null;
        let newNoda = this.root;
        newNoda = newNoda.head;
        let string = String(newNoda.data);
        while (newNoda.head && newNoda.tail.next != null) {
             newNoda = newNoda.tail;
             string += ", " + String(newNoda.data);
             console.log(string)
        }
        return string;
    },*/
/*    toArrayList:  function () {
        ArrayList.clearArray()
        let Noda = this.root;
        while (Noda.data.el && Noda.head != null) {
            Noda = Noda.tail;
            ArrayList.push(Noda.data);
        }
        return ArrayList;
    }*/
};




