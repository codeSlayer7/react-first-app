import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

const PostList = ({posts, onDelete,  onToggleLiked})=>{
    const elements = posts.map( (el)=>{
        const {id, ...propsEl}=el;
        return(
            <ListGroup className="list-group" key={id}>
                <PostListItem 
                        {...propsEl}
                        onDelete={ ()=>{
                           onDelete(id)
                        }} 
                      
                        onToggleLiked={()=>{
                            onToggleLiked(id)
                        }}
                    />
            </ListGroup>
             )
    })
    return(
        <ul className="list">
            {elements}
        </ul>
    )
}
export default PostList;