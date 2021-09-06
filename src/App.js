import { Component } from 'react';
import './App.css';
import Component2 from './Component1'


class App extends Component {
    componentDidMount() {
      console.log('componentDidMount')
    }
    componentWillUnmount() {
      console.log('componentWillUnmount')
    }
    componentDidUpdate() {
      console.log('componentDidUpdate')
    }

    render(){
    return (
        <div className='App'>
          <h1 className="title">WELCOME TO REACT</h1>
          <Component2 title="Declarative" description="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." buttonText="button-1" showOtherButton={true}/>
          <Component2 title="Component-Based" description="Build encapsulated components that manage their own state, then compose them to make complex UIs." buttonText="button-2"  showOtherButton={true}/>
          <Component2 title="Learn Once, Write Anywhere" description="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code." buttonText="button-3"  showOtherButton={false}/>
        </div>
    );
  }
}

export default App;
