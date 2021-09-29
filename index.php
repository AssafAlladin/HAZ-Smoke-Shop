
<?php


$output = "";

// additional business process: send a notification email to the admin
if(array_key_exists('submit', $_POST)) {

    // set up variables to store all user input
    $title = $_POST['title'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    



    $to="alladin.assaf@yahoo.com"; // change this to your own email address
    $subject="$title";
    $header="From: $firstName" . "$lastName " ;
    $submissionTime = date("F j, Y, g:i a");
    $message="
        $comment\n\n
        My Email: $email\n\n
        The following comment was added on $submissionTime
        "; 

    // try setting $message = $output; and see what you receive in the email

    $mailSent = mail($to,$subject,$message, $header);

    if ($mailSent) {
        
        $emailResultMessage =  "<p class='success' >Your comment was recieved, we will reach back to you in a moment";
            
    } else {
        $emailResultMessage = "<p class='error'>Something went wrong with our email system.  We are not able to send the email at this moment, sorry.";
    }

    // add $emailResultMessage to the comment preview table as the final output
    $output = $emailResultMessage;

}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="hookah, vapes, disposables, bongs, grinders">
    <meta name="description" content="Welcome to Haz smoke & vape where you can find all smoking products new and old.">
    <meta name="author" content="HAZ">
    <meta property="og:site_name" content="SMOKE&VAPE">
    <meta property="og:url" content="www.smmokeandvape.store">
    <meta property="og:title" content="Looking for smoking products, come to Smoke & Vape">
    <meta property="og:description" content="Come look threw our wide variety of new and old smoking products. We are located at 5415 S Cooper St suite 101, Arlington, TX 76017">
    <meta property="og:image" content="./images/storeFront-3.JPG">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c3e21ab8d5.js" crossorigin="anonymous"></script>
    <script src="script.js" defer></script>
    <title>Haz Smoke & Vape</title>
</head>
<body>
    <header>
        <div class="logo">
            <a href="index.php">
                <div class="logoImg">
                    <h1><span>Smoke</span>&nbsp;<span>&</span>&nbsp;<span>Vape</span></h1>
                </div>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="toggle-btn">
            <div class="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
    <div class="img">
        <div class="logoImg" id="landingText">
            <h1><span>Smoke</span>&nbsp;<span>&</span>&nbsp;<span>Vape</span></h1>
        </div>
    </div>
    <main>
        <div class="container">
            <div class="intro">
                <img src="./images/straight-inStore.jpg" alt="Inside Store">
                <p>Smoke & Vape is a tabacco store in Arlington, TX that has a wide variety of items at a great cost. We here like to treat our customers not just as customers but as family.</p>
            </div>
            <div class="section-two">
                <h2>Best sellers:</h2>
                <div class="tiles">
                    <div class="tile">
                        <img src="./images/vapes.JPG" alt="Vapes">
                        <p>Vapes</p>   
                    </div>
                    <div class="tile">
                        <img src="./images/disposables.JPG" alt="Disposables">
                        <p>Disposables</p> 
                    </div>
                    <div class="tile">
                        <img src="./images/pipes.JPG" alt="pipes">
                        <p>Pipes</p> 
                    </div>
                </div>
            </div>
            <div class="map">
                <h2>Visit Us:</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.007107764125!2d-97.13203899999999!3d32.659255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6301052a5755%3A0x9b9b08dbec6dbfd5!2sHAZ%20SMOKE%20%26%20VAPE!5e0!3m2!1sen!2sus!4v1632080623457!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <a class="directions" href="https://www.google.com/maps/dir//HAZ+SMOKE+%26+VAPE,+5415+S+Cooper+St+suite+101,+Arlington,+TX+76017/@32.6591427,-97.134229,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864e6301052a5755:0x9b9b08dbec6dbfd5!2m2!1d-97.1320403!2d32.6591375" target="_blank">Get Directions</a>
            </div>
        </div>
    </main>
    <div class="form" id="contact">
            <h1>Feel free to write us:</h1>
            <form action="" method="post">
                    <div class="contact">
                        <div class="input-field">
                            <label for="title">Title:</label>
                            <input type="text" name="title" id="title">
                        </div>
                        <div class="input-field">
                            <label for="firstName">First Name:</label>
                            <input type="text" name="firstName" id="firstName">
                        </div>
                        <div class="input-field">
                            <label for="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName">
                        </div>
                        <div class="input-field">
                            <label for="email">Email:</label>
                            <input type="text" name="email" id="email">
                        </div>
                        <div class="input-field">
                            <label for="textArea">Comments:</label>
                            <textarea name="comment" id="textArea" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" value="Send" id="submit" name="submit">
                        <div class="response">
                            <?php echo $output ?>
                        </div>
                    </div>
            </form>
        </div>
    <footer>
        <div class="top-section">
            <div class="address">
                <p>5415 S Cooper St suit 101, Arlington, TX 76017</p>
                <p>682-313-4203</p>
                <p>hazim.assaf@yahoo.com</p>
            </div>
            <a href="https://www.instagram.com/haz.smokevape/">
                <div class="socials">
                    <i class="fab fa-instagram"></i>
                </div>
            </a>
        </div>
        <div class="copyright">
            <p>HAZ Smoke & Vape &copy; <script>document.write(new Date().getFullYear())</script></p>
        </div>
    </footer>
</body>
</html>