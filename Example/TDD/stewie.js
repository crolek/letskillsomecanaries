console.log('sherpa')

function stewieSays(name, number){
    name = name || "Sherpa"
    number = number || 0

    if(number == 20){
        return "no" //cause cats just like messing with your stuff
    }
    var results = name + "'s number is: " + number;
    return results
}