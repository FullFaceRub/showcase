import React, { Component } from "react"


class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                "Xbox", "Xbox 360", "Xbox One", "Playstation 2", "Playstation 4"
            ],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput(input) {
        this.setState({
            userInput: input
        })
    }

    pushButton() {
        console.log(this.state.userInput)
        console.log(this.state.unFilteredArray.includes(this.state.userInput))
        var tempArr = []
        for (var i=0; i<this.state.unFilteredArray.length; i++){
            if (this.state.unFilteredArray[i].includes(this.state.userInput)===true){
                tempArr.push(this.state.unFilteredArray[i])
            }
        }



        // var tempArr = this.state.unFilteredArray.filter(prop => {
        //     console.log(prop[this.state.userInput])
        //     return prop[this.state.userInput]
        // })


        this.setState({
            filteredArray: tempArr
        })
    }

    render() {

        return (


            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine"
                    onChange={(event) => this.updateUserInput(event.target.value)} placeholder="Filter here"></input>
                <button className="confirmationButton"
                    onClick={(event) => this.pushButton(event.target.value)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>

        )


    }

}


export default FilterString;