
const express = require('express');

const monitor = appx.monitor;
const sutil = appx.sutil;
const utilx = appx.utilx;
const scommon = appx.scommon;
const config = appx.config;
const event_manager = appx.event_manager;

const app = scommon.app;
scommon.appx = appx;

const ejs = require('ejs');
const { get } = require('node:https');

// var insertUserName;

// const addUin = (e) => {
//     e.preventDefault();
//     insertUserName = document.getElementById('iun').value;
//     document.forms[0].reset();

//     console.log("inserted user name = " + insertUserName);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btnIun').addEventListener('click', addUin);
// });

// app.get("*/wordgamefarm", function (req, res) {
//     if(insertUserName != null){
//         console.log("Inserted User Name = " + insertUserName);
//         app.get("/wordgamefarm/:" + insertUserName, )
//     }else{
//         alert("Insert User Name");
//     }
// })

// sets the view engine to ejs
app.set('view engine', 'ejs');

//Use to get user image
//http://localhost:8066/wordgamefarm/maor
// app.get("*/wordgamefarm/:name", function (req, res) {
app.get("*/https://hardcore-einstein-fe8b05.netlify.app:name", function (req, res) {

    var name = req.params.name;
    var img = name + ".jpg";

    res.render('facebook', { person: name, image: img });
})


//index - use for FACEBOOK Share
//http://localhost:8066/index
app.get("/index", function (req, res) {

    res.render('index')
})


app.get('*/check/', sutil.wrap(async (req, res) => {

    try {

        res.write("ok");
        res.end();
        return;

    } catch (error) {
        scommon.raise_err_ex(req, res, error, 900);
        return;
    }

}))



//Add static directory
app.use('*/static', express.static('static'))

//Server runner
const port = process.env.PORT || "https://hardcore-einstein-fe8b05.netlify.app/";
app.listen(port, () => {
    monitor.log(`${appx.SERVICE} listening on port ${port}`);
    app.listen()
});