var rallyForm = document.getElementById('rallyData');
var t = TrelloPowerUp.iframe();

rallyForm.onsubmit = function () {
  t.card('name').then(nameCallback, handleError);

  function nameCallback(data) {
    // emdash
    var id = data.name.split('—')[0].trim();

    var data = {
      _ref: id,
      Actuals: document.getElementById('hours').value
    };

    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.open("PUT", "/api/defect");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function (response) {
      document.getElementById('status').innerHTML = 'Saved to Rally';
    };
    xmlhttp.send(JSON.stringify(data));
  }

  function handleError(err){
    console.log(err);
  }
}
