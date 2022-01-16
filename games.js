class UserLevel{
    getType(levelBtn,cardMenu){
        let min; 
                  
             if(levelBtn.id==='easy'){
                 min=6;
                 cardMenu.style.display='none';
                 return min; 
             }
    
             else if(levelBtn.id==='medium'){
                 min=4;
                 cardMenu.style.display='none';
                 return min; 
                }
  
            else{
              min=3;
              cardMenu.style.display='none';
              return min;
             }
            

    
    }
}