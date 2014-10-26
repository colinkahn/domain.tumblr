goog.provide('domain.tumblr.post.Text');
goog.require('domain.tumblr.post.Base');

(function () {
  var PostBaseModel = domain.tumblr.post.Base;

  function PostTextModel (
    id,
    blogName,
    postUrl,
    type,
    date,
    timestamp,
    format,
    reblogKey,
    tags,
    noteCount,
    title,
    body
  ) {
    PostBaseModel.call(
      this,
      id,
      blogName,
      postUrl,
      type,
      date,
      timestamp,
      format,
      reblogKey,
      tags,
      noteCount
    );

    this.title = title;
    this.body = body;
  }

  PostTextModel.prototype = Object.create(PostBaseModel.prototype);
  PostTextModel.prototype.constructor = PostTextModel;

  PostTextModel.prototype.toJSON = function () {
    return angular.extend({
      title: this.title,
      body: this.body
    }, PostBaseModel.prototype.toJSON.call(this));
  };

  domain.tumblr.post.Text = PostTextModel;
})();
