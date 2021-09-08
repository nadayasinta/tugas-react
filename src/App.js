import { Component } from 'react';
import './App.css';



class App extends Component {
    constructor(props){
      super(props)
      this.state = { 
        titlePage:'WELCOME TO REACT',
        subTitle:'A JavaScript library for building user interfaces',
        descriptionData:[
          {
            id:1,
            title:"Declarative",
            description:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
            showDeleteButton: true
          },
          {
            id:2,
            title:"Component-Based",
            description:"Build encapsulated components that manage their own state, then compose them to make complex UIs.",
            showDeleteButton: true
          },
          {
            id:3,
            title:"Learn Once, Write Anywhere",
            description:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
            showDeleteButton: false
          },
        ]
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

    render(){
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className={this.state.titleClassName}>{this.state.titlePage}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2 className="title">{this.state.subTitle}</h2>
            </div>
          </div>
          <div className='row justify-content-around'>
            {this.state.descriptionData.map(item=>
            <>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>{item.showDeleteButton}</div>
              </>
            )}
          </div>
        </div>
    );
  }
}

export default App;
