import React from "react"

class Station extends React.Component {
  render() {
    return (

      <div className="station">
        <h2>{this.props.name} </h2>
      </div>

    )
  }
}

export default Station
