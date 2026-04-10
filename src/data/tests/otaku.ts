import type { TestSuite } from '../types'

export const otakuTest: TestSuite = {
  id: 'otaku',
  name: '二次元浓度鉴定',
  tagline: '测测你的DNA里刻着多少动漫梗',
  description: '从1995的远古遗血到近年新番弄潮儿，跨越30年的ACG硬核大考验。三十道直击灵魂的拷问，撕下你的伪装，你的二次元纯度究竟有多高？',
  estimatedMinutes: 5,
  dimensions: [
    {
      key: 'OLD',
      label: '远古记忆',
      description: '对千禧年前后及经典老番梗的熟度',
      lowLabel: '时代弄潮儿',
      highLabel: '二次元婆罗门'
    },
    {
      key: 'NEW',
      label: '新番雷达',
      description: '对近年（2023-2026）爆款番剧梗的敏感度',
      lowLabel: '怀旧养老党',
      highLabel: '追番发烧友'
    },
    {
      key: 'OTAKU',
      label: '纯度指标',
      description: '作为核心ACGN爱好者的硬核与深潜程度',
      lowLabel: '路人吃瓜',
      highLabel: '究极老牌亚文化'
    },
    {
      key: 'NORMIE',
      label: '现充波长',
      description: '散发出的普通人（三次元）阳光气息和生活常识',
      lowLabel: '资深家里蹲',
      highLabel: '阳光开朗社交达人'
    }
  ],
  questions: [
    {
      id: 'q1',
      text: '夜深人静时，有人敲门并喊道“开门，查水表！”，你的本能反应是？',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '顺手拿起拖把：“来拿你的快递！”', scores: { OLD: 2, OTAKU: 2 } },
        { id: 'b', label: '警惕：“这么晚了查什么水表，骗谁呢？”', scores: { NORMIE: 3 } },
        { id: 'c', label: '大喊：“FBI, Open the door!”', scores: { NEW: 1, OTAKU: 1 } }
      ]
    },
    {
      id: 'q2',
      text: '当你听到“你指尖跳跃的电光”时，你的下半句本能接上的是？',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“是我此生不变的信仰！” (自带BGM)', scores: { OLD: 3, OTAKU: 3 } },
        { id: 'b', label: '“皮卡丘，十万伏特！”', scores: { NORMIE: 1, OLD: 1 } },
        { id: 'c', label: '“物理实验做多了吧？”', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q3',
      text: '面对一个巨大的、未知的宝箱，你的脑内剧场是：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '“好黑哟！好怕哟！” (假装被咬)', scores: { NEW: 3, OTAKU: 2 } },
        { id: 'b', label: '“如果是勇者辛美尔的话一定会直接打开的。”', scores: { NEW: 3, OTAKU: 2 } },
        { id: 'c', label: '“里面肯定有极品装备，开了！”', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q4',
      text: '看到一长串不知所云的“shikanokonokonokokoshitantan”拼音时？',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '毫无感觉，以为是谁脸滚了键盘。', scores: { NORMIE: 3 } },
        { id: 'b', label: '脑内瞬间开始魔音循环并想跟着跳舞。', scores: { NEW: 3, OTAKU: 2 } }
      ]
    },
    {
      id: 'q5',
      text: '朋友面临不可能完成的挑战，他自信地说“会赢的”。你预感：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '完了，他马上就要变成“2.5条悟”了。', scores: { NEW: 3, OTAKU: 2 } },
        { id: 'b', label: '连一刻都没有为他哀悼，立刻赶赴战场的是...', scores: { NEW: 3, OTAKU: 3 } },
        { id: 'c', label: '太棒了，他真有斗志！', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q6',
      text: '炎热的夏天，外面响起响亮的蝉鸣，你叹了口气说：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“蝉在叫，人坏掉。”', scores: { OLD: 4, OTAKU: 3 } },
        { id: 'b', label: '“好热啊，今年夏天真难熬。”', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q7',
      text: '如果在排练室有人突然喊了一句：“为什么春日影要演奏春日影！”',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '“因为大家要一辈子在一起啊！”', scores: { NEW: 3, OTAKU: 3 } },
        { id: 'b', label: '“有什么不能演的，这歌好听啊。”', scores: { NORMIE: 3 } },
        { id: 'c', label: '“我什么都愿意做的！”', scores: { NEW: 2, OTAKU: 2 } },
        { id: 'd', label: '默默退群，退出乐队。', scores: { NEW: 2, OTAKU: 3 } }
      ]
    },
    {
      id: 'q8',
      text: '打游戏中不小心犯了大错，试图甩锅的第一反应：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“错的不是我，是这个世界！”', scores: { OLD: 3, OTAKU: 2 } },
        { id: 'b', label: '“都是时臣的错！”', scores: { OLD: 3, OTAKU: 3 } },
        { id: 'c', label: '“因为网卡了啊兄弟！”', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q9',
      text: '看到迷宫里的奇特魔物，你第一个想法是：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '“太可怕了，快跑！”', scores: { NORMIE: 2 } },
        { id: 'b', label: '“打倒它掉落什么材料？”', scores: { NORMIE: 1, OLD: 1 } },
        { id: 'c', label: '“魔物就应该被做成美味的食物！”', scores: { NEW: 3, OTAKU: 2 } }
      ]
    },
    {
      id: 'q10',
      text: '别人问你借东西，你完全不想借，最嚣张的回绝方式是：',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '“达嘎，口头哇路！” (JOJO立)', scores: { OLD: 2, OTAKU: 4 } },
        { id: 'b', label: '“真不巧，我也要用。”', scores: { NORMIE: 3 } },
        { id: 'c', label: '“谎言是最大的爱哦，我就假装借你了吧~”', scores: { NEW: 2, OTAKU: 2 } }
      ]
    },
    {
      id: 'q11',
      text: '去球场打球，看到教练走过来，你忍不住想喊：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“教练，我想打篮球。”', scores: { OLD: 3, NORMIE: 1 } },
        { id: 'b', label: '“教练，好久不见。”', scores: { NORMIE: 3 } },
        { id: 'c', label: '“来一场赌上灵魂的决斗吧！”', scores: { OTAKU: 3, OLD: 1 } }
      ]
    },
    {
      id: 'q12',
      text: '在路上突然被地上的石头绊倒了，你脱口而出：',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '“可恶，这是替身攻击！”', scores: { OLD: 2, OTAKU: 3 } },
        { id: 'b', label: '“是谁把石头扔这里的，太没素质了。”', scores: { NORMIE: 3 } },
        { id: 'c', label: '“希望之花，连结着我们的羁绊~（顺势躺平）”', scores: { OLD: 2, OTAKU: 4 } }
      ]
    },
    {
      id: 'q13',
      text: '被长辈教训时，如果你在心里默念一句动漫名言来安慰自己，那会是：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“只要微笑就可以了。”', scores: { OLD: 3, OTAKU: 2 } },
        { id: 'b', label: '“连我爸爸都没打过我！”', scores: { OLD: 4, OTAKU: 3 } },
        { id: 'c', label: '认真听讲，左耳进右耳出。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q14',
      text: '当你看到有可爱的白色小动物对你说“和我签订契约吧”，你会：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '立刻掏出武器：“老子一拳打死你个丘比！”', scores: { OLD: 3, OTAKU: 3 } },
        { id: 'b', label: '好可爱，抱起来揉一揉。', scores: { NORMIE: 3 } },
        { id: 'c', label: '“我可以许愿成为神吗？”', scores: { OLD: 2, OTAKU: 2 } }
      ]
    },
    {
      id: 'q15',
      text: '看到数字“1000减7”，你的反应是：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '迅速算出993。', scores: { NORMIE: 3 } },
        { id: 'b', label: '默默掰响手指，眼神变冷。', scores: { OLD: 3, OTAKU: 3 } }
      ]
    },
    {
      id: 'q16',
      text: '群里有人发了一张“考哥.jpg”（樱井孝宏表情包），意味着什么？',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '这谁啊，不认识。', scores: { NORMIE: 3 } },
        { id: 'b', label: '“你们这群家伙别老是把角色和声优联系到一起啊！”', scores: { OTAKU: 4, OLD: 1 } },
        { id: 'c', label: '声优塌房了，快跑。', scores: { NEW: 1, OTAKU: 2 } }
      ]
    },
    {
      id: 'q17',
      text: '别人问你最喜欢的颜色是什么：',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '“蓝白碗的颜色。”', scores: { OTAKU: 3, OLD: 2 } },
        { id: 'b', label: '“初音绿 / 葱色！”', scores: { OLD: 2, OTAKU: 2 } },
        { id: 'c', label: '蓝色、黑色或白色。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q18',
      text: '提到“败犬”，最先浮现在你脑海的画面是：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '英梨梨或者莓在哭泣。', scores: { OLD: 2, OTAKU: 2 } },
        { id: 'b', label: '满嘴都是食物的八奈见同学。', scores: { NEW: 4, OTAKU: 2 } },
        { id: 'c', label: '打架输掉的流浪狗。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q19',
      text: '当你双手不自觉想结印，或者想蒙住一只眼睛时，这是因为：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“邪王真眼是最强的！” / 火影结印起手式。', scores: { OLD: 3, OTAKU: 3 } },
        { id: 'b', label: '“领域展开！”', scores: { NEW: 3, NORMIE: 1 } },
        { id: 'c', label: '眼睛进沙子了，手抽筋了。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q20',
      text: '“大哥哥…” 听到动漫小女孩用这种声音叫你：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '心生怜爱，想给她买糖。', scores: { NORMIE: 3 } },
        { id: 'b', label: '立刻联想到合成兽，PTSD发作，痛苦抱头。', scores: { OLD: 4, OTAKU: 3 } }
      ]
    },
    {
      id: 'q21',
      text: '面对非常棒的女孩子/纸片人，你决定：',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '当她的单推人！', scores: { NEW: 2, OTAKU: 3 } },
        { id: 'b', label: '只想做她的狗（玛奇玛感）。', scores: { NEW: 3, OTAKU: 2 } },
        { id: 'c', label: '夸一句真漂亮。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q22',
      text: '突然有人对你喊：“正面上我啊！”',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '感到极度震惊并认为对方有病。', scores: { NORMIE: 3 } },
        { id: 'b', label: '发射超电磁炮警告！翻译出来挨打！', scores: { OLD: 3, OTAKU: 3 } }
      ]
    },
    {
      id: 'q23',
      text: '在KTV里，如果是你点歌，必点神曲：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '《残酷天使的行动纲领》或《Butter-Fly》。', scores: { OLD: 3, OTAKU: 2 } },
        { id: 'b', label: '《Idol》(我推) 或 《Bling-Bang-Bang-Born》(马修)。', scores: { NEW: 3, NORMIE: 1 } },
        { id: 'c', label: '各种华语流行金曲。', scores: { NORMIE: 3 } },
        { id: 'd', label: '《春日影》，然后开始哭。', scores: { NEW: 3, OTAKU: 3 } }
      ]
    },
    {
      id: 'q24',
      text: '看到两个男孩子并排站着，你的内壳会立刻分析：',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '就是俩普通的哥们。', scores: { NORMIE: 3 } },
        { id: 'b', label: '“究竟谁是1谁是0...”在脑内瞬间分好攻受。', scores: { OTAKU: 4 } }
      ]
    },
    {
      id: 'q25',
      text: '一首极其带感的爵士乐响起，你脑海中浮现出：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '星际牛仔 (Cowboy Bebop) 或者 永生之酒。', scores: { OLD: 4, OTAKU: 3 } },
        { id: 'b', label: '感觉到了高雅的西餐厅。', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q26',
      text: '对于“好耶！”这个词，你的理解是：',
      dimension: 'NEW',
      options: [
        { id: 'a', label: '单纯表达开心，无其他含义。', scores: { NORMIE: 3 } },
        { id: 'b', label: '潜台词：终于不用再做坏女人的狗了。', scores: { NEW: 4, OTAKU: 2 } }
      ]
    },
    {
      id: 'q27',
      text: '听到“战斗力只有5的渣渣”时，你会：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '联想到戴着战力探测器的拉蒂兹。', scores: { OLD: 3, OTAKU: 2 } },
        { id: 'b', label: '这不就是互联网常用怼人语录吗？', scores: { NORMIE: 2 } }
      ]
    },
    {
      id: 'q28',
      text: '提到“人类的赞歌”，下半句是？',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '就是勇气的赞歌！', scores: { OLD: 3, OTAKU: 3 } },
        { id: 'b', label: '历史发展的必然？', scores: { NORMIE: 3 } }
      ]
    },
    {
      id: 'q29',
      text: '关于下雪天的联想，你觉得下雪的声音是：',
      dimension: 'OLD',
      options: [
        { id: 'a', label: '“雪霁天晴朗...”', scores: { NORMIE: 3 } },
        { id: 'b', label: '“届不到的爱恋...” (White Album 2)', scores: { OLD: 3, OTAKU: 4 } }
      ]
    },
    {
      id: 'q30',
      text: '终极选择：你认为自己是“二次元”吗？',
      dimension: 'OTAKU',
      options: [
        { id: 'a', label: '是的，二次元最高！', scores: { NORMIE: 1, NEW: 1 } },
        { id: 'b', label: '二次元？太现充了。我是恶心死宅。', scores: { OTAKU: 5, OLD: 2 } },
        { id: 'c', label: '不，我只是个路过的普通动画观众。', scores: { NORMIE: 3, NEW: 1 } }
      ]
    }
  ],
  results: [
    {
      id: 'pure_otaku',
      title: '纯度极高的',
      subtitle: '血脉觉醒的究极内核阿宅',
      description: [
        '你的二次元纯度已经到达了深渊级境界，纯到发黑发亮！',
        '无论是古训名言，还是缝隙里的声优梗、党争伦理结，都能触发你DNA里深不可测的刻板回应。',
        '在这个圈子里，你已经脱离了“观众”的范畴，你是这个亚文化生态系统中的中流砥柱。'
      ],
      emoji: '🤓',
      color: '#8b5cf6',
      strengths: ['亚文化活化石', '万物皆可萌', '极意玩梗大师'],
      growthTips: ['多出去呼吸一下三次元的空气', '试着对圈外的朋友宽容一些，不要轻易发动替身攻击'],
      matchRules: { OTAKU: 90 }
    },
    {
      id: 'renaissance',
      title: '文艺复兴的',
      subtitle: '遗物级的远古大婆罗门',
      description: [
        '尊敬的阁下，您仿佛是从上个世纪的ACG黄金期和千禧年初代网文时代穿越来的大前辈。',
        '对满屏幕的“2.5条悟”、“鹿乃子”或短视频烂梗可能不屑一顾，但只要提到“钉宫”、“大哥哥”或“白学”，你的眼神立刻变得锐利。',
        '时代轰轰烈烈地向前，而经典在你的记忆圣殿中被奉为了永恒。'
      ],
      emoji: '📜',
      color: '#d97706',
      strengths: ['情怀拉满', '品味老辣且独到', '如数家珍的百科全书'],
      growthTips: ['不要因为画风就拒绝新时代的好作品', '可以适当了解一下现在的推子们都在玩什么'],
      matchRules: { OLD: 58 }
    },
    {
      id: 'cyber_surfer',
      title: '赛博冲浪的',
      subtitle: '无情的新世代抽象发电机',
      description: [
        '你是个毫无感情的追番/看热搜机器，网感强到爆表。',
        '可能你并没有耐心去补完动辄上百集的上古神作，但只要某部动画在B站或抖音刷屏，你绝对能在第一时间掌握核心话术体系。',
        '比起沉浸式看番，你更享受在这场互联网的高强度狂欢里与大伙一起整活、迫害角色。'
      ],
      emoji: '🌊',
      color: '#06b6d4',
      strengths: ['极速吸梗体质', '抽象段子手', '超强版本适应力'],
      growthTips: ['小心电子赛博迷失症', '试着放下倍速，一秒不差地看完一部好动画吧'],
      matchRules: { NEW: 25 }
    },
    {
      id: 'pretender',
      title: '现充假扮的',
      subtitle: '误入异世界的阳光开朗大好人',
      description: [
        '报告长官，抓到一个混入测试队伍的现充！',
        '面对题库里那些奇奇怪怪的“接头暗号”、“发病语录”，你的内心毫无波澜，甚至只觉得莫名其妙。',
        '你有着极为健康且贴近现实的三观，对于所谓的二次元文化，仅仅是“偶尔听说过”、“路过看个乐子”的纯纯路人。'
      ],
      emoji: '🏕️',
      color: '#10b981',
      strengths: ['身心异常健康', '完美融入现实社会', '情绪管理大师'],
      growthTips: ['其实某些时候发发神经也挺减压的', '无聊时找部口碑神作试着入坑吧，也许会发现新世界'],
      matchRules: { NORMIE: 81 }
    },
    {
      id: 'chaotic',
      title: '混沌缝合的',
      subtitle: '横跨三界的薛定谔漫迷',
      description: [
        '你处于一种非常玄乎且有趣的叠加态。',
        '似乎什么都懂一点点，但又不至于深陷泥潭；看过文艺复兴的老番，也刷过最新的鬼畜烂梗短视频，闲暇时甚至还能回归现充去喝杯咖啡。',
        '你能与二次元宅宅谈天说地，也能与圈外好友毫无障碍地社交，堪称次元壁反复横跳的终极缝合怪。'
      ],
      emoji: '🎭',
      color: '#ef4444',
      strengths: ['四海之内皆为同好', '绝不钻牛角尖', '随波逐流的社交达人'],
      growthTips: ['偶尔试着全心投入某一部作品，找到真正的热爱点'],
      matchRules: {}
    }
  ]
}
