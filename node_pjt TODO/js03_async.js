//TODO function whatsYourFavorite() {
    let fav = "Javascript";
    return fav;
    }
//TODO function displaySubject(subject) {
    return `Hello, ${subject}`;
}
whatsYourFavorite()
    .then(displaySubject)
    .then(console.log);