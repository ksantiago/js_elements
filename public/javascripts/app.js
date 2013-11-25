make$Element = function(options) {

  var $tag;

  if (options == null) {
    $tag = $('<div>');
  } else {
    $tag = $('<' + options.tagName + '>');
    $tag.addClass(options.className);
    $tag.attr('id', options.id);
  }
  return $tag;
};

var Model = function() {
  var model;
}

Model.prototype.options = {};

