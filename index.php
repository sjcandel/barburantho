<!-- <?php 
    $pageTitle = 'Barburantho - distillerie de rhum';
    include('./includes/header.php'); 
?> -->

<!DOCTYPE html>
<html ng-app="prjApp">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title><?php echo $pageTitle ?></title>
    <link rel="stylesheet" href="./style/main.css" media="screen">

    <!--SCRIPTS-->
    <script src="js/jquery-3.1.1.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113690818-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-113690818-1');
    </script>
</head>
<body>


<nav class="bg-grey1">
    <ul class="flex-container is-horizontal-extremes maxw-1024 m-center p-20">
        <li><a href="./index.html">Accueil</a></li>
        <li><a href="#">La Distillerie</a>
            <ul>
                <li><a href="./pages/la-distillerie/histoire.php">Histoire</a></li>
                <li><a href="./pages/la-distillerie/savoir-faire.php">Savoir faire</a></li>
                <li><a href="./pages/la-distillerie/faq.php">FAQ</a></li>
            </ul>
        </li>
        <li><a href="./pages/les-rhums/rhums.php">Les Rhums</a>
            <ul>
                <li><a href="./pages/les-rhums/rhums-blancs.php">Rhums blancs</a></li>
                <li><a href="./pages/les-rhums/rhums-ambres.php">Rhums ambrés</a></li>
                <li><a href="./pages/les-rhums/rhums-epices.php">Rhums épicés</a></li>
            </ul>
        </li>
    </ul>
</nav>

<!-- <?php include('./includes/navigation.php'); ?> -->

<main>
    <section>
        <h1>Barburantho, la distillerie de rhum</h1>
        <a href="./pages/les-rhums/rhums.php">Découvrir nos rhums</a>
    </section>

    <section class="text-center">
        <h2>Les Rhums Barburantho</h2>
        <div class="flex-container is-horizontal-extremes">
            <article>
                <h3>Les Rhums blancs</h3>
                <p></p>
                <a href="./pages/les-rhums/rhums-blancs.php">Voir nos rhums blancs</a>
            </article>
            <article>
                <h3>Les Rhums ambrés</h3>
                <p></p>
                <a href="./pages/les-rhums/rhums-ambres.php">Voir nos rhums ambrés</a>
            </article>
            <article>
                <h3>Les Rhums épicés</h3>
                <p></p>
                <a href="./pages/les-rhums/rhums-epices.php">Voir nos rhums épicés</a>
            </article>
        </div>
    </section>

    <section class="text-center">
        <h2>Un savoir-faire unique</h2>
        <article>
            <h3>" Tous les chemins mènent au rhum "</h3>
            <p>Le rhum martiniquais de la Distillerie Barburantho est un produit raffiné et exquis. Les saveurs passionnantes
                de cet alcool d’exception sont issues d’un savoir-faire de plus de 300 ans qui nous renvoie aux origines
                mêmes du rhum. Une connaissance parfaite de tous les aspects du rhum a permis à la distillerie Barburantho
                d’être reconnue comme l’une des meilleures au monde.</p>
            <a href="./pages/la-distillerie/savoir-faire.php">Découvrir notre savoir-faire</a>
        </article>
    </section>


    <h2>Les actualités de la maison Barburantho</h2>
<?php include('./includes/blog.php'); ?>
<?php include('./includes/blog.php'); ?>
<?php include('./includes/blog.php'); ?>
<?php include('./includes/blog.php'); ?>
</main>

<?php include('./includes/footer.php'); ?>