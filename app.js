const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
guess.style.width="30vw"
guess.style.height="5vh"
guess.style.borderRadius="15px"
btn.style.borderRadius="15px"
let play = false;
let words =['python','Javascript','c++','php','java','c#','html','css','reactjs','angular','android','ruby','sql'];
let newwords="";
let randomwords="";
const  createNewWords=()=>{
    let ran=Math.floor((Math.random()*words.length));
   //console.log(ran)
    let newtempwords= words[ran]
    //console.log(newtempwords)
  
   // console.log(newtempwords.split(""));
    return newtempwords;

}
const scramblewords = (arr)=>{
    for(let i= arr.length-1; i>0;i--){
    let temw = arr[i];
    let j=Math.floor(Math.random()*(i));
    //console.log(i);
    //console.log(j);
   console.log(temw);
    arr[i]=arr[j]
    //console.log(arr[j]);
    arr[j]=temw;
}
return arr;
}


btn.addEventListener('click',()=>{
    if(!play){
        play = true;
        btn.innerHTML = "Guess" ;
        guess.classList.toggle('hidden');
         newwords= createNewWords();
        randomwords=scramblewords(newwords.split(""));

        msg.innerHTML=`Guess the word ${randomwords.join("")}`;    
    }
    else{
        let temw= guess.value;
        if(temw===newwords){
           
            console.log("correct");
            play=false;
           
            msg.innerHTML=`Awesome its correct. it's correct ${newwords} `;
            
        
            btn.innerHTML=`Start again for next word`
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            msg.innerHTML=`Sorry please try again ${randomwords}`;
        }
    }

})

