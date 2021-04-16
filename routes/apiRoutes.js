const { fstat } = require("node:fs");

module.exports = app => {


    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            const noteArr = JSON.parse(data);
            const idNum = req.params.id;
            
        })
    })