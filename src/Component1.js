import style from'./Component.module.css'

export default function Component2(props) {
        
        return (
            <div>
              <h1 id={style.test}>{props.title}</h1>
              <p>{props.description}</p>
              <button>{props.buttonText}</button>
              {props.showOtherButton ? <button>OtherButton</button>:null }
            </div>
        )
  }
