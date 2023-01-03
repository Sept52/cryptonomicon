const ports = [];
const obj = {};

self.addEventListener("connect", function (e) {
  ports.push(e.ports[0]);
  let port = e.ports[0];

  port.addEventListener("message", function () {
    for (let i = 0; i < ports.length; i++) {
      ports[i].postMessage(obj);
    }
  }, true);

  port.start();

}, true);
