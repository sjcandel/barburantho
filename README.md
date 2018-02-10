## Démarrer barburantho.com en local
1. Installez les dépendances *(à la racine)*
	```
	npm install
	```
2. Démarrez le serveur *(à la racine)*
	```
	node server.js
	```
3. Accédez au site
	http://localhost


## Commencer à coder
Le site fonctionne avec des includes et des pages. Pour les déclarer rendez-vous dans le fichier *app.json* situé à la racine du projet. Ce JSON est composé de deux tableaux "includes" et "pages".

### Les includes
Un include est déclaré comme ceci:
```json
//app.json
{"includes": [
    {
      "file": "nom-du-fichier-html-sans-son-extension",
      "var": "nom-de-la-variable"
    }
]}
```
Le fichier HTML de l'include doit se trouver dans : */views/includes*
Un include est appellé dans une page grâce à la syntaxe:
```
#nom-de-la-variable#
```
Par exemple :
```html
#header#
#nav#
<main>
    <section>
        <h1>Barburantho, la distillerie de rhum</h1>
    </section>
</main>
#footer#
```
L'include "header" *(déjà déclaré)* est particulier, il contient des variables pour le SEO indiquées lors de la déclaration d'une page dans *app.json*:
```html
<!--header.html-->
<!DOCTYPE html>
<html lang="fr">
<head>
  <link rel="dns-prefetch" href="#url#" />
  <title>#title#</title>
  <meta name="description" content="#desc#">
  <meta name="keywords" content="#keywords#">
</head>
<body>
```

### Les pages
Une page est déclaré comme ceci:
```json
//app.json
{"pages": [
    {
    "path": "/",
    "title": "ce qui va dans la balise <title>",
    "desc": "ce qui va dans la balise <meta name=\"description\">",
    "keywords": "ce qui va dans la balise <meta name=\"keywords\">",
    "file": "nom-du-fichier-html-sans-son-extension"
  }
]}
```
Le fichier HTML de la page doit se trouver dans : */views/pages* Il est possible de créer des sous dossiers.

### Les fichiers externes
Vous pouvez appeller n'importe quel fichier depuis un include ou une page comme si il se trouvait à la racine du moment qu'il est dans le dossier *httpdocs*
Par exemple:
```html
  <link rel="stylesheet" href="/style/main.css" type="text/css" />
  <script src="/js/jquery-3.1.1.js"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
```
Ici *main.css* se trouve dans le dossier *style* qui se trouve dans *httpdocs*, *jquery-3.1.1.js* se trouve dans le dossier *js* qui se trouve dans *httpdocs* et *favicon.ico* se trouve directement dans le dossier *httpdocs*.
