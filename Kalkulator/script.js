
var result = 0;
var final;
var op = "";        


function onNumberClickHandler(number){
    result = result * 10 + number;
    document.getElementById('displ').textContent = result;
}


document.getElementById('one').addEventListener('click',function(){
    onNumberClickHandler(1)
})
document.getElementById('two').addEventListener('click',function(){
    onNumberClickHandler(2)
})
document.getElementById('three').addEventListener('click',function(){
    onNumberClickHandler(3)
})
document.getElementById('four').addEventListener('click',function(){
    onNumberClickHandler(4)
})
document.getElementById('five').addEventListener('click',function(){
    onNumberClickHandler(5)
})
document.getElementById('six').addEventListener('click',function(){
    onNumberClickHandler(6)
})
document.getElementById('seven').addEventListener('click',function(){
    onNumberClickHandler(7)
})
document.getElementById('eight').addEventListener('click',function(){
    onNumberClickHandler(8)
})
document.getElementById('nine').addEventListener('click',function(){
    onNumberClickHandler(9)
})
document.getElementById('zero').addEventListener('click',function(){
    onNumberClickHandler(10)
})
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('displ').textContent = "";
    result=0;
    final = undefined;
    op = "";

})
document.getElementById('jednako').addEventListener('click',function(){
    if(final === undefined){
        final = result;
    }
    else{
    if(op === "+"){
        final = final + result;
    }
    else if(op === "-"){
        final = final - result;
    }
    else if(op === "*"){
        final = final * result;
    }
    else if(op === "/"){
        final = final / result;
    }
    }
    op = ""
    result=0;
    document.getElementById('displ').textContent = final;
    result = null;
})
document.getElementById('plus').addEventListener('click',function(){
    if(final === undefined){
        final = result
    }
    else{
        if(op === "+"){
            final = final + result;
        }
        else if(op === "-"){
            final = final - result;
        }
        else if(op === "*"){
            final = final * result;
        }
        else if(op === "/"){
            final = final / result;
        }
        }
    op = "+"
    result=0;
    document.getElementById("displ").textContent = "";
})
document.getElementById('minus').addEventListener('click',function(){
    if(final === undefined){
        final = result
    }
    else{
        if(op === "+"){
            final = final + result;
        }
        else if(op === "-"){
            final = final - result;
        }
        else if(op === "*"){
            final = final * result;
        }
        else if(op === "/"){
            final = final / result;
        }
        }
    op = "-"
    result=0;
    document.getElementById("displ").textContent = "";
})
document.getElementById('puta').addEventListener('click',function(){
    if(final === undefined){
        final = result
    }
    else{
        if(op === "+"){
            final = final + result;
        }
        else if(op === "-"){
            final = final - result;
        }
        else if(op === "*"){
            final = final * result;
        }
        else if(op === "/"){
            final = final / result;
        }
        }
    op = "*"
    result=0;
    document.getElementById("displ").textContent = "";
})
document.getElementById('deljenje').addEventListener('click',function(){
    if(final === undefined){
        final = result
    }
    else{
        if(op === "+"){
            final = final + result;
        }
        else if(op === "-"){
            final = final - result;
        }
        else if(op === "*"){
            final = final * result;
        }
        else if(op === "/"){
            final = final / result;
        }
        }
    op = "/"
    result=0;
    document.getElementById("displ").textContent = "";
})