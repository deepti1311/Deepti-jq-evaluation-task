$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    function MemberInfo(name, age, memberId) {
      this.name = name;
      this.age = age;
      // this.LastName=lName;
      // this.MemberId=memberId;
    }

    $("#save").click(function () {
      $("#dataTable")
        .find("tbody")
        .append(
          $("<tr>")
            .append($("<td>").text($("#name").val()))
            .append($("<td>").text($("#age").val()))
          // .append($('<td>')
          // .text($('#mId').val()))
        );

      $("#name").val("");
      $("#age").val("");
      // $('#mId').val('');

      var arr = [];
      $("#dataTable")
        .find("tbody tr")
        .each(function (index, item) {
          var name = $(item).find("td").eq(0).text();
          var age = $(item).find("td").eq(1).text();
          // var memberId=$(item).find('td').eq(2).text();
          arr.push(new MemberInfo(name, age, memberId));
        });

      localStorage.setItem("memberData", arr);
    });
  });
});
