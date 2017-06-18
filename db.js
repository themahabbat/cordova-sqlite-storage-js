var db_config = {
  name: 'example.db',
  location: 'default'
};

document.addEventListener('deviceready', function() {

  db = window.sqlitePlugin.openDatabase({
    name: db_config.name,
    location: db_config.location
  });


  function db_query(query, values=null, success_call=null, error_call=null){

    db.transaction(function(tx) {
      tx.executeSql(query, (values!==null) ? values : []  );
    }, function(error) {
      if(error_call!==null)error_call(error);
    }, function() {
      if(success_call!==null)success_call();
    });

  }

  function db_select(query, values=null, success_call=null, error_call=null){

    db.transaction(function(tx){

      tx.executeSql(query, (values!==null) ? values : [], function(tx, rs) {
        if(success_call!==null)success_call(rs);
      }, function(tx, error) {
        if(error_call!==null)error_call(error);
      });

    });

  }




});
