import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//     import {faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button } from "reactstrap";



export default class PostListItem extends Component{
   
      


   
 
    render(){
         const { label, onDelete,  onToggleLiked, marked=false, liked=false}= this.props;

            let btnMark ='';
            if(marked){
                btnMark = 'important-btn'
            }

            let btnLike = '';
            if(liked){
                btnLike = 'info'
            }

        return(
            <div className="post-list-item">
             <span className="post-list-label">
                {label}
            </span> 
            <div className="list-item-btn_box">
            
            <Button dark onClick={onDelete}> delete</Button>
            <Button  onClick={onToggleLiked} color={btnLike}> Like</Button>
            </div>
            </div>
        )
    }
}





// const PostListItem = ({marked = false, label})=>{
//     let btn = '';
//     if(marked){
//         btn += "important-btn"
//     }
//     return(
//         <div className="post-list-item">
//             <span className="post-list-label">
//                 {label}
//             </span> 
//         <div className="list-item-btn_box">
//         <button className={btn}>like  </button>
//         <button className={btn}> delete</button>
//         </div>
           
//         </div>
//     )
// }

// export default PostListItem;