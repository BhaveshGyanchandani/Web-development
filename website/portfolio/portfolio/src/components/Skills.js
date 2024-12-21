import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/c-1.svg";
import meter3 from "../assets/img/c++.svg";
import meter4 from "../assets/img/java.svg";
import meter5 from "../assets/img/python.svg";
import meter6 from "../assets/img/javascript.svg";
import meter7 from "../assets/img/AWS.svg";
import meter8 from "../assets/img/html.svg";
import meter9 from "../assets/img/css.svg";
import meter10 from "../assets/img/nodejs.svg";
import meter11 from "../assets/img/express.svg";
import meter12 from "../assets/img/mongodb.svg";
import meter13 from "../assets/img/tailwind-css.svg";
import meter14 from "../assets/img/react.svg";
import meter15 from "../assets/img/mysql.svg";
import meter16 from "../assets/img/bootstrap.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>"I'm a computer science enthusiast with strong skills in Java, JavaScript, and Python. I specialize in problem-solving, algorithms, and web development with React, HTML, and CSS. I focus on writing efficient, maintainable code and continuously learning new technologies."</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C language</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C++ language</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>JAVA language</h5>
                            </div>

                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Python language</h5>
                            </div>

                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>AWS</h5>
                            </div>

                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>CSS</h5>
                            </div>

                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Javascript</h5>
                            </div>

                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>

                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>ExpressJS</h5>
                            </div>

                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>MySQL</h5>
                            </div>

                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>

                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}