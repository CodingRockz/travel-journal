import React from "react"
import ReactDOM from "react-dom"
import Journal from "./Journal"
import data from "./data"
import Nav from "./Nav"

export default function App() {
    const journalData = data.map(item => {
        return <Journal {...item} />
    })
    return (
        <div>
            <Nav />
            {journalData}
        </div>
    )
}