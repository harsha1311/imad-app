var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone=
{
    title:'Harsha Mogali-1',
    heading:'Article-one',
    content:`
    <p>This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. </p>
        <p>This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. </p>
        <p>This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. This is article-one. </p>
        `
};
function createTemplate(data)
{
    title=data.title;
    heading=data.heading;
    content=data.content;
var htmlTemplate=
`
    <html>
    <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <a href='/'>Home</a>
        <hr/>
        <div>
        ${title}
        </div>
        ${content}
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{
    res.send(createTemplate(articleone));
});
app.get('/article-two',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
