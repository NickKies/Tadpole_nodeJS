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

    app.post('/addUser/:userid', function(req, res){
        var result = { };
        var userid = req.params.userid;
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0 ;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }
        fs.readFile(__dirname+"/../data/user.json", 'utf8', function(err,data){
            var users = JSON.parse(data);
            if(users[userid]){
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }
            /*
                JSON.stringify(value, replacer, space)
                value : JSON 문자열로 변환할 값을 설정(배열, 객체, 숫자, 문자등을 넣을 수 있습니다.)
                replacer(option) : 함수 또는 배열(null일 경우 객체의 모든 속성들이 JSON문자열 결과에 포함됩니다.)

            */
            users[userid] = req.body;
            fs.writeFile( __dirname+"/../data/user.json",JSON.stringify(users, null, '\t'), "utf8", function(err,data){
                result = {"succes":1};
                res.json(result);
            })
        })
    });
    /*
        post : http로 넘어온 데이터를 새로운 자원으로 등록할 때 사용합니다.
        put  : 식별자가 없을 경우 post와 동일하게 사용하나 식별자가 있을 경우 해당 식별자의 데이터를 변경합니다.    
    
    */
    app.put('/updateUser/:userid', function(req,res){
        var result = { };
        var userid = req.params.userid;
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0 ;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }
        fs.readFile( __dirname+"/../data/user.json",'utf8', function(err, data){
            var users = JSON.parse(data);
            users[userid] = req.body;
            fs.writeFile( __dirname+"/..data/user.json", JSON.stringify(users, null, '/t'), 'utf8',function(err, data){
                result = {"success": 1};
                res.json(result);
            })
        })
    });

    app.delete('/deletUser/:userid', function(req, res){
        var result = {};
        fs.readFile( __dirname+"/../data/user.json", "utf8", function(err, data){
            var users = JSON.parse(data);
            if(!users[req.params.userid]){
                result["success"] = 0;
                result["errer"] = "not found";
                res.json(result);
                return;
            }
            delete users[req.params.userid];
            fs.writeFile( __dirname+"/..data/user.json", JSON.stringify(users, null, '/t'), 'utf8',function(err, data){
                result["success"] = 1;
                res.json(result);
                return;
            })
        })
    });
}    