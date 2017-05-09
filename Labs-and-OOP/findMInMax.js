findMinMax = function(arr){
    var max = arr[0];
    var min = arr[0];
    for (var counter = 1; counter < arr.length; counter++) {
        if (arr[counter] > max) {
            max = arr[counter];
        }
        if (arr[counter] < min) {
            min = arr[counter];
        }
    }
    if ((max || min) == arr[counter]){
    	return arr;
    }
    return [min, max];
}

exports.findMinMax = findMinMax;