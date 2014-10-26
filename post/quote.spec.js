'use strict';

goog.require('domain.tumblr.post.Base');
goog.require('domain.tumblr.post.Quote');
goog.require('domain.tumblr.post.QuoteBuilder');

describe('PostQuoteModel', function () {
  var PostBaseModel;
  var PostQuoteModel;
  var PostQuoteModelBuilder;

  beforeEach(function () {
    PostBaseModel         = domain.tumblr.post.Base;
    PostQuoteModel        = domain.tumblr.post.Quote;
    PostQuoteModelBuilder = domain.tumblr.post.QuoteBuilder;
  });

  it('is a subclass of the base model', function () {
    var model = new PostQuoteModelBuilder().setModel(PostQuoteModel).build();
    expect(model).toEqual(jasmine.any(PostBaseModel));
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostQuoteModelBuilder().setModel(PostQuoteModel).build();
    });

    it('has a source url', function () {
      expect(model.sourceUrl).toBe('http://source-url.net');
    });

    it('has a source title', function () {
      expect(model.sourceTitle).toBe('source-url.net');
    });

    it('has text', function () {
      expect(model.text).toBe('foo bar baz');
    });

    it('has a source', function () {
      expect(model.source).toBe('<a href="">...</a>');
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual(PostQuoteModelBuilder.defaults);
    });
  });
});
