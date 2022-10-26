var FibonacijevNiz = [0,1]
var i;
var a=0,b=1;
var c=0;
for(i=2;i<20;i++){
    var broj = FibonacijevNiz[a] + FibonacijevNiz[b]
    FibonacijevNiz.push(broj);
    a=a+1;
    b=b+1;
}

for(var y=0;y< FibonacijevNiz.length;y++){
    if(FibonacijevNiz[y]==0){

    }
    else if(FibonacijevNiz[y]%3==0){
        c=c+1
        console.log("Broj",FibonacijevNiz[y],"je deljiv sa 3")
    }
}
console.log(c,"Brojeva je deljivo sa 3")
console.log("Prvih 20 elemenata FibonacijevogNiza",FibonacijevNiz)