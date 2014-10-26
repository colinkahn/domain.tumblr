goog.provide('domain.tumblr.InMemoryDAO');

(function () {
  var InstaPromise = domain.tumblr.InstaPromise;

  function InMemoryDAO () {
    this.data = [];
  }

  InMemoryDAO.prototype.persist = function (data) {
    this.data = data;
  };

  InMemoryDAO.prototype.retrieve = function (id) {
    var item;

    if (!id || typeof id === 'object') {
      return Promise.resolve(this.data);
    } else {
      this.data.forEach(function (data) {
        if (data.id === id) {
          item = data;
        }
      });

      return Promise.resolve(item);
    }
  };

  domain.tumblr.InMemoryDAO = InMemoryDAO;
})();
