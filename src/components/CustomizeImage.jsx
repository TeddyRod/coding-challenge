import React, { Component } from 'react'

export class CustomizeImage extends Component {

state = {
        size : "",
        url : ""
}

insertedImage = (event) => {
        this.setState({
                url: event.target.value
        })
}

chosenRes = (event) => {
        this.setState({
                size: event.target.value
        })
}


        render() {
                return (
                        <div>
                                <form >
                                       <h1>Custom Image</h1>
                                       <input type="text" style={{textAlign: "center"}} placeholder="Enter Link here" onChange={this.insertedImage}/> {/* copy this one --> https://i.imgflip.com/1jqcf8.jpg */}
                                       <input type="range" min="0" max="200" onChange={this.chosenRes} />
                               </form>
                        
                                <p>{this.state.size} x {this.state.size} px</p>
                                <img src={`${this.state.url}`} style={{border: "1px solid black", borderRadius: "5px", width: `${this.state.size}px`, height: `${this.state.size}px`, objectFit: "cover"}} alt="" />
                        </div>
                )
        }
}

export default CustomizeImage
