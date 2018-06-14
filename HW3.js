/**
 * 1. splitAndMerge
 * Разделение символов в строке сепаратором и их слияние
  */
function splitAndMerge(str,sp){
    let words = str.split(" ");
    let mergedSymbols = words.map(function(word){
        return word.split("").join(sp);
    })
    
    return mergedSymbols.join(" ");
}

splitAndMerge("Test test test",","); //"T,e,s,t t,e,s,t t,e,s,t"

/**
 * 2.convert
 * hash -> array
 */

function convert(hash){
    let finalArr = [];
    for(key in hash){
        let itemArr = [];
        itemArr.push(String(key));
        itemArr.push(String(hash[key]));
        finalArr.push(itemArr);
    }
    return finalArr;
}

let hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'};

/***
 * 3.toCamelCase
 * Функция перевода в "верблюжий регистр"
 */

 function toCamelCase(str){
    let Words = str.replace(/(-|_)/g," ").split(" ");
    for(let i = 1;i < Words.length;i++){
        Words[i] = Words[i][0].toUpperCase() + Words[i].substring(1);
    }
    return Words.join("");

 }

/**
 * 4.reverseWord
 * Переворот слов в строке
 */

 function reverseWord(str){
    let words = str.split(" ");
    let reversedWords = words.map(function(word){
        return word.split("").reverse().join("");
    })
    
    return reversedWords.join(" ");
 }

 reverseWord(" A fun little challenge! "); //" A nuf elttil !egnellahc "

/**
 * 5.stringExpansion
 * Формирование результирующей строки в зависимости от частоты встречающей букв
 */

 function stringExpansion(str){
    let finalStr = "";
    let occurance = 0;;
    for(let i = 0; i < str.length; i++){
            if(!Number.isNaN(Number(str[i]))){
                occurance = Number(str[i]);
            }
            else if(occurance == 0) {
                finalStr+= str[i];
            }
            else{
                for(let j = 1; j <= occurance;j++){
                    finalStr+=str[i];
                }
                occurance = 0;
            }
    }
    return finalStr;
 }

 stringExpansion('3D2a5d2f');//"DDDaadddddff"
 stringExpansion('3d332f2a'); //"dddffaa"
 stringExpansion('abcde');//"abcde"