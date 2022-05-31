import React from "react"

function getThings() {
  console.log('getThings() Action!!')
  alert('hi')
}

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>getThings</button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { getThings };
export default HelloWorld
