for (i = 0; i < 51; i++) {

    let num = String(i)
    
    if ((i % 3) === 0 || num.indexOf("3") >= 0) {
    console.log("WOW")
    } else {
        console.log(i)
    }
}