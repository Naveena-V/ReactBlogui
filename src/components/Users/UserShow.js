import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[],
        }
    }

    componentDidMount(){
       // console.log(this.props)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response)=>{
                const usr=response.data
                const users=usr.find(user=>user.id===parseInt(this.props.match.params.id))
                this.setState({users})
            })

            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const post=response.data
                const posts=post.filter(post=>post.userId===parseInt(this.props.match.params.id))
                this.setState({posts})
            })
    }
    

    render(){
        return(
            <div>
                <h1><u>USER NAME:{this.state.users.name}</u></h1>
                <ul>
                    {this.state.posts.map(post=>{
                        return(<li key={post.id}><Link to={`/users/${post.id}`}>{post.title}</Link></li>)
                    })}
                </ul>
            </div>
        )
    }
}
export default UserShow