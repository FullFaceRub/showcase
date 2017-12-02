import React, { Component } from "react"


class Sum extends Component {
    constructor() {
        super();

        this.state = {
            sum: null,
            number1: 0,
            number2: 0
        }
    }

    updateNumberOne(input) {
        this.setState({
            number1: input
        })
    }
    updateNumberTwo(input) {
        this.setState({
            number2: input
        })
    }

    pushButton() {
        var num1 = Number(this.state.number1)
        var num2 = Number(this.state.number2)
        var tempSum = num1+num2


        this.setState({
            sum: tempSum
        })
    }

    render() {

        return (


            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"
                    onChange={(event) => this.updateNumberOne(event.target.value)} placeholder="Enter Number Here"></input>
                <input className="inputLine"
                    onChange={(event) => this.updateNumberTwo(event.target.value)} placeholder="Enter Number Here"></input>
                <button className="confirmationButton"
                    onClick={(event) => this.pushButton(event.target.value)}>Sum</button>
                <span className="resultsBox">Result: {this.state.sum}</span>
            </div>

        )


    }

}


export default Sum;