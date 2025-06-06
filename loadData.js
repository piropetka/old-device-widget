function nothing() {
  return false;
}
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    $("[type='submit']").prop("disabled", true);
    var wordsGroupUrl = "https://api.jsonbin.io/v3/b/637d40f465b57a31e6bfb872/latest?meta=false";
    $("#words-response").text("Loading...");
    $.ajax({
      url: wordsGroupUrl,
      type: "GET",
      headers: {
        "X-Access-Key": "$2b$10$71xxBdHxC6yhejbkvOo2u.25nY.VP5jj1yPkhpl6YT78yw1ZqGSh2"
      },
      dataType: "json",
      success: function (data) {
        // Show the whole JSON response as text
        $("#words-response").text(JSON.stringify(data));
        $("[type='submit']").prop("disabled", false);
      },
      error: function () {
        $("#words-response").text("Failed to load data.");
        $("[type='submit']").prop("disabled", false);
      }
    });
    return false;
  });
});