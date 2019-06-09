let express = require("express");
const app = express();

app.use(express.static('public'))

app.use(function(request,response,next){
    return res.send("what do you want?");
});


app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
