const router = require('express').Router();
const cheeseDatas = require('./cheese');



router.get("/", (req, res) => {
    res.json(cheeseDatas).status(200);
});

router.get("/:id", (req, res) => {
    res.json(cheeseDatas.filter((cheese) => cheese.id.toString() === req.params.id)[0]).status(200);
});

module.exports = router;
