const clients = require("../clients");


module.exports.list = function list(request, response) {
  return response.json(clients);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(clients.find(index => index["clientId"] === id));
};

module.exports.create = function create(request, response) {
  let lastClientId = clients.length;
  const newObj = {name: request.body.name, clientId: lastClientId + 1, lat:"", long:"", location:""};
  clients.push(newObj);
  return response.json(newObj);
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  