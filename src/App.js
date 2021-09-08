import { Component } from 'react';
import './App.css';
import Component1  from './Component1'



class App extends Component {
    constructor(props){
      super(props)
      this.state={ 
        titlePage:'WELCOME TO REACT',
        subTitle:'Im subtitle',
        titleClassName:''
       }
    }

    componentDidMount() {
      setTimeout(()=>{
        this.setState({ titlePage:'HAPPY CODING' })
      },5000)
    
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
     
    }
    changeColor=()=>{
      this.setState({titleClassName:"textRed"})
    }
    removeColor=()=>{
      this.setState({titleClassName:""})
    }
    

    render(){
    return (
        <div className='App'>
          <h1 className={this.state.titleClassName} onMouseOver={this.changeColor} onMouseOut={this.removeColor}>{this.state.titlePage}</h1>
          <h2 className="title">{this.state.subTitle}</h2>
          <Component1 title="Declarative" description="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." buttonText="button-1" showOtherButton={true}/>
          <Component1 title="Component-Based" description="Build encapsulated components that manage their own state, then compose them to make complex UIs." buttonText="button-2"  showOtherButton={true}/>
          <Component1 title="Learn Once, Write Anywhere" description="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code." buttonText="button-3"  showOtherButton={false}/>
        </div>
    );
  }
}

export default App;
