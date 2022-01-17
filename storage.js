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

// const obj={
//     name:'dog',
//     age:31
// }
// const sotrage = new Storage();
// let val= sotrage.AddLocalStorage(obj);
// let val2= sotrage.AddLocalStorage(obj);
