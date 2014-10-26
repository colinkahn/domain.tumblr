'use strict';

goog.require('domain.tumblr.post.Factory');
goog.require('domain.tumblr.post.Repository');
goog.require('domain.tumblr.post.Base');
goog.require('domain.tumblr.post.Quote');
goog.require('domain.tumblr.post.Text');
goog.require('domain.tumblr.post.BaseBuilder');
goog.require('domain.tumblr.InMemoryDAO');

describe('PostRepository', function () {
  var inMemoryDAO;
  var postFactory;
  var postRepository;
  var PostBaseModel;
  var PostQuoteModel;
  var PostTextModel;
  var PostBaseModelBuilder;

  beforeEach(function () {
    var InMemoryDAO    = domain.tumblr.InMemoryDAO;
    var PostRepository = domain.tumblr.post.Repository;
    var PostFactory    = domain.tumblr.post.Factory;

    PostBaseModel        = domain.tumblr.post.Base;
    PostQuoteModel       = domain.tumblr.post.Quote;
    PostTextModel        = domain.tumblr.post.Text;
    PostBaseModelBuilder = domain.tumblr.post.BaseBuilder;

    inMemoryDAO = new InMemoryDAO();

    postFactory = new PostFactory(
      PostBaseModel,
      PostTextModel,
      PostQuoteModel
    );
    postRepository = new PostRepository(
      inMemoryDAO,
      postFactory
    );
  });

  beforeEach(function () {
    inMemoryDAO.persist([
      new PostBaseModelBuilder()
          .setModel(PostBaseModel)
          .withId('foo')
          .withType('quote')
          .build()
          .toJSON(),
      new PostBaseModelBuilder()
          .setModel(PostBaseModel)
          .withId('bar')
          .withType('text')
          .build()
          .toJSON()
    ]);

    spyOn(inMemoryDAO, 'retrieve').and.callThrough();
  });

  describe('finding all posts', function () {
    var posts;

    beforeEach(function (done) {
      postRepository.findAll().then(function (result) {
        posts = result;
        done();
      });
    });

    it('returns post models', function () {
      expect(posts[0]).toEqual(jasmine.any(PostQuoteModel));
      expect(posts[1]).toEqual(jasmine.any(PostTextModel));
    });
  });

  describe('finding single post', function () {
    var post;

    beforeEach(function (done) {
      postRepository.findById('foo').then(function (result) {
        post = result;
        done();
      });
    });

    it('returns a post model', function () {
      expect(post).toEqual(jasmine.any(PostQuoteModel));
    });
  });

  describe('finding by page number', function () {
    var posts;

    beforeEach(function (done) {
      postRepository.findByPageNumber('2').then(function (result) {
        posts = result;
        done();
      });
    });

    it('calls retrieve with offset and limit', function () {
      expect(inMemoryDAO.retrieve).toHaveBeenCalledWith({
        offset: 2 * postRepository.limit,
        limit: postRepository.limit
      });
    });

    it('returns posts', function () {
      expect(posts[0]).toEqual(jasmine.any(PostQuoteModel));
      expect(posts[1]).toEqual(jasmine.any(PostTextModel));
    });
  });
});
