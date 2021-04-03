
<?php Header ("Content-type: text/css; charset=utf-8");?> 

 
html,body {
    margin: 0;
    padding: 0;
    font-family: 'Della Respira', serif;
}

* {
    box-sizing: border-box;
}
 
.nav-slideshow {
    position: relative;
    width: 100%;
    height: 100vh;
  
}

.nav-slideshow video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-div{
    display: none;
}

.video-text {
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    grid-auto-columns: auto auto auto;
    text-align: center;
    align-content: center;
    grid-row-gap: 60px;
}

.icons {
    color: white;
    font-size: 50px;
    cursor: pointer;
    
}

 .icons .prev-icon {
        padding: 10px;
    }

.nav-slideshow .video-text h1 {
    color: white;
    font-size: 55px;
    font-weight: bold;
 
}



.video-text h2 a {
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    border: 5px solid white;
    padding: 10px;
    transition: font-size 2s ;
}

.video-text h2 a:hover{
    
    font-size: 35px;
    

}

.logo {
    position: absolute;
    top: 20px;
    left: 30px;
    color: white;
   
}

.nav-links{

   display: flex;
   flex-direction: row;
   position: absolute;
   align-items: baseline;
   top:20px;
   right: 30px;
   color: white;
 
   
 
   
}

.nav-links .active{
    font-weight: bolder;

}

    .nav-links a {
        padding: 20px;
        text-decoration: none;
        cursor: pointer;
        color: white;
         
    }

.hamburg {
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 30px;
    display: none;
    cursor: pointer;
}

.hamburg .line{

    width: 30px;
    height: 4px;
    background-color: white;
    margin-top: 2px;

}

.hamburg .line1 {
        width: 25px;
        height: 4px;
        background-color: white;
        margin-top: 2px;
 
 }

.hamburg .line2 {
        width: 20px;
        height: 4px;
        background-color: white;
        margin-top: 2px;
}

.hamburg .line3 {
        width: 15px;
        height: 4px;
        background-color: white;
        margin-top: 2px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn{
    color: white;
    padding: 2px;
  
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(203,62,60,255);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    
}

.dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
}

.dropdown-content a:hover {
        background-color: #f1f1f1;
        color: black;
       
 }

.dropdown:hover .dropdown-content {
    display: block;
}



@media screen and (max-width: 800px) {

    .hamburg {
        display: block;
        z-index: 1;
    }

    .nav-links {
        display: none;
    }

    .nav-open .hamburg .line1, .nav-open .hamburg .line2 {
        display: none;
    }

    .nav-open .hamburg .line3 {
        position: absolute;
        width: 30px;
        transform: rotate(45deg);
        left: 28px;
    }

    .nav-open .hamburg .line {
        position: absolute;
        transform: rotate(-45deg);
        left: 28px;
    }

    .nav-open .sidebar {
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(203,62,60,255);
        width: 50%;
        height: 100%;
    }

        .nav-open .sidebar .hamburg {
            z-index: 1;
        }

        .nav-open .sidebar .nav-links {
            height: 100%;
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
        }


   .nav-open .sidebar .nav-links .dropbtn {
                color: white;
    }

    .nav-open .dropbtn {
        color: black;
    }

    .nav-open .dropdown-content {
        background-color: #f9f9f9;
    }

        .nav-open .dropdown-content a {
            color: black;
        }
}
 
.background-contactUs {
    background-image: url(../Image/contact.jpg);
    background-repeat: no-repeat;
    height: 500px;
    width: 100%;
    position: relative;
    opacity: 0.8;
}


.overlay {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.6;
}

.ContactUsInfo{
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

}

.ContactUsInfo p{
    width:  50%;
}


@media screen and (max-width: 800px) {

    .ContactUsInfo p {
        width: 80%;
    }
}

 

.contactUs{

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto; 
    justify-content: center;
    column-gap: 60px;
    padding: 80px 0;
    width: 100%;
}

.contactInfo{
    text-align: center;
}

.contactInfo h1{

margin-bottom: 58px;
}
 

.contactInfo .contact-item {
    display: flex;
    flex-direction: row;
    align-items: baseline;
   
     
}

.contact-item h2{
    padding-left: 20px;
    
}

.contact-item i {
    font-size: 25px;
  color: rgba(203,62,60,255);
 
}

@media screen and (max-width: 800px) {

.contactInfo h1{

margin-bottom: 5px;
}

}

form{
    display:grid;
    grid-template-columns: auto; 
    grid-gap: 20px;
    width: 500px;
  
}

.form-inputs {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-column-gap: 30px;
}

form input{
 border-radius: 5px;
 width: 100%;
 height: 40px;
 resize: vertical;
  
}

form h1{
    text-align: center;
}
form textarea {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    resize: vertical;
}



form button {
    background-color: rgba(203,62,60,255);
    border: none;
    color: white;
    padding: 16px 32px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;

}

  .error{
          color: red;
   }

   .input{
          display: grid;
          grid-template-row: auto auto;
          grid-row-gap: 10px;


   }

   .feedback{
     color: rgba(203,62,60,255);
     font-family: 'Della Respira', serif;
     font-weight: bold;
     text-align: center;
   }

   .form-inputs{
          align-items: baseline;
   }

   .textarea{
          text-align: start;
   }
@media screen and (max-width: 800px) {
 
    .contactUs{
        display: flex;
        flex-direction: column;
        padding: 10px;
       
         
        
    }

    .contactInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .form-inputs{
        display: grid;
        grid-template-columns: auto;
        grid-gap: 20px;
    }

    form{
        width: 100%;
    }

   form textarea {
     height: 200px;
    
          
   }
}

 

 .footer {
        background-color: rgba(203,62,60,255);
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto;
        justify-content: space-around;
        color: white;
        padding: 10px;
    }

        .footer .countries .links {
            display: flex;
            flex-direction: column;
        }

    footer .usefulLinks .links {
        display: flex;
        flex-direction: column;
    }

    footer .info .links a {
        padding: 20px;
        font-size: 20px;
          text-decoration: none;
         color: white;
    cursor: pointer;
    }

    footer .countries .links a {
        padding: 5px;
          text-decoration: none;
    color: white;
    cursor: pointer;
    }

    footer .usefulLinks .links a {
        padding: 5px;
          text-decoration: none;
    color: white;
     cursor: pointer;
    }



    @media screen and (max-width: 800px) {

        .footer {
            margin-top: 20px;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        }

            .footer .info {
                grid-column-start: 1;
                grid-column-end: 3;
            }

            .footer .countries {
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .footer .usefulLinks {
                grid-column-start: 2;
                grid-column-end: 3;
            }


        .footer-section {
            display: flex;
            justify-content: space-between;
        }
    }

    



