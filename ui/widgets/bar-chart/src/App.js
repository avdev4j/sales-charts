import {getData} from "./integration/Integration";
import {useState, useEffect} from "react";
import {Chart} from "./components/Chart";

let loaded = false;

function App() {
    const [payload, setPayload] = useState({});

    useEffect(async () => {
        if(!loaded) {
            setPayload((await getData()).data);
            loaded = true;
        }
    });

    return (
        <>
            <div>
                <Chart payload={payload} />
            </div>
        </>
    )
}

export default App
