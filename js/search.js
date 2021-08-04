function search() {
  var input, filter, post, div, i;

  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  div = document.getElementById("post");
  post = div.getElementsByTagName("p");

  for (i = 0; i < post.length; i++) {
    txtValue = post[i].textContent || post[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      post[i].style.display = "";

    } else {
      post[i].style.display = "none";
      //console.log(post[i].getAttribute('id'));

    }
  }
}