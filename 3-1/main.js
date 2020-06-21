// arrayWidthでつくったものを一つにの配列に入れる
var array99 = [];
for (var i = 1; i < 10; i++) {
    // 一行単位で作る配列
    var arrayWidth = [];

    for (var j = 1; j < 10; j++) {
        arrayWidth.push(i * j);
    }

    array99.push(arrayWidth);
    const deleteArr = arrayWidth.join("\t")
    console.log(deleteArr)
}



