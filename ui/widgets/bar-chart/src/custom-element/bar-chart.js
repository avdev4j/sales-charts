import ReactDOM from "react-dom"
import React from "react"
import App from '../App'

class BarChart extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('span')
        this.render()
    }

    render() {
        ReactDOM.render(<React.StrictMode>
                    <App/>
            </React.StrictMode>,
            this.appendChild(this.mountPoint))
    }
}

customElements.get('bar-chart') || customElements.define("bar-chart", BarChart)
