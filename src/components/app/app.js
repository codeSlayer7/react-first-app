import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import PostStatusFilter from "../post-status-filter";



export default class App extends Component{
    constructor(props){
        super(props)
        this.state= {
            data:[
                {label: 'go to gym',   marked: true , liked: false, id:2},
                {label: 'go to home',  marked: true , liked: false, id: 1},
                {label: 'Learn React', marked: true , liked: false, id:3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;    
        this.deleteItem= this.deleteItem.bind(this);
        this.onAdd= this.onAdd.bind(this);
        // this.onToggleMarked= this.onToggleMarked.bind(this);
        this.onToggleLiked= this.onToggleLiked.bind(this);
        this.onApdateSearch = this.onApdateSearch.bind(this);
        this.searchPost= this.searchPost.bind(this);
        this.onFilterSelect= this.onFilterSelect.bind(this);
    }

    onAdd(body){
        const newItem = {
            label: body,
            id: this.maxId++
        };
        this.setState(({data})=>{
            const newArr = [...data,newItem];
            return{
                data: newArr
            }
        })
    };

    onFilterSelect(filter){
        this.setState({
            filter:filter
        })
    }

    filterPost(items, filter){
        if(filter==="like"){
            return items.filter(el=> el.liked)
        }else{
            return items
        }
    }


    deleteItem(id){
        console.log(id)
        this.setState( ({data})=>{
            const item = data.findIndex( el => el.id === id);
            const before = data.slice(0,item)
            const after = data.slice(item+1)
            const newArr= [...before, ...after]
            return {
                data: newArr
            }
        })
    }

    // onToggleMarked(id){
    //     console.log(id)
    //     this.setState(({data})=>{
    //         let index = data.findIndex(elem=> elem.id ===id);
    //         let elemChange = data[index];
    //         let newElem = {...elemChange, marked: !elemChange.marked};
    //         let newArr = [...data.slice(0,index),newElem,...data.slice(index+1)];
    //         return{
    //             data:newArr
    //         }

    //     })
    // }

    onToggleLiked(id){
      
        this.setState(({data})=>{
            let index = data.findIndex(elem=> elem.id ===id);
            let elemChange = data[index];
            let newElem = {...elemChange, liked: !elemChange.liked};
            let newArr = [...data.slice(0,index),newElem,...data.slice(index+1)];
            return{
                data:newArr
            }


        })
    }

    onApdateSearch(term){
        this.setState({
            term:term
        })
    }
  

    searchPost(items, term){
        if(term===0){
            return items
        }
        return items.filter((item)=>{
               return item.label.indexOf(term) > -1
            })
            
        
    }

    render(){
        const {data, term, filter} = this.state;
        let likedItem = data.filter((el)=>{ return el.liked === true}).length;
        console.log(likedItem);
        let allPost = data.length;
        const visiblePost = this.filterPost(this.searchPost(data,term), filter)
            return ( 
                        <div className="app">
                                <AppHeader
                                likedItem={likedItem}
                                all={allPost}/>
                                <div className="search-panel-box">
                                    <SearchPanel
                                    onApdateSearch={this.onApdateSearch}/>  
                                    <PostStatusFilter
                                    filter={filter}
                                    onFilterSelect={this.onFilterSelect}/>
                                </div>
                                <PostList 
                                    posts={visiblePost}
                                    onDelete={this.deleteItem} 
                                  
                                    onToggleLiked={this.onToggleLiked}/>
                                <PostAddForm
                                onAdd={this.onAdd}/>
                        </div>
                )
    }
}



