class NewController {

    index(req, res) {
        res.render('news')
    }


    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS Details');
    }
}

module.exports = new NewController;