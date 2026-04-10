import type { TestSuite } from '../types'

// ───────────────────────────────────────────────
// 不着边际测试 —— 纯属娱乐，请勿对号入座
// 3 个维度:
//   X (玄学系数)
//   W (摆烂程度)
//   Q (气质浓度)
// ───────────────────────────────────────────────

export const nonsenseTest: TestSuite = {
  id: 'nonsense',
  name: '??测试',
  tagline: '探索你的<br /><span class="text-primary-500">隐藏频率</span>',
  description: '这是一场没有逻辑的灵魂漂流。题目很怪，选项很离谱，结论很随缘。',
  estimatedMinutes: 4,

  dimensions: [
    {
      key: 'X',
      label: '玄学系数',
      description: '你和玄学之间隔着几层滤镜',
      lowLabel: '唯物主义',
      highLabel: '算命摊常客'
    },
    {
      key: 'W',
      label: '摆烂程度',
      description: '你有多能摆',
      lowLabel: '内卷选手',
      highLabel: '摆烂大师'
    },
    {
      key: 'Q',
      label: '气质浓度',
      description: '你身上有多少莫名其妙的气质',
      lowLabel: '路人甲',
      highLabel: '自带背景音乐'
    }
  ],

  questions: [
    {
      id: 'n01',
      dimension: 'X',
      text: '你今天喝水了吗？',
      options: [
        { id: 'n01a', label: '我不喝水，我只喝命运', scores: { X: 4 } },
        { id: 'n01b', label: '喝了，但我觉得水不信任我', scores: { X: 3 } },
        { id: 'n01c', label: '喝了，没什么感想', scores: { X: 0 } },
        { id: 'n01d', label: '还没喝，谢谢提醒，但我还是不打算去喝', scores: { W: 4 } }
      ]
    },
    {
      id: 'n02',
      dimension: 'W',
      text: '如果你是一种天气，你觉得你是？',
      options: [
        { id: 'n02a', label: '多云转晴，很努力', scores: { W: 0 } },
        { id: 'n02b', label: '阴天，但没下雨，就是阴着', scores: { W: 3 } },
        { id: 'n02c', label: '不管什么天气，我都不会出门的', scores: { W: 4 } },
        { id: 'n02d', label: '我是一种不在天气预报里的天气', scores: { X: 4 } }
      ]
    },
    {
      id: 'n03',
      dimension: 'Q',
      text: '请问你上一次抬起头看天空是什么时候？',
      options: [
        { id: 'n03a', label: '刚才，我在找外星人', scores: { X: 4 } },
        { id: 'n03b', label: '昨天，太阳差点把我的黑历史晒出来', scores: { Q: 3 } },
        { id: 'n03c', label: '不记得了，我只看地面，找硬币', scores: { W: 2 } },
        { id: 'n03d', label: '我是在室内的，天花板算吗？', scores: { Q: 4 } }
      ]
    },
    {
      id: 'n04',
      dimension: 'X',
      text: '你的手机桌面壁纸是什么风格？',
      options: [
        { id: 'n04a', label: '黑色纯色，我是极简主义者（懒得换）', scores: { W: 3 } },
        { id: 'n04b', label: '猫猫，我没有猫，所以我把它放在桌面上', scores: { Q: 3 } },
        { id: 'n04c', label: '我的默认出厂壁纸已经用了三年了', scores: { W: 4 } },
        { id: 'n04d', label: '我的壁纸是一段哲学引言，我自己也没看懂', scores: { X: 4 } }
      ]
    },
    {
      id: 'n05',
      dimension: 'W',
      text: '你认为厨房最重要的是什么？',
      options: [
        { id: 'n05a', label: '够干净，干净是一切的基础', scores: { W: 0 } },
        { id: 'n05b', label: '外卖的到达位置，最好在门口', scores: { W: 4 } },
        { id: 'n05c', label: '我没有厨房观，我有的是外卖平台会员', scores: { W: 4 } },
        { id: 'n05d', label: '离我最远的地方', scores: { W: 2 } }
      ]
    },
    {
      id: 'n06',
      dimension: 'Q',
      text: '如果你的左脚比右脚多了一个脚趾，你会怎么处理？',
      options: [
        { id: 'n06a', label: '接受它，这就是我的特色', scores: { Q: 4 } },
        { id: 'n06b', label: '困扰一段时间，最终写一首诗', scores: { X: 3, Q: 2 } },
        { id: 'n06c', label: '找医生，明天预约', scores: { W: 0 } },
        { id: 'n06d', label: '给多出来的脚趾起名字', scores: { Q: 4, X: 2 } }
      ]
    },
    {
      id: 'n07',
      dimension: 'X',
      text: '月亮打你电话，你接吗？',
      options: [
        { id: 'n07a', label: '接，我等这通电话很久了', scores: { X: 4 } },
        { id: 'n07b', label: '接，但声音很小，怕邻居听见', scores: { X: 3 } },
        { id: 'n07c', label: '不接，我只接快递员的电话', scores: { W: 4 } },
        { id: 'n07d', label: '挂掉，加黑名单，设置为已拦截骚扰电话', scores: { W: 3 } }
      ]
    },
    {
      id: 'n08',
      dimension: 'W',
      text: '世界末日倒计时还有 24 小时，你会做什么？',
      options: [
        { id: 'n08a', label: '追完我一直拖着没看的剧', scores: { W: 4 } },
        { id: 'n08b', label: '终于刷完收藏夹里的攻略', scores: { W: 3 } },
        { id: 'n08c', label: '计划一个我执行不了的 bucket list', scores: { W: 2 } },
        { id: 'n08d', label: '还是睡觉吧，醒来可能就结束了', scores: { W: 4 } }
      ]
    },
    {
      id: 'n09',
      dimension: 'Q',
      text: '你觉得「橙子」这个词听起来像什么感觉？',
      options: [
        { id: 'n09a', label: '很圆，很满，很成功', scores: { Q: 2 } },
        { id: 'n09b', label: '有点困，下午两点的感觉', scores: { W: 3 } },
        { id: 'n09c', label: '一个人坐在公园里的气质', scores: { Q: 4 } },
        { id: 'n09d', label: '我不觉得词语有感觉，我很务实', scores: { X: 0, W: 0 } }
      ]
    },
    {
      id: 'n10',
      dimension: 'X',
      text: '你的星座是什么？（不管你相不相信，选最接近的）',
      options: [
        { id: 'n10a', label: '火象星座，我生来燃烧', scores: { X: 2, Q: 3 } },
        { id: 'n10b', label: '土象星座，我只相信我能看见的东西', scores: { X: 0 } },
        { id: 'n10c', label: '风象星座，我飘忽不定但有道理', scores: { X: 2, Q: 4 } },
        { id: 'n10d', label: '水象星座，我感受太多，说得太少', scores: { X: 3, Q: 3 } }
      ]
    },
    {
      id: 'n11',
      dimension: 'W',
      text: '你认为哺乳动物里最有人生感悟的是哪一种？',
      options: [
        { id: 'n11a', label: '周杰伦', scores: { Q: 4 } },
        { id: 'n11b', label: '我最近在想要不要换发型', scores: { W: 2 } },
        { id: 'n11c', label: '我上周看了一个很感动的广告', scores: { Q: 2 } },
        { id: 'n11d', label: '熊猫，它只需要吃竹子', scores: { W: 4 } }
      ]
    },
    {
      id: 'n12',
      dimension: 'Q',
      text: '请描述你昨晚做的梦（选最接近的）：',
      options: [
        { id: 'n12a', label: '我梦到了一个很长的收据', scores: { W: 3 } },
        { id: 'n12b', label: '我梦到自己在考试，但题目是俄语', scores: { X: 3 } },
        { id: 'n12c', label: '我根本没做梦，我昨晚就是死掉了八小时', scores: { W: 4 } },
        { id: 'n12d', label: '我昨晚做了个梦，但今天发现那不是梦', scores: { X: 4, Q: 4 } }
      ]
    },
    {
      id: 'n13',
      dimension: 'X',
      text: '「上善若水」在这里的意思最接近于？',
      options: [
        { id: 'n13a', label: '多喝热水', scores: { W: 4 } },
        { id: 'n13b', label: '我想开了，顺其自然', scores: { W: 2, X: 3 } },
        { id: 'n13c', label: '我在一个不适合我的地方待太久了', scores: { Q: 4 } },
        { id: 'n13d', label: '没有意思，字面意思就是字面意思', scores: { X: 0 } }
      ]
    },
    {
      id: 'n14',
      dimension: 'W',
      text: '你现在身体哪个部位最疲惫？',
      options: [
        { id: 'n14a', label: '眼睛，看多了不该看的东西', scores: { W: 3 } },
        { id: 'n14b', label: '大脑，想多了不该想的事情', scores: { X: 3 } },
        { id: 'n14c', label: '整个人，是一个整体意义上的累', scores: { W: 4 } },
        { id: 'n14d', label: '我精力充沛，我是24小时营业的', scores: { Q: 3 } }
      ]
    },
    {
      id: 'n15',
      dimension: 'Q',
      text: '有人邀请你去爬山，但山顶什么都没有，你会去吗？',
      options: [
        { id: 'n15a', label: '去，因为人生就是这样，山顶什么都没有才是重点', scores: { X: 4, Q: 4 } },
        { id: 'n15b', label: '去，但我会在山脚等你们回来', scores: { W: 4 } },
        { id: 'n15c', label: '不去，我的膝盖已经在给出答案了', scores: { W: 3 } },
        { id: 'n15d', label: '问山在哪儿，我查一下大众点评评分', scores: { W: 1 } }
      ]
    },
    {
      id: 'n16',
      dimension: 'X',
      text: '你觉得你上辈子是什么？',
      options: [
        { id: 'n16a', label: '一只猫，所以我这辈子格外懒', scores: { W: 4, X: 2 } },
        { id: 'n16b', label: '一棵树，不解释', scores: { X: 3, Q: 2 } },
        { id: 'n16c', label: '一个路人，这辈子依然是路人', scores: { W: 3 } },
        { id: 'n16d', label: '没有上辈子，我是第一次', scores: { X: 0 } }
      ]
    },
    {
      id: 'n17',
      dimension: 'W',
      text: '一棵树在想什么？',
      options: [
        { id: 'n17a', label: '它在想有没有出路', scores: { X: 4 } },
        { id: 'n17b', label: '什么都没想，树不会想事情', scores: { X: 0, W: 2 } },
        { id: 'n17c', label: '「又一天过去了」', scores: { W: 4 } },
        { id: 'n17d', label: '我不知道，但我很羡慕它', scores: { W: 4, Q: 2 } }
      ]
    },
    {
      id: 'n18',
      dimension: 'Q',
      text: '你的人生目前处于哪个章节？',
      options: [
        { id: 'n18a', label: '前言：还没开始', scores: { W: 4 } },
        { id: 'n18b', label: '第三章：事情开始变得复杂了', scores: { Q: 3 } },
        { id: 'n18c', label: '附录：主线已经结束了，在处理后续', scores: { Q: 4 } },
        { id: 'n18d', label: '我的书里没有章节，全是混乱的注脚', scores: { X: 4, Q: 3 } }
      ]
    },
    {
      id: 'n19',
      dimension: 'X',
      text: '你相信平行宇宙吗？',
      options: [
        { id: 'n19a', label: '信，在那个宇宙里我已经很成功了', scores: { X: 4, W: 4 } },
        { id: 'n19b', label: '信，但那个我过得更差，所以我释怀了', scores: { X: 3 } },
        { id: 'n19c', label: '不信，我只信这一个宇宙，而且我还没搞清楚', scores: { X: 0 } },
        { id: 'n19d', label: '我连这个宇宙都快处理不过来了', scores: { W: 3 } }
      ]
    },
    {
      id: 'n20',
      dimension: 'W',
      text: '你的座右铭最接近以下哪一句？',
      options: [
        { id: 'n20a', label: '人生没有彩排，每天都是现场直播', scores: { Q: 3 } },
        { id: 'n20b', label: '算了', scores: { W: 4 } },
        { id: 'n20c', label: '车到山前必有路，路到山前必有车', scores: { X: 3 } },
        { id: 'n20d', label: '我没有座右铭，我只有座椅', scores: { W: 3, Q: 3 } }
      ]
    },
    {
      id: 'n21',
      dimension: 'Q',
      text: '你觉得「下午四点」是什么颜色的？',
      options: [
        { id: 'n21a', label: '橙黄色，有点困，有点感怀', scores: { Q: 4, X: 2 } },
        { id: 'n21b', label: '灰色，我在上班', scores: { W: 3 } },
        { id: 'n21c', label: '这个问题没有答案，我拒绝回答', scores: { X: 0 } },
        { id: 'n21d', label: '我不给时间分配颜色，我只看日历', scores: { W: 1 } }
      ]
    },
    {
      id: 'n22',
      dimension: 'X',
      text: '如果你的名字是一道菜，它最可能是什么？',
      options: [
        { id: 'n22a', label: '夫妻肺片，名字吓人但大家都喜欢', scores: { Q: 4 } },
        { id: 'n22b', label: '白水煮蛋，没有名字，但管饱', scores: { W: 4 } },
        { id: 'n22c', label: '一道没上过菜单的特供菜', scores: { X: 4, Q: 4 } },
        { id: 'n22d', label: '我拒绝被命名为一道菜', scores: { X: 0, Q: 2 } }
      ]
    },
    {
      id: 'n23',
      dimension: 'W',
      text: '你今年已经实现了多少个年初给自己定的目标？',
      options: [
        { id: 'n23a', label: '全部实现了，我是目标终结者', scores: { W: 0 } },
        { id: 'n23b', label: '还没算，但感觉不多', scores: { W: 3 } },
        { id: 'n23c', label: '年初我没定目标，我定的是打算', scores: { W: 3, X: 2 } },
        { id: 'n23d', label: '我记不清年初定了什么了，好像有个什么……算了', scores: { W: 4 } }
      ]
    },
    {
      id: 'n24',
      dimension: 'Q',
      text: '你最后一次「被人记住」是因为什么？',
      options: [
        { id: 'n24a', label: '我说了一句没人听懂但大家都笑了的话', scores: { Q: 4, X: 3 } },
        { id: 'n24b', label: '因为我迟到了，我走到哪里都迟到', scores: { W: 3 } },
        { id: 'n24c', label: '我不确定有没有人记住我', scores: { W: 2 } },
        { id: 'n24d', label: '我很久没出现在任何场合了，记住我的人都以为我蒸发了', scores: { W: 4, Q: 2 } }
      ]
    },
    {
      id: 'n25',
      dimension: 'X',
      text: '测到这里，你的感想是？',
      options: [
        { id: 'n25a', label: '我无法判断这个测试想干什么，但我做完了', scores: { X: 2, W: 2, Q: 2 } },
        { id: 'n25b', label: '感觉它在了解我，但又什么都没说', scores: { X: 4, Q: 4 } },
        { id: 'n25c', label: '我做测试就是为了看结论，别跟我废话', scores: { W: 4 } },
        { id: 'n25d', label: '挺好的，我感觉我找到组织了', scores: { Q: 3, X: 3 } }
      ]
    }
  ],

  results: [
    {
      id: 'cosmicweirdo',
      title: '宇宙怪人',
      subtitle: 'Certified Cosmic Weirdo',
      emoji: '🌌',
      color: '#C4B5FD',
      description: [
        '恭喜你，科学解释不了你。你的思维方式对大多数人来说是一种特殊的频率。',
        '你不太像这个时代的人，但你也没打算适应。你有一套奇妙的内在逻辑。',
        '建议你偶尔降落到地面，提醒自己饿了要吃饭。'
      ],
      strengths: ['完全自洽', '想象力无上限', '气场独特'],
      growthTips: ['记得吃饭', '偶尔普通一下'],
      matchRules: { X: 14, Q: 14 }
    },
    {
      id: 'logicblackhole',
      title: '逻辑黑洞',
      subtitle: 'Logic Destroyer',
      emoji: '🕳️',
      color: '#312E81',
      description: [
        '你不是在思考，你是在瓦解这个世界的因果律。你的大脑跑着一套没有文档的底层逻辑，连你自己也不一定能读得懂。',
        '跟你聊天的人通常会经历三个阶段：「哦」→ 「等等」→ 「算了」，然后他们就直接关机了。',
        '你的懒和你的奇怪合并在一起，形成了独特的黑洞效应：话题进去，逻辑出不来。我们放弃解析你了。'
      ],
      strengths: ['打开新维度', '无法被预测', '瓦解一切规则'],
      growthTips: ['偶尔给别人一个他们能接住的答案', '把你的逻辑写下来，说不定是传世著作'],
      matchRules: { X: 18, W: 18 }
    },
    {
      id: 'cosmicdeadwood',
      title: '宇宙级废柴',
      subtitle: 'Olympic-level Slacker',
      emoji: '🏅',
      color: '#92400E',
      description: [
        '如果摆烂是一项奥运项目，你已经拿到了金牌，并且在领奖台上睡着了。颁奖音乐响起，你仍未出现。',
        '你不是不行，你只是把所有配额都花在了觉得「算了无所谓」这件事上，配额告罄，再无余力。',
        '你的人生口号是：「机会很多，我先睡一会儿。」这不是批评，只是如实描述。'
      ],
      strengths: ['超然物外', '摆烂无愧', '绝不内耗'],
      growthTips: ['今天随便动一下就算数', '如果太难就……好吧你继续睡吧'],
      matchRules: { W: 22 }
    },
    {
      id: 'masterofnothing',
      title: '什么都不是的大师',
      subtitle: 'Master of Absolutely Nothing',
      emoji: '🛋️',
      color: '#A8A29E',
      description: [
        '经过漫长的修炼，你终于抵达了无我之境——不是哲学意义上的，而是字面意义上的：你什么都不是，并且做到了。',
        '你没有在摆烂。你已经超越了摆烂的概念。你处于一种更高级的虚空状态：既不努力，也不放弃，只是……存在着，以极低的功耗维持运转。',
        '这是一种成就，只是目前为止还没有人专门为它设立颁奖机制。'
      ],
      strengths: ['抵达虚空之境', '彻底摆脱执念', '省电模式大师'],
      growthTips: ['偶尔让自己什么都是一下', '任何目标都行，随便选一个'],
      matchRules: { W: 16 }
    },
    {
      id: 'aestheticprotagonist',
      title: '审美向主角',
      subtitle: 'The Aesthetic Protagonist',
      emoji: '🎞️',
      color: '#F9A8D4',
      description: [
        '你的生活里有一种很难描述的质感。你会感觉自己在一部电影里，并且是主角。',
        '你对细节有感知，对普通事物有解读。你活在当下，但同时像在回忆当下。'
      ],
      strengths: ['独特质感', '感受力细腻'],
      growthTips: ['生活不只是旁观'],
      matchRules: { Q: 16, W: 10 }
    },
    {
      id: 'normalhumanbean',
      title: '正常人类',
      subtitle: 'Suspiciously Normal',
      emoji: '🫘',
      color: '#D1D5DB',
      description: [
        '我们的算法发现你……相当正常。这在我们的数据库里是一个罕见的结论。',
        '你是一个谜，但方向相反——因为你太正常了，这本身就很奇怪。'
      ],
      strengths: ['正常即是力量', '环境适应力'],
      growthTips: ['做件不正常的事'],
      matchRules: { X: 4, W: 4, Q: 4 }
    },
    {
      id: 'pendingclassification',
      title: '分类中……',
      subtitle: 'Still Loading',
      emoji: '⏳',
      color: '#E2E8F0',
      description: [
        '结论：你是一个仍在加载中的人。进度条可能需要一段时间。'
      ],
      strengths: ['潜力无限', '神秘感'],
      growthTips: ['先加载完今天'],
      matchRules: { X: 0, W: 0, Q: 0 }
    }
  ]
}
