function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    var s = collection.length;
    var counter = 0;

    this.push = function(x){
        s++;
        collection[s-1] = x;  
        return collection;
    };

    this.pop = function(){
        var colcopy = collection;
        var popped = collection[s-1];
        s--;
        collection = []
        for (var i = 0; i < s; i++)
            collection[i] = colcopy[i];
        colcopy = [];
        return popped;
    };

    this.peek = function(){
        return collection[s-1];
    };

    this.isEmpty = function(){
        return collection.length == 0; 
    };
    // Only change code above this line

    this.clear = function(){
        for (var i = 0; i < s; i++)
            collection.pop();
    }
}
