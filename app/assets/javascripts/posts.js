$(document).ready(function () {
  $('span.glyphicon.like-icon').on('click', function (e) {
    var that = this;
    $.ajax({
    url: '/posts/' + $(this).data('id') + '/like',
    method: 'put'
    }).done(function (response) {
      $(that)
      .parent()
      .find('.like-count')
      .html(response.likes)
      .addClass('flash');
    });
  });
})
