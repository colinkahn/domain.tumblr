goog.provide('domain.tumblr.post.Repository');

(function () {
  function PostRepository (postDAO, postFactory) {
    this.dao = postDAO;
    this.factory = postFactory;
    this.limit = 10;
  }

  PostRepository.prototype.findAll = function () {
    var factory = this.factory;

    return this.dao.retrieve().then(function (datas) {
      var posts = [];
      datas = Array.isArray(datas) ? datas : [];

      datas.forEach(function (data) {
        posts.push(factory.make(data));
      });

      return posts;
    });
  };

  PostRepository.prototype.findById = function (id) {
    var factory = this.factory;

    return this.dao.retrieve(id).then(function (data) {
      if (data) {
        return factory.make(data);
      }
    });
  };

  PostRepository.prototype.findByPageNumber = function (pageNumber) {
    var factory = this.factory;

    return this.dao.retrieve({
      offset: pageNumber * this.limit,
      limit: this.limit
    }).then(function (datas) {
      var posts = [];
      datas = Array.isArray(datas) ? datas : [];

      datas.forEach(function (data) {
        posts.push(factory.make(data));
      });

      return posts;
    });
  };

  domain.tumblr.post.Repository = PostRepository;
})();
