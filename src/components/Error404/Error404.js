import classes from './Error404.module.css';
import classesDark from './Error404Dark.module.css';
import {Link } from 'react-router-dom'

function Error404(props){
    let styles = classes;
    if (props.theme) {
        styles = classes;
    } else {
        styles = classesDark;
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.cont}>
                        <h1 className={styles.cont1}>404</h1>
                        <h3 className={styles.page}>PAGE NOT FOUND</h3>

                    </div>
                    <p className={styles.para}>The page you were looking for was not found. Please verify the link/URL or try starting back at our home page.</p>
                    <div className={styles.btn}>
                        <Link to="/"><button className={styles.btn1}>HOME PAGE</button></Link>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}
export default Error404