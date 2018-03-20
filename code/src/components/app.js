import React from "react"
import Station from "./station"
import StationScroll from "./stationscroll"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioStation: [],
      filter: ""
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ radioStation: json.channels })
    })
  }

  filterChannel = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    let { radioStation } = this.state
    if (this.state.filter !== "") {
      radioStation = radioStation.filter(item => (
        item.name === this.state.filter
      ))
    }
    return (
      <div className="page">
        <h1>Sverige Radio</h1>
        <div>
          <select className="scrollDown" onChange={this.filterChannel}>
            <option className="channel">Välj kanal...</option>
            <option className="channel" value="">Alla stationer</option>
            {this.state.radioStation.map((item) => {
              return <StationScroll
                name={item.name} />
            })}
          </select>
        </div>
        <div className="stations">
          {radioStation.map((item) => {
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
