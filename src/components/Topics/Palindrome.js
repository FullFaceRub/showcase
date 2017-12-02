import React, { Component } from "react"


class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            palindrome: "",
            userInput: ""
        }
    }

    updateUserInput(input) {
        this.setState({
            userInput: input
        })
    }

    pushButton() {
        var tempBoo = ""
        var splitString = this.state.userInput.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        if (joinArray == this.state.userInput) {
            tempBoo = "true"
        }
        else {
            tempBoo = "false"
        }


        this.setState({
            palindrome: tempBoo
        })
    }

    render() {

        return (


            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                    onChange={(event) => this.updateUserInput(event.target.value)} placeholder="Enter Value Here"></input>
                <button className="confirmationButton"
                    onClick={(event) => this.pushButton(event.target.value)}>Is Palindrome?</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>

        )


    }

}


export default Palindrome;