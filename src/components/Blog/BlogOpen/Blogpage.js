import classes from './blogpage.module.css'

import flutt from './New folder/flutt.jpg'
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Blogpage=()=>{
    return(
        <div className={classes.blog}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h3 className={classes.flutter}>Flutter-the boon for Android developers</h3>
                    <h3 className={classes.sub}>Flutter-the boon for Android developers</h3>
                    <div className={classes.icons}>
                        {/* <h3>my icons</h3> */}
                        <ShareOutlinedIcon/>
                    <div className={classes.inicons}>
                        <LinkedInIcon style={{ color: 'white' }}/>
                        <FacebookIcon style={{ color: 'white' }}/>
                        <TwitterIcon style={{ color: 'white' }}/>
                    </div>
                    </div>

                </div>
               
                <div className={classes.right}>

                <div className={classes.rightdiv}>
                    </div>
                <div className={classes.rightimage}>
                    <img src={flutt} className={classes.rightimg} alt="flutter"/>
                </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentleft}>
                    <img src={flutt} className={classes.contimg} alt="flutter"/>
                </div>
                <div className={classes.contentright}>
                    <h1 className={classes.conthead}>
                        Lorel ipsum dolor sit amet

                    </h1>
                    <p className={classes.maincont}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatibus inventore nam, facilis non dolor ab fuga sit quis hic reprehenderit dignissimos, ipsum harum adipisci fugit iste enim labore! Nisi!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora soluta harum est quasi illum facilis vitae neque nihil laboriosam fugiat, quae consequuntur nobis itaque quas commodi esse! Dolores, iusto!
                        <br></br>
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatibus inventore nam, facilis non dolor ab fuga sit quis hic reprehenderit dignissimos, ipsum harum adipisci fugit iste enim labore! Nisi!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora soluta harum est quasi illum facilis vitae neque nihil laboriosam fugiat, quae consequuntur nobis itaque quas commodi esse! Dolores, iusto!
                        
                    </p>
                </div>
            </div>
            <div className={classes.morecontent}>
                <div className={classes.moreleft}>
                <div className={classes.contleft}>
                    <h1 className={classes.morehead}>
                        Lorem ipsum dolor
                    </h1>
                    <p className={classes.morecont}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus animi perspiciatis obcaecati quasi quod facere impedit quis veniam.
                    </p>
                        <div className={classes.numbers}>
                            <h3 className={classes.percent}>
                                80%
                            </h3>
                            <h3 className={classes.no}>
                                30.54k
                            </h3>
                        </div>
                </div>
                </div>
                <div className={classes.moreright}>
                <div className={classes.morerightImage}>
                    <img src={flutt} className={classes.moreimg} alt="flutter"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpage