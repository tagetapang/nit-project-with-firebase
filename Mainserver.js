import  express from "express";
import path from "path";
const port = 3000;

const app = express();


app.use(express.json());
app.set("views", __dirname + "/views/");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.listen(port, () => {
  console.log(`app started in port http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.render("./home");
});
