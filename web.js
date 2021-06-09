const dataChecker = (string, rank) => { 
if (string == "codenation" && rank == 1) 
      { console.log(`Both ${string} and the ranking ${rank} are correct`);    
} elseif (string == "codenation" && rank != 1) 
         { console.log(`${string} is correct but the ranking ${rank} isn’t`);  
} else{
            console.log(`Both ${string} and/or the ranking ${rank} are wrong`);  
           } 
 dataChecker ("codenation", 1); 