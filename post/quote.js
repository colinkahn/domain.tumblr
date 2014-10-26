goog.require('domain.tumblr.post.Base');
goog.provide('domain.tumblr.post.Quote');

(function () {
  var PostBaseModel = domain.tumblr.post.Base;

  function PostQuoteModel (
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
    sourceUrl,
    sourceTitle,
    text,
    source
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

    this.sourceUrl = sourceUrl;
    this.sourceTitle = sourceTitle;
    this.text = text;
    this.source = source;
  }

  PostQuoteModel.prototype = Object.create(PostBaseModel.prototype);
  PostQuoteModel.prototype.constructor = PostQuoteModel;

  PostQuoteModel.prototype.toJSON = function () {
    return angular.extend({
      source_url: this.sourceUrl,
      source_title: this.sourceTitle,
      text: this.text,
      source: this.source
    }, PostBaseModel.prototype.toJSON.call(this));
  };

  domain.tumblr.post.Quote = PostQuoteModel;
})();
