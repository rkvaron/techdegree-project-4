var userSearch =  document.getElementById('#search');
var searchResults = [];
var captionList;

function print(results) {
  document.write(results);
}


function myFunction() {
   // Declare variables
   var input, filter, gallery, item, a, i;
   input = document.getElementById('search');
   filter = input.value.toUpperCase();
   gallery = document.getElementById("image_gallery");
   item = gallery.getElementsByClass("gallery_item");

   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < item.length; i++) {
       a = item[i].getElementsByTagName("a")[data-caption];
       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
           li[i].style.display = "";
       } else {
           li[i].style.display = "none";
       }
   }
}



/*create the array to search from

for ( var i = 0; i < 12; i+=1 ) {
  captions =
  searchResults.push(captions);
  console.log(searchResults[i]);
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
