// Imports
const fs = require('fs');
const express = require('express');

// Init express JS
const app = express();
app.use(express.static(__dirname + '/httpdocs'));

// Init Template engine
app.engine('ntl', function(filePath, options, callback) {
  let rendered = '';
  fs.readFile(__dirname + '/views/includes/header.ntl', function(err, header) { // get header
    if (err) return callback(new Error(err));
    options.header = header.toString();
    fs.readFile(__dirname + '/views/includes/nav.ntl', function(err, nav) { // get nav
      if (err) return callback(new Error(err));
      options.nav = nav.toString();
      fs.readFile(__dirname + '/views/includes/footer.ntl', function(err, footer) { // get footer
        if (err) return callback(new Error(err));
        options.footer = footer.toString();
        fs.readFile(filePath, function(err, content) { // get content
          if (err) return callback(new Error(err));
          rendered += content.toString()
          .replace('#header#', options.header)
          .replace('#nav#', options.nav)
          .replace('#footer#', options.footer)
          .replace('#url#', options.url)
          .replace('#title#', options.title)
          .replace('#desc#', options.desc)
          .replace('#keywords#', options.keywords)
          .replace('#title#', options.title)
          .replace('#url#', options.url)
          .replace('#title#', options.title)
          .replace('#url#', options.url)
          .replace('#title#', options.title);
          return callback(null, rendered);
        });
      });
    });
  });
});
app.set('views', './views/pages');
app.set('view engine', 'ntl');

// Index
app.get('/', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/index.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('index', data);
});

// Rhums
app.get('/rhums', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/rhums/index.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('rhums/index', data);
});
app.get('/rhums/ambres', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/rhums/ambres.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('rhums/ambres', data);
});
app.get('/rhums/blancs', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/rhums/blancs.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('rhums/blancs', data);
});
app.get('/rhums/epices', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/rhums/epices.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('rhums/epices', data);
});

// Distillerie
app.get('/distillerie', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/distillerie/index.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('distillerie/index', data);
});
app.get('/distillerie/faq', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/distillerie/faq.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('distillerie/faq', data);
});
app.get('/distillerie/histoire', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/distillerie/histoire.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('distillerie/histoire', data);
});
app.get('/distillerie/savoir-faire', function(req, res) {
  let data = JSON.parse(fs.readFileSync(__dirname + '/views/pages/distillerie/savoir-faire.json', 'utf8'));
  data.url = 'https://'+req.hostname+req.originalUrl;
  res.render('distillerie/savoir-faire', data);
});

// Redirect
app.get('/*', function(req, res) {
  res.redirect('/');
});

// Run server
const http = require('http');
http.createServer(app).listen(80);
