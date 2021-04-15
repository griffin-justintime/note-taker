module.exports = app => {


    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });