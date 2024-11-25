var posts=["2024/11/25/国学玄学/01-玄学学习之旅/","2024/08/18/资源分享/IDA9.0 破解/","2024/10/13/资源分享/红队命令速查-洞查文库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };