import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

  render() {

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink
                to='/posts/'
                activeStyle={{ color: '#fa923f' }}>Home</NavLink></li>
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
          <Route path='/new-post' exact component={NewPost} />
          <Route path='/posts' component={Posts} />
          {/* <Route path='/' component={Posts} /> */}

        </Switch>

      </div>
    );
  }
}

export default Blog;