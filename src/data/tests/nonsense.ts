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
  estimatedMinutes: 5,

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
      dimension: 'W',
      text: '你跟家里的微波炉对视时，通常在想什么？',
      options: [
        { id: 'n06a', label: '它知道的太多了', scores: { X: 4 } },
        { id: 'n06b', label: '热个饭而已，能不能快点', scores: { W: 2 } },
        { id: 'n06c', label: '我们在进行一场关于辐射与存在的灵魂交流', scores: { Q: 4, X: 2 } },
        { id: 'n06d', label: '我没有微波炉，我是吃生肉的野生动物', scores: { W: 4 } }
      ]
    },
    {
      id: 'n07',
      dimension: 'Q',
      text: '如果你的左脚比右脚多了一个脚趾，你会怎么处理？',
      options: [
        { id: 'n07a', label: '接受它，这就是我的特色', scores: { Q: 4 } },
        { id: 'n07b', label: '困扰一段时间，最终写一首诗', scores: { X: 3, Q: 2 } },
        { id: 'n07c', label: '找医生，明天预约', scores: { W: 0 } },
        { id: 'n07d', label: '给多出来的脚趾起名字', scores: { Q: 4, X: 2 } }
      ]
    },
    {
      id: 'n08',
      dimension: 'X',
      text: '月亮打你电话，你接吗？',
      options: [
        { id: 'n08a', label: '接，我等这通电话很久了', scores: { X: 4 } },
        { id: 'n08b', label: '接，但声音很小，怕邻居听见', scores: { X: 3 } },
        { id: 'n08c', label: '不接，我只接快递员的电话', scores: { W: 4 } },
        { id: 'n08d', label: '挂掉，加黑名单，设置为已拦截骚扰电话', scores: { W: 3 } }
      ]
    },
    {
      id: 'n09',
      dimension: 'W',
      text: '世界末日倒计时还有 24 小时，你会做什么？',
      options: [
        { id: 'n09a', label: '追完我一直拖着没看的剧', scores: { W: 4 } },
        { id: 'n09b', label: '终于刷完收藏夹里的攻略', scores: { W: 3 } },
        { id: 'n09c', label: '计划一个我执行不了的 bucket list', scores: { W: 2 } },
        { id: 'n09d', label: '还是睡觉吧，醒来可能就结束了', scores: { W: 4 } }
      ]
    },
    {
      id: 'n10',
      dimension: 'Q',
      text: '你觉得「橙子」这个词听起来像什么感觉？',
      options: [
        { id: 'n10a', label: '很圆，很满，很成功', scores: { Q: 2 } },
        { id: 'n10b', label: '有点困，下午两点的感觉', scores: { W: 3 } },
        { id: 'n10c', label: '一个人坐在公园里的气质', scores: { Q: 4 } },
        { id: 'n10d', label: '我不觉得词语有感觉，我很务实', scores: { X: 0, W: 0 } }
      ]
    },
    {
      id: 'n11',
      dimension: 'X',
      text: '你的星座是什么？（不管你相不相信，选最接近的）',
      options: [
        { id: 'n11a', label: '火象星座，我生来燃烧', scores: { X: 2, Q: 3 } },
        { id: 'n11b', label: '土象星座，我只相信我能看见的东西', scores: { X: 0 } },
        { id: 'n11c', label: '风象星座，我飘忽不定但有道理', scores: { X: 2, Q: 4 } },
        { id: 'n11d', label: '水象星座，我感受太多，说得太少', scores: { X: 3, Q: 3 } }
      ]
    },
    {
      id: 'n12',
      dimension: 'W',
      text: '你认为哺乳动物里最有人生感悟的是哪一种？',
      options: [
        { id: 'n12a', label: '周杰伦', scores: { Q: 4 } },
        { id: 'n12b', label: '我最近在想要不要换发型', scores: { W: 2 } },
        { id: 'n12c', label: '我上周看了一个很感动的广告', scores: { Q: 2 } },
        { id: 'n12d', label: '熊猫，它只需要吃竹子', scores: { W: 4 } }
      ]
    },
    {
      id: 'n13',
      dimension: 'X',
      text: '假如有一天你在街上走，突然发现自己是个NPC，你的反应是？',
      options: [
        { id: 'n13a', label: '太好了，终于不用推主线任务了，直接死机', scores: { W: 4 } },
        { id: 'n13b', label: '我会试着去卡墙角，看看能不能卡进隐藏地图', scores: { X: 4 } },
        { id: 'n13c', label: '保持微笑，但内心已经崩坏了', scores: { Q: 3, W: 2 } },
        { id: 'n13d', label: 'NPC也需要工资吧？不给钱我不走剧情', scores: { Q: 2, W: 3 } }
      ]
    },
    {
      id: 'n14',
      dimension: 'Q',
      text: '请描述你昨晚做的梦（选最接近的）：',
      options: [
        { id: 'n14a', label: '我梦到了一个很长的收据', scores: { W: 3 } },
        { id: 'n14b', label: '我梦到自己在考试，但题目是俄语', scores: { X: 3 } },
        { id: 'n14c', label: '我根本没做梦，我昨晚就是死掉了八小时', scores: { W: 4 } },
        { id: 'n14d', label: '我昨晚做了个梦，但今天发现那不是梦', scores: { X: 4, Q: 4 } }
      ]
    },
    {
      id: 'n15',
      dimension: 'X',
      text: '「上善若水」在这里的意思最接近于？',
      options: [
        { id: 'n15a', label: '多喝热水', scores: { W: 4 } },
        { id: 'n15b', label: '我想开了，顺其自然', scores: { W: 2, X: 3 } },
        { id: 'n15c', label: '我在一个不适合我的地方待太久了', scores: { Q: 4 } },
        { id: 'n15d', label: '没有意思，字面意思就是字面意思', scores: { X: 0 } }
      ]
    },
    {
      id: 'n16',
      dimension: 'W',
      text: '你现在身体哪个部位最疲惫？',
      options: [
        { id: 'n16a', label: '眼睛，看多了不该看的东西', scores: { W: 3 } },
        { id: 'n16b', label: '大脑，想多了不该想的事情', scores: { X: 3 } },
        { id: 'n16c', label: '整个人，是一个整体意义上的累', scores: { W: 4 } },
        { id: 'n16d', label: '我精力充沛，我是24小时营业的', scores: { Q: 3 } }
      ]
    },
    {
      id: 'n17',
      dimension: 'Q',
      text: '有人邀请你去爬山，但山顶什么都没有，你会去吗？',
      options: [
        { id: 'n17a', label: '去，因为人生就是这样，山顶什么都没有才是重点', scores: { X: 4, Q: 4 } },
        { id: 'n17b', label: '去，但我会在山脚等你们回来', scores: { W: 4 } },
        { id: 'n17c', label: '不去，我的膝盖已经在给出答案了', scores: { W: 3 } },
        { id: 'n17d', label: '问山在哪儿，我查一下大众点评评分', scores: { W: 1 } }
      ]
    },
    {
      id: 'n18',
      dimension: 'X',
      text: '你觉得你上辈子是什么？',
      options: [
        { id: 'n18a', label: '一只猫，所以我这辈子格外懒', scores: { W: 4, X: 2 } },
        { id: 'n18b', label: '一棵树，不解释', scores: { X: 3, Q: 2 } },
        { id: 'n18c', label: '一个路人，这辈子依然是路人', scores: { W: 3 } },
        { id: 'n18d', label: '没有上辈子，我是第一次', scores: { X: 0 } }
      ]
    },
    {
      id: 'n19',
      dimension: 'Q',
      text: '你的大脑里，大部分时间在循环播放什么？',
      options: [
        { id: 'n19a', label: '楼下超市大甩卖的廉价电子音广告', scores: { W: 3, Q: 0 } },
        { id: 'n19b', label: '一首我根本没听过但觉得它应该是名曲的交响乐', scores: { Q: 4, X: 2 } },
        { id: 'n19c', label: '纯白噪音，和静电差不多的声音', scores: { X: 3, W: 3 } },
        { id: 'n19d', label: '两个小人在一起吵架，但完全听不清在吵什么', scores: { X: 4 } }
      ]
    },
    {
      id: 'n20',
      dimension: 'W',
      text: '一棵树在想什么？',
      options: [
        { id: 'n20a', label: '它在想有没有出路', scores: { X: 4 } },
        { id: 'n20b', label: '什么都没想，树不会想事情', scores: { X: 0, W: 2 } },
        { id: 'n20c', label: '「又一天过去了」', scores: { W: 4 } },
        { id: 'n20d', label: '我不知道，但我很羡慕它', scores: { W: 4, Q: 2 } }
      ]
    },
    {
      id: 'n21',
      dimension: 'Q',
      text: '你的人生目前处于哪个章节？',
      options: [
        { id: 'n21a', label: '前言：还没开始', scores: { W: 4 } },
        { id: 'n21b', label: '第三章：事情开始变得复杂了', scores: { Q: 3 } },
        { id: 'n21c', label: '附录：主线已经结束了，在处理后续', scores: { Q: 4 } },
        { id: 'n21d', label: '我的书里没有章节，全是混乱的注脚', scores: { X: 4, Q: 3 } }
      ]
    },
    {
      id: 'n22',
      dimension: 'X',
      text: '你相信平行宇宙吗？',
      options: [
        { id: 'n22a', label: '信，在那个宇宙里我已经很成功了', scores: { X: 4, W: 4 } },
        { id: 'n22b', label: '信，但那个我过得更差，所以我释怀了', scores: { X: 3 } },
        { id: 'n22c', label: '不信，我只信这一个宇宙，而且我还没搞清楚', scores: { X: 0 } },
        { id: 'n22d', label: '我连这个宇宙都快处理不过来了', scores: { W: 3 } }
      ]
    },
    {
      id: 'n23',
      dimension: 'W',
      text: '你的座右铭最接近以下哪一句？',
      options: [
        { id: 'n23a', label: '人生没有彩排，每天都是现场直播', scores: { Q: 3 } },
        { id: 'n23b', label: '算了', scores: { W: 4 } },
        { id: 'n23c', label: '车到山前必有路，路到山前必有车', scores: { X: 3 } },
        { id: 'n23d', label: '我没有座右铭，我只有座椅', scores: { W: 3, Q: 3 } }
      ]
    },
    {
      id: 'n24',
      dimension: 'Q',
      text: '你觉得「下午四点」是什么颜色的？',
      options: [
        { id: 'n24a', label: '橙黄色，有点困，有点感怀', scores: { Q: 4, X: 2 } },
        { id: 'n24b', label: '灰色，我在上班', scores: { W: 3 } },
        { id: 'n24c', label: '这个问题没有答案，我拒绝回答', scores: { X: 0 } },
        { id: 'n24d', label: '我不给时间分配颜色，我只看日历', scores: { W: 1 } }
      ]
    },
    {
      id: 'n25',
      dimension: 'X',
      text: '如果你的名字是一道菜，它最可能是什么？',
      options: [
        { id: 'n25a', label: '夫妻肺片，名字吓人但大家都喜欢', scores: { Q: 4 } },
        { id: 'n25b', label: '白水煮蛋，没有名字，但管饱', scores: { W: 4 } },
        { id: 'n25c', label: '一道没上过菜单的特供菜', scores: { X: 4, Q: 4 } },
        { id: 'n25d', label: '我拒绝被命名为一道菜', scores: { X: 0, Q: 2 } }
      ]
    },
    {
      id: 'n26',
      dimension: 'W',
      text: '如果你变成了一颗土豆，你最想被做成什么菜？',
      options: [
        { id: 'n26a', label: '薯条，这样至少我能被大家抢着吃', scores: { Q: 3 } },
        { id: 'n26b', label: '发芽的土豆，我不想被吃，我想有毒', scores: { X: 4, W: 2 } },
        { id: 'n26c', label: '烂在地里，成为化肥，这是我能想到的最轻松的下场', scores: { W: 4 } },
        { id: 'n26d', label: '土豆泥，我已经是一滩烂泥了，非常符合现状', scores: { W: 4, Q: 2 } }
      ]
    },
    {
      id: 'n27',
      dimension: 'W',
      text: '你今年已经实现了多少个年初给自己定的目标？',
      options: [
        { id: 'n27a', label: '全部实现了，我是目标终结者', scores: { W: 0 } },
        { id: 'n27b', label: '还没算，但感觉不多', scores: { W: 3 } },
        { id: 'n27c', label: '年初我没定目标，我定的是打算', scores: { W: 3, X: 2 } },
        { id: 'n27d', label: '我记不清年初定了什么了，好像有个什么……算了', scores: { W: 4 } }
      ]
    },
    {
      id: 'n28',
      dimension: 'Q',
      text: '你最后一次「被人记住」是因为什么？',
      options: [
        { id: 'n28a', label: '我说了一句没人听懂但大家都笑了的话', scores: { Q: 4, X: 3 } },
        { id: 'n28b', label: '因为我迟到了，我走到哪里都迟到', scores: { W: 3 } },
        { id: 'n28c', label: '我不确定有没有人记住我', scores: { W: 2 } },
        { id: 'n28d', label: '我很久没出现在任何场合了，记住我的人都以为我蒸发了', scores: { W: 4, Q: 2 } }
      ]
    },
    {
      id: 'n29',
      dimension: 'X',
      text: '你觉得自己的灵魂是什么形状的？',
      options: [
        { id: 'n29a', label: '一串乱码，偶尔会报 NullPointerException', scores: { X: 4, W: 2 } },
        { id: 'n29b', label: '是个摊在地上的荷包蛋，戳一下还会流黄', scores: { Q: 4 } },
        { id: 'n29c', label: '完全是个球体，随便别人怎么推都能滚得很远', scores: { W: 4, X: 2 } },
        { id: 'n29d', label: '如果灵魂有形状，那也是个盲盒，我都不想拆', scores: { W: 3, Q: 3 } }
      ]
    },
    {
      id: 'n30',
      dimension: 'X',
      text: '测到这里，你的感想是？',
      options: [
        { id: 'n30a', label: '我无法判断这个测试想干什么，但我做完了', scores: { X: 2, W: 2, Q: 2 } },
        { id: 'n30b', label: '感觉它在了解我，但又什么都没说', scores: { X: 4, Q: 4 } },
        { id: 'n30c', label: '我做测试就是为了看结论，别跟我废话', scores: { W: 4 } },
        { id: 'n30d', label: '挺好的，我感觉我找对组织了', scores: { Q: 3, X: 3 } }
      ]
    }
  ],

  results: [
    {
      id: 'mentalgibberish',
      title: '精神乱码',
      subtitle: 'Error 404 Soul Not Found',
      emoji: '🪲',
      color: '#10B981',
      description: [
        '你的思维方式像极了一长串乱码，没人能解析，包括你自己。你仿佛是造物主在键盘上睡着了不小心敲出来的产物。',
        '你经常在完全不相干的事物中建立极其诡异的连接，导致你的结论永远出人意料。',
        '没关系，至少你的报错信息很有个性。'
      ],
      strengths: ['不可破解', '浑然天成的幽默'],
      growthTips: ['记得定期重启清内存', '别试图解释自己，越描越黑'],
      matchRules: { X: 58 },
      rarityLabel: '🪲 精神乱码！你这报错信息建议直接提交Github'
    },
    {
      id: 'walkingprose',
      title: '人形散文诗',
      subtitle: 'Meaningless but Beautiful',
      emoji: '📜',
      color: '#F472B6',
      description: [
        '你整个人就是一首华丽但不知所云的散文诗。别人靠近你，会感受到强烈的艺术气息和氛围感。',
        '但这股气息仔细一品，似乎没有任何能用来落地的实用价值。你是用来欣赏的，不是用来理解的。',
        '你很唯美，同时也很迷茫。'
      ],
      strengths: ['自带BGM', '极强的氛围感'],
      growthTips: ['学习一些接地气的生存技能', '别让自己飘得太远'],
      matchRules: { Q: 62 }
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
      matchRules: { W: 87 },
      rarityLabel: '💤 宇宙级废柴！你这种躺平的决心连黑洞都拉不起来'
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
      matchRules: { X: 58, W: 67 },
      rarityLabel: '🕳️ 逻辑黑洞！和你聊天的人平均降智50%'
    },
    {
      id: 'schrodingeremployee',
      title: '薛定谔的打工人',
      subtitle: 'Superposition of Slacking',
      emoji: '📦',
      color: '#8B5CF6',
      description: [
        '你同时处于「在努力」和「在摸鱼」的量子叠加态。只有当别人来查看你的进度时，你才会坍缩成其中一种状态。',
        '通常，坍缩的结果是你在摸鱼。你的工作伦理充满了深奥的玄学色彩和不可观测性。',
        '你并不是故意偷懒，你只是顺应了量子力学的基本规律。'
      ],
      strengths: ['灵活的底线', '薛定谔式产出'],
      growthTips: ['小心观测者效应', '偶尔展示一下努力的那一面'],
      matchRules: { W: 67, X: 47 }
    },
    {
      id: 'cyberplant',
      title: '赛博盆栽',
      subtitle: 'Needs Wi-Fi and Compliments',
      emoji: '🪴',
      color: '#059669',
      description: [
        '你把自己稳稳地种在了一个赛博花盆里。你不想移动，也不太想进行现实里的光合作用，岁月静好是你最大的追求。',
        '你偶尔需要浇点Wi-Fi，施点点赞。你的生活就像是一张静止画，但是加上了复古滤镜的那种。',
        '只要不拔你的网线，你就是世界上最好养活的碳基生物。'
      ],
      strengths: ['情绪极其稳定', '低碳环保'],
      growthTips: ['记得挪动一下脖子', '多喝水，多晒真实的太阳'],
      matchRules: { W: 67, Q: 42 },
      rarityLabel: '🪴 赛博盆栽！只要有WiFi你就能活到地老天荒'
    },
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
      matchRules: { X: 52, Q: 42 }
    },
    {
      id: 'minimafia',
      title: '微型黑社会老大',
      subtitle: 'Ruling the Bacteria',
      emoji: '🕶️',
      color: '#B91C1C',
      description: [
        '你有一种莫名的统御力和大佬气质，但非常遗憾，这种气质只对非常微小的事物有效。',
        '比如家里的尘螨、桌上的中性笔，或者冰箱里放了三天的剩菜。你在你的微观领地里说一不二，但在宏观世界里你只是个路人。',
        '这是一种错位的豪迈。'
      ],
      strengths: ['局部称王称霸', '强大的心理暗示'],
      growthTips: ['别跟冰箱里的剩菜较劲了', '把魄力用在宏观世界上'],
      matchRules: { Q: 42, X: 35 }
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
      matchRules: { Q: 47 }
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
      matchRules: { W: 54 }
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
      matchRules: { X: 17, W: 20, Q: 16 }
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
