import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as s,b as l}from"./app-BPRPgYLJ.js";const t={},c=s("h2",{id:"远程连接问题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#远程连接问题"},[s("span",null,"远程连接问题")])],-1),r=["src"],d=l(`<p>修改登录客户端，即本地计算机的设置。 运行gpedit.msc打开本地组策略编辑器，依次展开“计算机配置”-&gt;“管理模板”-&gt;“系统”-&gt;“凭据分配”，选择设置项： 加密 Oracle 修正 然后右键编辑，改为 启用，保护级别为 易受攻击，确定。设置完成后即可正常远程。</p><h2 id="查看网卡配置" tabindex="-1"><a class="header-anchor" href="#查看网卡配置"><span>查看网卡配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按时间显示文件" tabindex="-1"><a class="header-anchor" href="#按时间显示文件"><span>按时间显示文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-lrt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看具体网卡信息" tabindex="-1"><a class="header-anchor" href="#查看具体网卡信息"><span>查看具体网卡信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> -a｜more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看eth0的配置" tabindex="-1"><a class="header-anchor" href="#查看eth0的配置"><span>查看eth0的配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> ifcfg-eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置ip、子网掩码、网关" tabindex="-1"><a class="header-anchor" href="#配置ip、子网掩码、网关"><span>配置IP、子网掩码、网关</span></a></h2><h3 id="重启网卡" tabindex="-1"><a class="header-anchor" href="#重启网卡"><span>重启网卡</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">service</span> network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static        
<span class="token comment">#static静态、dhcp动态获取、none不指定（可能出现问题）</span>

<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes              
<span class="token comment">#特别注意 这个是开机启动,需要设置成yes</span>

<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">8.8</span>.8.8            
<span class="token comment">#DNS域名解析服务器的IP地址</span>

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.2      
<span class="token comment">#网卡的IP地址</span>

<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1     
<span class="token comment">#网关地址</span>

<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0   
<span class="token comment">#子网掩码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33                         
<span class="token comment"># 网卡的设备名称</span>

<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33                           
<span class="token comment"># 网卡设备的别名</span>

<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet                        
<span class="token comment"># 网络类型：Ethernet以太网</span>

<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>none                       
<span class="token comment">#引导协议：static静态、dhcp动态获取、none不指定（可能出现问题）</span>

<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes                         
<span class="token comment"># 启动默认路由</span>

<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no                
<span class="token comment"># 不启用IPV4错误检测功能</span>

<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes                         
<span class="token comment"># 启用IPV6协议</span>

<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes                    
<span class="token comment"># 自动配置IPV6地址</span>

<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes                    
<span class="token comment"># 启用IPV6默认路由</span>

<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no                
<span class="token comment"># 不启用IPV6错误检测功能</span>

<span class="token assign-left variable">UUID</span><span class="token operator">=</span>sjdfga-asfd-asdf-asdf-f82b      
<span class="token comment"># 网卡设备的UUID唯一标识号</span>

<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes                           
<span class="token comment"># 开机自动启动网卡</span>

<span class="token assign-left variable">DNS</span><span class="token operator">=</span><span class="token number">114.114</span>.114.114                  
<span class="token comment"># DNS域名解析服务器的IP地址 可以多设置一个DNS1</span>

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.22                  
<span class="token comment"># 网卡的IP地址</span>

<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>                            
<span class="token comment"># 子网前缀长度</span>

<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1                  
<span class="token comment"># 默认网关IP地址</span>

<span class="token assign-left variable">IPV6_PEERDNS</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_PEERROUTES</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.22                  
<span class="token comment"># 你想要设置的固定IP，理论上192.168.2.2-255之间都可以，请自行验证；如果是dhcp可以不填写</span>

<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0                
<span class="token comment"># 子网掩码，不需要修改；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function p(n,o){return e(),i("div",null,[c,s("img",{src:n.$withBase("/assets/server/001.jpg")},null,8,r),d])}const u=a(t,[["render",p],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/Server/","title":"服务器","lang":"zh-CN","frontmatter":{"title":"服务器","lang":"zh-CN","date":"2022-05-16T11:21:30.000Z","permalink":"/Server/","icon":"linux","category":["服务器"],"tag":["服务器"],"description":"远程连接问题 修改登录客户端，即本地计算机的设置。 运行gpedit.msc打开本地组策略编辑器，依次展开“计算机配置”->“管理模板”->“系统”->“凭据分配”，选择设置项： 加密 Oracle 修正 然后右键编辑，改为 启用，保护级别为 易受攻击，确定。设置完成后即可正常远程。 查看网卡配置 按时间显示文件 查看具体网卡信息 查看eth0的配置 ...","head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/Server/"}],["meta",{"property":"og:title","content":"服务器"}],["meta",{"property":"og:description","content":"远程连接问题 修改登录客户端，即本地计算机的设置。 运行gpedit.msc打开本地组策略编辑器，依次展开“计算机配置”->“管理模板”->“系统”->“凭据分配”，选择设置项： 加密 Oracle 修正 然后右键编辑，改为 启用，保护级别为 易受攻击，确定。设置完成后即可正常远程。 查看网卡配置 按时间显示文件 查看具体网卡信息 查看eth0的配置 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T10:00:43.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"服务器"}],["meta",{"property":"article:published_time","content":"2022-05-16T11:21:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T10:00:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-16T11:21:30.000Z\\",\\"dateModified\\":\\"2024-03-11T10:00:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[{"level":2,"title":"远程连接问题","slug":"远程连接问题","link":"#远程连接问题","children":[]},{"level":2,"title":"查看网卡配置","slug":"查看网卡配置","link":"#查看网卡配置","children":[{"level":3,"title":"按时间显示文件","slug":"按时间显示文件","link":"#按时间显示文件","children":[]},{"level":3,"title":"查看具体网卡信息","slug":"查看具体网卡信息","link":"#查看具体网卡信息","children":[]},{"level":3,"title":"查看eth0的配置","slug":"查看eth0的配置","link":"#查看eth0的配置","children":[]}]},{"level":2,"title":"配置IP、子网掩码、网关","slug":"配置ip、子网掩码、网关","link":"#配置ip、子网掩码、网关","children":[{"level":3,"title":"重启网卡","slug":"重启网卡","link":"#重启网卡","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"git":{"createdTime":1710151243000,"updatedTime":1710151243000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"zh/Server/index.md","localizedDate":"2022年5月16日","excerpt":"<h2>远程连接问题</h2>\\n\\n<p>修改登录客户端，即本地计算机的设置。\\n运行gpedit.msc打开本地组策略编辑器，依次展开“计算机配置”-&gt;“管理模板”-&gt;“系统”-&gt;“凭据分配”，选择设置项： 加密 Oracle 修正\\n然后右键编辑，改为 启用，保护级别为 易受攻击，确定。设置完成后即可正常远程。</p>\\n<h2>查看网卡配置</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token builtin class-name\\">cd</span> /etc/sysconfig/network-scripts/\\n</code></pre></div>","autoDesc":true}');export{u as comp,b as data};
