import {useEffect, react} from "react";
import classes from "./NavBar.module.css";
import {Link, NavLink} from "react-router-dom";
import logoImage from "../../assets/img/layoutColor.png";
import layout from "../../assets/img/layout.png";
import feed from "../../assets/img/feed.png";
import feedColor from "../../assets/img/feedColor.png";
import searchColor from "../../assets/img/searchColor.png";
import notificationColor from "../../assets/img/notificationColor.png";
import profile from "../../assets/img/israilProfile.jpg";
import profileColor from "../../assets/img/profileColor.png";

import settingsColor from "../../assets/img/settingsColor.png";
import logoutColor from "../../assets/img/logoutColor.png";
import savedColor from "../../assets/img/savedColor.png";


const Navbar = (props) => {

    useEffect(() => {
        let profileLinks = document.querySelector("." + classes.topNav + " ."  + classes.rightLinks + " ." + classes.profile + " ." + classes.profileLinks);

        document.addEventListener("click",(e) => {
        let containerProfileLinks = document.querySelector("." + classes.topNav + " ." + classes.rightLinks + " ." + classes.profile);
        let imgProfileLinks = document.querySelector("." + classes.topNav + " ." + classes.rightLinks + " ."+classes.profile + " ." + classes.img);
        let img2ProfileLinks = document.querySelector("." + classes.topNav + " ." + classes.rightLinks + " ."+classes.profile + " ." +   classes.img + " img");
        let arrowProfileLinks = document.querySelector("." + classes.topNav + " ." + classes.rightLinks + " ."+classes.profile + " ." + classes.arrow);
            console.log("df");
            if(e.target != containerProfileLinks && e.target != imgProfileLinks && e.target != arrowProfileLinks && e.target != img2ProfileLinks){
                console.log(e.target);
                if(profileLinks){
                    profileLinks.classList.remove(classes.active);
                    setTimeout(() => {
                        profileLinks.style.display = "none";
                    },100);    
                }
               
               
            }
        })
      }, [])

    let className = ["nav-item active",classes.green];
    className = className.join(' '); 
    console.log(className)
    let NavLinks = (
        <ul>
            <li>
                <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>

            </li>
            <li>
                <NavLink to="/components" activeClassName={classes.active}>Components</NavLink>
            </li>
            <li>
                <NavLink to="/templates" activeClassName={classes.active}>Templates</NavLink>
            </li>
            <li>
            <NavLink to="/login" activeClassName={classes.active}>Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" activeClassName={classes.active}>Register</NavLink>
            </li>
        </ul>
    );
    if(props.IsAuth){
        NavLinks = (
            <ul>
                <li>
                <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>

            </li>
            <li>
                <NavLink to="/components" activeClassName={classes.active}>Components</NavLink>
            </li>
            <li>
                <NavLink to="/templates" activeClassName={classes.active}>Templates</NavLink>
            </li>
            <li>
                   <NavLink to="/dashboard" activeClassName={classes.active}>Dashboard</NavLink>
                </li>
                <li>
                   <NavLink to="/logout" activeClassName={classes.active}>Logout</NavLink>
                </li>
            </ul>
        )
    }


    let rightLink = (

        <div className={classes.notification}>
            <NavLink to="login" >
                Login {props.IsAuth}
            </NavLink>
        </div>
    )

    const openProfileLinkHandler = () => {
        let profileLinks = document.querySelector("." + classes.topNav + " ."  + classes.rightLinks + " ." + classes.profile + " ." + classes.profileLinks);

        if(profileLinks.style.display == "none"){
            profileLinks.style.display = "block";
            setTimeout(() => {
                profileLinks.classList.add(classes.active);
            },100);
        }
        else{
            profileLinks.classList.remove(classes.active);
            setTimeout(() => {
                profileLinks.style.display = "none";
            },100);
    
        }
    }

    if(props.IsAuth){
        rightLink = (
            <div onClick={openProfileLinkHandler} className={classes.profile}>
                <div className={classes.img}>
                    <img src={profile}/>
                </div>
                <div className={classes.arrow + " "  + classes.down}>
                </div>
                <div className={classes.linkArrow}>

                </div>
                <div className={classes.profileLinks}>
                    <div className={classes.main}>
                        <NavLink  to="/dashboard"  >Dashboard</NavLink>
                    </div>
                    <ul>
                        <li><NavLink to="/dashboard" ><img src={profileColor}/> View Profile</NavLink></li>
                       
                        <li><a href="#"><img src={settingsColor}/>Settings</a></li>
                        <li><a href="#"><img src={savedColor}/>Saved</a></li>
                        <li><NavLink to="/logout" href="#"><img src={logoutColor}/> Logout</NavLink></li>
                       
                    </ul>
                </div>
           </div>
        )
    }
    return (
        <div className={classes.topNav}>
             <NavLink to="/" exact activeClassName={classes.active}>     
                <div className={classes.logoContainer}>
                        <div className={classes.logo}>
                            <img src={logoImage}/>
                        </div>
                </div>           
            </NavLink>
      
       <div className={classes.mainLinks}>
            <NavLink to="/components" activeClassName={classes.active}>
                <div className={classes.img}>
                   <img className={classes.color} src={logoImage}/>
                   <img  className={classes.nocolor} src={layout}/>
               </div>
            </NavLink>

            <NavLink to="/templates" activeClassName={classes.active}>
                <div className={classes.img}>
                    <img className={classes.nocolor} src={feed}/>
                    <img className={classes.color} src={feedColor}/>
                </div>
            </NavLink>
           
       </div>
       <div className={classes.rightLinks}>
           <div className={classes.search}>
                <img src={searchColor} />
           </div>
           <div className={classes.notification}>
                <img src={notificationColor} />
           </div>
           {rightLink}
           
       </div>
   </div>
    )
}



export default Navbar;