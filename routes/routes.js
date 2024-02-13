const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const uniqid = require('uniqid');

//HTML routes
router.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
});

//there was a reference to the notes.html file and it would allow the user to go
// to the same place. Changed that reference to the route below
router.get('/notes' , (req,res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});


//API routes
router.get('/api/notes', async(req,res) => {
    const getNotes = await JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(getNotes);
});

router.post('/api/notes',(req,res) => {
    const postNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };
    postNotes.push(newNote);
    fs.writeFileSync('./db/db.json',JSON.stringify(postNotes));
    res.json(postNotes);
});

module.exports = router;