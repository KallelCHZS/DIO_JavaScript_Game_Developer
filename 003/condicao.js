var idade = prompt("Qual é sua idade")
var res = document.getElementById('res')
if (idade.value >= 18)
{
    console.log("Maior de idade")
}
else(idade.value <=17) 
{
    te("Menor de idade")
}
res.innerHTML=`Você é ${idade}`
