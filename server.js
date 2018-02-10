// Imports
const fs = require('fs');
const express = require('express');
const http = require('http');

// Init app
const app = express();
app.use(express.static(__dirname + '/httpdocs'));
let appData = JSON.parse(fs.readFileSync(__dirname + '/app.json', 'utf8'));

// Init Template engine
app.engine('html', function(filePath, options, callback) {
  fs.readFile(filePath, function(err, content) {
    if (err) return callback(new Error(err));
    var rendered = content.toString();
    appData.includes.forEach((include)=>{
      rendered = rendered.replace('#'+include.var+'#', fs.readFileSync(__dirname + '/views/includes/'+include.file+'.html', 'utf8').toString());
    });
    rendered = rendered.replace('#url#', options.url)
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
app.set('views', './views/pages');
app.set('view engine', 'html');

// Pages
appData.pages.forEach((page)=>{
  app.get(page.path, function(req, res) {
    page.url = 'https://'+req.hostname+req.originalUrl;
    res.render(page.file, page);
  });
});

// Redirect
app.get('/*', function(req, res) {
  res.redirect('/');
});

// Run server
http.createServer(app).listen(80);
