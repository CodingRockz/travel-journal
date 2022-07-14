import React from "react"
import ReactDOM from "react-dom"

export default function Journal(props) {
   console.log(props)
   return (
       <div className="top-seperator">
        <main className="main-section">
            <div>
                <img src={props.imageUrl} alt="image url" className="image-url" />
            </div>
            <div className="journal-card">
                <div className="journal-line1">
                    <img src="./images/pin.png" alt="location pin logo" className="pin-logo" />
                    <p className="country-name"> {props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} className="map-link">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate} </h3>
                <p className="description">{props.description}</p>
            </div>
        </main>
        <hr />
       </div>
   )
}