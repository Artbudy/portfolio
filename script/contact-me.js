jQuery(document).ready(function($) {
  $("#send_message").click(function(e) {
    e.preventDefault();
    var error = false;
    var topic = $("#topic").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    if (topic.length == 0) {
      var error = true;
      $(".contact_topic")
        .queue(function() {
          $(this)
            .addClass("error")
            .dequeue();
        })
        .delay(5000)
        .queue(function() {
          $(this)
            .removeClass("error")
            .dequeue();
        });
    } else {
      $("#topic").removeClass("error");
    }
    /*
    if (name.length == 0) {
      var error = true;
      $(".contact_name")
        .queue(function() {
          $(this)
            .addClass("error")
            .dequeue();
        })
        .queue(function() {
          $(this)
            .attr("placeholder", "Please type your name")
            .dequeue();
        })
        .delay(5000)
        .queue(function() {
          $(this)
            .removeClass("error")
            .dequeue();
        });
    } else {
      $(".contact_name").removeClass("error");
    }*/
    if (email.length == 0 || email.indexOf("@") == "-1") {
      var error = true;
      $(".contact_email")
        .queue(function() {
          $(this)
            .addClass("error")
            .dequeue();
        })
        .queue(function() {
          $(this)
            .attr("placeholder", "Please enter your email")
            .dequeue();
        })
        .delay(5000)
        .queue(function() {
          $(this)
            .removeClass("error")
            .dequeue();
        });
    } else {
      $(".contact_email").removeClass("error");
    }
    if (subject.length == 0) {
      var error = true;
      $(".contact_subject")
        .queue(function() {
          $(this)
            .addClass("error")
            .dequeue();
        })
        .queue(function() {
          $(this)
            .attr("placeholder", "Please write a subject")
            .dequeue();
        })
        .delay(5000)
        .queue(function() {
          $(this)
            .removeClass("error")
            .dequeue();
        });
    } else {
      $(".contact_subject").removeClass("error");
    }
    if (message.length == 0) {
      var error = true;
      $(".contact_message")
        .queue(function() {
          $(this)
            .addClass("error")
            .dequeue();
        })
        .queue(function() {
          $(this)
            .attr("placeholder", "Please type your message")
            .dequeue();
        })
        .delay(5000)
        .queue(function() {
          $(this)
            .removeClass("error")
            .dequeue();
        });
    } else {
      $(".contact_message").removeClass("error");
    }
    if (error == true) {
      $("#send_message")
        .queue(function(next) {
          $(this).html('Please correct the errors');
          next();
          $(this).dequeue();
        })
        .delay(5000)
        .queue(function(next) {
          $(this).html("Send Message");
          next();
          $(this).dequeue();
        });
    } else if (error == false) {
      $("#send_message")
        .html('Sending')
        .delay(2000)
        .queue(function(next) {
          $.post("send_email.php", $("#contact_form").serialize(), function(result) {
            var r = result;
            if (r == 1) {
              $("#contact_form")[0].reset();
              $("#send_message")
                .html('Message Sent')
                .delay(5000)
                .queue(function(next) {
                  $(this).html("Send Message");
                  next();
                });
            } else {
              $("#send_message")
                .html('Something went wrong. Please try again later.')
                .delay(5000)
                .queue(function(next) {
                  $(this).html("Send Message");
                  next();
                });
            }
          });
          next();
        });
    }
  });
});
