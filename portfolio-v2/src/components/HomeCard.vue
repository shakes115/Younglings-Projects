<template>
    <div class ="MainContainer">
        <!--Header and navbar code-->
        <head>
            <title>Personal Portfolio - Shaakier Railoun</title>
        </head>
        <div id="header">
        <div class="container">
            <nav>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fas fa-times" onclick="closemenu()"></i>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
            </nav>
            
            <div class="header-text">
                <p>Software Developer</p>
                <h1><span>Hello, I'm Shaakier<br>Railoun from South Africa.</span></h1>
            </div>
        </div>
    </div>
<br>
    <!--About section-->

    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <picture><img src="../assets/Graduation picture.jpg"></picture>
                </div>
                
                <div class="about-col-2">
                    <h1 class="sub-title">About Me</h1>
                    <p>I'm Shaakier Railoun, a software developer from South Africa. I chose to become a software developer 
                    because I'm passionate about coding, and I consider it to be my strongest skill.
                    I graduated from Varsity College with a Bachelor's degree in Application Development and I am 
                    currently doing an internship at Younglings Africa to gain valuable work experience.</p>

                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>SQL Databases</span><br>Built databases using SQL Server</li>
                            <li><span>App Development</span><br>Building Desktop and Web Apps</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="experience">
                        <ul>
                            <li><span>2023-current</span><br>Internship at Capaciti</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2020-2022</span><br>Bachelor of Computer and Information Sciences in Application Development at Varsity College</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--My Work-->

    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title">My Work</h1>
            <div class="work-list">
                <div class="work">
                    <img src="../assets/CalculatorAppImg.png">
                    <div class="layer">
                        <h3>Calculator</h3>
                        <p>This is a simple calcuator app that I made using JavaScript.</p>
                        <a href="https://jstestcalculator.netlify.app"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="../assets/WeatherAppImg.png">
                    <div class="layer">
                        <h3>Weather App</h3>
                        <p>A weather app built using JavaScript that tells you the weather of the city that you type into the search bar.</p>
                        <a href="https://shaakier-weatherapp.netlify.app"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="../assets/VirtualKeyboardV1Img.png">
                    <div class="layer">
                        <h3>Virtual Keyboard V1</h3>   
                        <p>This is a prototype virtual keyboard that I have built using JavaScript.</p>
                        <a href="https://virtualkeyboardv1.netlify.app"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Contact-->

    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title" >Contact Me</h1>
                    <p><i class="fas fa-paper-plane"></i>shaakier.railoun115@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt"></i>064 752 5222</p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/shaakier-railoun-28902523b/"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <br>
                        <a href="https://github.com/shakes115?tab=repositories"><i class="fab fa-github"></i> Github</a>
                    </div>
                    <a href="../assets/Shaakier Railoun CV.docx" download class="button btn2">Download CV</a>
                </div>
                <div class="contact-right"></div>
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="Email" placeholder="Your Email" required>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="button btn2">Submit</button>
                </form>
                <span id="msg"></span>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    name: 'HomeCard',
}

</script>


<style scoped>
    .MainContainer{
        width: 100%;
        min-height: 100vh;
        background-color: black;
        display: flex;
        justify-content: center;
        flex-direction: column;
    
    }
    * {
    margin:0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    font-weight: 600;
}

 /* CSS for small screens*/
nav .fas{
    display: none;
}

@media only screen and (max-width: 600px){
    
    .header-text{
        margin-top: 100%;
        font-size: 16px;
    }
    .header-text h1{
        font-size: 30px;
    }
    nav .fas{
        display: block;
        font-size: 25px;
    }
    nav ul{
        background: #057a2f;
        position: fixed;
        top: 0;
        right: -200px;
        width: 200px;
        height: 100vh;
        padding-top: 50px;
        z-index: 2;
        transition: right 0.5s;
    }
    nav ul li{
        display: block;
        margin: 25px;
    }
    nav ul .fas{
        position: absolute;
        top: 25px;
        left: 25px;
        cursor: pointer;
    }
    .sub-title{
        font-size: 40px;
    }
    .about-col-1, .about-col-2{
        flex-basis: 100%;
    }
    .about-col-1{
        margin-bottom: 30px;
        height: 100%;
    }
    .about-col-2{
        font-size: 14px;
    }
    .tab-links{
        font-size: 16px;
        margin-right: 20px;
    }
    .contact-left, .contact-right{
        flex-basis: 100%;
    }
    
}
#msg{
    color: #00ff5e;
    margin-top: -10px;
    display: block;
}

 /* CSS for the header and navbar*/
#header{
    width: 100%;
    text-align: left;
    background-position: center;
}
.container{
    padding: 10px 10%;
}
.logo{
    width: 140px;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position:fixed;
    height: 70px;
    z-index: 999;
    width: 100%;
    top: 0;
    left:0;
    right: 0;
    background: black;

}
nav ul li{
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}

nav ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
}
nav ul li a::after{
    content: '';
    width: 0;
    height: 3px;
    background: #00ff5e;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}
nav ul li a:hover::after{
    width: 100%;
}
.header-text{
    margin-top: 20%;
    font-size: 30px;
}
.header-text h1{
    font-size: 60px;
    margin-top: 20px;
    font-weight: 600;
}
.header-text h1 span{
    color: white;
}

/*About section */
#about{
    padding: 80px 0;
    color: #ababab;
}
.row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
}

.about-col-1{
    flex-basis: 35%;
}
.about-col-1 img{
    width: 100%;
    border-radius: 15px;
}
.about-col-2{
    flex-basis: 60%;
}

.sub-title{
    font-size: 60px;
    font-weight: 600;
    color: #fff;
}

.tab-titles{
    display: flex;
    margin: 20px 0 40px;
}
.tab-links{
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}
.tab-links::after{
    content: '';
    width: 0;
    height: 3px;
    background: #00ff5e;
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: 0.5s;
}

.tab-links.active-link::after{
    width: 50%;
}

.tab-contents ul li{
    list-style: none;
    margin: 10px 0;
    text-align: left;
}
.tab-contents ul li span{
    color: #00ff5e;
    font-size: 14px;
}
.tab-contents{
    display: none;
}
.tab-contents.active-tab{
    display: block;
}

/* My Work */
#portfolio{
    padding: 50px 0;
}
.work-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
}
.work{
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
.work img{
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
}
.layer{
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0,0,0,0.6), #057a2f);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    font-size: 14px;
    transition: height 0.5s;
}
.layer h3{
    font-weight: 500;
    margin-bottom: 20px;
}
.layer a{
    margin-top: 20px;
    color: #00ff5e;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    background: black;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
}
.work:hover img{
    transform: scale(1.1);
}
.work:hover .layer{
    height: 100%;
}
.button{
    display: block;
    margin: 50px auto;
    width: fit-content;
    border: 1px solid #00ff5e;
    padding: 14px 50px;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    transition: background 0.5s;
}
.button:hover{
    background: #00ff5e;
}

/* Contact */
.contact-left{
    flex-basis: 35%;
}
.contact-right{
    flex-basis: 60%;
}
.contact-left p{
    margin-top: 30px;
     color: #00ff5e;
     text-align: left;
}
.contact-left p i{
    color: #00ff5e;
    margin: 15px;
    font-size: 25px;
}
.social-icons{
    margin-top: 30px;
    text-align: left;
}
.social-icons a{
    text-decoration: none;
    font-size: 30px;
    margin: 15px;
    color: #00ff5e;
    display: inline-block;
    transition: transform 0.5s;
}
.social-icons a:hover{
    color: #00ff5e;
    transform: translateY(-5px);
}
.button.btn2{
    display: inline-block;
    background: black;
   
}
.button.btn2:hover{
    background: #00ff5e;
}
.contact-right form{
    width: 100%;
}
form input, form textarea{
    width: 100%;
    border: 0;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 15px 0;
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
}
form .button.btn2{
    padding:14px 60px;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
}
.copyright{
    width: 100%;
    text-align: center;
    padding: 25px 0;
    background: #262626;
    font-weight: 300;
    margin-top: 20px;
}
.copyright i{
    color: #00ff5e;
}    
</style>