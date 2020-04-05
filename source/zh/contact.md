---
title:      聯絡
subtitle:   取得聯繫！
slug:       contact
menu:       3
---
<article class="bg-white border-bottom py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <h2 class="text-center mb-5">留言給我們</h2>
        <p class="text-justify">你想送李施嬅粉絲的郵件？你有電影，採訪或其他工作諮詢嗎？還是只想跟網站後面的管理員打招呼？給我們留言！ 如有必要，我們會將你的電子郵件轉發給正確的人，你將在一周內收到答复。</p>
      </div>
    </div>
    <div class="text-center">
      <a href="#contactform" class="btn-scroll">
        <i class="fa fa-angle-down animated"></i>
      </a>
    </div>
  </div>
</article>

<section id="contactform" class="py-5">
  <div class="container">
    <div class="row">

      <div class="col-sm-3 order-sm-last">
        <h5>電子郵件地址</h5>
        <p>selena.li.official [@] gmail.com</p>
        <hr>
        <h5>社交媒體</h5>
        <label>施嬅的帳戶</label>
         {% include social-media.liquid %}
        <label>粉絲會的帳戶</label>
         {% include social-media.liquid account="fanclub" %}
      </div>

      <div class="col-sm-8 order-sm-first">
        <form method="POST" action="//formspree.io/mrgzdvdy" role="form">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">你的名字</label>
            <div class="col-sm-10">
              <input type="text" id="name" name="name" class="form-control">
            </div>
          </div>

          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">你的郵件地址</label>
            <div class="col-sm-10">
              <input type="email" id="email" name="_replyto" class="form-control">
            </div>
          </div>

          <div class="form-group row">
            <label for="category" class="col-sm-2 col-form-label">訊息類型</label>
            <div class="col-sm-10">
              <select id="category" name="category" class="form-control">
                <option>粉絲郵件</option>
                <option>工作</option>
                <option>網站</option>
                <option>其他</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="subject" class="col-sm-2 col-form-label">主題</label>
            <div class="col-sm-10">
              <input type="text" id="subject" name="subject" class="form-control">
            </div>
          </div>

          <div class="form-group row">
            <label for="message" class="col-sm-2 col-form-label">你的信息</label>
            <div class="col-sm-10">
              <textarea id="message" name="message" class="form-control" rows="15"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button type="submit" class="btn btn-primary">發信息</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>