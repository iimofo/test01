const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    const user = req.query.user;
    res.send(user + "!");
})
//hihihi
const users = [];
app.post("/create_user", (req, res) => {
    const {user} = req.body;
    users.push({ username: user.username, password: username.password });
    console.log(users);
    res.json({loggedIn: true, status: "#OK!"});
})

app.listen(9000, () => {
    console.log('Server started on port 5000.');
})