import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,b as r}from"./app-GjHxp28g.js";const n={},i=r('<h2 id="简述" tabindex="-1"><a class="header-anchor" href="#简述"><span>简述</span></a></h2><p>宏任务是一种<strong>异步任务</strong>，它的执行顺序在<strong>微任务之后</strong>，通常在每个事件循环迭代中<strong>只执行一个</strong>。</p><p>宏任务的执行顺序会<strong>等待</strong>当前的<strong>微任务队列执行完毕</strong>后，然后从宏任务队列中选择下一个宏任务执行。</p><h2 id="常见宏任务" tabindex="-1"><a class="header-anchor" href="#常见宏任务"><span>常见宏任务</span></a></h2><ol><li>事件回调函数：例如<strong>click</strong>、<strong>load</strong>、<strong>ajax</strong>等事件。</li><li>定时器：包括<strong>setTimeout</strong>和<strong>setInterval</strong>。</li><li>动画操作：如<strong>requestAnimationFrame</strong>，用于执行与屏幕更新相关的操作，如文件读写、网络通信等。</li><li>用户交互的回调：如<strong>DOM事件</strong>，这些事件在用户与网页交互时触发。</li><li>UI渲染事件：包括<strong>DOM解析</strong>、<strong>布局计算</strong>、<strong>绘制</strong>等过程。</li><li>Node 中的 <strong>setImmediate</strong>：在Node环境中，立即执行。</li><li>i/o操作（输入输出，比如读取文件操作、网络请求）</li><li>等等</li></ol>',5),s=[i];function a(l,g){return e(),o("div",null,s)}const m=t(n,[["render",a],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Interview/JavaScript/MacroTasks/","title":"宏任务","lang":"zh-CN","frontmatter":{"title":"宏任务","lang":"zh-CN","date":"2024-03-12T17:09:14.000Z","permalink":"/Interview/JavaScript/MacroTasks/","category":["JavaScript"],"tag":["JavaScript"],"description":"简述 宏任务是一种异步任务，它的执行顺序在微任务之后，通常在每个事件循环迭代中只执行一个。 宏任务的执行顺序会等待当前的微任务队列执行完毕后，然后从宏任务队列中选择下一个宏任务执行。 常见宏任务 事件回调函数：例如click、load、ajax等事件。 定时器：包括setTimeout和setInterval。 动画操作：如requestAnimati...","head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/Interview/JavaScript/MacroTasks/"}],["meta",{"property":"og:title","content":"宏任务"}],["meta",{"property":"og:description","content":"简述 宏任务是一种异步任务，它的执行顺序在微任务之后，通常在每个事件循环迭代中只执行一个。 宏任务的执行顺序会等待当前的微任务队列执行完毕后，然后从宏任务队列中选择下一个宏任务执行。 常见宏任务 事件回调函数：例如click、load、ajax等事件。 定时器：包括setTimeout和setInterval。 动画操作：如requestAnimati..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-15T09:58:26.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2024-03-12T17:09:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-15T09:58:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宏任务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-12T17:09:14.000Z\\",\\"dateModified\\":\\"2024-03-15T09:58:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简述","slug":"简述","link":"#简述","children":[]},{"level":2,"title":"常见宏任务","slug":"常见宏任务","link":"#常见宏任务","children":[]}],"git":{"createdTime":1710496706000,"updatedTime":1710496706000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"zh/Interview/JavaScript/2-异步/2.3-宏任务/MacroTasks.md","localizedDate":"2024年3月12日","excerpt":"<h2>简述</h2>\\n<p>宏任务是一种<strong>异步任务</strong>，它的执行顺序在<strong>微任务之后</strong>，通常在每个事件循环迭代中<strong>只执行一个</strong>。</p>\\n<p>宏任务的执行顺序会<strong>等待</strong>当前的<strong>微任务队列执行完毕</strong>后，然后从宏任务队列中选择下一个宏任务执行。</p>\\n<h2>常见宏任务</h2>\\n<ol>\\n<li>事件回调函数：例如<strong>click</strong>、<strong>load</strong>、<strong>ajax</strong>等事件。</li>\\n<li>定时器：包括<strong>setTimeout</strong>和<strong>setInterval</strong>。</li>\\n<li>动画操作：如<strong>requestAnimationFrame</strong>，用于执行与屏幕更新相关的操作，如文件读写、网络通信等。</li>\\n<li>用户交互的回调：如<strong>DOM事件</strong>，这些事件在用户与网页交互时触发。</li>\\n<li>UI渲染事件：包括<strong>DOM解析</strong>、<strong>布局计算</strong>、<strong>绘制</strong>等过程。</li>\\n<li>Node 中的 <strong>setImmediate</strong>：在Node环境中，立即执行。</li>\\n<li>i/o操作（输入输出，比如读取文件操作、网络请求）</li>\\n<li>等等</li>\\n</ol>","autoDesc":true}');export{m as comp,d as data};