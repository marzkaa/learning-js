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

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieGenre = React.createClass({
    propTypes: {
        genre: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.genre)
        )
    },
});

var MovieReleaseYear = React.createClass({
    propTypes: {
        year: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.year)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MoviePoster = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('img', {src:this.props.img})
        )
    },
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieGenre, {genre: this.props.genre}), 
            React.createElement(MovieReleaseYear, {year: this.props.year}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MoviePoster, {img: this.props.movie.img})
            )
        )
    },
});

var moviesList = React.createClass({
    render: function () {
        return (React.createElement('ul', {}, moviesElements));
    }
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie:movie, genre: movie.genre, year: movie.year, desc: movie.desc, img: movie.img});
});
  


 var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(moviesList, {})
);


ReactDOM.render(element, document.getElementById('app')); 