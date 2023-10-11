const express = require('express');
const morgan = require('morgan');
const path = require("path");
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
const compression = require('compression');

const session = require('express-session');

// Configuración


// Configuración de acceso a la base de datos
const hostDB = "localhost";
const userDB = "root";
const passwordDB = "";
const portDB = 3306;
const databaseDB = 'motionpose';

// Middlewares
app.use(compression());

app.use(morgan('dev'));


app.use(myConnection(mysql, {
    host: hostDB,
    user: userDB,
    password: passwordDB,
    port: portDB,
    database: databaseDB
}, 'single'));

app.use(session({
    secret: 'secret',
    saveUninitialized: true
}))

app.set('port', process.env.PORT || 5555);

app.use(express.static('public', {
    maxAge: 31536000, // Cache for 1 year
  }));
  
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
}); 

// Importación de rutas
const usuarioRuta = require('./routes/usuarios');
const registroRuta = require('./routes/registroRuta');
const lobbyRuta = require('./routes/lobbyRuta');
const proyectosRuta = require('./routes/proyectosRuta');
const miCuentaRuta = require('./routes/miCuentaRuta');
const tiendaRuta = require('./routes/tiendaRuta');
const ayudaRuta = require('./routes/ayudaRuta');
const imagenRuta = require('./routes/imagenRuta');
const aplicacionRuta = require('./routes/aplicacionRuta');
const terminosRuta = require('./routes/terminosRuta');

// Rutas
app.use('/login', usuarioRuta); 
app.use('/registro', registroRuta);
app.use('/lobby', lobbyRuta);
app.use('/proyectos', proyectosRuta);
app.use('/cuenta', miCuentaRuta);
app.use('/tienda', tiendaRuta);
app.use('/ayuda', ayudaRuta);
app.use('/imagen', imagenRuta);
app.use('/aplicacion', aplicacionRuta);
app.use('/terminos', terminosRuta);

app.listen(app.get('port'), ()=>{
    console.log('Server corriendo en puerto: ' + app.get('port'));
});