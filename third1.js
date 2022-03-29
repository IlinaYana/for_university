var str_name = "";

var School = { //объект
    //Свойства:
 Number_classes: 2,//количество классов
 Number_students: 225,//количество учеников
    //Свойство-аксессор(сеттер):
    set property(number){
     this.Number_students = number;
    },
    //Изменение набора классов
    change_number: function (numb){
     this.Number_classes = numb;
        str_name = "";
       var names = new Array();//Массив дополнительного набора классов
     for (i=2; i<this.Number_classes; i++){
         names[i-2] = this.Name_classes[i];
     }
     if (this.Number_classes > 2)
     str_name = ", " + names.join(', ');//строка новых классов
    },
    //Получение информации о школе:
    get_inform: function (){
     console.log("В школе " + this.School_name + " учится " + this.Number_students +
         " детей, и она имеет " + this.specialization + " специализацию.\n" +
         "Школа имеет несколько классных групп(" + this.Number_classes + ") одного возраста А, Б" + str_name + ".");
    }
};
Object.defineProperty(School, 'School_name', {//наименовани школы
    value: "ФизТех", //значение
    writable: false, // Нельзя изменять значение по ходу программы
    enumerable: false, // сделаем наше свойство невидимым при выводе
    configurable: false // его нельзя дополнить или удалить
});
Object.defineProperty(School, 'Name_classes', {//набор классов
    value: ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н",
        "О", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"],//значение
    writable: false, // Нельзя изменять значение по ходу программы
    enumerable: false, // сделаем наше свойство невидимым при выводе
    configurable: false // его нельзя дополнить или удалить
});
Object.defineProperty(School, 'specialization', {//специализация
    value: "физико-математическую", //значение
    writable: false, // Нельзя изменять значение по ходу программы
    enumerable: false, // сделаем наше свойство невидимым при выводе
    configurable: false // его нельзя дополнить или удалить
});

School.get_inform();
School.change_number(6);
School.property = 300;
School.get_inform();
School.change_number(4);
School.property = 100;
School.get_inform();
School.change_number(2);
School.property = 100;
School.get_inform();