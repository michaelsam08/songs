///////////////////////   Example 1 from Microsof Documentation /////////////////////////
var Connection = require("tedious").Connection;

var config = {
  server: "DESKTOP-IK98NM7", //update me
  authentication: {
    type: "ntlm",
    options: {
      userName: "michaelsam08",
      password: "Sammy_2018",
      domain: "Test"
    }
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: false,
    database: "Stuff" //update me
  }
};
var connection = new Connection(config);
connection.on("connect", function(err) {
  // If no error, then good to proceed.
  console.log("Connected");
  executeStatement();
});

var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;

function executeStatement() {
  request = new Request("SELECT * FROM Bikers", function(err) {
    if (err) {
      console.log(err);
    }
  });
  var result = "";
  request.on("row", function(columns) {
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log("NULL");
      } else {
        result += column.value + " ";
      }
    });
    console.log(result);
    result = "";
  });

  request.on("done", function(rowCount, more) {
    console.log(rowCount + " rows returned");
  });
  connection.execSql(request);
}
//////////////////////////  Example 2 /////////////////////////////////////////////
// var express = require("express");
// var app = express();
// var sql = require("mssql");
// app.get("/", function(req, res) {
//   // config for your database
//   var config = {
//     userName: "michaelsam08",
//     password: "Sammy_2018",
//     server: "DESKTOP-IK98NM7",
//     database: "Stuff"
//   };

//   // connect to your database
//   sql.connect(config, function(err) {
//     if (err) console.log(err);
//     console.log(config);
//     // create Request object

//     var request = new sql.Request();

//     // query to the database and get the records
//     request.query("select * from Bikers", function(err, recordset) {
//       if (err) console.log(err);

//       // send records as a response
//       res.send(recordset);
//     });
//   });
// });

// var server = app.listen(5000, function() {
//   console.log("Server is running..........Yay!!!!!!!!");
// });
