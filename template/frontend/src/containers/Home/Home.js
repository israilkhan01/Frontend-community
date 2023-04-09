import React, {Component, Fragment} from "react";
import classes from "./Home.module.css";
import mainBg from "../../assets/img/mainbg.png";
import browser from "../../assets/img/browser.png";
import responsive from "../../assets/img/responsive.png";
import colors from "../../assets/img/colors.png";
import azhar from "../../assets/img/azhar_profile.jpeg";
import kaif from "../../assets/img/kaif.jpeg";
import shakti from "../../assets/img/shakti.jpg";
import navWhite from "../../assets/img/navWhite.png"
import gallerywhite from "../../assets/img/gallerywhite.png"
import fullpagewhite from "../../assets/img/fullpagewhite.png";


class Home extends Component{
    render(){
        return (
            <Fragment>
               
    <div className={classes.startBanner +  " p-5"}>
        <div className={classes.first + " pt-5"}>
            <div className="row no-gutters pt-5 mt-3">
                <div className={"col-12 " +  classes.heading}>
                    Why waste time in building common components?
                  </div>
                  <div className={"col-12 mt-4 mb-2 " + classes.subHeading}>
                    Use your time in being creative.
                    <br />
                    Create commonly used components using our website without wasting
                    much of your precious time. Dont want dull themed components?
                    Checkout our website!
                  </div>
                  <div className={"col-12 " +  classes.examples + " mt-4"}>
                    <a href="#">Explore</a>
                  </div>
            </div>
        </div>
        <div className={classes.second}>
            <img src={mainBg}/>
        </div>
    </div>


    <div className={classes.banner2}>
        <div className={"row no-gutters justify-content-center"}>
            <div className={classes.mainCol}>
                <div className={classes.bgTilted +  " one"}>
                    <div className={classes.innerBox}>

                    </div>
                </div>
                <div className={classes.wrapper1 + " " + classes.wrapper}>
                    <div className={classes.innerCircle}>
                        <img src={browser}/>
                    </div>
                </div>
                <div className={classes.description + " mt-5"}>
                    <div className={classes.heading}>
                        Cross Browser
                    </div>
                    <div className={classes.subHeading + " mt-2"}>
                        Browser friendly components for all your needs.
                    </div>
                </div>
            </div>
            <div className={classes.mainCol}>
                <div className={classes.bgTilted + " two"}>
                    <div className={classes.innerBox}>
                        
                    </div>
                </div>
                <div className={classes.wrapper2 +" " + classes.wrapper}>
                    <div className={classes.innerCircle}>
                        <img src={responsive}/>
                    </div>
                </div>
                <div className={classes.description + " mt-5"}>
                    <div className={classes.heading}>
                        Responsive
                    </div>
                    <div className={classes.subHeading + " mt-2"}>
                        Each component is made responsive for all screen devices.
                    </div>
                </div>
            </div>
            <div className={classes.mainCol}>
                <div className={classes.bgTilted + classes.three}>
                    <div className={classes.innerBox}>
                        
                    </div>
                </div>
                <div className={classes.wrapper3 +" " + classes.wrapper}>
                    <div className={classes.innerCircle}>
                        <img src={colors}/>
                    </div>
                </div>
                <div className={classes.description + " mt-5"}>
                    <div className={classes.heading}>
                        Color Customisable
                    </div>
                    <div className={classes.subHeading + " mt-2"}>
                        Change the colors of each component as per your specific design.
                    </div>
                </div>
            </div>

        </div>

    </div>



    <div className={classes.banner1 + " p-4 p-0 mt-5"}>
        <div className={"row w-100 h-100 no-gutters align-items-center"}>
           
            <div className={"col-4 offset-2"}>
                <div className={classes.colorContainer}>
                    <div className={classes.color1 + classes.color}> 
  
                    </div>
                    <div className={classes.color2 + classes.color}> 
  
                  </div>
                  <div className={classes.color3 +  classes.color}> 
  
                  </div>
                  <div className={classes.color4 +  classes.color}> 
  
                  </div>
                  <div className={classes.color5 + classes.color}> 
  
                  </div>
  
                </div>
              <div className={classes.outputContainer}>
                <iframe src="http://localhost:8012/media/admin2/templates/192/html/templateHtml.html"></iframe>
              </div>
            </div>
            
            <div className={"col-4 align-self-center mt-5 " +  classes.descriptionContainer}>
                
              <div className={classes.description + " p-4 pt-5 text-right mt-5"}>
  
                  <div className={classes.vertical1}>
  
                  </div>
                  <div className={classes.horizontal1}>
  
                  </div>
                  <div className={classes.horizontal2}>
  
                  </div>
  
                  <div className={classes.heading}>
                      Highly Color Customisable<br/>
                      Components!
                  </div>
                  <div className={classes.subHeading + " mt-3"}>
                      Just drag your cursor and select the color you want or specify the color value in any format!.
                  </div>
                  <div className={classes.examples + " mt-4"}>
                    <a href="#">Components</a>
                  </div>
              </div>
            </div>
      
        </div>
      </div>


      <div style={{marginBottom: "400px"}} className={classes.banner4 + " mt-5 p-5"}>
        <div className={classes.mainContainer}>
            <div className={classes.outputContainer}>
                <div onClick="openTemplate(1,'apple.html')" className={classes.first + " " +classes.template}>
                    <div className={classes.plane}>

                    </div>
                    <div className={classes.inclined}>

                    </div>
                    <div className={classes.imageBox}>
                        <img src={navWhite}/>
                    </div>
                    <div className={classes.content}>
                       
                        <div className={classes.title + " p-2"}>
                            <div className={classes.heading}>
                                <span className={classes.mainText}>Navigation Bar</span>
                            </div>
                            <div className={classes.subHeading + " mt-3"}>
                                Assalamwalaikum!! Here is a Navigation Bar i made last year for a Bangalore ...
                            </div>
                        </div>
                        <div className={classes.image}>
                            <div className={classes.imgContainer}>
                                <img src={azhar}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div onclick="openTemplate(2,'page3.html')" className={classes.second +" " + classes.template}>
                    <div className={classes.plane}>

                    </div>
                    <div className={classes.inclined}>
                        
                    </div>
                    <div className={classes.imageBox}>
                        <img src={gallerywhite}/>
                    </div>
                    <div className={classes.content}>
                        
                        <div className={classes.title + " p-2"}>
                            <div className={classes.heading}>
                                <span className={classes.mainText}>
                                    Gallery
                                </span>

                            </div>
                            <div className={classes.subHeading + " mt-3"}>
                                Assalamwalaikum!! Here is a Navigation Bar i made last year for a Bangalore ...
                            </div>
                        </div>
                        <div className={classes.image}>
                            <div className={classes.imgContainer}>
                                <img src={shakti}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div  onclick="openTemplate(3,'oneFixedSample.html')"
                   className={classes.third + " " + classes.template}>
                    <div className={classes.plane}>

                    </div>
                    <div className={classes.inclined}>
                        
                    </div>
                    <div className={classes.imageBox}>
                        <img src={fullpagewhite}/>
                    </div>
                    <div className={classes.content}>

                        <div className={classes.title + " p-2"}>
                            <div className={classes.heading}>
                                <span className={classes.mainText}>
                                    Full Page
                                </span>
                            </div>
                            <div className={classes.subHeading + " mt-3"}>
                                Assalamwalaikum!! Here is a Navigation Bar i made last year for a Bangalore ...
                            </div>
                        </div>
                        <div className={classes.image}>
                            <div className={classes.imgContainer}>
                                <img src={kaif}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div onclick="openTemplate(4,'sidebarnav.html')"
                   className={classes.fourth +" " + classes.template}>
                    <div className={classes.plane}>

                    </div>
                    <div className={classes.inclined}>
                        
                    </div>
                    <div className={classes.imageBox}>
                        <img src={navWhite}/>
                    </div>
                    <div className={classes.content}>
                       
                        <div className={classes.title + " p-2"}>
                            <div className={classes.heading}>
                                <span className={classes.mainText}>
                                    Navigation Bar
                                </span>
                            </div>
                            <div className={classes.subHeading + " mt-3"}>
                                Assalamwalaikum!! Here is a Navigation Bar i made last year for a Bangalore ...
                            </div>
                        </div>
                        <div className={classes.image}>
                            <div className={classes.imgContainer}>
                                <img src={azhar}/>
                            </div>

                            
                        </div>
                    </div>
                </div>
                

                <div className={classes.innerContainer}>
                    <div className={classes.backCircle}>

                    </div>
                    <div className={classes.superText}>
                        <iframe src="apple.html"></iframe>
                        <div className={classes.textContainer}>
                            <div className={classes.heading}>
                                Top Rated Templates!
                            </div>
                            <div className={classes.subHeading + " mt-3"}>
                                Be a Part of our Template Community.<br/>
                                Sign Up to explore templates and contribute.
                            </div>
                            <div className={classes.tagLine + " mt-3"}>
                                Tagline
                            </div>
                            <div className={classes.link + " mt-5"}>
                                <a href="#">Sign Up</a>
                            </div>
                        </div>    
                    </div>
                </div>       
            </div>
        </div>
    </div>

              
            </Fragment>
        )
    }
}

export default Home;