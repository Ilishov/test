

// TehnicaPesimista
function TehnicaPesimista() {
  var rows = $("#rows").val();
  var columns = $("#columns").val();
  var matrix = $("#matrix");
  var result = new Array(rows);

  for (var i = 0; i < rows; i++) {
    var firstId = "#" + i + "0";
    var min = $(firstId).val();

    for (var j = 0; j < columns; j++) {
        var id = "#" + i + j;

        if ($(id).val() < min)
          min = $(id).val();
    }

    result[i] = min;
  }

  var max = result[0];

  for (var i = 0; i < rows; i++)
  {
    $("#result").append('<p>Minimul pentru rindul ' + (i + 1) + ': ' + result[i] + '</p>');

    if (max < result[i])
      max = result[i];
  }

  $("#result").append('<p>Maximum din minimuri: ' + max + '</p>');

}


for (var i = 0; i < array.length; i++) {
  array[i]
}
