

function print(results) {
  document.write(results);
}


function myFunction() {
  // Declare variables
  var userSearch;
  userSearch = document.getElementById('search');
  var filter;
  filter = userSearch.value.toUpperCase();
  var ul;
  ul = document.getElementById("image_gallery");
  var li;
  li = ul.getElementsByTagName('li');
  var a, i;
  var searchResults = [];
  var caption = document.getElementsByTagName("A")[0].getAttribute("data-caption");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i+=1 ) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.getAttribute("data-caption").toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






/*You just need to target the search input in your JS and attach a keyup event listener to it.  */
/* create the array of captions that have the search content. Then inside the event listener, you would grab the value of the search input and change it to all upper or lower case to make it case insensitive.

function searchMatch(list) {
  for (var i = 0; i < searchResults.length; i+=1) {


  }
}

userSearch.on(keyup, function (){
  userSearch.toLowercase();

    for ( var i = 0; i < 12; i +=1 ){

  }

});







/*Then you loop over all of the elements containing the caption text for each image, and inside that loop, you use a conditional statement to check if the search input value is contained within any of the captions.  But make sure to upper or lower case the captions too, just as you did for the search value.

loop through .gallery_item captions >  searchResults.push()



/*And finally, if the search value is not contained in the caption, you hide the image associated with it.  Lots of fun! */
