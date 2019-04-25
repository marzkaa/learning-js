class StopWatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        running: false,
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        },
        results: []
      }
    }
  

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
    }

    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
        this.setState({
          times: this.state.times
        });
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    render() {
        return (
            <div className={'app'}>
            <nav className={'controls'}>
                <a href={'#'} className={'button start'} onClick={this.start.bind(this)}>Start</a>
                <a href={'#'} className={'button stop'} onClick={this.stop.bind(this)}>Stop</a>
            </nav>
            <div className={'stopwatch'}>{this.format(this.state.times)}</div>
                <ul className={'results'}>
                    {this.state.resultList.map(itemList => <li key={itemList.id}>{itemList.time}</li>)}
                </ul>
            </div>
        );
    }

}


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const app = document.getElementById('app');
ReactDOM.render( <Stopwatch /> , app);