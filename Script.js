//   user\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles
const ruleProviderCommon = {
  "behavior":"classical",
  "format":"yaml",
  "interval":86400,
  "type":"http"
};

const dnsConfig = {
  "enable": true,
  "prefer-h3": true,
  "ipv6": true,
  "listen": "127.0.0.1:53",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter-mode": "blacklist",
  "fake-ip-filter": [
    "*",
    "+.local",
    "+.lan",
    "+.battle.net",
    "+.msftncsi.com",   // Windows 网络检测
    "+.microsoft.com",
    "+.steamcontent.com",
    "+.xboxlive.com",
    "+.playstation.net",
    "+.icloud.com",
    "+.apple.com",
    "+.akamaihd.net",   // 部分 CDN
    "+.googleapis.com", // 部分 Google 服务
    "+.nintendo.net",
    "+.nintendo.com"
  ],
  "use-hosts": true,
  "use-system-hosts": true,
  "default-nameserver": [
    "223.5.5.5",
    "119.29.29.29"
  ],
  "direct-nameserver": ["system"],
  "proxy-server-nameserver":[
    //"https://doh.pub/dns-query",
    //"https://dns.alidns.com/dns-query"
    "223.5.5.5",
    "119.29.29.29",
    "8.8.8.8",
    ],
  "nameserver": [
    //"https://doh.dns.sb/dns-query",
    //"https://dns.google/dns-query#h3=true",
    //"https://doh.opendns.com/dns-query",
    "https://103.121.210.210/dns-query",
    "https://8.8.4.4/dns-query",
    "https://8.8.8.8/dns-query",
    "https://146.112.41.2/dns-query",
    //"https://cloudflare-dns.com/dns-query#h3=true",
    "tls://1.1.1.1",
  ],
  "nameserver-policy": {
    "rule-set:chinamax_MAX,mydirect": [
      "https://223.5.5.5/dns-query#h3=true",
      "https://223.6.6.6/dns-query#h3=true"
    ],
    "rule-set:Emby": [
      "https://223.5.5.5/dns-query#h3=true",
      "https://223.6.6.6/dns-query#h3=true",
      "https://doh.dns.sb/dns-query",
      "https://dns.google/dns-query"
    ]
  }
};


const ruleProviders ={
  "AdBlock":     { "behavior": "domain","interval": 86400, "format": "text", "type": "http", "url": "https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt" ,"path": "./ruleset/anti-ad-clash.txt" },
  "OpenAi":      {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml" ,                      "path": "./ruleset/OpenAi.yaml"       },
  "BiliBili":    {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml" ,                  "path": "./ruleset/BiliBili.yaml"    },
  "Bahamut":     {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bahamut/Bahamut.yaml" ,                    "path": "./ruleset/Bahamut.yaml"      } ,
  "GlobalMedia": {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml" ,  "path": "./ruleset/GlobalMedia.yaml"  },
  "Apple":       {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Classical.yaml" ,              "path": "./ruleset/Apple.yaml"        },
  "Github":      {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml" ,                      "path": "./ruleset/Github.yaml"       },
  "Microsoft":   {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml" ,                "path": "./ruleset/Microsoft.yaml"    },
  "Google":      {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml" ,                      "path": "./ruleset/Google.yaml"       },
  "Telegram":    {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml" ,                  "path": "./ruleset/Telegram.yaml"     },
  "Twitter":     {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml" ,                    "path": "./ruleset/Twitter.yaml"      },
  "Game":        {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/Game.yaml" ,                          "path": "./ruleset/Game.yaml"         },
  "ProxyLite":   {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ProxyLite/ProxyLite.yaml" ,                "path": "./ruleset/ProxyLite.yaml"    },
  "Direct":      {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Direct/Direct.yaml" ,                      "path": "./ruleset/Direct.yaml"       },
  "Lan":         {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.yaml" ,                            "path": "./ruleset/Lan.yaml"          },
  "Download":    {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.yaml" ,                  "path": "./ruleset/Download.yaml"   },
  "Emby":        {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/Amlabort/MY_clash/refs/heads/main/my_emby.yaml",                                          "path": "./ruleset/my_emby.yaml"},
  "steamdl":     {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/Amlabort/MY_clash/refs/heads/main/steamdl.yaml",                                          "path": "./ruleset/steamdl.yaml"},
  "chinamax":    {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaMax/ChinaMax.yaml" ,        "path": "./ruleset/ChinaMAX.yaml"      },
  "chinamax_d":  {"behavior": "domain",    "interval": 86400, "format": "text", "type": "http", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_Domain.txt" ,        "path": "./ruleset/ChinaMAXd.txt"      },
  "chinamax_i":  {"behavior": "ipcidr",    "interval": 86400, "format": "text", "type": "http", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_IP.txt" ,            "path": "./ruleset/ChinaMAXi.txt"      },
  "chinamax_MAX": {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_Classical.yaml" ,        "path": "./ruleset/ChinaMAX_cl.yaml"      },
  "mydirect":     {...ruleProviderCommon, "url": "https://raw.githubusercontent.com/Amlabort/MY_clash/refs/heads/main/files/MY_DIRECT.yaml", "path": "./ruleset/mydirect.yaml" },
};

const rules=[
 "RULE-SET,AdBlock,AdBlock",
 "RULE-SET,steamdl,steam下载",
 "RULE-SET,mydirect,DIRECT",
 "RULE-SET,OpenAi,OpenAi",
 "RULE-SET,Emby,Emby节点",
 "RULE-SET,BiliBili,哔哩哔哩",
 "RULE-SET,Bahamut,代理",
 "RULE-SET,GlobalMedia,代理",
 "RULE-SET,Apple,苹果节点",
 "RULE-SET,Github,代理",
 "RULE-SET,Microsoft,微软节点",
 "RULE-SET,Google,代理",
 "RULE-SET,Telegram,代理",
 "RULE-SET,Twitter,代理",
 "RULE-SET,Game,代理",
 "RULE-SET,ProxyLite,代理",
 "RULE-SET,Direct,DIRECT",
 "RULE-SET,Lan,DIRECT",
 "RULE-SET,Download,DIRECT",
 "RULE-SET,chinamax,DIRECT",
 "RULE-SET,chinamax_d,DIRECT",
 "RULE-SET,chinamax_i,DIRECT",
 "GEOIP,CN,DIRECT",
 "MATCH,兜底分流",
];

const groupBase={
  "interval":3600,
  "timeout":3000,
  "lazy":true,
  "max-failed-times":3,
};

function main(params){
  if (!params.proxies) return params
  let proxies = []
  params.proxies.forEach(proxy => {
    proxies.push(proxy.name)
  })
  const groups=[
    {"name": "代理", "type": "select", "include-all": true, "proxies":["自动选择", "负载均衡","香港节点", "日本节点", "台湾节点", "美国节点", "新加坡节点"],"icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png" },
    {"name": "苹果节点", "type": "select", "proxies": ["DIRECT", "代理", "香港节点", "日本节点", "台湾节点", "美国节点", "新加坡节点"], "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png" },
    {"name": "微软节点", "type": "select", "proxies": ["DIRECT", "代理", "香港节点", "日本节点", "台湾节点", "美国节点", "新加坡节点"], "icon": "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"},
    {"name":"steam下载", "type": "select", "proxies": ["DIRECT","代理"],"icon":"https://img.icons8.com/?size=100&id=cMLQ2oh5S3TB&format=png&color=000000"},
    {"name": "哔哩哔哩", "type": "select", "proxies": ["DIRECT", "香港节点", "台湾节点"], "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/bilibili.png" },
    {"name": "Emby节点", "type": "select", "proxies": ["DIRECT", "代理"], "include-all": true, "filter": "低|0.[0-9]+", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Emby.png" },
    {"name": "OpenAi",   "type": "select", "proxies": ["代理","香港节点", "日本节点", "台湾节点", "美国节点", "新加坡节点"], "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/OpenAI.png" },
    {"name": "AdBlock",  "type": "select", "proxies": ["REJECT", "DIRECT"], "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Adblock.png" },
    {"name": "兜底分流", "type": "select", "proxies": ["代理", "DIRECT", "自动选择", "香港节点", "日本节点", "台湾节点", "美国节点", "新加坡节点"], "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Final.png" },
    {"name": "负载均衡", "type": "load-balance", "include-all": true, "interval":300, "timeout":1200, "strategy":"round-robin", "icon": "https://img.icons8.com/?size=100&id=80435&format=png&color=000000" },
    {"name": "自动选择", "type": "url-test", "include-all": true,...groupBase,  "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png" },
    {"name": "香港节点", "type": "url-test", "include-all": true,...groupBase,  "filter": "港|HK|(?i)Hong", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png" } ,          
    {"name": "日本节点", "type": "url-test", "include-all": true,...groupBase,  "filter": "日|东京|JP|(?i)Japan", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png" },
    {"name": "台湾节点", "type": "url-test", "include-all": true,...groupBase,  "filter": "台|湾|TW|(?i)Taiwan", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png" },
    {"name": "美国节点", "type": "url-test", "include-all": true,...groupBase,  "filter": "美|US|(?i)States|American", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png" },
    {"name": "新加坡节点", "type": "url-test", "include-all": true,...groupBase,  "filter": "新|坡|SG|(?i)Singapore", "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png" },

  ]
  //params['dns']= dnsConfig
  params['proxy-groups'] = groups
  params['rules'] = rules
  params['rule-providers'] = ruleProviders
  return params
}


