$(document).ready(function () {
  $("#form").click(function (event) {
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
          maxlength: 10,
          phone: true,
        },

        email: {
          required: true,
          email: true,
          mail: true,
        },

        gender: { required: true },
        Day: { required: true },
        sun: { required: true },
        mon: { required: true },
        tue: { required: true },
        wed: { required: true },
        thu: { required: true },
        fri: { required: true },
        sat: { required: true },
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
          maxlength: "phone number should be at least 10 characters",
          placeholder: "match the field",
        },
        email: {
          email: "The email should be in the format: abc@tntra.io",
        },

        gender: {
          required: "Please select a gender",
        },
      },

      // errorPlacement: function (error, element) {
      //   // debugger
      //   if (!$(this).element.is(":radio")) {
      //     error.insertAfter("#genderTest");
      //   } else {
      //     // This is the default behavior of the script for all fields
      //     error.insertAfter(element);
      //   }
      // },

      errorPlacement: function (error, element) {
        if (element.is(":checkbox")) {
          error.insertAfter("#cb");
        } else {
          // This is the default behavior of the script for all fields
          error.insertAfter(element);
        }
      },
    });

    if (
      $("#fname").valid() &&
      $("#age").valid() &&
      $("#phone").valid() &&
      $("#email").valid() &&
      $("input[name='gender']:checked") != undefined
    ) {
      $("#form").submit(function (event) {
        // event.preventDefault();
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

        console.log(
          fname,
          lname,
          age,
          phone,
          email,
          gender,
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday
        );

        $("#disTable").append(
          "<tr><td>" +
            fname +
            " " +
            lname +
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
      });
    }
  });
  $.validator.addMethod(
    "onlytext",
    function (value) {
      return /^[a-z\s]+$/.test(value);
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
    "enter valid phone number"
  );
  $.validator.addMethod(
    "mail",
    function (value) {
      return /^([A-Za-z0-9_\-\.])+\@([tntra|gmail])+\.(io)$/.test(value);
    },
    "enter a valid mail"
  );

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
      $("#sun").attr("disabled", true);
      $("#mon").attr("disabled", true);
      $("#tue").attr("disabled", true);
      $("#wed").attr("disabled", true);
      $("#thu").attr("disabled", true);
      $("#fri").attr("disabled", true);
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
      $("#sat").attr("disabled", true);
    }
  }
});

