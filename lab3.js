function greet(){
    return 'Haydo!';
}
var salutation = console.log(greet());

//4
function echo(sound){
    return sound;
}

//5
function greet2(name){
    return 'Helllo ' + name+'!'
}
greet2('Taiane');

var hi = function(name) {
    return 'Hi' + name + '!';
    };

 //8
function shout(s){
    return s+s;
}
shout.call(console.log(shout('Fire')));

//11
function doSomething(name){
    return name;
}
doSomething.call(console.log(doSomething('Erika')));

//12
function multiplyFive(number){
    return number * 5;
}
console.log(multiplyFive(6));

//13
function myFunction(){
    console.log('Hello World!');
}
myFunction();

//14
let  isAnswerRight = true;
if (isAnswerRight) {
    console.log (' The answer is right!');
    } else
{
  console.log ('The answer is wrong!');
}


//15
function tellFortune(ch,pn,geo,jt){
    return 'You will be a ' + jt + ' '+ 'in' +' '+ geo+ ',' + ' '+ 'maried to '+ pn + ' '+ 'with ' + ch + ' ' + 'kids';

}
var x = console.log(tellFortune(3,'Hannah','Dubai','Professor'));
var y = console.log(tellFortune(2,'Thomas','Luanda','Web Designer'));
var z = console.log(tellFortune(4,'Sarah','Brazil','Dancer'));
