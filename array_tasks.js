var arrayTasks = {

	concat: function (arr1, arr2) {
		var result = arr1.concat(arr2);
		return result;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];
		for (var item of arr){
			newArray.push(item * item);
		}
		return newArray;
	},

	sum: function (arr) {
		sum = 0;
	  var sum = arr.reduce(
			(a, b) => a + b
		);
		return sum;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		arr.forEach(function(element, index){
			if(arr.indexOf(element, index + 1) > -1) {
				if(newArray.indexOf(element) === -1) {
					newArray.push(element);
				}
			}
		});
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == valueToRemove) {
            arr.splice(i, 1);
        }
    }
    return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === itemToFind)
            indexes.push(i);
    return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var newArray = [];
		for (var item of arr){
			if(item % 2 === 0){
				newArray.push(item * item);
				}
		}
		return this.sum(newArray);
	}

}

module.exports = arrayTasks
