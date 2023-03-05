import  express from "express";
import { readuserdata,writeuserdata } from "./firebase/index.js";
import path from "path";
const port = 3000;

const app = express();


app.use(express.json());
// app.set("views", __dirname + "/views/");
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.listen(port, () => {
  console.log(`app started in port http://localhost:${port}`);
});
app.post("/", (req, res) => {
  try {
   
    let userid = req.body.userid;
    let name = req.body.name;
    let email = req.body.email;
    writeuserdata(userid,name,email);
    res.send("data saved");
  } catch (error) {
    console.log(error);
    
  }
  
});
// app.use("/administration", require("./Routes/administration"));
// app.use("/client", require("./Routes/client"));
