var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/google', function (req, res, next) {
    var sourceText = req.query.word;
    var sourceLang = req.query.slang;
    var targetLang = req.query.tlang;
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    request({
        url: url,
    }, function (error, response, body) {
        if (error) {
            return res.send(response);
        }
        return res.send(body);
    });
});

module.exports = router;
