<template>
    <div class ="MainContainer">
        <!--Header and navbar code-->
        <head>
            <title>Personal Portfolio - Shaakier Railoun</title>
        </head>
        <div id="header">
        <div class="container">
            <!-- Navbar for regular screens -->
            <div class="navbar">
                <ul>
                <li><router-link to="/header" @click="scrollToSection('header')" class="link">Home</router-link></li>
                <li><router-link to="/about" @click="scrollToSection('about')" class="link">About</router-link></li>
                <li><router-link to="/portfolio" @click="scrollToSection('portfolio')" class="link">Projects</router-link></li>
                <li><router-link to="/contact" @click="scrollToSection('contact')" class="link">Contact</router-link></li>
                </ul>   
            </div>

            
             
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
                            <li><span>2023-2024</span><br>Internship at Capaciti</li>
                            <li><span>2024-current</span><br>Inernship at Younglings</li>
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
            <h1 class="sub-title">Projects</h1>
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
                    <img src="../assets/VirtualKeyboardV1Img2.png">
                    <div class="layer">
                        <h3>Virtual Keyboard V1</h3>   
                        <p>This is a prototype virtual keyboard that I have built using JavaScript.</p>
                        <a href="https://virtualkeyboardv1.netlify.app"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Contact Me-->

    <div id="contact">
        <div class="container">
            <div class="row">
                <h1 class="sub-title">Contact Me</h1>
                <div class="contact-left"> 
                    <p><i class="fas fa-paper-plane"></i>shaakier.railoun115@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt"></i>064 752 5222</p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/shaakier-railoun-28902523b/"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <br>
                        <a href="https://github.com/shakes115?tab=repositories"><i class="fab fa-github"></i> Github</a>
                    </div>
                    <a href="/Shaakier Railoun CV.docx" download class="button btn2">Download CV</a>
                </div>
                <div class="contact-right"></div>
                <form :action="FORM_ENDPOINT" @submit="handleSubmit" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required v-model="name">
                    <input type="email" name="email" placeholder="Your Email" required v-model="email">
                    <textarea name="message" rows="6" placeholder="Your Message" v-model="message"></textarea>
                    <div class="g-recaptcha"></div>
                    <button id="submit" value="submit" type="submit" class="button btn2">Submit</button>
                </form>
                <span id="msg">{{ submitMessage }}</span>
            </div>
        </div>
    </div>
    </div>
    <router-view></router-view>
</template>

<!--Scripts-->
<script>
/*global grecaptcha */
import { projectFirestore } from '../firebase/config';


export default {
    name: 'HomeCard',
    data() {
    return {
        name:'',
        email:'',
        message:'',
        submitMessage:'',
        recaptchaToken:null,
        submitted:false,
        FORM_ENDPOINT: "https://public.herotofu.com/v1/136cffa0-ca57-11ee-a1c1-7755cb567bfd",
    };
  },
  methods:{
    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async handleSubmit() {
        try{
            //check reCAPTCHA response
            const recaptchaResponse = await grecaptcha.execute('6LeOrG8pAAAAAEMBCWRhTBazsilQD_jbP4CAoJLl', {action:'submit'});

            if (!recaptchaResponse){
                console.error('reCAPTCHA verification failed!');
                return;
            }
            let userMessage = {
            name: this.name,
            email: this.email,
            message: this.message,
            recaptchaResponse: recaptchaResponse,
            }
            projectFirestore.collection('userMessages').add(userMessage)
            

            //Clear textboxes after submission
            this.name = '';
            this.email = '';
            this.message = '';
            this.submitMessage = 'Message has been sent!';

            setTimeout(() => {
                this.submitted = true;
            }, 500);
        } catch(error){
            console.error('Error submitting form', error);
            this.submitMessage = 'Error submitting form. Please try again';
        }
        
            },
    
      
    },
    mounted(){
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LeOrG8pAAAAAEMBCWRhTBazsilQD_jbP4CAoJLl';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },
  };


</script>

 
<style scoped>
/*General styling for the whole webpage*/ 
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
 
@media only screen and (max-width: 600px) {
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    height: auto;
    z-index: 999;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: black;
    padding: 1rem;
  }

  .navbar ul {
    width: 100%;
    display: inline-block;
    flex-direction: row;
    align-items: center;
  }

  .navbar ul li {
    display: flex;
    list-style: none;
    margin: 0 0;
    text-align: center;
    
  }
.navbar ul li router-link{
    font-size: 15px;
}
}

@media only screen and (max-width: 991px) {
    .row{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
  .about-col-1{
    size: 50%;
  }
}


 /* CSS for the header and navbar on regular screens*/
#header{
    width: 100%;
    text-align: left;
    background-position: center;
}
.container{
    padding: 10px 10%;
}


.navbar{
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
    padding: 1rem;
}


.navbar ul li {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}
.navbar ul li i{
    color: #fff;
    display: inline-block;
    position: relative;
    
}
.navbar ul li::after{
    content: '';
    width: 0;
    height: 3px;
    background: #00ff5e;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}
.navbar ul li:hover{
    cursor: pointer;
}
.navbar ul li:hover::after{
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
    padding: 50px 0;
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
.contact-left h1{
    text-align: left;
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

</style>