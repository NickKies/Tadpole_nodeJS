module.exports = function(app, fs){
    app.get('/',function(req, res){
        res.render('index', {
            title : "My Website",
            length : 5
        })
    });
    app.get('/getUser/:userid', function(req, res){
        fs.readFile( __dirname + "/../data/user.json", 'utf8',function(err, data){
            var users = JSON.parse(data);
            res.json(users[req.params.userid]);
        });
    });
    app.get('/list', function(req, res){
        fs.readFile(__dirname + "/../data/user.json", 'utf8',function(err, data){
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
            res.end(data);
        });
    });
}