import {getData} from "./integration/Integration";
import {useState} from "react";

function App() {
    const [payload, setPayload] = useState("")
    async function callTheApi() {
        const response = (await getData());
        setPayload(response.data)
    }
    function _renderData(data) {
       if(data) {
            return Object.entries(data).map(([key,value])=>{
              return (
                  <div>{key} : {value.toString()}</div>
              );
            })
        }
    }

    return (
        <>
            <div>
                <button onClick={callTheApi}>call the api</button>
            </div>
            <div>
                <span>{payload.name}</span>
                <span>{_renderData(payload.data)}</span>
            </div>
        </>
    )
}

export default App
