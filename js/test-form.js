$(document).ready(function () {
  // $("#form").click(function (event) {
  $("#form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
        onlytext: true,
      },

      age: {
        required: true,
        maxlength: 2,
        min: 18,
        max: 25,
        age: true,
      },

      phone: {
        required: true,
        // maxlength: 10,
        // max: 10,
        phone: true,
      },

      email: {
        required: true,
        email: true,
        mail: true,
      },

      gender: { required: true },

      sun: { required: true },
      mon: { required: true },
      tue: { required: true },
      wed: { required: true },
      thu: { required: true },
      fri: { required: true },
      sat: { required: true },
      Day: { required: true },
    },

    messages: {
      fname: {
        required: "enter name ",
        minlength: "Name should be at least 3 characters",
      },

      age: {
        required: "enter your age",
        min: "enter  age between 18-25",
        max: "enter  age between 18-25",
        age: "age limit 18-25",
      },

      phone: {
        required: "enter phone number ",
        // maxlength: "10 characters only",
        // max: " 10 characters only",
        // placeholder: "match the field",
      },
      email: {
        email: "The email should be in the format: abc@tntra.io",
      },

      gender: {
        required: "Please select a gender",
      },
      sun: {
        required: "hello paras well done!!",
      },
    },

    errorPlacement: function (error, element) {
      if (element.is(":checkbox")) {
        error.insertAfter("#cb");
      } else if (element.is(":radio")) {
        error.insertAfter("#other1");
      } else {
        // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
  });

  {
    $("#form").submit(function (event) {
      event.preventDefault();
      // localStorage.clear();
      // debugger;

      if (
        $("#sunday").is(":checked") ||
        $("#monday").is(":checked") ||
        $("#tuesday").is(":checked") ||
        $("#wednesday").is(":checked") ||
        $("#thursday").is(":checked") ||
        $("#friday").is(":checked") ||
        $("#saturday").is(":checked")
      ) {
        var flag = true;
      } else {
        var flag = false;
      }

      var flag2 = true;

      if ($("#sunday").is(":checked") && $("#sun").val() == "none") {
        var flag2 = false;
      }
      if ($("#monday").is(":checked") && $("#mon").val() == "none") {
        var flag2 = false;
      }
      if ($("#tuesday").is(":checked") && $("#tue").val() == "none") {
        var flag2 = false;
      }
      if ($("#wednesday").is(":checked") && $("#wed").val() == "none") {
        var flag2 = false;
      }
      if ($("#thursday").is(":checked") && $("#thu").val() == "none") {
        var flag2 = false;
      }
      if ($("#friday").is(":checked") && $("#fri").val() == "none") {
        var flag2 = false;
      }
      if ($("#saturday").is(":checked") && $("#sat").val() == "none") {
        var flag2 = false;
      }

      if (
        $("#fname").valid() &&
        $("#age").valid() &&
        $("#phone").valid() &&
        $("#email").valid() &&
        $("input[name='gender']:checked") != undefined &&
        $("#Day").valid() &&
        flag &&
        flag2
      ) {
        localStorage.setItem("fname", $("#fname").val());

        localStorage.setItem("age", $("#age").val());
        localStorage.setItem("phone", $("#phone").val());
        localStorage.setItem("email", $("#email").val());
        localStorage.setItem("gender", $("input[name='gender']:checked").val());

        localStorage.setItem("sunday", $("#sun").val());
        localStorage.setItem("monday", $("#mon").val());
        localStorage.setItem("tuesday", $("#tue").val());
        localStorage.setItem("wednesday", $("#wed").val());
        localStorage.setItem("thursday", $("#thu").val());
        localStorage.setItem("friday", $("#fri").val());
        localStorage.setItem("saturday", $("#sat").val());

        // console.log(
        //   fname,
        //   age,
        //   phone,
        //   email,
        //   gender,
        //   sunday,
        //   monday,
        //   tuesday,
        //   wednesday,
        //   thursday,
        //   friday,
        //   saturday
        // );
        window.open("../htm/test-data.html");

        $("#disTable").append(
          "<tr><td>" +
            fname +
            "</td><td>" +
            age +
            "</td><td>" +
            phone +
            "</td><td>" +
            email +
            "</td><td>" +
            gender +
            "</td><td>" +
            sunday +
            "</td><td>" +
            monday +
            "</td><td>" +
            tuesday +
            "</td><td>" +
            wednesday +
            "</td><td>" +
            thursday +
            "</td><td>" +
            friday +
            "</td><td>" +
            saturday +
            "</td></tr>"
        );
      }
    });
  }
  // });
  $.validator.addMethod(
    "onlytext",
    function (value) {
      return /^[a-zA-Z]+(\s{0,1}[a-zA-Z]\s{0,1})*$/.test(value);
    },
    "enter a valid input"
  );

  $.validator.addMethod(
    "age",
    function (value) {
      return /[0-9]$/.test(value);
    },
    "enter valid age"
  );

  $.validator.addMethod(
    "phone",
    function (value) {
      return /^\(?([7-9]{1})\)?[-. ]?([0-9]{9})$/.test(value);
    },
    "enter valid phone number "
  );
  $.validator.addMethod(
    "mail",
    function (value) {
      return /^([A-Za-z0-9_\-\.])+\@([tntra|gmail])+\.(io)$/.test(value);
    },
    "enter a valid mail"
  );

  $("#Day").click(cb_func);
  cb_func();

  function cb_func() {
    if (!this.checked) {
      document.getElementById("sunday").checked = false;
      document.getElementById("monday").checked = false;
      document.getElementById("tuesday").checked = false;
      document.getElementById("wednesday").checked = false;
      document.getElementById("thursday").checked = false;
      document.getElementById("friday").checked = false;
      document.getElementById("saturday").checked = false;
      $("#sun")[0].value = "none ";
      // $("#sun")[0].value = ;
      $("#mon")[0].value = "none ";
      $("#tue")[0].value = "none ";
      $("#wed")[0].value = "none ";
      $("#thu")[0].value = "none ";
      $("#fri")[0].value = "none ";
      $("#sat")[0].value = "none ";

      $("#sunday").attr("disabled", true);
      $("#monday").attr("disabled", true);
      $("#tuesday").attr("disabled", true);
      $("#wednesday").attr("disabled", true);
      $("#thursday").attr("disabled", true);
      $("#friday").attr("disabled", true);
      $("#saturday").attr("disabled", true);
      $("#sun").attr("disabled", true);
      $("#mon").attr("disabled", true);
      $("#tues").attr("disabled", true);
      $("#wed").attr("disabled", true);
      $("#thurs").attr("disabled", true);
      $("#fri").attr("disabled", true);
      $("#sat").attr("disabled", true);
    } else {
      $("#sunday").removeAttr("disabled");
      $("#monday").removeAttr("disabled");
      $("#tuesday").removeAttr("disabled");
      $("#wednesday").removeAttr("disabled");
      $("#thursday").removeAttr("disabled");
      $("#friday").removeAttr("disabled");
      $("#saturday").removeAttr("disabled");
    }
  }

  $(function () {
    enable_cb(); // this function will enable all the days
    $("#Day").click(enable_cb);
    disable_cb();
    $("#Day").click(disable_cb);
  });

  function enable_cb() {
    if (this.checked) {
      $("#sunday").removeAttr("disabled");
      $("#monday").removeAttr("disabled");
      $("#tuesday").removeAttr("disabled");
      $("#wednesday").removeAttr("disabled");
      $("#thursday").removeAttr("disabled");
      $("#friday").removeAttr("disabled");
      $("#saturday").removeAttr("disabled");
    }
  }
  function disable_cb() {
    if (!this.checked) {
      $("#sunday").attr("disabled", true);
      $("#monday").attr("disabled", true);
      $("#tuesday").attr("disabled", true);
      $("#wednesday").attr("disabled", true);
      $("#thursday").attr("disabled", true);
      $("#friday").attr("disabled", true);
      $("#saturday").attr("disabled", true);
      $("#sun").val("none").change();
      $("#sun").attr("disabled", true);
      $("#mon").val("none").change();
      $("#mon").attr("disabled", true);
      $("#tue").val("none").change();
      $("#tue").attr("disabled", true);
      $("#wed").val("none").change();
      $("#wed").attr("disabled", true);
      $("#thu").val("none").change();
      $("#thu").attr("disabled", true);
      $("#fri").val("none").change();
      $("#fri").attr("disabled", true);
      $("#sat").val("none").change();
      $("#sat").attr("disabled", true);
    }
  }

  //   now enable each select time based on the day is cheked or not
  $(function () {
    enable_cb1(); // this function will enable sunday pickup time
    $("#sunday").click(enable_cb1);
    disable_cb1();
    $("#sunday").click(disable_cb1);
  });
  function enable_cb1() {
    if (this.checked) {
      $("#sun").removeAttr("disabled");
    }
  }
  function disable_cb1() {
    if (!this.checked) {
      $("#sun").val("none").change();
      $("#sun").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb2(); // this function will enable sunday pickup time
    $("#monday").click(enable_cb2);
    disable_cb2();
    $("#monday").click(disable_cb2);
  });
  function enable_cb2() {
    if (this.checked) {
      $("#mon").removeAttr("disabled");
    }
  }
  function disable_cb2() {
    if (!this.checked) {
      $("#mon").val("none").change();
      $("#mon").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb3(); // this function will enable sunday pickup time
    $("#tuesday").click(enable_cb3);
    disable_cb1();
    $("#tuesday").click(disable_cb3);
  });
  function enable_cb3() {
    if (this.checked) {
      $("#tue").removeAttr("disabled");
    }
  }
  function disable_cb3() {
    if (!this.checked) {
      $("#tue").val("none").change();
      $("#tue").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb4(); // this function will enable sunday pickup time
    $("#wednesday").click(enable_cb4);
    disable_cb4();
    $("#wednesday").click(disable_cb4);
  });
  function enable_cb4() {
    if (this.checked) {
      $("#wed").removeAttr("disabled");
    }
  }
  function disable_cb4() {
    if (!this.checked) {
      $("#wed").val("none").change();
      $("#wed").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb5(); // this function will enable sunday pickup time
    $("#thursday").click(enable_cb5);
    disable_cb1();
    $("#thursday").click(disable_cb5);
  });
  function enable_cb5() {
    if (this.checked) {
      $("#thu").removeAttr("disabled");
    }
  }
  function disable_cb5() {
    if (!this.checked) {
      $("#thu").val("none").change();
      $("#thu").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb6(); // this function will enable sunday pickup time
    $("#friday").click(enable_cb6);
    disable_cb6();
    $("#friday").click(disable_cb6);
  });
  function enable_cb6() {
    if (this.checked) {
      $("#fri").removeAttr("disabled");
    }
  }
  function disable_cb6() {
    if (!this.checked) {
      $("#fri").val("none").change();
      $("#fri").attr("disabled", true);
    }
  }

  $(function () {
    enable_cb7(); // this function will enable sunday pickup time
    $("#saturday").click(enable_cb7);
    disable_cb7();
    $("#saturday").click(disable_cb7);
  });
  function enable_cb7() {
    if (this.checked) {
      $("#sat").removeAttr("disabled");
    }
  }
  function disable_cb7() {
    if (!this.checked) {
      $("#sat").val("none").change();
      $("#sat").attr("disabled", true);
    }
  }
});
