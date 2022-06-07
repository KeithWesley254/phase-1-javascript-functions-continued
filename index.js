// code your solution here

function saturdayFun(someAction = 'roller-skate'){
    return (`This Saturday, I want to ${someAction}!`);
}
saturdayFun(someAction)


function mondayWork(mondayAction= "go to the office"){
    return(`This Monday, I will ${mondayAction}.`)
}
mondayWork(mondayAction)


function wrapAdjective(characters= '*'){
    return function (bombo= "special") {
        return `You are ${characters}${bombo}${characters}!`;
    }
}