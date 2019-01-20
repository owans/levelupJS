const Calculator ={
    areaOfRectangle:function(a,b){
        return{
            length: a,
            width:b,
            perimeter: 2 * (a + b),
            area: a * b
        }
}


}
console.log(Calculator.areaOfRectangle );