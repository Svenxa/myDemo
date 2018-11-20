$(document).ready(function($) {
  // 登录链接事件
  $("#loginButton").click(function() {
    showLogin();
    // 登录表单失焦校验
    $("input[name='username']")
      .eq(0)
      .blur(function() {
        var username = $("input[name='username']").val();
        if (username.length != 11) {
          $(".error-msg1").html("请输入正确邮箱或手机号");
        } else {
          $(".error-msg1").html("");
        }
      });
    $("#password").blur(function() {
      var password = $("#password").val();
      if (password.length < 6 || password.length > 16) {
        $(".error-msg2").html("请输入6-16位密码，区分大小写，不能用空格!");
      } else {
        $(".error-msg2").html("");
      }
    });
    // 注册表单失焦校验
    $("input[name='username']")
      .eq(1)
      .blur(function() {
        var username1 = $("input[name='username']")
          .eq(1)
          .val();
        if (username1.length != 11) {
          $(".error-msg1")
            .eq(1)
            .html("请输入正确邮箱或手机号");
        } else {
          $(".error-msg1")
            .eq(1)
            .html("");
        }
      });

    $("input[name='yzm']").blur(function() {
      var yzm = $("input[name='yzm']").val();
      if (yzm !== "gyyd") {
        $(".error-msg3").html("验证码输入错误");
      } else {
        $(".error-msg3").html("");
      }
    });
  });
  // 登录页显示
  function showLogin() {
    $(".login-mask").show();
    $(".login-pop").show();
    // 登录单击事件
    showLoginPop();
    $("#login").click(function() {
      showLoginPop();
    });
    // 注册单击事件
    $("#register").click(function() {
      showRegister();
    });
    // 关闭单击事件
    $("#pop-close").click(function() {
      hideLogin();
      closeCallback();
    });
  }
  // 登录页关闭
  function hideLogin() {
    $(".login-mask").hide();
    $(".login-pop").hide();
  }
  // 登录页关闭回调函数
  function closeCallback() {
    $(".error-msg1").html("");
    $(".error-msg2").html("");
    $(".error-msg3").html("");
  }
  // 显示登录窗体
  function showLoginPop() {
    $(".login-pop").css({
      width: "300px",
      height: "335px"
    });
    $(".pop-register").hide();
    $("#register").css("border", "none");
    $(".pop-login").show();
    $("#login").css("border-bottom", "3px solid #e40");
    $(".input")
      .eq(2)
      .val("");
    $(".input")
      .eq(3)
      .val("");
    closeCallback();
  }
  // 显示注册窗体
  function showRegister() {
    $(".login-pop").css({
      width: "300px",
      height: "305px"
    });
    $(".pop-login").hide();
    $("#login").css("border", "none");
    $(".pop-register").show();
    $("#register").css("border-bottom", "3px solid #e40");
    $(".input")
      .eq(0)
      .val("");
    $(".input")
      .eq(1)
      .val("");
    closeCallback();
  }

  // 购物车鼠标经过事件
  $(".shoppingCarBox").mouseover(function() {
    $(".shoppingCarContent").css({
      "background-color": "#fff",
      color: "#e40"
    });
    $(".shoppingCarContent")
      .children()
      .first()
      .css("src='../image/icon/25.png'");
    $(".shoppingCarBc").css("border-right", "1px solid #ccc");
    $(".scci1").addClass("cscci1");
    $(".scci2").addClass("cscci2");
    $(this).addClass("shoppingCarBoxBorder");
    $(".shoppingCarSelect").show();
  });
  // 购物车鼠标离开事件
  $(".shoppingCarBox").mouseout(function() {
    $(".shoppingCarContent").css({
      "background-color": "#e40",
      color: "#fff"
    });
    $(".shoppingCarContent")
      .children()
      .first()
      .css("src='../image/icon/25.png'");
    $(".shoppingCarBc").css("border-right", "1px solid #fff");
    $(".scci1").removeClass("cscci1");
    $(".scci2").removeClass("cscci2");
    $(this).css("border", "1px solid #ccc");
    $(".shoppingCarSelect").hide();
  });
  // 轮播图事件
  var index = 0,
    timer = null,
    img = $(".carouselContentImg").children(),
    len = img.length;

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
    img
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
    $(".focusCarousel")
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
  // 商品分类事件
  $(".sortList2").mouseover(function() {
    $(".sortSmall").show();
    $(this).css({
      "background-color": "#fff",
      color: "#f00"
    });
    $(".sortSmall").mouseover(function() {
      $(this).show();
    });
    $(".sortSmall").mouseout(function() {
      $(this).hide();
    });
  });
  $(".sortList2").mouseout(function() {
    $(".sortSmall").hide();
    $(this).css({
      "background-color": "#f00",
      color: "#fff"
    });
  });

  // 分类导航事件
  // 楼层1事件
  $(".fn1")
    .children()
    .eq(0)
    .mouseover(function() {
      $(".f1fc1").show();
      $(".f1fc2").hide();
      $(".f1fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn1")
    .children()
    .eq(2)
    .mouseover(function() {
      $(".f1fc2").show();
      $(".f1fc1").hide();
      $(".f1fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn1")
    .children()
    .eq(4)
    .mouseover(function() {
      $(".f1fc3").show();
      $(".f1fc1").hide();
      $(".f1fc2").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  // 楼层2事件
  $(".fn2")
    .children()
    .eq(0)
    .mouseover(function() {
      $(".f2fc1").show();
      $(".f2fc2").hide();
      $(".f2fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn2")
    .children()
    .eq(2)
    .mouseover(function() {
      $(".f2fc2").show();
      $(".f2fc1").hide();
      $(".f2fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn2")
    .children()
    .eq(4)
    .mouseover(function() {
      $(".f2fc3").show();
      $(".f2fc1").hide();
      $(".f2fc2").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  // 楼层3事件
  $(".fn3")
    .children()
    .eq(0)
    .mouseover(function() {
      $(".f3fc1").show();
      $(".f3fc2").hide();
      $(".f3fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn3")
    .children()
    .eq(2)
    .mouseover(function() {
      $(".f3fc2").show();
      $(".f3fc1").hide();
      $(".f3fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn3")
    .children()
    .eq(4)
    .mouseover(function() {
      $(".f3fc3").show();
      $(".f3fc1").hide();
      $(".f3fc2").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  // 楼层4事件
  $(".fn4")
    .children()
    .eq(0)
    .mouseover(function() {
      $(".f4fc1").show();
      $(".f4fc2").hide();
      $(".f4fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn4")
    .children()
    .eq(2)
    .mouseover(function() {
      $(".f4fc2").show();
      $(".f4fc1").hide();
      $(".f4fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn4")
    .children()
    .eq(4)
    .mouseover(function() {
      $(".f4fc3").show();
      $(".f4fc1").hide();
      $(".f4fc2").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  // 楼层5事件
  $(".fn5")
    .children()
    .eq(0)
    .mouseover(function() {
      $(".f5fc1").show();
      $(".f5fc2").hide();
      $(".f5fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn5")
    .children()
    .eq(2)
    .mouseover(function() {
      $(".f5fc2").show();
      $(".f5fc1").hide();
      $(".f5fc3").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  $(".fn5")
    .children()
    .eq(4)
    .mouseover(function() {
      $(".f5fc3").show();
      $(".f5fc1").hide();
      $(".f5fc2").hide();
      $(this)
        .addClass("fnred")
        .siblings()
        .removeClass("fnred");
    });
  // 滚动显示楼层导航事件
  $(window).scroll(function() {
    var ling = $(document).scrollTop();
    if (ling >= 500) {
      $(".leftNav").show();
    } else {
      $(".leftNav").hide();
    }
  });
  $('#backTop').click(function(){
    $(window).scrollTop(0);
  })
});
