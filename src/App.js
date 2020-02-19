import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import UsersList from './components/Users/UsersList'
import UserShow from './components/Users/UserShow'
import PostsList from './components/Posts/PostList'
import PostShow from './components/Posts/PostShow'

function App(){
    return(
        <div>
            <BrowserRouter>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>

                <Route path="/users" component={UsersList} exact/>
                <Route path="/users/:id" component={UserShow} />
                <Route path="/posts" component={PostsList} exact/>
                <Route path="/posts/:id" component={PostShow} />
            </BrowserRouter>
        </div>
    )
}
export default App