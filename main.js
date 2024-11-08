
function numList(num1,num2,num3,num4,num5){
    const list=[num1,num2,num3,num4,num5];
   console.log(Math.max(...list))
   console.log(Math.min(...list))

}

function nameList(){
    
    const list= ["mamad","moosa","pashmak"]
    for(let i=3; i<10 ;i++){
        list[i]=prompt(`enter name ${i} :`)
    }
    return list
    
    
    
    
    
}
function passGen(){
    // debugger
    let char1=Math.floor(Math.random()*56)+66;
    let char2=Math.floor(Math.random()*56)+66;
    let char3=Math.floor(Math.random()*56)+66;
    let char4=Math.floor(Math.random()*56)+66;
    let char5=Math.floor(Math.random()*56)+66;
    if(char1<93){
        char1=String.fromCharCode(char1)
        
        
    }
    if(char2<93){
        char2=String.fromCharCode(char2)
        
    }
    if(char3<93){
        char3=String.fromCharCode(char3)
        
    }
    if(char4<93){
        char4=String.fromCharCode(char4)
        
    }
    if(char5<93){
        char5=String.fromCharCode(char5)
        
    }
    const pass=`${char1}${char2}${char3}${char4}${char5}`;
    return pass;

    
    
}


