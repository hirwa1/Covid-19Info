<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <title>Covid-19Info</title>
    <meta name="author" content="Cynthia Iradukunda">
    <meta name="description" content=" The Covid19Info is a website to help people interested to travel in Uk, Rwanda, and Mauritius get information on the current situation of Covid19.">
    <link rel="stylesheet"   href="../Css/home.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

</head>

<body>

   <style>
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
   </style>

    <?php


    $css = file_get_contents('../Css/home.css');
 

   // setting variables 
    $name = $email = $comment = "";
    $nameErr = $emailErr = $commentErr = "";
    $submitMessage ="";
    $countErrors = 0;

    if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty($_POST["name"])){
    $nameErr = "Name is required";
    $count++;
    }else{
    $name = test_input($_POST["name"]);

    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
      $count++;
    }
    }

    if(empty($_POST["email"])){
    $emailErr = "Email is required";
    $count++;
    }else{
    $email = test_input($_POST["email"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
      $count++;
    }
    }

    if(empty($_POST["comment"])){
    $commentErr = "The comment is required";
    $count++;
    }else{
    $comment = test_input($_POST["comment"]);
    }

    
    $servername = "localhost";
    $username = "root";
    $password = "";

    try {
    $conn = new PDO("mysql:host=$servername;dbname=covid19-data", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // set the PDO error mode to exception
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $sql = "INSERT INTO data (name, email, message) VALUES ('$name', '$email', '$comment')";
     $conn->exec($sql);
     $submitMessage =  "Thank you for your inquiry, we will reach out to you soon!";
    } catch(PDOException $e) {
     $submitMessage = "Your form has some incompleted fields";
    }

    }

    function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }

    
   
    ?>

    <nav class="background-contactUs">
        <div class="overlay ">

            <div class="AboutUsInfo">

                <h1>Get in touch</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu justo dui. Nam tortor neque, scelerisque
                    eget finibus ut, scelerisque ut dui.
                </p>



            </div>
        </div>

        <div class="logo">
            <h1>Covid-19Info</h1>
        </div>


        <div class="hamburg">

            <div class="line"></div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>



        <div class="sidebar">
            <div class="nav-links">

                <a href="../index.html">Home</a>
                <div class="dropdown">
                    <p class="dropbtn">Country<i class="fa fa-sort-down"></i></p>
                    <div class="dropdown-content">
                        <a href="#">Rwanda</a>
                        <a href="#">UK</a>
                        <a href="#">Mauritius</a>
                    </div>

                </div>
                <a>News</a>
                <a class="active" href="../Html/AboutUs.html">About Us</a>
                <a>Contact Us</a>

            </div>
        </div>
    </nav>

    <section class="contactUs">
     

        <div class="contactInfo">

            <h1>Contact Info</h1>


            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <h2> Adrress </h2>

            </div>


            <p>Lorem ipsum dolor sit amet</p>

            <div class="contact-item">
                <i class="fa fa-phone-alt"></i>
                <h2>Phone</h2>


            </div>

            <p>+250785971883</p>




            <div class="contact-item">
                <i class="fa fa-envelope"></i>
                <h2>Email</h2>
            </div>
            <p>c.iradukund@alustudent.com</p>



        </div>

        <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">

            <h1>Send Message</h1>
            <span class="feedback"><?php echo $submitMessage;?></span>

            <div class="form-inputs">
                <div class="input">
                    <span class="error"><?php echo $nameErr;?></span>
                    <input type="text" placeholder="Enter your name" name="name" value="<?php echo  (empty($nameErr) &&  !empty($count))? $name : '' ?>" />
                </div>

                <div class= "input">

                    <span class="error" ><?php echo $emailErr;?></span>
                    <input type="email" placeholder="Enter your email" name="email" value="<?php echo  (empty($emailErr)&& !empty($count))? $email : '' ?>" />

                </div>

            </div>

            <span class="error"><?php echo $commentErr;?></span>
            <textarea name="comment" placeholder="Enter your message">
           <?php echo (empty($commentErr) && !empty($count))? $comment : '' ?>
            </textarea>
            
            <button type="submit"> Send</button>


        </form>


    </section>

    <footer class="footer">

        <div class="info">

            <h1>Covid19-Info</h1>
            <p>Lorem ispum  Lorem ispum Lorem ispum Lorem ispum  </p>

            <div class="links">

                <a><i class="fa fa-facebook-f"></i></a>
                <a><i class="fa fa-twitter"></i></a>
                <a><i class="fa fa-instagram"></i></a>

            </div>

        </div>



        <div class="countries">

            <h1>Country</h1>

            <div class="links">
                <a>Rwanda</a>
                <a>UK</a>
                <a>Mauritius</a>
            </div>



        </div>

        <div class="usefulLinks">

            <h1>Useful Links</h1>

            <div class="links">
                <a>About Us</a>
                <a>News</a>
                <a>Contact us</a>
            </div>


        </div>





    </footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../javaScript/AboutUs.js"></script>



</body>








</html>



