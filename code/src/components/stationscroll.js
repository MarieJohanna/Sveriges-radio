import React from "react"

class StationScroll extends React.Component {
  render() {
    return (
      <option className="channel" value={this.props.name}>{this.props.name}</option>

    )
  }
}

export default StationScroll
