function capitalize(string){
    let stringArray = string.split('');
    stringArray[0]=stringArray[0].toUpperCase();
    string = stringArray.join('');
    return string;
}

module.exports=capitalize;