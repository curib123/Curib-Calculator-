
let input = document.querySelector('#input');

function display(values){
    
 input.value = input.value + values;
 

}
function operator(value){

    
    if(input.value.length > 1) {
       input.value = input.value + value;
    }else {
        input.value = null;
    }
    
}
function clearScreen(){
    input.value = null;
}
function calculates() {
     if(input.value.length > 0) {
    let display = input.value;
    let results = eval(display);
    input.value = results;
    return results;
     }else{
         input.placeholder = "Enter Value";
     }
     
     
     
    
}
function deletes() {
  let inputLength = input.value.length - 1;
   input.value = input.value.substring(0,inputLength);
   
 }
 
 
