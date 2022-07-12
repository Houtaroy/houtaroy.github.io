import{_ as n,o as a,c as s,a as e}from"./app.9478307b.js";var t="/assets/Spring\u4F9D\u8D56\u6CE8\u5165\u6D41\u7A0B.980c2609.jpg";const o={},p=e(`<h1 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IoC</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>IoC(<strong>I</strong>nversion <strong>o</strong>f <strong>C</strong>ontrol), \u5373\u63A7\u5236\u53CD\u8F6C, \u662F\u4E00\u79CD\u8BBE\u8BA1\u7406\u5FF5, \u662FSpring\u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00</p><p>\u6309\u7167\u4E2D\u6587\u8FDB\u9636\u89E3\u8BFB, \u6211\u4EEC\u5F80\u5F80\u4F1A\u4E60\u60EF\u4E8E\u5C06\u91CD\u70B9\u653E\u5728<code>\u63A7\u5236</code>\u8FD9\u4E2A\u8BCD\u4E0A, \u4F46IoC\u7684\u4E3B\u8981\u5185\u5BB9\u5E94\u662F<code>\u53CD\u8F6C</code></p><p>\u5148\u8BF4\u7ED3\u8BBA, \u63A7\u5236\u53CD\u8F6C\u662F<strong>\u5BF9\u8C61\u83B7\u53D6\u4F9D\u8D56\u65B9\u5F0F\u7684\u53CD\u8F6C</strong></p><p>\u5728\u521D\u5B66Java\u65F6, \u6211\u4EEC\u7ECF\u5E38\u4F1A\u4F7F\u7528\u5982\u4E0B\u8FD9\u79CD\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u521B\u5EFA\u5BF9\u8C61<code>a</code>\u4E4B\u524D, \u5FC5\u987B\u5148\u521B\u5EFA\u5B83\u4F9D\u8D56\u7684\u53C2\u6570<code>b</code>, \u7136\u540E\u8C03\u7528\u6784\u9020\u65B9\u6CD5, \u8FD9\u79CD\u521B\u5EFA\u65B9\u5F0F, \u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u662F<code>a</code><strong>\u4E3B\u52A8\u83B7\u53D6</strong>\u4F9D\u8D56<code>b</code></p><p>\u5F53\u5BF9\u8C61\u76F8\u4E92\u4F9D\u8D56\u7684\u5173\u7CFB\u8F83\u5C0F\u65F6, \u8FD8\u7B97\u80FD\u770B</p><p>\u53EF\u5F53\u5BF9\u8C61\u4F9D\u8D56\u7684\u8FC7\u591A\u6216\u4F9D\u8D56\u7684\u5C42\u7EA7\u8FC7\u6DF1\u65F6, \u4E0A\u8FF0\u521B\u5EFA\u65B9\u5F0F\u7B80\u76F4\u5934\u5927</p><p>\u90A3\u4E48, \u8BBE\u60F3\u4E00\u4E0B, \u5982\u679C\u6BCF\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u90FD\u77E5\u9053\u76F8\u4E92\u7684\u5173\u7CFB, \u5E76\u4E14\u5728\u521B\u5EFA\u65F6\u4F1A\u81EA\u52A8\u5173\u8054, \u5C06\u4F1A\u662F\u4E00\u4EF6\u591A\u4E48\u7F8E\u5999\u7684\u4E8B\u60C5\u554A</p><p>Spring\u597D\u50CF\u5C31\u662F\u8FD9\u4E48\u505A\u7684:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728Spring\u4E2D, \u6211\u4EEC\u65E0\u9700\u4E3B\u52A8\u521B\u5EFA<code>b</code>, \u800C\u662F\u4F7F\u7528DI(<strong>D</strong>ependency <strong>I</strong>njection, \u4F9D\u8D56\u6CE8\u5165)\u7684\u65B9\u5F0F\u5C06\u5B83<strong>\u8D4B\u4E88</strong><code>a</code></p><p>\u4ECE\u4E3B\u52A8\u83B7\u53D6\u53D8\u4E3A\u8D4B\u4E88, \u8FD9\u5C31\u662F\u6240\u8C13\u7684<strong>\u53CD\u8F6C</strong></p><p>\u5F53\u7136, \u5982\u679C\u975E\u8981\u7EA0\u7ED3<code>\u63A7\u5236</code>\u8FD9\u4E2A\u8BCD\u7684\u8BDD, \u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3:</p><p>\u4F20\u7EDF\u65B9\u5F0F\u7684\u5BF9\u8C61\u521B\u5EFA, \u9700\u8981\u5F00\u53D1\u4EBA\u5458\u624B\u52A8\u7F16\u7801, <strong>\u5BF9\u8C61\u7684\u63A7\u5236\u6743\u5728\u4EBA\u624B\u4E2D</strong></p><p>\u800CIoC\u4E2D, \u5BF9\u8C61\u7684\u521B\u5EFA\u4E00\u822C\u4EA4\u7531\u7A0B\u5E8F\u81EA\u8EAB, \u4F8B\u5982Spring\u7684IoC\u5BB9\u5668, <strong>\u63A7\u5236\u6743\u4ECE\u4EBA\u53CD\u8F6C\u5230\u4E86\u7A0B\u5E8F</strong></p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5BF9\u8C61\u63A7\u5236\u6743\u53CD\u8F6C\u5E76\u975E\u5B98\u65B9\u89E3\u91CA, \u4EC5\u7528\u4E8E\u7406\u89E3\u548C\u8BB0\u5FC6</p></div><h2 id="\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> \u4F9D\u8D56\u6CE8\u5165</h2><p>\u4F9D\u8D56\u6CE8\u5165\u662FSpring\u5B9E\u73B0IoC\u7684\u65B9\u5F0F, \u8FD9\u91CC\u7B80\u5355\u4ECB\u7ECD\u4E0B\u51E0\u79CD\u6CE8\u5165\u673A\u5236</p><h3 id="\u591A\u4E2A\u540C\u7C7B\u578B\u6CE8\u5165\u5176\u4E00" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u540C\u7C7B\u578B\u6CE8\u5165\u5176\u4E00" aria-hidden="true">#</a> \u591A\u4E2A\u540C\u7C7B\u578B\u6CE8\u5165\u5176\u4E00</h3><p>\u5047\u8BBE\u5B58\u5728\u591A\u4E2A\u7C7B\u578B\u4E3A<code>B</code>\u7684bean, \u5982\u679C\u6307\u5B9A\u6CE8\u5165\u54EA\u4E2A?</p><p>\u4F7F\u7528<code>@Primary</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Primary</span>
    <span class="token keyword">public</span> <span class="token class-name">B</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>@Qualifier</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>@Qualifier</code> \u4E0D\u53D7 <code>@Primary</code> \u7684\u5E72\u6270</p></div><p>\u53D8\u91CF\u540D:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> one<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u8FF0\u5185\u5BB9\u5176\u5B9E\u53EF\u4EE5\u53D1\u73B0Spring\u4F9D\u8D56\u6CE8\u5165\u7684\u6D41\u7A0B:</p><p><img src="`+t+`" alt="Spring\u4F9D\u8D56\u6CE8\u5165\u6D41\u7A0B"></p><h3 id="\u591A\u4E2A\u540C\u7C7B\u578B\u5168\u90E8\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u540C\u7C7B\u578B\u5168\u90E8\u6CE8\u5165" aria-hidden="true">#</a> \u591A\u4E2A\u540C\u7C7B\u578B\u5168\u90E8\u6CE8\u5165</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">B</span><span class="token punctuation">&gt;</span></span> bs<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DE\u8C03\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u6CE8\u5165" aria-hidden="true">#</a> \u56DE\u8C03\u6CE8\u5165</h3><p>\u4F7F\u7528<code>ApplicationContextAware</code>\u83B7\u53D6<code>ApplicationContext</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanTest</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> ctx<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printBeanNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx <span class="token operator">=</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5EF6\u65F6\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u65F6\u6CE8\u5165" aria-hidden="true">#</a> \u5EF6\u65F6\u6CE8\u5165</h3><p>\u4F7F\u7528<code>ObjectProvider</code>, \u53EF\u5E94\u7528\u4E8Esetter/\u6784\u9020\u51FD\u6570/\u5C5E\u6027, \u4EE5\u6784\u9020\u51FD\u6570\u4E3A\u4F8B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setB</span><span class="token punctuation">(</span><span class="token class-name">ObjectProvider</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">B</span><span class="token punctuation">&gt;</span></span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">getIfAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u5F0F\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u9009\u62E9" aria-hidden="true">#</a> \u65B9\u5F0F\u9009\u62E9</h3><p>Spring\u5B98\u65B9\u63A8\u8350\u4F7F\u7528<strong>\u6784\u9020\u51FD\u6570\u6CE8\u5165</strong>, \u5E76\u4E14\u6307\u51FA\u4E86<strong>\u5982\u679C\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u8FC7\u957F, \u5219\u4EE3\u8868\u5176\u804C\u8D23\u8FC7\u591A, \u7B2C\u4E00\u9009\u62E9\u662F\u5BF9\u5176\u8FDB\u884C\u62C6\u89E3</strong>, \u800C\u4E0D\u662F\u9009\u62E9\u5176\u5B83\u7684\u4F9D\u8D56\u6CE8\u5165\u65B9\u5F0F</p><h2 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> Bean</h2><h3 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h3><ul><li>\u5355\u4F8B: \u53EA\u5B58\u5728\u4E00\u4E2A</li><li>\u539F\u578B: \u6BCF\u6B21\u90FD\u521B\u5EFA\u65B0\u7684</li></ul><h3 id="\u751F\u547D\u5468\u671F\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u65B9\u6CD5" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u65B9\u6CD5</h3><p>\u6309\u7167\u65B9\u6CD5\u7C7B\u578B\u53EF\u5206\u4E3A:</p><ul><li>\u521D\u59CB\u5316\u65B9\u6CD5: <code>initMethod</code>/<code>@PostConstruct</code></li><li>\u9500\u6BC1\u65B9\u6CD5: <code>destroyMethod</code>/<code>@PreDestroy</code></li></ul><p>\u6309\u7167\u58F0\u660E\u65B9\u5F0F\u53EF\u5206\u4E3A:</p><ul><li>Spring: <code>@Bean(initMethod = &quot;init&quot;, destroyMethod = &quot;destroy&quot;)</code></li><li>JSR250: <code>@PostConstruct public void init() {}</code></li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Spring\u4E0EJSR250\u53EF\u4EE5\u5171\u5B58, \u4F18\u5148\u7EA7JSR250 &gt; Spring</p></div><p>\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u5982\u4E0B\u9650\u5236:</p><ul><li><p>\u65B9\u6CD5<strong>\u65E0\u53C2\u6570</strong></p></li><li><p>\u65B9\u6CD5<strong>\u65E0\u8FD4\u56DE\u503C</strong></p></li><li><p>\u65B9\u6CD5<strong>\u53EF\u4EE5\u629B\u51FA\u5F02\u5E38</strong></p></li><li><p>\u8BBF\u95EE\u6743\u9650\u65E0\u9650\u5236</p></li></ul><p>\u5728\u6267\u884C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u524D, <strong>Bean\u5DF2\u5B8C\u6210\u5C5E\u6027\u8D4B\u503C</strong></p><div class="custom-container danger"><p class="custom-container-title">\u5371\u9669</p><p>\u4F5C\u7528\u57DF\u4E3A\u539F\u578B\u7684bean, \u4E0D\u652F\u6301<code>destroyMethod</code></p></div><h2 id="\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#\u88C5\u914D" aria-hidden="true">#</a> \u88C5\u914D</h2><h3 id="\u6A21\u5757\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u88C5\u914D" aria-hidden="true">#</a> \u6A21\u5757\u88C5\u914D</h3><p><code>@Configuration</code> + <code>@Import</code> + <code>@Bean</code></p><p>\u5728\u5F00\u53D1\u6A21\u5757\u65F6, \u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u8FDB\u884C\u88C5\u914D:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">MyBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanAutoConfig</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBeanTwo</span> <span class="token function">myBeanTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyBeanTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u5728Spring\u4E2D\u88C5\u914D<code>MyBeanAutoConfig</code>/<code>MyBean</code>/<code>MyBeanTwo</code></p><p><code>@Import</code> + <code>ImportSelector</code></p><p>\u624B\u52A8\u5B9E\u73B0<code>ImportSelector</code>, \u8FD4\u56DE\u4E00\u7EC4\u5168\u9650\u5B9A\u7C7B\u540D(\u5373<code>cn.houtaroy.MyBean</code>):</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanImportSelector</span> <span class="token keyword">implements</span> <span class="token class-name">ImportSelector</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">MyBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Import</code> + <code>ImportBeanDefinitionRegistrar</code></p><p>\u624B\u52A8\u5B9E\u73B0<code>ImportBeanDefinitionRegistrar</code>, \u6CE8\u518CBean\u7684\u5B9A\u4E49:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanRegistrar</span> <span class="token keyword">implements</span> <span class="token class-name">ImportBeanDefinitionRegistrar</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> metadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;myBean&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">MyBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u4EF6\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u88C5\u914D" aria-hidden="true">#</a> \u6761\u4EF6\u88C5\u914D</h3><p>\u987E\u540D\u601D\u4E49, \u6761\u4EF6\u88C5\u914D\u53EF\u4EE5\u6839\u636E\u6307\u5B9A\u7684\u6761\u4EF6\u8FDB\u884C\u88C5\u914D, \u5B83\u5F25\u8865\u4E86\u6A21\u5757\u88C5\u914D\u53EA\u8981\u5BFC\u5165\u4E86\u5C31\u4E00\u5B9A\u4F1A\u88C5\u914D\u7684\u4E0D\u8DB3</p><h4 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> Profile</h4><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u73AF\u5883\u6761\u4EF6, \u5B83\u4EE3\u8868\u7740\u6574\u4E2A\u9879\u76EE\u7684\u8FD0\u884C\u73AF\u5883:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanAutoConfig</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBean</span> <span class="token function">myBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u6709\u5728\u73AF\u5883\u4E3A<code>development</code>\u65F6\u624D\u4F1A\u88C5\u914D<code>MyBean</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>profile\u9ED8\u8BA4\u4E3A<code>default</code></p></div><h4 id="conditional" tabindex="-1"><a class="header-anchor" href="#conditional" aria-hidden="true">#</a> Conditional</h4><p><code>profile</code>\u63A7\u5236\u7684\u662F\u6574\u4E2A\u9879\u76EE\u7684\u6761\u4EF6, <code>Conditional</code>\u5219\u662F\u9488\u5BF9\u5355\u4E2ABean\u7684</p><p><code>Conditional</code>\u6709\u8BB8\u591A\u6CE8\u89E3, \u4EE5\u5E38\u7528\u7684<code>@ConditionalOnMissingBean</code>\u4E3A\u4F8B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanAutoConfig</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBean</span> <span class="token function">myBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5BB9\u5668\u4E2D\u4E0D\u5B58\u5728<code>MyBean</code>\u7C7B\u578B\u7684Bean\u65F6, \u624D\u4F1A\u88C5\u914D</p><p><code>Conditional</code>\u53EF\u4EE5\u81EA\u5B9A\u4E49, \u8BE6\u60C5\u53C2\u7167\u4E0A\u8FF0<code>@ConditionalOnMissingBean</code>\u5373\u53EF</p><h3 id="\u626B\u63CF\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#\u626B\u63CF\u88C5\u914D" aria-hidden="true">#</a> \u626B\u63CF\u88C5\u914D</h3><p>\u4F7F\u7528\u6CE8\u89E3<code>@ComponentScan</code>\u53EF\u4EE5\u901A\u8FC7\u626B\u63CF\u6307\u5B9A\u7684\u5305\u8DEF\u5F84\u5B9E\u73B0\u88C5\u914D</p><p>\u6709\u5982\u4E0B\u4E24\u79CD\u5E38\u7528\u65B9\u5F0F:</p><ul><li>\u6307\u5B9A\u5305\u540D: <code>@ComponentScan(&quot;cn.houtaroy.bean&quot;)</code></li><li>\u6307\u5B9A\u7C7B\u6240\u5728\u7684\u5305: <code>@ComponentScan(basePackageClasses = AutoScan.class)</code></li></ul><p>\u5982\u679C\u9700\u8981\u5B9A\u5236\u626B\u63CF\u89C4\u5219, \u53EF\u4EE5\u4F7F\u7528\u8FC7\u6EE4\u5668, Spring\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u5982\u4E0B\u8FC7\u6EE4\u5668:</p><ul><li>\u9ED8\u8BA4\u8FC7\u6EE4\u5668: \u626B\u63CF\u6307\u5B9A\u5305\u4E0B\u7684<code>@Component</code>/<code>@Repository</code>/<code>@Service</code>/<code>@Controller</code></li><li>\u6CE8\u89E3\u8FC7\u6EE4\u5668: <code>@ComponentScan(includeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION, value = MyBean.class)})</code></li><li>\u7C7B\u578B\u8FC7\u6EE4\u5668: <code>@ComponentScan(excludeFilters = @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = Houtaroy.class))</code></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u5668: <code>@ComponentScan(includeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = &quot;cn.houtaroy.+My.+&quot;))</code></li></ul><p>\u5F53Spring\u63D0\u4F9B\u7684\u8FC7\u6EE4\u5668\u4E0D\u6EE1\u8DB3\u8981\u6C42\u65F6, \u53EF\u4EE5\u624B\u52A8\u5B9E\u73B0\u63A5\u53E3<code>TypeFilter</code>, \u7F16\u5199\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>
    basePackages <span class="token operator">=</span> <span class="token string">&quot;cn.houtaroy.bean&quot;</span><span class="token punctuation">,</span>
    includeFilters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@ComponentScan.Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span>CUSTOM<span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token class-name">MyTypeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanAutoConfig</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,88),c=[p];function i(l,d){return a(),s("div",null,c)}var r=n(o,[["render",i],["__file","index.html.vue"]]);export{r as default};
