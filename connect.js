var express = require('express');
 
 
var app = express();
 
 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));
 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
 
app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});
 
const puerto = process.env.PUERTO || 3000;
 
app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});
 
//Recursos
app.use(express.static(__dirname+'/'));
 
 
 
 
 
 
var mysql = require("mysql");
 
var cors = require("cors");
 
app.use(express.json());
app.use(cors());
 
var conexion = mysql.createConnection({
  host: "54.164.205.242",
  user: "javier",
  password: "1234",
  database: "dbContáctanos",
});
 
conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });
 
 
 
app.post("/api/CLIENTE", (req, res) => {
    let data = {
        usercli: req.body.USERCLI,
        emauscli: req.body.EMAUSCLI,
        celuscli: req.body.CELUSCLI,
        datuscli: req.body.DATUSCLI,
        msgcli: req.body.MSGCLI
    };
    let sql = "INSERT INTO CLIENTE SET ?";
    conexion.query(sql, data, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log(data);
        res.send(data);
    }
    });
  });
