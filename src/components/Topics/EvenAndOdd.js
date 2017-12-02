import React, {Component} from "react"


class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray:[],
            oddArray:[],
            userInput:''
        }
    }

    updateUserInput (input){
        this.setState({
            userInput: input
        })
    }
    buttonPush (){
        var tempArr = this.state.userInput.split(",")
        var tempEvens = []
        var tempOdds = []
        for (var i=0;i<tempArr.length;i++){
            if (tempArr[i]){
                tempArr[i]%2===0?tempEvens.push(tempArr[i]):
                tempArr[i]%2===1?tempOdds.push(tempArr[i]):null
            }
        }
        // tempEvens.split('')
        // tempOdds.split('')
        this.setState({
            evenArray: tempEvens,
            oddArray: tempOdds
        })
    }

    render (){
        var evens = this.state.evenArray
        var odds = this.state.oddArray

        return (

            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" 
            onChange={(event)=>this.updateUserInput(event.target.value)} placeholder="Enter number here"></input>
            <button className="confirmationButton" 
            onClick={(event)=>this.buttonPush(event.target.value)}>Check if Evens or Odds</button>
            <span className="resultsBox">Evens:{evens.join(", ")}</span>
            <span className="resultsBox">Odds:{odds.join(", ")}</span>
            </div>
        )


    }

}


export default EvenAndOdd;