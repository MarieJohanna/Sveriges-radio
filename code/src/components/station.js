import React from "react"

class Station extends React.Component {
  render() {
    return (

      <div className="station" style={{ backgroundColor: `#${this.props.color}` }}>
        <div className="image">
          <img src={this.props.image} alt="logo" />
        </div>
        <div className="liveplay">
          <h2>{this.props.name}</h2>
          <p>{this.props.tagline} </p>
          <audio controls src={this.props.audio} type="audio/mpeg">
            <track kind="captions" />
          </audio>
        </div>
      </div>

    )
  }
}

export default Station
