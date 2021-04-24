import React from 'react'
import faker from 'faker'


const CommentDetail = (props)=>{
    console.log(props)
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="cotent">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="data">
                    {props.timeAgo}
                </span>
            </div>
            <div className="text">{props.text}</div>
        </div>
    </div>
    )
}


export default CommentDetail