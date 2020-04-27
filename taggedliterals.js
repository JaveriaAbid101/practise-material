function highlight (strings, ...values){
    let str = '';
    strings.forEach((string,i) => {
        str+=string +values[i];
     }) ;
    return str;
    
    }
    

const name = 'Javeria';
const age = 21;
const city ='Islamabad'
const degree='BS(CS)'
const sentence = `My name is ${name} I am ${age} years old  and lives in ${city}   and did my graduation in ${degree} `;
console.log (sentence);
document.getElementById("demo").innerHTML=sentence;
