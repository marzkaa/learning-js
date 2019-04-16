var Counter = React.createClass({
    getDefaultProps: function() {
        return {
            default: 0
        }
    },
    
    getInitialState: function() {
        return {
            counter: this.props.default,
        };
    },
    

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    componentWillMount: function() {
        console.log('komponent przed przerenderowaniem');
    },
    componentWillReceiveProps: function() {
        console.log('komponent otrzymał nowe właściwości');
    },
    shouldComponentUpdate: function() {
        console.log('Sprawdzenie optymalizacji komponentu');
        return true;
    },
    componentWillUpdate: function() {
        console.log('Komponent został zoptymalizowany');
    },

    render: function(){
        console.log("ładowanie komponentu");
        return React.createElement('div', {},
            React.createElement('span', {}, ' Licznik ' + this.state.counter + ' '),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    },
    componentDidMount: function() {
        console.log('komponent zamontowany w drzewie DOM');
    },
    componentDidUpdate: function() {
        console.log('komponent zamontowany w drzewie DOM po optymalizacji');
    },
});


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
var elementTwo = React.createElement(Counter);
ReactDOM.render(elementTwo, document.getElementById('appTwo'));

var element = React.createElement('div', {}, React.createElement(Counter, {}), React.createElement(Counter,{}), React.createElement(Counter, {}));
ReactDOM.render(element, document.getElementById('appThree'));