function defineroftypes (arg) {  //функция для определения типа данных
    //Проверка на число
    if (typeof(arg) === "number") {
        console.log("Это число!");
    //Проверка на строку
    } else if (typeof(arg) === "string") {
        console.log("Это строка!");
    //Проверка на логический объект
    } else if (typeof(arg) === "boolean") {
        console.log("Это логический объект!");
    //Проверка на отсутствие значения
    } else if ((typeof(arg) === "object")&(Boolean(arg)===false)) {
        console.log("Значение отсутствует!");
    //Проверка на объект
    } else if (typeof(arg) === "object") {
        console.log("Это объект!");
    //Проверка на отсутствие примитива
    } else if (Boolean(arg)===false) {
        console.log("отсутствие примитива (ошибочное обращение)!");
    }
}

