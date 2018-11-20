$(function() {
  var index = 0,
    timer = null,
    len = $("img").length;

  function automaticSwitch() {
    timer = setInterval(function() {
      index++;
      if (index >= len) {
        index = 0;
      }
      changeImg();
    }, 2000);
  }
  automaticSwitch();
  function stopAutomatic() {
    if (timer) clearInterval(timer);
  }
  function changeImg() {
    $("img")
      .eq(index)
      .addClass("img-active")
      .siblings()
      .removeClass("img-active");
    $(".dot")
      .eq(index)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  function slideImg() {
    $(".container")
      .mouseover(function() {
        stopAutomatic();
      })
      .mouseout(function() {
        automaticSwitch();
      });
  }
  slideImg();
  $(".prev").click(function() {
    index--;
    if (index < 0) {
      index = len - 1;
    }
    changeImg();
  });
  $(".next").click(function() {
    index++;
    if (index >= len) {
      index = 0;
    }
    changeImg();
  });
  $(".dot").click(function() {
    index = $(this).index();
    changeImg();
  });
});
