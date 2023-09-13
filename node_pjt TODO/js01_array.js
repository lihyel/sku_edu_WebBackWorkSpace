// 배열 
let season = [ ]
season[0] = "spring" ;
season[1] = "summer" ; 
season[3] = "summer" ;   
console.log(season) ;  

for( let i= 0;i<season.length ;i++) 
   console.log(season[i]);

season.forEach( s => console.log(s) );
season.forEach((s,index) => console.log(index,"=",s) );

let newSeason = [ ...season, "winter" ] ;
console.log(newSeason);
console.log(newSeason.sort() );
newSeason.push("new"); // 배열 끝에 추가 

let a = newSeason.//TODO ( s => s +"계절" ); 
//배열 리턴. 
console.log(a);

let scores = [90, 35, 64, 88, 45, 92]
highScores = scores.//TODO(score =>   //TODO  )    
console.log(highScores);