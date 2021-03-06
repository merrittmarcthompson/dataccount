const base64 = require('base-64');

export function callWebApi(verb, resourcePath, callback) {
  console.log("in call web api");
  let headers = new Headers();
  headers.append(
    'Authorization',
    'Basic ' + base64.encode('example user:example password')
  );
  fetch(resourcePath, { method: verb, headers: headers })
    .then(response => response.json())
    .then(json => console.log(json) || callback(json))
    .catch(error => console.error(error))
}
