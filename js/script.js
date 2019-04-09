var movies = [
    {
        id: 1,
        title: 'Harry Potter i Kamień filozoficzny',      
        genre: 'fantasy',
        year: '2001',
        desc: 'Film o czarodzieju',
        img: 'images/harry.jpg'
  },
    {
        id: 2,
        title: 'Król Lew',
        genre: 'animation',
        year: '2019',
        desc: 'Film o królu sawanny',
        img: 'images/lion.jpg'
  },
    {
        id: 3,
        title: 'Teen spirit',     
        genre: 'drama',      
        year: '2019',
        desc: 'Film o dziewczynie marzącej o karierze gwiazdy pop',
        img: 'images/teen.jpg'
    },
    {
        id: 4,
        title: 'Our Planet',             
        genre: 'documentary',
        year: '2019',
        desc: 'Film przyrodniczy',
        img: 'images/planet.jpg'
    },
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, 'Rodzaj filmu: ', movie.genre),
        React.createElement('p', {}, 'Data premiery: ', movie.year),
        React.createElement('p', {}, 'Opis: ', movie.desc),
        React.createElement('img', { src: movie.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));