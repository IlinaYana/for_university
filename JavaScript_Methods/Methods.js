//Задание 1
console.log("Задание 1:");
Queue = {
    commands: [
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"}
    ],
    get property(){
        for(i=1; i<this.commands.length; i++)
            this.commands[i].id = i + "-command";
     return this.commands[0].command;
    },
    set property(command){
       this.commands[this.commands.length] = {id: this.commands.length +"-command", command: command}
    },
    showQueue: function (){
        this.commands.forEach(function (element, index, array) {
            console.log(index+1+"."+element.command);
        });
    }
};
console.log(Queue.property);
Queue.property = "reduce";
Queue.showQueue();


//Задание 3
console.log("Задание 3:");
var paragraph = "Однажды я шёл перед вечером мимо базарной площади в лесничество. " +
                "Оно помещалось на окраине городка над рекой. " +
                "Среди улицы мальчишки играли в футбол. " +
                "Громкоговоритель висел на телеграфном столбе. " +
                "Он неожиданно защелкал.";

function strToMass(arg){
    var vb = arg.split(".");
    vb.pop();
    vb.forEach(function (element, index, array) {
        var c = element.split(" ");
        if (c[0] == ""){
            c.shift();
        }
        c.push(".");
       array[index] = {length: c.length - 1, words: c};
    });
    return vb;
}

console.log(strToMass(paragraph));