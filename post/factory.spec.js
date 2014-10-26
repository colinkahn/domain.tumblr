'use strict';

goog.require('domain.tumblr.post.Factory');
goog.require('domain.tumblr.post.Base');
goog.require('domain.tumblr.post.Quote');
goog.require('domain.tumblr.post.Text');

describe('PostFactory', function () {
  var postFactory;
  var PostBaseModel;
  var PostTextModel;
  var PostQuoteModel;

  beforeEach(function () {
    var PostFactory = domain.tumblr.post.Factory;

    PostBaseModel  = domain.tumblr.post.Base;
    PostTextModel  = domain.tumblr.post.Text;
    PostQuoteModel = domain.tumblr.post.Quote;

    postFactory = new PostFactory(
      PostBaseModel,
      PostTextModel,
      PostQuoteModel
    );
  });

  it('has each post model', function () {
    expect(postFactory.PostBaseModel).toBe(PostBaseModel);
    expect(postFactory.PostTextModel).toBe(PostTextModel);
    expect(postFactory.PostQuoteModel).toBe(PostQuoteModel);
  });

  it('makes a text model', function () {
    var model = postFactory.make({
      type: 'text'
    });
    expect(model).toEqual(jasmine.any(PostTextModel));
  });

  it('makes a quote model', function () {
    var model = postFactory.make({
      type: 'quote'
    });
    expect(model).toEqual(jasmine.any(PostQuoteModel));
  });

  it('makes a base model', function () {
    var model = postFactory.make();
    expect(model).toEqual(jasmine.any(PostBaseModel));
  });
});
