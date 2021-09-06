import style from'./Component.module.css'


function Component1(props) {
  
        return (
            <div>
              <h1 id={style.test}>{props.title}</h1>
              <p>{props.description}</p>
              <button>{props.buttonText}</button>
              {props.showOtherButton ? <button>OtherButton</button>:null }
            </div>
        )
  }

export default Component1