//Упражнение 1
var firstArray = [1,2,3,"n",5,6,7,8,9,10];
var secondArray = [1,2,3,4,5,6,7,"n",9,10];

console.log("Упражнение 1.1:");
function closeToN (arr) {//возвращние массива из эл-тов возле "n"
    var result = new Array(arr[(arr.indexOf("n")-1)] , arr[arr.indexOf("n")+1]);
    return result;
}
console.log(closeToN(firstArray));
console.log(closeToN(secondArray));

console.log("Упражнение 1.2:");
function numbersAfterN(array) {//возвращение массива после "n"
    return array.slice(array.indexOf("n") + 1, array.length);
}
console.log(numbersAfterN(firstArray));
console.log(numbersAfterN(secondArray));

console.log("Упражнение 1.3:");
function mergerNumbersAfterN(arr1, arr2) {//слияние двух массивов
    var Array1 = arr1.slice(arr1.indexOf("n") + 1, arr1.length);
    var Array2 = arr2.slice(0, arr1.indexOf("n") - 1);
    return Array1.concat(Array2);
}
console.log(mergerNumbersAfterN(firstArray, secondArray));


//Упражнение 2
var arr =new Array(1,2,3,4);

console.log("Упражнение 2.1:");
var fact = arr.reduce(function (previousValue, item, index, array) {
    return previousValue * item;
}, arr[0]);//нахождние факториала
console.log("Факториал массива = " + fact);

console.log("Упражнение 2.2:");
function reverseString(arr_reverse){//соединние эл-тов в обратном порядке
    console.log(arr_reverse.reverse().join("-"));
}
reverseString(arr);

//Упражнение 3
var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

console.log("Упражнение 3.1:");
function splitStr(strings) {//возвращение массива слов
    return (strings.split(strings[0])).slice(1, strings.split(strings[0]).length);
}
console.log(splitStr((str)));

console.log("Упражнение 3.2:");
function toEnd(strs, understr) {//возвращение строки, начиная с подстроки
    if (strs.includes(understr, 0)) {
        return strs.slice(strs.indexOf(understr,0),strs.length);
    } else{
        return "";
    }
}
console.log(toEnd(str, "здоровый"));

//Упражнение 4
var str = "JavaScript";

console.log("Упражнение 4.1:");
function toCase(arg, ind){//изменение регистра
    if (arg[ind] == arg[ind].toUpperCase()){
        return arg.toUpperCase();
    } else if (arg[ind] == arg[ind].toLowerCase()){
        return arg.toLowerCase();
    }
}
console.log(toCase(str, 3));
console.log(toCase(str, 4));

console.log("Упражнение 4.2:");
function startOrEnd(arg, understr){//содержится ли одстрока в конце или начале слова
    if (arg.startsWith(understr)||arg.endsWith(understr)){
        return true;
    }else {
        return false;
    }
}
console.log(startOrEnd(str, "Jav"));
console.log(startOrEnd(str, "ipt"));
console.log(startOrEnd(str, "vaS"));