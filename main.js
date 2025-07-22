import express from "express"
import movieRoute from "./routes/movies.route.js"

const app  = express();
const PORT = 6969;



app.get("/", (req, res) => {
    res.json({ msg: "Hello students!" });
});


// CLIENT -> MIDDLEWARE -> SERVER
app.use('/movies', movieRoute);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});



// DRY Principle
// KISS Principle (Keep It Simple, Stupid!)