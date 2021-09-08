export default function Component2(props) {
        
        return (
            <div  className="col-8 shadow-sm p-3 m-4 bg-white rounded text-center">
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <button class="btn btn-primary">DETAIL</button>
              {props.showDeleteButton ? <button class="btn btn-danger ml-2" >DELETE</button>:null }
            </div>
        )
  }
