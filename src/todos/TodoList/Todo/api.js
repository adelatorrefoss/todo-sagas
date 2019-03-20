export default {
    getMarvelData: function getMarvelData() {
        return fetch("https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b")
            .then(result => result.json())
            .then(result => result.data.results);
    }
}
