var rallyForm = document.getElementById('rallyData');
var t = TrelloPowerUp.iframe();

rallyForm.onsubmit = function(){

  var id = t.card('name').split('—')[0].trim();
  var data = {
    _ref: id,
    Actuals: document.getElementById('hours')
  };

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
xmlhttp.open("PUT", "/api/defect");
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.onload = function(response){
  document.getElementById('status').innerHTML = 'Saved to Rally';
};
xmlhttp.send(data);
}
