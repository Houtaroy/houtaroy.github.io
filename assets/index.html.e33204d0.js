import{_ as d,r as i,o,c as s,b as e,d as t,w as c,e as a,a as l}from"./app.9478307b.js";var h="/assets/\u67B6\u6784.bb9c8ffc.jpg",p="/assets/direct\u7C7B\u578B\u7684\u4EA4\u6362\u5668.31efee7f.jpg",u="/assets/topic\u7C7B\u578B\u7684\u4EA4\u6362\u5668.4246bf44.jpg";const b={},g=e("h1",{id:"rabbitmq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#"),a(" RabbitMQ")],-1),_=e("h2",{id:"\u7B80\u4ECB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),a(" \u7B80\u4ECB")],-1),m=a("RabbitMQ\u662F\u57FA\u4E8E"),f=a("AMQP\u534F\u8BAE"),x=a("\u7684\u5B9E\u73B0"),Q=l('<p>\u5B83\u7684\u5F00\u53D1\u8BED\u8A00\u4E3AErlang, \u5929\u7136\u652F\u6301\u9AD8\u5E76\u53D1, \u56E0\u6B64RabbitMQ\u7684\u6D88\u606F<strong>\u65F6\u6548\u6027\u53EF\u4EE5\u8FBE\u5230\u5FAE\u79D2\u7EA7</strong>, \u662F\u4E00\u4F17\u5F00\u6E90\u6D88\u606F\u4E2D\u95F4\u4EF6\u4E2D\u6700\u5FEB\u7684</p><p>RabbitMQ\u6709\u4EE5\u4E0B\u4F18\u52BF:</p><ul><li>\u7075\u6D3B\u8DEF\u7531: \u4F7F\u7528\u4EA4\u6362\u5668\u6765\u63D0\u4F9B\u66F4\u4E3A\u590D\u6742\u7684\u8DEF\u7531\u673A\u5236</li><li>\u591A\u79CD\u534F\u8BAE: \u652F\u6301AMQP/STOMP/MQTT\u7B49</li><li>\u591A\u8BED\u8A00: \u652F\u6301Java/Python/Ruby/PHP/C#/JavaScript\u7B49</li><li>\u53EF\u89C6\u5316\u7BA1\u7406\u754C\u9762</li><li>\u63D2\u4EF6\u673A\u5236</li></ul><h2 id="\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784" aria-hidden="true">#</a> \u67B6\u6784</h2><p><img src="'+h+'" alt="\u67B6\u6784"></p><p>RabbitMQ\u4E3B\u8981\u6709\u4EE5\u4E0B\u5185\u5BB9\u7EC4\u6210:</p><ul><li>Producer: \u751F\u4EA7\u8005</li><li>Exchange: \u4EA4\u6362\u5668</li><li>Queue: \u961F\u5217</li><li>Consumer: \u6D88\u8D39\u8005</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Exchange\u548CQueue\u7EC4\u6210\u4E86\u5176\u5B83\u4E2D\u95F4\u4EF6\u4E2D\u7684Broker\u6982\u5FF5</p></div><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><h3 id="\u4EA4\u6362\u5668" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362\u5668" aria-hidden="true">#</a> \u4EA4\u6362\u5668</h3><p>RabbitMQ\u63D0\u4F9B\u4E86\u56DB\u79CD\u4EA4\u6362\u5668:</p><ul><li>direct</li><li>fanout</li><li>topic</li><li>headers</li></ul><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u5230\u4EA4\u6362\u5668\u9700\u8981RoutingKey</p><p>\u4EA4\u6362\u5668\u548C\u961F\u5217\u7684\u7ED1\u5B9A\u9700\u8981BindingKey, \u5B83\u662F\u53EF\u4EE5\u91CD\u590D\u7684</p><p>\u4E0A\u8FF0\u56DB\u79CD\u6A21\u5F0F\u53EF\u4EE5\u7406\u89E3\u4E3ARoutingKey\u548CBindingKey\u7684\u4E0D\u540C\u5339\u914D\u65B9\u5F0F</p><h4 id="direct" tabindex="-1"><a class="header-anchor" href="#direct" aria-hidden="true">#</a> direct</h4><p>\u76F4\u8FDE\u6A21\u5F0F, \u6B63\u5982\u5B57\u9762\u610F\u601D, \u5373<strong>RoutingKey\u4E0EBindingKey\u76F8\u540C</strong>\u624D\u4F1A\u8DEF\u7531\u6D88\u606F:</p><p><img src="'+p+'" alt="direct\u7C7B\u578B\u7684\u4EA4\u6362\u5668"></p><ul><li>warning: \u8DEF\u7531\u5230Queue1\u548CQueue2</li><li>info: \u8DEF\u7531\u5230Queue2</li><li>test: \u65E0\u6CD5\u8DEF\u7531</li></ul><p>direct\u5E38\u7528\u5728\u5904\u7406<strong>\u6709\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1</strong>\uFF0C\u6839\u636E\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u628A\u6D88\u606F\u53D1\u9001\u5230\u5BF9\u5E94\u7684\u961F\u5217\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6307\u6D3E\u66F4\u591A\u7684\u8D44\u6E90\u53BB\u5904\u7406\u9AD8\u4F18\u5148\u7EA7\u7684\u961F\u5217</p><h4 id="fanout" tabindex="-1"><a class="header-anchor" href="#fanout" aria-hidden="true">#</a> fanout</h4><p>\u6247\u51FA\u6A21\u5F0F, \u5373<strong>\u4E0D\u8003\u8651RoutingKey\u548CBindingKey\u7684\u5173\u7CFB</strong>, \u76F4\u63A5\u5C06\u6D88\u606F\u53D1\u9001\u81F3\u6240\u6709Queue</p><p>\u6B64\u6A21\u5F0F\u6548\u7387\u6700\u9AD8</p><h4 id="topic" tabindex="-1"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> topic</h4><p>\u4E3B\u9898\u6A21\u5F0F, <strong>RoutingKey\u548CBindingKey\u6309\u7167\u4E3B\u9898\u89C4\u5219</strong>\u8FDB\u884C\u5339\u914D:</p><ul><li>\u4E3B\u9898\u683C\u5F0F\u4E3A: <code>\u4E3B\u9898.\u5B50\u4E3B\u9898.\u5B50\u4E3B\u9898</code></li><li><code>*</code>\u4EE3\u8868\u5339\u914D\u540C\u4E00\u7EA7\u522B\u4E0B\u7684\u6240\u6709\u4E3B\u9898</li><li><code>#</code>\u4EE3\u8868\u5339\u914D\u5F53\u524D\u4E3B\u9898\u4E0B\u7684\u6240\u6709\u4E3B\u9898, \u4E14\u5305\u542B\u5F53\u524D\u4E3B\u9898</li></ul><p><img src="'+u+`" alt="topic\u7C7B\u578B\u7684\u4EA4\u6362\u5668"></p><ul><li><code>com.rabbitmq.client</code>: \u8DEF\u7531\u5230Queue1\u548CQueue2</li><li><code>com.hidden.client</code>: \u8DEF\u7531\u5230Queue2</li><li><code>java.util.concurrent</code>: \u65E0\u6CD5\u8DEF\u7531</li></ul><h4 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h4><p>\u5934\u90E8\u4FE1\u606F\u6A21\u5F0F</p><p>RabbitMQ\u7684\u6D88\u606F\u53EF\u5206\u4E3Aheaders\u4E0Epayload</p><p>\u5934\u90E8\u4FE1\u606F\u6A21\u5F0F\u5219\u662F\u5BF9<strong>headers\u4E2D\u7684\u5C5E\u6027\u8FDB\u884C\u5339\u914D</strong>, \u4E0D\u8003\u8651RoutingKey\u548CBindingKey\u7684\u5173\u7CFB</p><p>\u6B64\u6A21\u5F0F\u6027\u80FD\u5F88\u5DEE, \u4E00\u822C\u4E0D\u4F1A\u4F7F\u7528</p><h3 id="\u6D88\u606F\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u6A21\u5F0F" aria-hidden="true">#</a> \u6D88\u606F\u6A21\u5F0F</h3><p>RabbitMQ\u7684\u6D88\u606F\u53EA\u80FD\u4FDD\u5B58\u5728\u961F\u5217\u4E2D, \u4E0EKafka\u4FDD\u5B58\u5728\u4E3B\u9898\u4E2D\u76F8\u53CD</p><p>\u5F53\u591A\u4E2A\u6D88\u8D39\u8005\u6D88\u8D39\u540C\u4E00\u961F\u5217\u65F6, \u961F\u5217\u4E2D\u7684\u6D88\u606F\u5C06\u4F1A\u88AB\u8F6E\u8BE2\u5206\u644A</p><p>\u6240\u4EE5, <strong>\u5728\u961F\u5217\u5C42\u9762, RabbitMQ\u662F\u4E0D\u652F\u6301\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684</strong></p><h3 id="\u53D1\u9001\u786E\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u786E\u8BA4" aria-hidden="true">#</a> \u53D1\u9001\u786E\u8BA4</h3><p>\u901A\u8FC7\u914D\u7F6E<code>mandatory</code>\u53C2\u6570\u53EF\u4EE5\u5B9E\u73B0\u6D88\u606F\u7684\u53D1\u9001\u786E\u8BA4:</p><ul><li>\u914D\u7F6E\u503C\u4E3A<code>true</code>\u65F6: \u4EA4\u6362\u5668\u5C06\u65E0\u6CD5\u8DEF\u7531\u7684\u6D88\u606F\u8FD4\u56DE\u751F\u4EA7\u8005</li><li>\u914D\u7F6E\u503C\u4E3A<code>false</code>\u65F6: \u4EA4\u6362\u5668\u5C06\u4E22\u5F03\u65E0\u6CD5\u8DEF\u7531\u7684\u6D88\u606F</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u63A8\u8350\u4F7F\u7528docker\u5B89\u88C5RabbitMQ:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --rm --name rabbitmq -p <span class="token number">5672</span>:5672 -p <span class="token number">15672</span>:15672 rabbitmq:3.10-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,43),R=a("\u624B\u52A8\u5B89\u88C5\u7B49\u8BF7\u53C2\u7167\u5B98\u65B9\u6587\u6863: "),v={href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"},y=a("Downloading and Installing RabbitMQ \u2014 RabbitMQ");function M(k,K){const n=i("RouterLink"),r=i("ExternalLinkIcon");return o(),s("div",null,[g,_,e("p",null,[m,t(n,{to:"/message-queue/basic/#amqp"},{default:c(()=>[f]),_:1}),x]),Q,e("p",null,[R,e("a",v,[y,t(r)])])])}var q=d(b,[["render",M],["__file","index.html.vue"]]);export{q as default};
