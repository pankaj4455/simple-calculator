
function add(){
    let input =parseInt(document.getElementById('input').value);
   let input1=parseInt(document.getElementById('input1').value);

    let sum=input+input1;
    document.getElementById('result').value=sum;
}
function substraction(){
    let input =parseInt(document.getElementById('input').value);
   let input1=parseInt(document.getElementById('input1').value);

    let substraction=input-input1;
    document.getElementById('result').value=substraction;
}
function mul(){
    let input =parseInt(document.getElementById('input').value);
   let input1=parseInt(document.getElementById('input1').value);

    let mul=input*input1;
    document.getElementById('result').value=mul;
}
function division(){
    let input =parseInt(document.getElementById('input').value);
   let input1=parseInt(document.getElementById('input1').value);

    let division=input/input1;
    document.getElementById('result').value=division.toFixed(3);
}





function Reset(){
    let input =document.getElementById('input').value='';
   let input1=document.getElementById('input1').value='';
   document.getElementById('result').value=sum="";
}