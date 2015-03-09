var APP = APP || {};
APP.DB = (function(){
    var db,
        cfg = {
            name : 'Twitter.db',
            version : '1.0',
            description : 'Twitter database',
            size : 1 * 1024 * 1024
        },
        createTable = 'CREATE TABLE IF NOT EXISTS tweets'+
                      ' (id TEXT PRIMARY KEY,' +
                      ' text TEXT NOT NULL,' +
                      ' author TEXT NOT NULL,' +
                      ' created_at INTEGER NOT NULL);';

    try {
        db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
    } catch(e) {
        if (e.code === 11) {
            db.changeVersion(cfg.version);
        }
    }

    if (db) {
        var createSchema = function(tx) {
            tx.executeSql(createTable, [], function(tx, results){
                console.log('Table tweet created!');
                console.log(results);
            }, function(tx, error){
                console.log('DB error: ' + error);
            });
        };

        db.transaction(createSchema);
    }

    var insert = function(tweet) {
        var sql = "INSERT INTO tweets VALUES(?,?,?,?);";

        db.transaction(function(tx){
            tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.createdAt], function(tx, results){
                console.log('Tweet inserted');
                console.log(results);
            }, function(tx, error){
                console.log('Error inserting tweet');
                console.log(error);
            });
        });
    };

    var getAll = function(success) {
        db.transaction(function(tx){
            var sql = "SELECT * FROM tweets ORDER BY created_at DESC";
            tx.executeSql(sql, [], function(tx, results){
                var datos = [];

                for (var i = results.rows.length - 1; i >= 0; i--) {
                    datos.push(results.rows.item(i));
                }

                success(datos);
            }, function(tx, error){

            });
        });
    };

    var get = function(id, success) {
        db.transaction(function(tx){
            var sql = "SELECT * FROM tweets WHERE id = ?";
            tx.executeSql(sql, [id], function(tx, results){
                var datos = [];

                for (var i = results.rows.length - 1; i >= 0; i--) {
                    datos.push(results.rows.item(i));
                }

                return (datos.length) ? success(datos[0]) : success(null);
            }, function(tx, error){

            });
        });
    };

    return {
        insert : insert,
        get : get,
        getAll : getAll
    };
})();