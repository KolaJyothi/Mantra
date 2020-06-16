
var filterArray = function(){
    var sampleArray= [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
    var result;
        sampleArray.forEach(function(val){
            if(val.type === 'external') {
                result= val;
            }
        });
        console.log("filtered id:"+ result.id + "\n" +"filtered type: " + result.type);
    };
    filterArray();