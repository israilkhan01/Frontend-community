import axios from "axios";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import classes from "./Code2.module.css";
import * as actionTypes from "../../store/actions/actionTypes";
import Picker from "vanilla-picker";
import Color from "color-conversion";
import Loader from "../../components/UI/Loader/Loader";
import Code from "./Snippet/Snippet";
import * as actionCreators from "../../store/actions/index";
import feed from "../../assets/img/feed.png";
import back from "../../assets/img/back.png";
import expand from "../../assets/img/expand.png";
import { useHistory } from 'react-router-dom';


const classNamesOfColors = [classes.color1, classes.color2, classes.color3, classes.color4, classes.color5, classes.color6, classes.color7, classes.color8, classes.color9, classes.color10, classes.color11, classes.color12, classes.color13, classes.color14, classes.color15, classes.color16, classes.color17, classes.color18]
class CodeSample extends React.Component {


    componentDidMount() {
        /*add js file*/
        /*end*/
        console.log("***")
        this.props.setDetail();
        document.getElementsByTagName("body")[0].style.marginTop = "0px";
        const { id } = this.props.match.params;
        const template = null;
        console.log(this.props.templates);
        this.props.getTemplate(id);

        this.resizeCode = document.querySelector("." + classes.resizeCode);
        this.codeContainer = document.querySelector("." + classes.codeContainer);
        this.visualContainer = document.querySelector("." + classes.visualContainer);
        this.iframe = this.visualContainer.querySelector("iframe");
        this.widthCodeAndVisualContainer = parseFloat(window.getComputedStyle(document.querySelector("." + classes.codeAndVisualContainer)).width);
        console.log(this.resizeCode,this.codeContainer,this.visualContainer)
        console.log("--",this.widthCodeAndVisualContainer);
        this.x=0;
        this.w=0;

        this.heightCodeContainer = parseInt(window.getComputedStyle(this.codeContainer).height);
        this.minCodeHeight = 46;
        this.maxCodeHeight = this.heightCodeContainer - 46 - 46 - 20;

        console.log(this.resizeCode, "--------")
        this.resizeColor = document.querySelector("." + classes.resizeColors);
        this.colorChange = document.querySelector("." + classes.colorChange);
        this.codeVisualContainer = document.querySelector("." + classes.codeAndVisualContainer);
        this.posColor = 0;
        this.heightColor = 0;

        this.htmlResize = document.querySelector("." + classes.resizeHtml);
        this.cssResize = document.querySelector("." + classes.resizeCss);
        this.htmlCode = document.querySelector("." + classes.htmlCode);
        this.cssCode = document.querySelector("." + classes.cssCode);
        this.jsCode = document.querySelector("." + classes.jsCode);


        this.posHtml = 0;
        this.heightHtml = 0;

        this.direction = true;
        this.previous = 0;

        this.allCodes = this.codeContainer.querySelectorAll("." + classes.code);

        console.log(window.innerHeight,"**")

        this.posCss = 0;
        this.heightJs = 0;


        this.toggleTopNav = document.querySelector("." + classes.toggleTopNav);

        this.compress = this.toggleTopNav.querySelector("." + classes.compress);
        this.expand = this.toggleTopNav.querySelector("." + classes.expand);

    }

    componentWillUnmount() {
        this.props.unsetDetail();
        document.getElementsByTagName("body")[0].style.marginTop = "70px";
        this.props.removeCSSJS();
        console.log("unmount");
    }


    colorResizeMoveHandler(){

    }

    htmlResizeMoveHandler(){

    }

    cssResizeMoveHandler(){
        
    }

    mouseUpHandler = () => {
        console.log("mouseup")
        this.iframe.style.pointerEvents = "visible";
        document.removeEventListener('mousemove', this.mousemoveHandler);
        document.removeEventListener("mousemove",this.colorResizeMoveHandler);
        document.removeEventListener("mousemove",this.htmlResizeMoveHandler);
        document.removeEventListener("mousemove",this.cssResizeMoveHandler);
        document.removeEventListener('mouseup', this.mouseUpHandler);
    }

    mousemoveHandler = (e) => {
        const dx = e.clientX - this.x;
        console.log("width",this.w+dx);
        console.log("resizing");
        
        if(this.widthCodeAndVisualContainer - this.w - dx - 10 <= 0){
            this.codeContainer.style.width = `${this.widthCodeAndVisualContainer}px`;
            this.visualContainer.style.width = `0px`;
            console.log("1")
        }
        else if(this.w+dx <= 0){
            this.codeContainer.style.width = `0px`;
            this.visualContainer.style.width = `${this.widthCodeAndVisualContainer}px`;
            console.log("2")
        }
        else{
            this.visualContainer.style.width = `${this.widthCodeAndVisualContainer - this.w - dx - 10}px`;
            this.codeContainer.style.width = `${this.w + dx}px`;
            console.log("3");
        }
       console.log("hhh",this.codeContainer.style.width);
    }

    resizeCodeMouseDownHandler = (e) => {
        e.preventDefault()
        console.log("down")
        this.iframe.style.pointerEvents = "none";
        this.x = e.clientX;
        const styles = window.getComputedStyle(this.codeContainer);
        this.w = parseFloat(styles.width);
        console.log(this.w);
        document.addEventListener("mousemove",this.mousemoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);
    }

    setActiveOnCode(){
        for(let i=0;i<this.allCodes.length;i++){
            this.allCodes[i].classList.add("active");
            console.log("sfd")
        }
    }
    
    removeActiveOnCode(){
        for(let i=0;i<this.allCodes.length;i++){
            this.allCodes[i].classList.remove("active");
            console.log("sfd")
        }
    }
    

    colorResizeMoveHandler = (e) => {
        const dy = e.clientY - this.posColor;
        console.log(dy);
        console.log("llll",this.heightColor + dy)
        if(this.heightColor + dy <= 0){
            this.codeVisualContainer.style.height = `${window.innerHeight - 10}px`;    
            this.colorChange.style.height = `0px`;
            this.colorChange.style.paddingBottom = "0px";
        }
        else if(window.innerHeight - this.heightColor - dy - 10 <= 164.07){
            this.codeVisualContainer.style.height = `${164.07}px`;    
            this.colorChange.style.height = `${window.innerHeight - 164.07 - 10}px`;
            this.colorChange.style.paddingBottom = "15px";
        }
        else{
            this.codeVisualContainer.style.height = `${window.innerHeight - this.heightColor - dy - 10}px`;    
            this.colorChange.style.height = `${this.heightColor + dy}px`;
            this.colorChange.style.paddingBottom = "15px";
        }   
    }

    resizeColorsMouseDownHandler = (e) => {
        e.preventDefault()
        let codes = this.codeContainer.querySelectorAll("." + classes.code);
        this.setActiveOnCode();
        setTimeout(() => {
            for(let i=0;i<codes.length;i++){
                console.log("hellllll")
                codes[i].style.height = 'calc((100% - 10px - 10px) / 3)';
            }
        },100);
    
        setTimeout(() => {
            this.removeActiveOnCode();
        },400);
    
        
        this.iframe.style.pointerEvents = "none";
        this.posColor = e.clientY;
        const styles = window.getComputedStyle(this.colorChange);
        this.heightColor = parseFloat(styles.height);
        console.log(this.heightColor);
        document.addEventListener("mousemove",this.colorResizeMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);    
    }

    htmlResizeMoveHandler = (e) => {
        let styles;
        const dy = e.clientY - this.posHtml;
        console.log("dy",dy);
    
        this.heightCodeContainer = parseInt(window.getComputedStyle(this.codeContainer).height)
    
        if(dy > this.previous){
            this.direction = true
        }
        else if(dy < this.previous){
            this.direction = false;
        }
    
        console.log(this.direction)
    
        this.previous = dy;
    
        if(this.direction){
    
            if(this.heightHtml + dy <= this.maxCodeHeight){
                console.log("shhh")
                if(this.heightHtml + dy >= this.minCodeHeight){
                    this.htmlCode.style.height = `${this.heightHtml + dy}px`;
                }
        
                styles = window.getComputedStyle(this.jsCode);
                let jsh = parseFloat(styles.height)
                console.log(jsh)
                styles = window.getComputedStyle(this.htmlCode);
                let html = parseFloat(styles.height)
    
                if(this.heightCodeContainer - html - jsh - 20 >= this.minCodeHeight){
                    this.cssCode.style.height = `${this.heightCodeContainer - html - jsh - 20}px`;
                }
                else{
                    console.log("lawda")
                    this.cssCode.style.height = `46px`;
                }
                if(this.cssCode.clientHeight == 46 && (this.heightCodeContainer - html - 46 - 20) >= this.minCodeHeight){
                    console.log("lalala")
                    this.jsCode.style.height = `${this.heightCodeContainer - html - 46 - 20}px`;
                }
                else if(this.cssCode.clientHeight == 46){
                    console.log("tatata")
                    this.jsCode.style.height = `46px`;
                }
            }
            else{
                this.htmlCode.style.height = `${this.maxCodeHeight}px`
                this.cssCode.style.height = `46px`;
                this.jsCode.style.height = `46px`;
            }
           
        }   
        else{
            console.log("neg")
            if(this.heightHtml + dy >= this.minCodeHeight && this.heightHtml + dy <= this.maxCodeHeight){
                console.log("kkk")
                if(this.heightHtml + dy >= this.minCodeHeight){
                    this.htmlCode.style.height = `${this.heightHtml + dy}px`;
                }
                styles = window.getComputedStyle(this.jsCode);
                let jsh = parseFloat(styles.height)
                styles = window.getComputedStyle(this.htmlCode);
                let html = parseFloat(styles.height)
    
                console.log(jsh)
                if(this.heightCodeContainer - html - jsh - 20 >= this.minCodeHeight){
                    this.cssCode.style.height = `${this.heightCodeContainer - html - jsh - 20}px`;
                }
    
            }
            else if(this.heightHtml + dy <= this.maxCodeHeight){
                console.log("tata")
                this.htmlCode.style.height = `46px`;
                styles = window.getComputedStyle(this.jsCode);
                let jsh = parseFloat(styles.height)
                console.log(jsh)
                this.cssCode.style.height = `${this.heightCodeContainer - jsh - 46 - 20}px`
            }
        }
        
    }

    htmlResizeMouseDownHandler = (e) => {
        console.log(window);
        let styles;
        e.preventDefault()
        this.posHtml = e.clientY;
        console.log("De")
        styles = window.getComputedStyle(this.htmlCode);
        this.heightHtml = parseFloat(styles.height);
        styles = window.getComputedStyle(this.cssCode);
        this.heightCss = parseFloat(styles.height);
        styles = window.getComputedStyle(this.jsCode);
        this.heightJs = parseFloat(styles.height);
        console.log(this.heightJs)
        document.addEventListener("mousemove",this.htmlResizeMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);
    }

    cssResizeMoveHandler = (e) => {
        let styles;
        const dy = e.clientY - this.posCss;
        console.log(dy);
        this.heightCodeContainer = parseInt(window.getComputedStyle(this.codeContainer).height)
        
        if(dy > this.previous){
            this.direction = true
        }
        else if(dy < this.previous){
            this.direction = false;
        }
        console.log(this.direction)
    
        this.previous = dy;
    
        if(!this.direction){
            if(this.heightJs - dy <= this.maxCodeHeight){
                console.log("shhh")
                if(this.heightJs - dy >= this.minCodeHeight){
                    this.jsCode.style.height = `${this.heightJs - dy}px`;
                }
               
                styles = window.getComputedStyle(this.htmlCode);
                let html = parseFloat(styles.height)
               
                styles = window.getComputedStyle(this.jsCode);
                let jsh = parseFloat(styles.height)
    
                if(this.heightCodeContainer - jsh - html - 20 >= this.minCodeHeight){
                    this.cssCode.style.height = `${this.heightCodeContainer - jsh - html - 20}px`;
                }
                else{
                    console.log("lawda")
                    this.cssCode.style.height = `46px`;
                }
                if(this.cssCode.clientHeight == 46 && (this.heightCodeContainer - jsh - 46 - 20) >= this.minCodeHeight){
                    console.log("lalala")
                    this.htmlCode.style.height = `${this.heightCodeContainer - jsh - 46 - 20}px`;
                }
                else if(this.cssCode.clientHeight == 46){
                    console.log("tatata")
                    this.htmlCode.style.height = `46px`;
                }
            }
            else{
                this.jsCode.style.height = `${this.maxCodeHeight}px`
                this.cssCode.style.height = `46px`;
                this.htmlCode.style.height = `46px`;
            }
           
        }   
        else{
            console.log("neg")
            if(this.heightJs - dy >= this.minCodeHeight && this.heightJs - dy <= this.maxCodeHeight){
                console.log("kkk")
                if(this.heightJs - dy >= this.minCodeHeight){
                    this.jsCode.style.height = `${this.heightJs - dy}px`;
                }
                styles = window.getComputedStyle(this.htmlCode);
                let html = parseFloat(styles.height)
                styles = window.getComputedStyle(this.jsCode);
                let jsh = parseFloat(styles.height)
    
                console.log(jsh)
                if(this.heightCodeContainer - jsh - html - 20 >= this.minCodeHeight){
                    this.cssCode.style.height = `${this.heightCodeContainer - jsh - html - 20}px`;
                }
            }
            else if(this.heightJs - dy <= this.maxCodeHeight){
                console.log("tata")
                this.jsCode.style.height = `46px`;
                styles = window.getComputedStyle(this.htmlCode);
                let html = parseFloat(styles.height)
                console.log(html)
                this.cssCode.style.height = `${this.heightCodeContainer - html - 46 - 20}px`
            }
        }
    }

    cssResizeMouseDownHandler = (e) => {
        let styles;
        e.preventDefault()
        this.posCss = e.clientY;
        styles = window.getComputedStyle(this.jsCode);
        this.heightJs = parseInt(styles.height);
        styles = window.getComputedStyle(this.cssCode);
        this.heightCss = parseFloat(styles.height);
        styles = window.getComputedStyle(this.htmlCode);
        this.heightHtml = parseFloat(styles.height);
    
        document.addEventListener("mousemove",this.cssResizeMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);
    }

    htmlButtonClickListener = () => {
        this.setActiveOnCode();
        setTimeout(() => {
            this.heightCodeContainer = parseFloat(window.getComputedStyle(this.codeContainer).height)
            this.cssCode.style.height = '46px';
            this.jsCode.style.height = '46px';
            this.htmlCode.style.height = `${this.heightCodeContainer - 46 - 46 - 20}px`;
        },100);
        setTimeout(() => {
            this.removeActiveOnCode();
        },400);
    }

    cssButtonClickListener = () => {
        this.setActiveOnCode();
        setTimeout(() => {
            this.heightCodeContainer = parseFloat(window.getComputedStyle(this.codeContainer).height)
            this.htmlCode.style.height = '46px';
            this.jsCode.style.height = '46px';
            this.cssCode.style.height = `${this.heightCodeContainer - 46 - 46 - 20}px`;
        },100)
       
        setTimeout(() => {
            this.removeActiveOnCode();
         },400);
    }

    jsButtonClickListener = () => {
        this.setActiveOnCode();
        setTimeout(() => {
            this.heightCodeContainer = parseFloat(window.getComputedStyle(this.codeContainer).height)
            this.cssCode.style.height = '46px';
            this.htmlCode.style.height = '46px';
            this.jsCode.style.height = `${this.heightCodeContainer - 46 - 46 - 20}px`;
        },100);
        
        setTimeout(() => {
            this.removeActiveOnCode();
         },400);
    }

    toggleTopClickListener = () => {
        this.colorChange.classList.add("active");
        this.codeContainer.classList.add("active");
    
        setTimeout(() => {
            if(this.toggleTopNav.classList.contains("active")){
                this.codeVisualContainer.style.height = `${window.innerHeight - 10 - 70}px`;
                this.colorChange.style.height = '70px';
                this.colorChange.style.paddingBottom = '15px';
                this.codeContainer.style.width = '30%';
                this.visualContainer.style.width = 'calc(100% - 30% - 10px)';
                this.toggleTopNav.classList.remove("active");
                this.compress.style.display = "none";
                this.expand.style.display="inline-block";
            }
            else{
                this.codeVisualContainer.style.height = `${window.innerHeight - 10}px`;
                this.colorChange.style.height = '0px';
                this.colorChange.style.paddingBottom = '0px';
                this.codeContainer.style.width = '0px';
                this.visualContainer.style.width = `${window.innerWidth - 10}px`;
                this.toggleTopNav.classList.add("active");
                this.expand.style.display = "none";
                this.compress.style.display="inline-block";
            }
        },100);
    
        setTimeout(() => {
            this.colorChange.classList.remove("active");
            this.codeContainer.classList.remove("active");
        },400);
       
        
    }

    copyHandler = (id) => {
        console.log("df")
        let temp = document.createElement("input");
        document.documentElement.appendChild(temp);
        if (id == 1) {
            temp.value = this.props.htmlContent;
        }
        else if (id == 2) {
            temp.value = this.props.cssRootContent + this.props.cssExtraContent;
        }
        else {
            temp.value = this.props.jsContent;
        }

        temp.select();
        document.execCommand("copy");
        document.documentElement.removeChild(temp);
    }



    render() {

        let once = true
        let template = null;
        if (this.props.template) {
            template = (
                <div>

                    <div className={classes.Type}>

                        <span>
                            {this.props.template.template_type}
                        </span>
                    </div>
                </div>
            )
        }
        if (this.props.colors) {
            console.log(classNamesOfColors.slice(0, 4));
        }

        if(this.props.htmlContent){
            this.iframe.classList.add(classes.active);
        }




        return (
            /*
            <Fragment>
                {template}

                
                <div className={classes.colorChange}>
                    {this.props.colors ? (
                      
                        [...this.props.colors].map((_, index) => {
                            let name = "var(--color_" + (index + 1) + ")";
                   
                            return (
                                <div style={{ backgroundColor: name }} class={"color_vatiable"}>
                                </div>
                            )
                        })
                    ) : null}
                </div>

                <div class={classes.visual}>
                    {this.props.loading ? (
                        <div style={{ height: '100%' }}>
                            <Loader />
                        </div>
                    ) : this.props.htmlContent ? (

                        <iframe id="frame" name="myframe" width="100%" height="100%" src={"http://localhost:8002" + this.props.htmlUrl}></iframe>
                    ) : null}
                </div>

                <Code />


            </Fragment>
            */
           <Fragment>
               <div className={classes.mainContainer}>
    <div className={classes.colorChange}>
        <Link to="/templates">
            <div className={classes.backButton}>
                <img src={back}/>
            </div>
        </Link>
     
    {/*
      <div className={classes.downloadZip}>
          <div className={classes.help}>
              Download Zip
          </div>
          <img src={expand}/>
      </div>
    */}
      <div className={classes.variable + classes.color21}>
      </div>
      {this.props.colors ? (
            /*slice(0,this.props.colors)*/
            [...this.props.colors].map((_, index) => {
                let name = "var(--color_" + (index + 1) + ")";
                //console.log(name);
                return (
                    <div style={{ backgroundColor: name }} class={"color_vatiable " + classes.variable}>
                    </div>
                )
            })
        ) : null}


  </div>

  <div className={classes.resizeColors} onMouseDown={this.resizeColorsMouseDownHandler}>

  </div>

  <div className={classes.codeAndVisualContainer}>

    <div className={classes.toggleTopNav} onClick={this.toggleTopClickListener}>
      <div>
        <span className={classes.expand  + " fa fa-expand-alt"}></span>
        <span className={classes.compress + " fa fa-compress-alt"}></span>
      </div>
    </div>




    <div className={classes.codeContainer}>
           <div className={classes.htmlCode + " " + classes.code}>
               <div className={classes.heading}>
                   <div className={classes.downloadFile}>
                       
                   </div>
                   <div id="html" onClick={this.htmlButtonClickListener} className={classes.name}>
                       HTML
                   </div>
                   <div onClick={this.copyHandler.bind(this, 1)} className={classes.copyFile}>
                       <img src={expand}/>
                   </div>
               </div>
               <div className={classes.snippet}>
                    {this.props.loading ? (
                        <div className={classes.loadWrapper}>
                            <Loader />
                        </div>
                    ) : this.props.htmlContent ? (
                            <SyntaxHighlighter language="html" style={theme}>
                                {this.props.htmlContent}
                            </SyntaxHighlighter>
                    ) : null
                    }
                        
               </div>
   
           </div>
           <div className={classes.resize + " " + classes.resizeHtml} onMouseDown={this.htmlResizeMouseDownHandler}>
   
           </div>
           <div className={classes.cssCode + " " + classes.code}>
               <div className={classes.heading}>
                   <div className={classes.downloadFile}>
              
                   </div>
                   <div id="css" onClick={this.cssButtonClickListener} className={classes.name}>
                       CSS
                   </div>
                   <div onClick={this.copyHandler.bind(this, 2)} className={classes.copyFile}>
                       <img src={expand}/>
                   </div>
               </div>
               <div className={classes.snippet}>
                    {this.props.loading ? (
                        <div className={classes.loadWrapper}>
                            <Loader />
                        </div>
                    ) : this.props.cssRootContent ? (
                        <React.Fragment>                
                                <SyntaxHighlighter language="css" style={theme}>
                                    {this.props.cssRootContent}

                                </SyntaxHighlighter>
                                <SyntaxHighlighter language="css" style={theme}>
                                    {this.props.cssExtraContent}
                                </SyntaxHighlighter>

                        </React.Fragment>

                    ) : null
                    }
               </div>
   
   
           </div>
           <div className={classes.resize + " " + classes.resizeCss} onMouseDown={this.cssResizeMouseDownHandler}>
   
           </div>
 
           <div className={classes.jsCode + " " +  classes.code}>
               <div className={classes.heading}>
                   <div className={classes.downloadFile}>
          
                   </div>
                   <div id="js" onClick={this.jsButtonClickListener} className={classes.name}>
                       JS
                   </div>
                   <div onClick={this.copyHandler.bind(this, 3)} className={classes.copyFile}>
                       <img src={expand}/>
                   </div>
               </div>
               <div className={classes.snippet}>
                        {this.props.loading ? (
                                <div className={classes.loadWrapper}>
                                    <Loader />
                                </div>
                            ) : this.props.jsContent ? (                       
                                    <SyntaxHighlighter language="js" style={theme}>
                                        {this.props.jsContent}
                                    </SyntaxHighlighter>
                            ) : null
                        }
               </div>
           </div>
       </div>


      <div className={classes.resizeCode} onMouseDown={this.resizeCodeMouseDownHandler}>
      </div>

      <div className={classes.visualContainer}>
        <iframe id="frame" name="myframe" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; vr"
                 className={classes.iframe} width="100%" height="100%" src={"http://localhost:8012" + this.props.htmlUrl}  ></iframe>
          
      </div>
  </div>
    

  </div>
           </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        templates: state.templates.templates,
        htmlContent: state.code.htmlContent,
        template: state.code.template,
        loading: state.code.loading,
        colors: state.code.colors,
        htmlUrl: state.code.htmlUrl,
        cssRootContent: state.code.cssRootContent,
        cssExtraContent: state.code.cssExtraContent,
        jsContent: state.code.jsContent
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setDetail: () => dispatch({
            type: actionTypes.SET_DETAIL
        }),
        unsetDetail: () => dispatch({
            type: actionTypes.UNSET_DETAIL
        }),
        getTemplate: (id) => dispatch(actionCreators.getTemplate(id)),
        removeCSSJS: () => dispatch(actionCreators.removeCSSJS()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeSample);