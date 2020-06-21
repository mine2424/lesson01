
var array01 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array02 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var array99 = [];
for (var i = 0; i < array01.length; i++) {
    var arrayWidth = [];
    for (var j = 0; j < array02.length; j++) {
        arrayWidth.push(array01[i] * array02[j]);
    }
    array99.push(arrayWidth);
    const deleteArr = arrayWidth.join(",")
    const deleteComma = deleteArr.split(',').join(' ')
    console.table(deleteComma)
}



