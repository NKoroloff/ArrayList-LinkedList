const arrayList = {
    length: function () {
        if(arguments.length > 0){
            return false
        }
        let index = 0;
        for (let i = 0 ; this[i] !== undefined ; i++){
            index = i + 1;
        }
        return index;
    },
    clearArray: function(){
        for(let i = this.length(); i >= 0; i--){
            delete this[i];
        }
    },
    push: function(el){
        if(arguments.length > 1 || arguments.length < 1){
            return false
        }
        let elToPush = this.length();
        return  this[elToPush] = el;
    },
    pop: function(){
        if(this[0] === undefined || arguments.length > 0){
            return false;
        }
        let delLastEl = this.length() - 1;
        return  delete this[delLastEl];
    },
    shift: function(){
       if(this[0] === undefined || arguments.length > 0){
           return false;
       }
       let newArr = {};
       for (let i = 1 ; this[i] !== undefined ; i++){
           newArr[i - 1] = this[i]
       }
       let i;
       for (i = 0 ; newArr[i] !== undefined ; i++){
           newArr[i - 1] = this[i]
           this[i] = newArr[i];
       }
       delete this[i];
    },
    unshift: function(el){
        if(arguments.length > 1 || arguments.length < 1){
            return false;
        }
        let newArr = {};
        for ( let i = 0; this[i] !==undefined; i++){
            newArr[i + 1] = this[i];
        }
        newArr[0] = el;
        for(let i = 0; newArr[i] !== undefined; i++){
            this[i] = newArr[i]
        }
    },

    toString: function () {
        if(arguments.length > 0){
            return false
        }

        let string = '';
        let tmpArray = {};
        tmpArray = this;

        for(let i = 0; this[i] !==undefined; i++){
            tmpArray[i] = '' + tmpArray[i]
        }

        for(let i = 0; this[i] !==undefined; i++){
            string += `${tmpArray[i]} `
        }
        return string;
    },
    toLinkedList: function () {
        if(arguments.length > 0 ||this[0] === undefined){
            return false;
        }
        
        let LinkedList = this.linkedList;
        
        for(let i = 0; i <= this.length(); ++i){
            if(this[i] !== undefined){
                LinkedList.push(this[i])
            }
        }
        this.LinkedList = LinkedList;
        return LinkedList;
    },

    linkedList: {
        root:{
            nextNoda: null,
            prevNoda: null,
            length: 0,
        },
        length: function(){
            if(arguments.length > 0){
                return false
            }

            return this.root.length
        },
        clearList:function(){
            this.root.nextNoda = null;
            this.root.prevNoda = null;
            this.root.length = 0;
        },
        createNoda: function(el){
            return {
                el: el ? el : null,
                nextNoda: null,
                prevNoda: null,
                index: this.root.length
            }
        },
        push: function (el) {
            if(arguments.length < 1 || arguments.length > 1){
                return false;
            }

            const newNoda = this.createNoda(el);

            let tmpNoda = this.root;

            while (tmpNoda.nextNoda && (tmpNoda.nextNoda !== this.root) ){
                tmpNoda.nextNoda.prevNoda = tmpNoda;
                tmpNoda = tmpNoda.nextNoda;
                newNoda.prevNoda = tmpNoda
            }

            tmpNoda.nextNoda = newNoda;

            this.root.prevNoda = newNoda;

            this.root.length++
        },
        unshift: function (el) {
            if(arguments.length < 1 || arguments.length > 1){
                return false;
            }

            const newNoda = this.createNoda(el);

            let tmpPrev = this.root;

            if ( this.root.nextNoda !== null){
                this.root.nextNoda.prevNoda = newNoda;
            }

            let tmpNoda = this.root.nextNoda;

            this.root.nextNoda = newNoda;

            this.root.nextNoda.nextNoda = tmpNoda;

            this.root.length++
        },
        pop: function () {
            if(this.root.length === 0){
                return false
            }

            if(arguments.length > 0){
                return false;
            }

            let tmpNoda = this.root;

            while(tmpNoda.nextNoda !== null){
                tmpNoda = tmpNoda.nextNoda;

                if(tmpNoda.index === (this.root.length-2)){
                    tmpNoda.nextNoda = null;
                }
            }

            this.root.length --
        },
        shift: function () {
            if(arguments.length > 0){
                return false;
            }

            if(this.root.length === 0){
                return false
            }

            const tmpNoda = this.root.nextNoda.nextNoda;
            this.root.nextNoda = null;
            this.root.nextNoda = tmpNoda;
            this.root.length--
        },
    },
};

const linkedList = {
    root:{
      nextNoda: null,
      prevNoda: null,
        length: 0,
    },
    length: function(){
        if(arguments.length > 0){
            return false
        }

        return this.root.length
    },
    clearList:function(){
        this.root.nextNoda = null;
        this.root.prevNoda = null;
        this.root.length = 0;
    },
    createNoda: function(el){
        return {
            el: el ? el : null,
            nextNoda: null,
            prevNoda: null,
            index: this.root.length
        }
    },
    push: function (el) {
        if(arguments.length < 1 || arguments.length > 1){
            return false;
        }

        const newNoda = this.createNoda(el);

        let tmpNoda = this.root;

        while (tmpNoda.nextNoda && (tmpNoda.nextNoda !== this.root) ){
            tmpNoda.nextNoda.prevNoda = tmpNoda;
            tmpNoda = tmpNoda.nextNoda;
            newNoda.prevNoda = tmpNoda
        }

        tmpNoda.nextNoda = newNoda;

        this.root.prevNoda = newNoda;

        this.root.length++
    },
    unshift: function (el) {
        if(arguments.length < 1 || arguments.length > 1){
            return false;
        }

        const newNoda = this.createNoda(el);

        if ( this.root.nextNoda !== null){
            this.root.nextNoda.prevNoda = newNoda;
        }

        let tmpNoda = this.root.nextNoda;

        this.root.nextNoda = newNoda;

        this.root.nextNoda.nextNoda = tmpNoda;

        this.root.length++
    },

    pop: function () {
        if(this.root.length === 0 || arguments.length > 0){
            return false
        }

        let tmpNoda = this.root;

        while(tmpNoda.nextNoda !== null){
            tmpNoda = tmpNoda.nextNoda;

            if(tmpNoda.index === (this.root.length-2)){
                tmpNoda.nextNoda = null;
            }
        }

        this.root.length --
    },
    shift: function () {
        if(arguments.length > 0 || this.root.length === 0){
            return false;
        }

        const tmpNoda = this.root.nextNoda.nextNoda;
        this.root.nextNoda = null;
        this.root.nextNoda = tmpNoda;
        this.root.length--
    },
    toArrayList: function () {
        if(arguments.length > 0 || this.root.length === 0){
            return false;
        }

        let tmptNoda = this.root;
        let ArrayList = this.arrayList;

        while(tmptNoda.nextNoda !== null){
            ArrayList.push(tmptNoda.el);
            tmptNoda = tmptNoda.nextNoda
        }
        ArrayList.push(tmptNoda.el);
        this.ArrayList = ArrayList;
        return ArrayList
    },
    arrayList: {
        length: function () {
            if(arguments.length > 0){
                return false
            }

            let index = 0;

            for (let i = 0 ; this[i] !== undefined ; i++){
                index = i + 1;
            }

            return index;
        },
        clearArray: function(){
            for(let i = this.length(); i >= 0; i--){
                delete this[i];
            }
        },
        push: function (value){
            if(arguments.length > 1 || arguments.length < 1){
                return false
            }

            let tmp = this.length();

            return this[tmp] = value;
        },
        pop: function () {
            if(this[0] === undefined){
                return false
            }

            if(arguments.length > 0){
                return false
            }

            let tmp = this.length() - 1;

            return delete this[tmp];
        },
        unshift: function(value) {
            if(arguments.length > 1 || arguments.length < 1){
                return false
            }

            let tmpArray = {};

            for (let i = 0 ; this[i] !== undefined ; i++){
                tmpArray[i + 1] = this[i]
            }

            tmpArray[0] = value;

            for (let i = 0 ; tmpArray[i] !== undefined ; i++){
                this[i] = tmpArray[i];
            }
        },
        shift: function () {
            if(this[0] === undefined){
                return  false
            }

            if(arguments.length > 0){
                return false
            }

            let tmpArray = {};

            delete this[0];

            for (let i = 1 ; this[i] !== undefined ; i++){
                tmpArray[i - 1] = this[i]
            }

            let i;
            for (i = 0 ; tmpArray[i] !== undefined ; i++){
                this[i] = tmpArray[i];
            }
            delete this[i];
        },
        toString: function () {
            if(arguments.length > 0){
                return false
            }

            let string = '';
            let tmpArray = {};
            tmpArray = this;

            for(let i = 0; this[i] !==undefined; i++){
                tmpArray[i] = '' + tmpArray[i]
            }

            for(let i = 0; this[i] !==undefined; i++){
                string += `${tmpArray[i]} `
            }
            return string;
        },
        toLinkedList: function () {
            if(arguments.length > 0 ||this[0] === undefined){
                return false;
            }

            let LinkedList = this.linkedList;

            for(let i = 0; i <= this.length(); ++i){
                if(this[i] !== undefined){
                    LinkedList.push(this[i])
                }
            }
            arrayList.linkedList = LinkedList;
            return arrayList.linkedList = LinkedList;
        },
    },
};
