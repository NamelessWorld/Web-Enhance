  var picker = $('#picker-body');

  function showPicker() {
    if (picker.length == 0) {
      $('.btn-picker').append(' <div id="picker-body"></div>');
      picker = $('#picker-body');
    }
    var date = new Date();
    console.log(date);
    getYearView();
  }

  function getYearView() {
    var year = "";
    picker.empty();
    var yearContent = '<div class="cursor">' +
      '<div class="pre"><</div>' +
      '<div class="title noclick">' + year + '年 - ' + (year - -9) + '年</div>' +
      '<div class="next">></div>' +
      '</div>';
    yearContent = yearContent + "<div class='monthlist'>" +
      "<div class='nouse'>" + (year - 1) + "</div>" +
      "<div  class='yearlist' val='" + year + "'>" + year + "</div>" +
      "<div  class='yearlist' val='" + (year - -1) + "'>" + (year - -1) + "</div>" +
      "<div  class='yearlist' val='" + (year - -2) + "'>" + (year - -2) + "</div>" +
      "<div  class='yearlist' val='" + (year - -3) + "'>" + (year - -3) + "</div>" +
      "<div  class='yearlist' val='" + (year - -4) + "'>" + (year - -4) + "</div>" +
      "<div  class='yearlist' val='" + (year - -5) + "'>" + (year - -5) + "</div>" +
      "<div  class='yearlist' val='" + (year - -6) + "'>" + (year - -6) + "</div>" +
      "<div  class='yearlist' val='" + (year - -7) + "'>" + (year - -7) + "</div>" +
      "<div  class='yearlist' val='" + (year - -8) + "'>" + (year - -8) + "</div>" +
      "<div  class='yearlist' val='" + (year - -9) + "'>" + (year - -9) + "</div>" +
      "<div class='nouse'>" + (year - -10) + "</div>" +
      "</div>";
    picker.append(yearContent);
  }
