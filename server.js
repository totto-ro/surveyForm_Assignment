const express = require( 'express' );
const app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/static') );

//const bodyParser = require( 'body-parser' );
//app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.urlencoded({ extended: true }) );


//render index form
app.get("/", function( request, response ){
    response.render( 'index' );
});

//create info to send to results
let user;
app.post("/", function( request, response ){
    user = request.body;
    response.redirect( 'results' );
});

//render index form
app.get("/results", function( request, response ){
    response.render( 'results', {'user': user});
});


app.listen(7077, function() {
    console.log("running on port 7077");
});