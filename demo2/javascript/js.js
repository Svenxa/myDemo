// 封装一个代替getElementById()的方法
function byid(id) {
  return typeof id === "string" ? document.getElementById(id) : id;
}

// 全局变量
var content = byid("content").getElementsByTagName("div"),
  title = byid("title").getElementsByTagName("div"),
  len = content.length,
  index = 0,
  timer = null;

// 清除定时器,停止自动播放
function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
  }
}

// 图片自动轮播
function startAutoPlay() {
  timer = setInterval(function() {
    index++;
    if (index >= len) {
      index = 0;
    }
    changeImg();
  }, 1000);
}

function slideImg() {
  var main = byid("main");
  // 当鼠标停留在整个页面上时，清除定时器,停止自动播放
  main.onmouseover = function() {
    stopAutoPlay();
  };
  // 当鼠标离开页面时，图片开始轮播
  main.onmouseout = function() {
    startAutoPlay();
  };
  main.onmouseout();
  // 点击导航切换
  for (var t = 0; t < len; t++) {
    title[t].id = t;
    title[t].onclick = function() {
      index = this.id;
      changeImg();
    };
  }
}
// 切换图片
function changeImg() {
  // 遍历content及title下的所有div，将其隐藏，设置class属性
  for (var i = 0; i < len; i++) {
    content[i].style.display = "none";
    title[i].className = "title-box";
  }
  // 根据index索引找到当前div，将其显示出来
  content[index].style.display = "block";
  // 根据index索引找到当前div，将其设置class属性
  title[index].className = "title-box active";
}
slideImg();
