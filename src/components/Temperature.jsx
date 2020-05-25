import React, { Component } from 'react'

export class Temperature extends Component {

state = {
        temperature : "",
}


inputTemp= (event) => {
      if (event.target.value < 10) {
              this.setState({
                      temperature: <div style={{color: "blue"}}><b>it's cold ❄️</b></div>,
              });
      }
      else if (event.target.value >=10 && event.target.value <= 30) {
                this.setState({
                        temperature: <div style={{color: "black"}}><b>it's nice 🌼</b></div>,
                });
      }
      else {
              this.setState({
                      temperature: <div style={{color: "red"}}><b>it's warm ☀️</b></div>,
              })
      }
}

        render() {
                return (
                        <div>
                               <form >
                                       <h1>Temperature</h1>
                                       <input type="number" style={{textAlign: "center"}} placeholder="Temperature in C°" onChange={this.inputTemp}/>
                               </form>
                               {this.state.temperature}
                        </div>
                )
        }
}

export default Temperature
