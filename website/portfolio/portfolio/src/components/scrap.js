// import { useEffect, useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     if (window.scrollY > 50) {
// //       setScrolled(true);
// //     } else {
// //       setScrolled(false);
// //     }

// //     window.addEventListener("scroll", onscroll);
// //     return () => window.removeEventListener("scroll", onscroll);
// //   }, []);

// useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
  
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={logo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <span className="navabar-toggler-icon"> </span>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               href="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbr-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               href="#projects"
//               className={
//                 activeLink === "projects" ? "active navbar-link" : "navabar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#">
//               <img src={navIcon1} alt="no " />
//               </a>
//               <a href="#">
//                 <img src={navIcon2} alt="no " />
//               </a>
//               <a href="#">
//                 <img src={navIcon3} alt="no" />
//               </a>
//             </div>
//             <button className="vvd" onClick={() => console.log("connect")}>
//               <span>Lets connect</span>{" "}
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


// <!-- <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M187.639 69.9021C193.092 67.8586 199.226 70.6143 200.696 76.2484C206.238 97.4863 204.802 120.051 196.436 140.546C186.737 164.31 168.435 183.543 145.182 194.409C121.928 205.275 95.4333 206.975 70.9821 199.169C46.5309 191.364 25.9211 174.628 13.2642 152.299C0.607328 129.97 -3.16618 103.69 2.6965 78.7016C8.55918 53.7134 23.627 31.854 44.8941 17.4842C66.1612 3.11439 92.0641 -2.7094 117.435 1.17464C139.317 4.52444 159.415 14.8827 174.791 30.5466C178.869 34.702 178.083 41.3805 173.529 45.009C168.975 48.6374 162.385 47.8272 158.195 43.7832C146.212 32.2155 130.877 24.5642 114.244 22.0179C94.1181 18.9368 73.5701 23.5566 56.6994 34.9558C39.8288 46.355 27.8758 63.6955 23.2251 83.518C18.5744 103.34 21.5679 124.188 31.6082 141.901C41.6486 159.614 57.9979 172.89 77.3943 179.082C96.7908 185.274 117.809 183.925 136.255 175.305C154.701 166.686 169.219 151.429 176.914 132.578C183.273 116.999 184.584 99.9117 180.815 83.688C179.497 78.0164 182.187 71.9457 187.639 69.9021Z" fill="url(#paint0_linear_16_339)"/>
// <path d="M66.08 99.16C66.08 103.804 69.32 107.512 74.036 107.512C74.648 107.512 75.08 107.44 75.332 107.296L69.896 115H77.528L83.072 106.18C84.476 103.912 85.376 101.32 85.376 98.98C85.376 93.724 81.308 89.8 75.728 89.8C70.256 89.8 66.08 93.76 66.08 99.16ZM72.416 98.908C72.416 97.072 73.892 95.668 75.764 95.668C77.636 95.668 79.076 97.108 79.076 98.944C79.076 100.78 77.636 102.184 75.764 102.184C73.892 102.184 72.416 100.744 72.416 98.908ZM94.3971 104.92C94.9371 104.056 95.9811 103.372 97.3131 103.372C99.1491 103.372 100.481 104.668 100.481 106.432C100.481 108.196 99.1491 109.6 97.3131 109.6C95.4051 109.6 94.3611 108.34 94.2531 107.224H87.9171C88.0251 112.228 91.6971 115.504 97.4211 115.504C102.785 115.504 106.889 111.508 106.889 106.108C106.889 101.644 103.685 97.936 98.9691 97.936C97.4211 97.936 96.0531 98.332 94.8651 99.088L95.3331 95.92H105.161V90.304H90.3651L88.5291 103.696L94.3971 104.92ZM121.357 96.028C121.357 92.608 118.585 89.944 115.021 89.944C111.457 89.944 108.685 92.608 108.685 96.028C108.685 99.448 111.457 102.112 115.021 102.112C118.585 102.112 121.357 99.448 121.357 96.028ZM117.109 96.028C117.109 97.288 116.209 98.152 115.021 98.152C113.833 98.152 112.933 97.288 112.933 96.028C112.933 94.768 113.833 93.904 115.021 93.904C116.209 93.904 117.109 94.768 117.109 96.028ZM134.857 90.268H129.349L110.989 115H116.497L134.857 90.268ZM124.489 109.24C124.489 112.66 127.261 115.324 130.825 115.324C134.389 115.324 137.161 112.66 137.161 109.24C137.161 105.82 134.389 103.156 130.825 103.156C127.261 103.156 124.489 105.82 124.489 109.24ZM128.737 109.24C128.737 107.98 129.637 107.116 130.825 107.116C132.013 107.116 132.913 107.98 132.913 109.24C132.913 110.5 132.013 111.364 130.825 111.364C129.637 111.364 128.737 110.5 128.737 109.24Z" fill="white"/>
// <defs>
// <linearGradient id="paint0_linear_16_339" x1="-12.4348" y1="91.2145" x2="228.124" y2="92.098" gradientUnits="userSpaceOnUse">
// <stop stop-color="#AA367C"/>
// <stop offset="1" stop-color="#4A2FBD"/>
// </linearGradient>
// </defs>
// </svg> -->


<svg id="svg" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!--Background circle with a thick boundary -->
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="lightgray" stroke-width="20"></circle>

  <!-- Gradient definition -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D5006D;stop-opacity:1" /> <!-- Dark pink -->
      <stop offset="35%" style="stop-color:#9C27B0;stop-opacity:1" /> <!-- Purple -->
      <stop offset="70%" style="stop-color:#673AB7;stop-opacity:1" /> <!-- Dark purple -->
      <stop offset="100%" style="stop-color:#3F51B5;stop-opacity:1" /> <!-- Dark blue -->
    </linearGradient>
  </defs>

  <!-- Foreground circle showing 50% with gradient color -->
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="url(#gradient1)" stroke-width="20"
    stroke-dasharray="565.48" stroke-dashoffset="0"></circle>

  <!-- 50% Circle -->
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="url(#gradient1)" stroke-width="20"
    stroke-dasharray="565.48" stroke-dashoffset="282.74"></circle>
</svg>  

<!-- <svg id="svg" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="lightgray" stroke-width="20"></circle>

  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D5006D;stop-opacity:1" /> <!-- Dark pink -->
      <stop offset="35%" style="stop-color:#9C27B0;stop-opacity:1" /> <!-- Purple -->
      <stop offset="70%" style="stop-color:#673AB7;stop-opacity:1" /> <!-- Dark purple -->
      <stop offset="100%" style="stop-color:#3F51B5;stop-opacity:1" /> <!-- Dark blue -->
    </linearGradient>
  </defs>
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="url(#gradient1)" stroke-width="20"
    stroke-dasharray="565.48" stroke-dashoffset="282.74"></circle>
</svg>
 -->


 <!-- <svg id="svg" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle with a thinner boundary -->
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="lightgray" stroke-width="20"></circle>

  <!-- Gradient definition -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D5006D;stop-opacity:1" /> <!-- Dark pink -->
      <stop offset="35%" style="stop-color:#9C27B0;stop-opacity:1" /> <!-- Purple -->
      <stop offset="85%" style="stop-color:#673AB7;stop-opacity:1" /> <!-- Dark purple (increased area) -->
      <stop offset="100%" style="stop-color:#3F51B5;stop-opacity:1" /> <!-- Dark blue (decreased area) -->
    </linearGradient>
  </defs>

  <!-- Foreground circle showing 50% with adjusted RGB gradient and rounded ends -->
  <circle r="90" cx="100" cy="100" fill="transparent" stroke="url(#gradient1)" stroke-width="20"
    stroke-dasharray="565.48" stroke-dashoffset="282.74" stroke-linecap="round"></circle>

  <!-- Bold text for 50% inside the circle -->
  <text x="50%" y="50%" font-size="32" text-anchor="middle" alignment-baseline="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">50%</text>
</svg> -->

// project


    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>