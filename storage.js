class Storage{
    checkLocalStorage(){
        if(localStorage.getItem('score')===null){
            return [];
        }
        else{
            let test=(localStorage.getItem('score'))
            return JSON.parse(test)
        }
    }
    AddLocalStorage(score){
     let temp;
      
     if(localStorage.getItem('score')===null){
          temp=[];
     }else{
          temp=JSON.parse(localStorage.getItem('score'));
     }

     temp.push(score)

     localStorage.setItem('score',JSON.stringify(temp));
    }
}

