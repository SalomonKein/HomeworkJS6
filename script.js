function filterToDataTape(arrFilter, dataTape) {

    for (let item of arrFilter)
        if (typeof(item) !== dataTape) {
            resultArr.push(item);

        };



    return resultArr;

}
let resultArr = [];
let a = ["shit", 3, 5, NaN, null];
filterToDataTape(a, "object");
console.log(a);
console.log(resultArr);