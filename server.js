const path = require( 'path' );
const express = require( 'express' );

const port = process.env.PORT || 8080;
const app = express();

app.get( '*', express.static( path.join( __dirname, 'dist/' ) ) );

app.listen( port, () => console.log( `Server running on port ${ port }` ) );