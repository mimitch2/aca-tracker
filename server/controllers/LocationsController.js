 const clients = require('../clients');
 const fetch = require('node-fetch');

module.exports.list = function list(request, response) {
  return response.json(["hello"]);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(clients.find(index => index["id"] === id));
};

module.exports.create = function create(request, response) {
  const info = request.body
  const id = info.id
  const client = clients.find(c=>c.clientId === id)
  fetch(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${info.lat}&lon=${info.long}&zoom=18&addressdetails=1`, 
  { 
    method: 'GET', 
    headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
  })
  .then(response => response.json())
  .then(json => {
    client.location = json.address
    client.lat = json.lat
    client.long = json.lon
    return response.json(client); 
  });
  
};


module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  