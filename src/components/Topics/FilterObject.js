import React, {Component} from "react"


class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {mom:"RoLayne"},{dad:"Gary"},{bro:["Phil","G","Tyler","Spencer","Sam"]},{sis:["Angela","Blair","Kate"]}
            ],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput (input){
        this.setState({
            userInput: input
        })
    }

    pushButton(){
console.log(this.state.userInput)
        var tempArr = this.state.unFilteredArray.filter( prop =>{
            console.log(prop[this.state.userInput])
            return prop[this.state.userInput]})

        this.setState({
            filteredArray: tempArr
        })
    }

    render (){
        // var result = this.state.filteredArray
        console.log(this.state.filteredArray)
        return (

            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" 
                onChange={(event)=>this.updateUserInput(event.target.value)} placeholder="Filter here"></input>
                <button className="confirmationButton"
                onClick={(event)=>this.pushButton(event.target.value)}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>


        )


    }

}


export default FilterObject;