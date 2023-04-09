import React, {Component, Fragment} from "react";
import classes from "./Register.module.css";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import {NavLink} from "react-router-dom"

class Register extends Component{
    state = {
        username:'',
        email:'',
        password:'',
    }

    componentDidMount(){
        this.props.initErrorMessage();  
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {username,email, password} = this.state;
        console.log(username, password);
        this.props.onSubmit(username,email,password);
    }

    closeNotificationHandler = (e) => {
        let messageContainer = document.querySelector("." + classes.NotificationContainer);
        let cross = document.querySelector("." + classes.cross);
        if(e.target == messageContainer || e.target == cross){
            messageContainer.classList.remove(classes.Active);
            this.props.initErrorMessage();
        }
    }

    render(){

        if(this.props.message || this.props.error){
            let messageContainer = document.querySelector("." + classes.NotificationContainer);
            messageContainer.classList.add(classes.Active);
        }
        return (
            <Fragment>
           
                     <div onClick={this.closeNotificationHandler} className={classes.NotificationContainer}>
                          <span className={"fa fa-times " + classes.cross}></span>
                          {this.props.error ? (
                               <div className={classes.error}>
                               {this.props.error ? this.props.error.map((error,index) => {
                                 return (
                                     <div key={index} >
                                         {error}
                                     </div>
                                 )
                             }) :null}
                             
                          </div>
                          ):null}
                          {this.props.message ? (
                               <div className={classes.Notification}>
                                    {this.props.message}
                                </div>
                          ):null}
                         
                     </div>
                       
           

                

                <div className={classes.FormContainer}>
                    <div className={classes.Heading}>
                        Register!
                    </div>
                <form className="" onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}  className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" className={"btn " + classes.Button}>Submit</button>
                    <div className="form-group mt-2">
                       Already have an account ? <NavLink to="login">Login</NavLink>
                    </div>
                </form>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        message:state.auth.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit:(username,email,password) =>  dispatch(actionCreators.authRegister(username,email,password)),
        initErrorMessage:() => dispatch(actionCreators.initErrorMessage())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
