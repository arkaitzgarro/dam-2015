var APP = APP || {};
APP.DB = (function(){
    var db,
        cfg = {
            name : 'Twitter.db',
            version : 2,
            description : 'Twitter database',
            size : 1 * 1024 * 1024
        };

    

    var init = function(success) {
        if (!db) {
            var request = indexedDB.open(cfg.name, cfg.version);

            request.addEventListener('success', function(e){
                console.log('Database ' + cfg.name + ' OK');

                db = e.target.result;

                success();
            });

            request.addEventListener('upgradeneeded', function(e){
                console.log('Updating database...');

                db = e.target.result;

                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
            });

            request.addEventListener('error', function(e){
                console.log('Error opening ' + cfg.name + ' database');
            });
        } else {
            success();
        }
    };

    var insert = function(tweet) {
        var doInsert = function(){
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');

            var request = store.add(tweet);
        };

        init(doInsert);
    };

    var get = function(id, success) {
        var doGet = function(){
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var getRequest = store.get(id);

            getRequest.addEventListener('success', function(e){
                success(e.target.result);
            });
            getRequest.addEventListener('error', function(e){
                success(null);
            });
        };

        init(doGet);
    };

    var getAll = function(success) {
        init(function(){
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var data = [];
            var request = store.openCursor();

            request.addEventListener('success', function(e) {
                var cursor = e.target.result;

                if (cursor) {
                    data.push(cursor.value);
                    cursor.continue();
                } else {
                    success(data);
                }
            });
            request.addEventListener('error', function(e) {
                success([]);
            });
        });
    };

    return {
        insert : insert,
        get : get,
        getAll : getAll
    };
})();