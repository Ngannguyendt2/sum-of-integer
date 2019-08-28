function sumInteger() {
    let number=Number(prompt("Import N"));
    let sum=0;
    for(let i=1;i<=number;i++)
    {
        sum+=i;
    }
    document.getElementById("sum").innerHTML=sum;
}