import React from "react"
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Han" timeAgo = "Today at 4:20PM" text = "Hello all" avatar={faker.image.avatar()}/> 
            </ApprovalCard>
 
            <ApprovalCard>
                <CommentDetail author="Lu"  timeAgo = "Today at 7:00PM" text= "This is Lu" avatar={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root') )