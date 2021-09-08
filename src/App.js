import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:'nada',
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevState) {
    console.log('componentDidUpdate')
    if(this.state.count!==prevState.count){
      document.title = `You clicked ${this.state.count} times`;
    } 
     if(this.state.name!==prevState.name){
      document.title = `You change name to${this.state.name}`;
    }

  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
    document.title = `Goodbye`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <hr/>
        {this.state.name}
        <button onClick={() => this.setState({ name: 'NADAAA' })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
