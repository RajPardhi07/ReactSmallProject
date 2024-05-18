
const Model = ({id, header, body, footer}) => {



  return (
    <div id={id || "Model"}>
        <div>
            <div className="header">
              <h2>  {header ? header : 'Header'}</h2>

            </div>
            <div className="body">
                {
                    body ? body : <div>
                        <p> This is body model</p>
                    </div> 
                }
            </div>

            <div>
                {
                    footer ? footer : <h2>This is footer</h2>
                }
            </div>
        </div>

    </div>
  )
}

export default Model