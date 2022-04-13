import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import classes from './EmailVerify.module.css';
import eventLogo from '../../assets/images/Logo.svg';
import logo from '../../assets/Logo/logo_4.png';
import Footer from '../UI/Footer/Footer';
const EmailVerify = () => {
    const navigate = useHistory();
    const [user, setUser] = useState({
        name : "" , email : "" 
    })
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user , [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault()
        const {name , email } = user
        const res = await fetch("https://dscakgec.herokuapp.com/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name , email 
            })
        })
        const data = await res.json()
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }
        else {
            window.alert("DOne Registration")
            console.log("DOne Registration");
            navigate.push("/otp")
        }
    }
    return (<>
        <div className={classes.verify}>
            <form className={classes.registerForm} method='POST'>
            <div className={classes.register}>
            <div className={classes.eventInfo}>
                <img className={classes.eventImage} src={eventLogo}/>
                <h3 className={classes.eventh3}>Please fill in the details below</h3>
            </div>
            <div className={classes.profileInfo}>
            <div className={classes.profileDetails}>
                <h3 className={classes.profileh3}>Profile Information</h3>
                <p className={classes.profileMessage}>The Information will be visible to the event organizers.</p>
                </div>
            <div className={classes.profileForm}>
            <div className={classes.profileFormContainer}>
            <div className={classes.profileFields}>
                <input className={classes.profileInputs} type="text" name="fullname" required>
                </input>
                <span className={classes.inputLabel}>Full Name</span>
                </div>
            <div className={classes.profileFields}>
                <input className={classes.profileInputs} type="text" name="name1" required></input>
                <span className={classes.inputLabel}>Year</span>
                </div>
            <div className={classes.profileFields}>
                <input className={classes.profileInputs} type="text" name="name2" required></input>
                <span className={classes.inputLabel}>Student Number</span>
                </div>
            <div className={classes.profileFields}>
                <input className={classes.profileInputs} type="text" name="name3" required></input>
                <span className={classes.inputLabel}>Student Number</span>
                </div>
                </div>
                </div>
                </div>
                <div className={classes.teamInfo}>
                    <div className={classes.teamMessage}>
                    <h3 className={classes.profileh3}>You and Our Team</h3>
                    <h3 className={classes.dscTeamMessage}>We may want to reach out to you to invite you to other events or let you know about other opportunities at GDSC AKGEC. Let us know if you'd like in. By opting-in, you acknowledge that your WebWrap profile Information may be shared with GDSC AKGEC team.</h3>
                </div>
                    <div className={classes.teamForm}>
                        <div className={classes.teamFormContainer}>
                            <div className={classes.profileBox}>
                                <label className={classes.formLabel}>Do you want to be informed via email for future events?</label>
                            <div className={classes.choiceBox}>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice1' value='Yes'></input>
                                <span className={classes.choices}>Yes</span>
                            </div>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice1'value='No'></input>
                                <span className={classes.choices}>No</span>
                            </div>
                            </div>
                            </div>
                            <div className={classes.profileBox}>
                                <label className={classes.formLabel}>Do you want to be informed via email for future events?</label>
                            <div className={classes.choiceBox}>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice2' value='Yes'></input>
                                <span className={classes.choices}>Yes</span>
                            </div>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice2'value='No'></input>
                                <span className={classes.choices}>No</span>
                            </div>
                            </div>
                            </div>
                            <div className={classes.profileBox}>
                                <label className={classes.formLabel}>Do you want to be part of the club</label>
                            <div className={classes.choiceBox}>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice3' value='Yes'></input>
                                <span className={classes.choices}>Yes</span>
                            </div>
                            <div className={classes.choiceSelect}>
                                <input type='radio' name='choice3'value='No'></input>
                                <span className={classes.choices}>No</span>
                            </div>
                            </div>
                            </div>
            <div className={classes.profileFields}>
                <input className={classes.profileInputs} type="text" required></input>
                <span className={classes.inputLabel}>Why do you want to join the club?</span>
                </div>
                <button className={classes.regButton}>Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
                </form>
                <Footer/>
        </div>
                </>
    );
};

export default EmailVerify;