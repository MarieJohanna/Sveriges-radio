import React from "react"
import Station from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioStation: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ radioStation: json.channels })
    })
  }

  render() {
    return (
      <div className="page">
        <h1>Sverige Radio - Alla stationer</h1>
        <div className="Stations">
          {this.state.radioStation.map((item) => {
            return <Station
              name={item.name}
              tagline={item.tagline}
              color={item.color}
              image={item.image}
              audio={item.liveaudio.url} />
          })}
        </div>
      </div>
    )
  }
}

export default App
