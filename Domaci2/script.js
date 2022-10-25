var a,b,i,c=0,d=0,e=0;
document.getElementById('Calculate').addEventListener('click',function(){
    a = document.getElementById('first').value
    b = document.getElementById('second').value
    for(i=a; i<=b ; i++){
        if(i%5==0 && i%3==0){
            c=c+1
        }
        else if(i%5==0){
            d=d+1
        }
        else if(i%3==0){
            e=e+1
        }
    }
    document.getElementById('FiveThree').textContent = c;
    document.getElementById('Five').textContent = d;
    document.getElementById('Three').textContent = e;
    a=undefined;
    b=undefined;
    c=0;
    d=0;
    e=0;
})