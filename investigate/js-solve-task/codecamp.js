<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        json.forEach(function(val) {
            var keys = Object.keys(val);
            html += "<div class = 'cat'>";
            html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
            
            keys.forEach(function(key) {
                html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
            });
            html += "</div><br>";
        });
        $(".message").html(html);
      });
    });
  });
</script>


id: 0
imageLink: https://s3.amazonaws.com/freecodecamp/funny-cat.jpg
altText: A white cat wearing a green helmet shaped melon on it's head.
codeNames: Juggernaut,Mrs. Wallace,Buttercup

id: 1
imageLink: https://s3.amazonaws.com/freecodecamp/grumpy-cat.jpg
altText: A white cat with blue eys, looking very grumpy.
codeNames: Oscar,Scrooge,Tyrion

id: 2
imageLink: https://s3.amazonaws.com/freecodecamp/mischievous-cat.jpg
altText: A ginger cat with one eye closed and mouth in a grin-like expression. Looking very mischievous.
codeNames: The Doctor,Loki,Joker

====================='
geolocation
=====================
<script>
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
}
</script>
<div id = "data">
  <h4>You are here:</h4>
</div>