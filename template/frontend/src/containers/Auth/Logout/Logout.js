import React, {Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import {Redirect} from "react-router-dom";

class Logout extends Component{
    
    componentDidMount(){
        this.props.authLogout();
    }

    render(){
        return (
            <Redirect to="/login" />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authLogout:() => dispatch(actionCreators.authLogout()),
    }
}
export default connect(null,mapDispatchToProps)(Logout);

