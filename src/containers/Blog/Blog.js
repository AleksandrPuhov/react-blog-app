import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import classes from './Blog.module.css';
import asyncComponent from '../../hoc/asyncComponent'

//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
});


class Blog extends Component {

  state = {
    auth: true
  }

  render() {

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink
                to='/posts/'
                activeStyle={{ color: '#fa923f' }}>Posts</NavLink></li>
              <li><NavLink
                exact to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}
                activeStyle={{ color: '#fa923f' }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render = {()=><h1>HOME</h1>}/> */}
        <Switch>
          {/* {this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null} */}
          {this.state.auth ? <Route path='/new-post' exact component={AsyncNewPost} /> : null}
          <Route path='/posts' component={Posts} />
          <Route render={()=><h1>Not found</h1>}/>
          {/* <Redirect from='/' to='/posts' /> */}
          {/* <Route path='/' component={Posts} /> */}

        </Switch>

      </div>
    );
  }
}

export default Blog;