async function whatsYourFavorite() {
    let fav = "Javascript"; 
    for(let i=0;i<5;i++) console.log(2);
    return fav;
}
async function displaySubject(subject) {
    for(let i=0;i<5;i++) console.log(5);
    return `Hello, ${subject}`;
}
async function init() {
    for(let i=0;i<5;i++) console.log(1);
    const response = await whatsYourFavorite();  
    for(let i=0;i<5;i++) console.log(4);
    const result = await displaySubject(response);  
    console.log(result);  
}

init();
for(let i=0;i<5;i++) console.log(3);
console.log("끝");