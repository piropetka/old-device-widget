function nothing() {
  return false;
}
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    $("[type='submit']").prop("disabled", true);
    var weatherUrl = "https://api.jsonbin.io/v3/b/685d63c98561e97a502c51f2/latest?meta=false";
    $("#weather-response").text("Loading...");
    // Clear table cells
    $("#w-location,#w-description,#w-temp,#w-feels,#w-min,#w-max,#w-sunrise,#w-sunset,#w-fetch").text("");
    $.ajax({
      url: weatherUrl,
      type: "GET",
      headers: {
        "X-Access-Key": "$2a$10$ighuwt7GfsVuJu5IJlU3TOp41N8YXVwXnlTrHRvAj2p6QhHFNMJdS"
      },
      dataType: "json",
      success: function (data) {
        var weather = data && data.weather ? data.weather : null;
        if (weather) {
          $("#w-location").text(weather.name || "");
          $("#w-description").text(weather.description || "");
          $("#w-temp").text(weather.temp !== undefined ? Math.round(weather.temp) + "°C" : "");
          $("#w-feels").text(weather.feels_like !== undefined ? Math.round(weather.feels_like) + "°C" : "");
          $("#w-min").text(weather.temp_min !== undefined ? "Min: " + Math.round(weather.temp_min) + "°C" : "");
          $("#w-max").text(weather.temp_max !== undefined ? "Max: " + Math.round(weather.temp_max) + "°C" : "");
          $("#w-sunrise").text(weather.sunrise || "");
          $("#w-sunset").text(weather.sunset || "");
          $("#w-fetch").text(weather.fetch_time_str || "");
          $("#weather-response").text("");
        } else {
          $("#weather-response").text("No weather data found.");
        }
        $("[type='submit']").prop("disabled", false);
      },
      error: function () {
        $("#weather-response").text("Failed to load data.");
        $("[type='submit']").prop("disabled", false);
      }
    });
    return false;
  });
  $("form").submit();
});