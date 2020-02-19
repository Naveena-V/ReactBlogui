import React from 'react'
import axios from 'axios'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[],
            comments:[]
        }
    }

    componentDidMount(){
       console.log(this.props.posts)
         axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                 const usr=response.data
                 const users=usr.find(user=>{
                     const userId=this.state.posts.find(post=>post.id===parseInt(this.props.match.params.id).userId)
                    return user.id===userId
                 })
                 console.log(users)
                 this.setState({users})
             })
 
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const post=response.data
                const posts=post.find(post=>post.id===parseInt(this.props.match.params.id))
                console.log(posts)
                this.setState({posts})
            })

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response)=>{
                const comment=response.data
                const comments=comment.filter(comment=>comment.postId===parseInt(this.props.match.params.id))
                this.setState({comments})
            })
    }


    render(){
        return(
            <div>
                <h1>USER NAME:{this.state.users.name}</h1>
                <h1>TITLE:{this.state.posts.title}</h1>
                <h2>BODY:</h2><h3>{this.state.posts.body}</h3>
                <h1>Comments</h1><hr/>
                <ul>
                    {this.state.comments.map(comment=>{
                        return(<li key={comment.id}>{comment.body}</li>)
                    })}
                </ul>
            </div>
        )
    }
}
export default PostShow