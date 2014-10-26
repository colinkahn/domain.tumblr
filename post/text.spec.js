'use strict';

goog.require('domain.tumblr.post.Text');
goog.require('domain.tumblr.post.Base');
goog.require('domain.tumblr.post.TextBuilder');

describe('PostTextModel', function () {
  var PostBaseModel;
  var PostTextModel;
  var PostTextModelBuilder;

  beforeEach(function () {
    PostBaseModel        = domain.tumblr.post.Base;
    PostTextModel        = domain.tumblr.post.Text;
    PostTextModelBuilder = domain.tumblr.post.TextBuilder;
  });

  it('is a subclass of the base model', function () {
    var model = new PostTextModelBuilder().setModel(PostTextModel).build();
    expect(model).toEqual(jasmine.any(PostBaseModel));
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostTextModelBuilder().setModel(PostTextModel).build();
    });

    it('has a title', function () {
      expect(model.title).toBe('Milky Dog');
    });

    it('has a body', function () {
      expect(model.body).toBe('<p>Foo!</p>');
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual(PostTextModelBuilder.defaults);
    });
  });
});
