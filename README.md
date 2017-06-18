# cordova-sqlite-storage-js

Javascript library for use cordova-sqlite-storage plugin easily

## Configure

```javascript
var db_config = {
  name: 'your_db_name.db',
  location: 'default'
};
```

## Usage

### db_query
```javascript
function success_callback(){
    // no parameter
    alert('success');
}

function error_callback(error){
    // receives error data
    alert(error.message);
}

db_query("INSERT INTO users VALUES (?,?)", ['demo', '1234'], success_callback, error_callback);
```

### db_select
```javascript

function success_callback(result){
    // receives result rows
    alert(result.rows.item(0)); // first row
}

function error_callback(error){
    // receives error data
    alert(error.message);
}

db_select("SELECT * FROM users WHERE login = ?, password = ?", ['demo', '1234'], success_callback, error_callback);

```
