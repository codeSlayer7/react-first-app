import React, { Component } from "react";

export default class SearchPanel extends Component{

    constructor(props){
        super(props)

        this.state={
            term: ''
        }
        this.onApdateSearch= this.onApdateSearch.bind(this)
    }

    onApdateSearch(e){
        let term = e.target.value;
        this.setState({
            term:term
        })
        this.props.onApdateSearch(term)
    }



    render(){
          return (
        
                <input 
                className="search-input"
                type="text"
                placeholder="search by note"
                onChange={this.onApdateSearch}
                ></input>
        
         )
          }
}

