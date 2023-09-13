let likePizza = true; 
const pizza = function() {
  // 작업... 생략.. 
 return //TODO( 
  (resolve, reject) => {   
    // 작업... 피자를 만든다.. 
    console.log("1");
    if(likePizza) 
       resolve('피자를 주문합니다.');
    else 
      reject('피자를 주문하지 않습니다.');
  })
}
pizza()
.//TODO( result => console.log(result)  ) 

console.log("3"); 