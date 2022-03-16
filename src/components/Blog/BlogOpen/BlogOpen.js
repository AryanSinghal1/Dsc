import React from 'react'
import Blogpage from './Blogpage'
import Totalviews from './Totalviews'
import Previous from './Previous'
import classes from './BlogOpen.module.css';
const BlogOpen = () => {
  return (
    <div className={classes.mainPage}>
        <Blogpage/>
        <Totalviews/>
        <Previous/>
    </div>
    
  )
}

export default BlogOpen;