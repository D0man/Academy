<?php
    session_start();
    if(isset($_SESSION['error'])){
        $invalidEmail = ['errorMessage' => 'Invalid Email', 'typedEmail' => $_SESSION['mail']];
    }
    session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="stylesheets/main.css">
    <link rel="stylesheet" href="stylesheets/tablet.css">
    <link rel="stylesheet" href="stylesheets/mobile.css">
    <title>Doman's Academy - Challenge 1</title>
</head>
<body>
    <div class="container">
        <div class="container__coming-soon">
            <figure><img src="assets/coming-soon-ribbon.png" alt="Coming Soon"></figure>
        </div>
            <header class="header">
                    <figure>
                        <img src="assets/undraw_developer_activity_bv83.svg" alt="Programmer">
                    </figure>
                    <h1>CODE ACADEMY</h1>
                </header>
                <main class="main">
                    <section class="main__form">
                        <h2>Leave your email here</h2>
                        <form action="backend/mailPushing.php" method="post">
                            <div class="main__form--flex-column">
                                <label for="mail"><?php if(isset($invalidEmail)) echo $invalidEmail['errorMessage'] ?></label>
                                <input
                                class="main__form__input"
                                value="<?php if(isset($invalidEmail)) echo $invalidEmail['typedEmail']; ?>"
                                type="email"
                                name="mail"
                                id="LandingEmail"
                                placeholder="email@example.com">
                            </div>
                            <input class="main__form__submit" type="submit" value="GET EARLY ACCESS">
                        </form>
                    </section>
                </main>
                <footer class="footer">
                    <p>MK&copy; 2019.</p>
                    <p>Made with <img src="assets/love.png" alt="love"> in Poland</p>
                    <p>We are using cookies to improve your experience.</p>
                </footer>
    </div>
</body>
</html>