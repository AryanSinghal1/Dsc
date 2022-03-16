import React from 'react'
import classes from './blogpage.module.css'
const Previouscard = (props) => {
  return (
        <div className={classes.prevcontainer}>
            <div className={classes.imgcontain}>
                <img className={classes.fluttimg} src={props.image} alt="flutter"/>
            </div>
                <div className={classes.wrap}>
                    <h1 className={classes.prevtitle}>
                        {props.title}
                    </h1>
                    <h3 className={classes.prevsub}>
                        {props.desc}
                    </h3>
                    <button className={classes.btn}>{props.buttontext}</button>
                </div>
               
            
        </div>
  )
}

export default Previouscard