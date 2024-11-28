var posts=["2024/08/18/资源分享/IDA9.0 破解/","2024/10/13/资源分享/红队命令速查-洞查文库/","2024/11/27/技术分享/Hack The Box/Starting Point/Starting Point Tier 0 Meow实战笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };