import React from "react";

//import css
import classes from './BlogList.module.css';

//import component
import BlogCard from "../BlogCard/BlogCard";

//import Data
import {BlogData} from '../BlogData';


import blogImage from "../../../assets/images/blog.png";

const BlogList = () => {

  const blogListRender = BlogData.map((data)=>{
    return <BlogCard key={data.id} date={data.date} month={data.month} year={data.year} link={data.link} title={data.title} author={data.author} description={data.description} image = {data.image}/>
  })

  return (
    <div className={classes.BlogList}>
      <div className={classes.Container}>
      <div className={classes.mainBlog}>
            <div className={classes.image}>
              <img src={blogImage}></img>
              </div>
            {/* <div className={classes.infoMain}> */}
                <div className={classes.info}>
                    <p className={classes.date}>March 05, 2021</p>
                    <a href="#"><h1>How to learn React</h1></a>
                    <p className={classes.date}>Author</p>
                    <br/>
                    <p className={classes.infop}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis praesentium sint nemo quia incidunt aliquam nulla quisquam delectus odio omnis, doloribus suscipit architecto magni inventore odit repellat? Eum, non.</p>
                </div>
            {/* </div> */}
        </div>
        {blogListRender}
      </div>
    </div>
  );
};

export default BlogList;
