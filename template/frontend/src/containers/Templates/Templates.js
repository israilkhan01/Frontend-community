import React, {Component, Fragment} from "react";
import classes from "./Templates.module.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Loading from "../../components/UI/Loader/Loader";
import Template from "./Template/Template";
import copy from "../../assets/img/copy.png";
import colors from "../../assets/img/colors.png";
import azhar_profile from "../../assets/img/azhar_profile.jpeg";



class Templates extends Component{

    state = {
        currentTemplates:null,
        all:true,
    }

    componentDidMount(){
        this.props.getTemplates();
        console.log("templates");
    }

    changeCategoryHandler = (e,type) => {

        console.log(e.target);
        let Item = e.target;
        let Items = document.querySelectorAll("." + classes.LeftSideBar + " ul li");
        console.log(Items)
        for(let i=0;i<Items.length;i++){
            Items[i].classList.remove(classes.active);
            console.log(Items[i]);
        }
        Item.classList.add(classes.active);
        this.setState({
            all:false,
            currentTemplates:this.props.templateTypes[type]
        })
    }

    clearAllHandler = (e) => {
        let clear = e.target;
        console.log(e);
        console.log(this);
        clear.style.backgroundColor = "var(--second)";
        let Items = document.querySelectorAll("." + classes.LeftSideBar + " ul li");
        console.log(Items)
        for(let i=0;i<Items.length;i++){
            Items[i].classList.remove(classes.active);
            console.log(Items[i]);
        }
        this.setState({
            all:true,
            currentTemplates:null
        })
        setTimeout(() => {
            clear.style.backgroundColor = "var(--first";
        },2000);
    }
    
    render(){

       
        return (
            /*
            <Fragment>  
                
                <div className={classes.LeftSideBar}>
                    <div className={classes.Heading}>
                        Types
                        <div className={classes.clearAll}>
                            Clear <span onClick={(e) => this.clearAllHandler(e)} className="fa fa-check"></span>
                        </div>
                    </div>
                    <ul>
                        {this.props.templateTypes ? (
                             Object.keys(this.props.templateTypes).map(type => {
                                 console.log("dfd");
                                return (
                                    <li onClick={(e) => this.changeCategoryHandler(e,type)}>{type}</li>
                                )
                            })
                           
                        ):null}
                       
                    </ul>
                </div>    
                <div className={classes.CenterBar}>
                            {!this.props.templates ? this.props.loading ? (
                                 <div style={{marginTop:'100px'}}>
                                    <Loading/>
                                </div>
                            ):null:null}
                            
                            {this.state.all ? this.props.templates ? (
                                                    <ul className={"list-group " + classes.template_list}>             
                                                    {this.props.templates.map(template => {
                                                        return <Template template={template}/>
                                                    })}
                                                    </ul>
                                    ):null
                                :null}
                            
                            {this.state.currentTemplates ? (
                                <ul className={"list-group " + classes.template_list}>             
                                {this.state.currentTemplates.map(template => {
                                    return <Template template={template}/>
                                })}
                                </ul>
                            ):null}
                </div>
                <div className={classes.RightSideBar}>
                    <div className={classes.Heading}>
                        Filters
                    </div>
                    <ul>
                        
                    </ul>
                </div>        
            </Fragment>
            */
           <Fragment>
                <div className={classes.listingContainer}>
       <div className={classes.leftBar}>
           <div className={classes.section}>
               <div className={classes.heading}>
                <img src={copy}/>Components
               </div>
               <ul className={classes.subItems}>

                     {this.props.templateTypes ? (
                             Object.keys(this.props.templateTypes).map(type => {
                                 console.log("dfd");
                                return (
                                    <li onClick={(e) => this.changeCategoryHandler(e,type)}>
                                    <div className={classes.wrapper}>
                                     {type}
                                    </div>
                                 </li>
                              )
                            })
                           
                        ):null}
               </ul>
           </div>

       </div>
       
       {this.state.currentTemplates ? (     
            <div className={classes.listings}>
                {this.state.currentTemplates.map(template => {
                    return <Template template={template}/>
                })}
             </div>
        ):null}

        {this.state.all ? this.props.templates ? (
             <div className={classes.listings}>         
            {this.props.templates.map(template => {
                return <Template template={template}/>
            })}
           </div>
            ):null
        :null}

       <div className={classes.rightBar}>
            <div className={classes.heading}>
                Filter
            </div>
            <div className={classes.tags}>
                <div className={classes.title}>
                        Tags
                </div>
                <div className={classes.content}>
                    <div className={classes.item}>
                        Gaming
                        <div className={classes.cross}>
                            <i className={"fal fa-times"}></i>
                        </div>
                    </div>
                    <div className={classes.item}>
                        Sleek
                        <div className={classes.cross}>
                            <i className={"fal fa-times"}></i>
                        </div>
                    </div>
                    <div className={classes.item}>
                        Clone
                        <div className={classes.cross}>
                            <i className={"fal fa-times"}></i>
                        </div>
                    </div>
                    <div className={classes.item}>
                        Youtube
                        <div className={classes.cross}>
                            <i className={"fal fa-times"}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rating}>
                <div className={classes.title}>
                    Rating
                </div>
                <div className={classes.content}>
                    <div className={classes.item}>
                        1 <i className={"fas fa-star"}></i>
                    </div>
                    <div className={classes.item}>
                        2 <i className={"fas fa-star"}></i>
                    </div>
                    <div className={classes.item}>
                        3 <i className={"fas fa-star"}></i>
                    </div>
                    <div className={classes.item}>
                        4 <i className={"fas fa-star"}></i>
                    </div>
                    <div className={classes.item}>
                        5 <i className={"fas fa-star"}></i>
                    </div>
                </div>
            </div>
       </div>
   </div>
           </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        templates:state.templates.templates,
        templateTypes:state.templates.templateTypes,
        loading:state.templates.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTemplates:() => dispatch(actionCreators.getTemplates()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Templates);