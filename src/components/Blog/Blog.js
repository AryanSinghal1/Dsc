import React from "react";

//import css
import classes from "./Blog.module.css";

//import component
import ShowcaseBlog from "./ShowcaseBlog/ShowcaseBlog";
import BlogList from "./BlogList/BlogList";
import Footer from "../UI/Footer/Footer";
import blogImage from "../../assets/images/blog.png";

class Blog extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Blog}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }
  render() {
    return (<>
      <div className={classes.Blog}>
          <div className={classes.blogPage}>
        <h1 className={classes.title}>The Blog</h1>
        {/* <div className={classes.mainBlog}>
            <div className={classes.image}>
              <img src={blogImage}></img>
              </div>
            <div className={classes.infoMain}>
                <div className={classes.info}>
                    <p>March 05, 2021</p>
                    <h2>This is a heading</h2>
                    <p>Author</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis praesentium sint nemo quia incidunt aliquam nulla quisquam delectus odio omnis, doloribus suscipit architecto magni inventore odit repellat? Eum, non.</p>
                    
                </div>
            </div>
        </div> */}
        {/* <ShowcaseBlog /> */}
        <BlogList />
        </div>
        <Footer />
      </div>
      </>
    );
  }
}

export default Blog;
