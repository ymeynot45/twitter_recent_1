
$(document).ready(function() {

  var wait_image = function(){
  return "<img id='dude' src='http://www.reactiongifs.com/wp-content/uploads/2013/05/DudeWaiting.gif'/>";
  };

  var wait_message = function() {
    return "<h1 id='wait-head'> Could you maybe like...wait?</h1>";
  };


  var url = $('#url');
  var container = $('.container');
  var title = $('h1');

  $('#url').on('submit', function(event){
    $('#tweet-list').empty();
    var username = $('input[name="username"]').val();
    var route = "/" + username;
    console.log(username);
    event.preventDefault();
    // (title).replaceWith(wait_message);
    title.after(wait_message);
    title.hide();
    url.after(wait_image());
    url.hide();
    $('#dude').css('border','10px solid grey');
    $.get(route, function(response) {
      $('#tweet-list').append(response);
      $('#dude').remove();
      url.show();
      $('#wait-head').hide();
      title.show();

    });
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


// Displays a please wait message, maybe using a spinner gif.
// Upon loading, fires off an AJAX request which refreshes 
// the cache (this will require a new URL).
// That AJAX call should return HTML which contains the 
// list of tweets to be rendered, after populating the 
// cache. Re-use your view partials; don't duplicate the 
// HTML in two views.
// Replace the "please wait" message with the list of 
// tweets as it would be displayed were the cache fresh