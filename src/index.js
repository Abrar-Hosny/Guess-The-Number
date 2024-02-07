const minmum =1; 
const maximum =100 ; 
const answer =Math.floor(Math.random()*(maximum-minmum +1))+minmum;



let attemps =0;
let guess ;
let running =true;


while (running){
guess =Number(window.prompt ("Guess A Number Between 1 and 100"));

if(isNaN(guess)){
    window.alert("Please Enter a Valid Number");
}

else if (guess < minmum || guess > maximum){
    window.alert("Please Enter a Valid Number");


}

else {
    attemps++ ;
    if(guess > answer){
        window.alert("TOO High");

    } 
    else if(guess < answer){
        window.alert("TOO low");

    } 
    else{
        window.alert("correct you took", attemps , "attemps");
        running = false ; 

    } 
}



}