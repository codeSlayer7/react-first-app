import React, { Component } from "react";
import { Button } from "reactstrap";

export default class PostAddForm extends Component {

    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this.onValueChange= this.onValueChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);    
    }

    onValueChange(e){
        
        this.setState({
            text:e.target.value
        })

    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }


    render(){

    
    return(
                <form className="postForm"
                onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="write here What are you thinking"
                    className="postFormInput"
                    onChange={this.onValueChange}
                    value={this.state.text}
                    /> 
                    <Button type="submit" color="info"> add</Button>

                </form>
             )
        }
}


