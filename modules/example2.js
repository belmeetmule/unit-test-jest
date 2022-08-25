function reverseString(string){
    //split str first
    let splitStr = string.split('');
    //reverse array values using reverse method
    let reversedStr = splitStr.reverse();
    //make up a string from a revered array
    string = reversedStr.join('');

    return string;
}

module.exports=reverseString;