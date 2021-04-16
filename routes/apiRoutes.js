// const { fstat } = require("node:fs");

module.exports = app => {


    app.get("/api/notes", function(req, res) {
        fs.readFile('./db/db.json', "utf-8", (err, data)=> {
            if (err) throw err
        res.json(JSON.parse(data))
    })
    });

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        fs.writeFileSync("./db/db.json", JSON.stringify(), (err) => {
            if (err) throw err
        })
    });


    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            const noteArr = JSON.parse(data);
            const idNum = req.params.id;

        })
    })
};