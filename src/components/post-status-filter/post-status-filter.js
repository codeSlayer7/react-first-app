import React, { Component } from "react";
import { Button } from "reactstrap"




export default class PostStatusFilter extends Component{

    constructor(props){
        super(props);
        this.buttons =[
            {name: 'all', label: 'All'},
            {name: 'like', label: 'like'}
        ]
    }



    render(){
        let buttons = this.buttons.map( ({name, label})=>{
            const active = this.props.filter===name;
            const style = active? 'info':'secondary';
            return (   
                        <Button 
                        key={name} 
                        outline 
                        color={style}
                        onClick={()=>{ this.props.onFilterSelect(name)}}>
                            {label}</Button>
                            )
             });

                return(
                    <div className="post-status">
                       {buttons}
                    </div>
                )
           }
}

