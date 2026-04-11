import type { TestSuite } from '../types'

// ───────────────────────────────────────────────
// 搞怪题库 —— 灵魂测试：你到底是什么怪物？
// 3 个维度:
//   S (社牛指数)  : 社交能量 vs 社恐程度
//   E (精神内耗度): 高=自我内耗满满 vs 低=活得相当明白
//   C (行动掌控)  : 高=整顿达人 vs 低=被生活整顿
// 27 种结论: 由各维度分数区间组合推导
// ───────────────────────────────────────────────

export const chaosTest: TestSuite = {
  id: 'chaos',
  name: '灵魂测试',
  tagline: '你到底是哪种<br /><span class="text-primary-500">灵魂怪物？</span>',
  description: '40道真相捕捉，深挖那些连你都不愿承认的本能。本测试包含大量“扎心”的真实元素，请做好心理准备。',
  estimatedMinutes: 6,
  randomizeOptions: true,

  dimensions: [
    {
      key: 'S',
      label: '社牛指数',
      description: '在人群中发光发热 vs 躲在角落吃自己',
      lowLabel: '社恐星人',
      highLabel: '社牛天花板'
    },
    {
      key: 'E',
      label: '精神内耗',
      description: '脑子里住了多少个「如果当初……」',
      lowLabel: '活得明白',
      highLabel: '内耗满级'
    },
    {
      key: 'C',
      label: '行动掌控',
      description: '你是整顿别人还是被生活整顿',
      lowLabel: '被整顿体质',
      highLabel: '整顿大师'
    }
  ],

  questions: [
    // ── 社牛指数 (S) ──
    {
      id: 'c01',
      dimension: 'S',
      text: '朋友突然组了个局叫你出去玩，你的第一反应是？',
      options: [
        { id: 'c01a', label: '冲！我已经在门口了！', scores: { S: 4 } },
        { id: 'c01b', label: '稍等我化个妆', scores: { S: 3 } },
        { id: 'c01c', label: '今天有点累……明天吧', scores: { S: 1 } },
        { id: 'c01d', label: '已读不回，继续躺着', scores: { S: 0 } }
      ]
    },
    {
      id: 'c02',
      dimension: 'S',
      text: '在一个你一个人都不认识的派对上，你会？',
      options: [
        { id: 'c02a', label: '当场认识所有人并成为灵魂人物', scores: { S: 4 } },
        { id: 'c02b', label: '慢热，找个角落观察一会儿再出手', scores: { S: 2 } },
        { id: 'c02c', label: '一直盯着手机假装在回消息', scores: { S: 1 } },
        { id: 'c02d', label: '借口上厕所然后打车回家了', scores: { S: 0 } }
      ]
    },
    {
      id: 'c03',
      dimension: 'S',
      text: '「我就随便说说」这句话，你相信吗？',
      options: [
        { id: 'c03a', label: '不信，但我照样发言，无所谓', scores: { S: 4 } },
        { id: 'c03b', label: '信，然后被怼了', scores: { S: 2 } },
        { id: 'c03c', label: '从不随便说说，说了就是说了', scores: { S: 1 } },
        { id: 'c03d', label: '我从来不随便说说，因为我根本不开口', scores: { S: 0 } }
      ]
    },
    {
      id: 'c04',
      dimension: 'S',
      text: '电梯里只有你和一个陌生人，你会？',
      options: [
        { id: 'c04a', label: '主动搭话：今天天气不错', scores: { S: 4 } },
        { id: 'c04b', label: '对视一秒，礼貌点头', scores: { S: 2 } },
        { id: 'c04c', label: '默默看手机假装没看见', scores: { S: 1 } },
        { id: 'c04d', label: '面壁而立，直到电梯到达', scores: { S: 0 } }
      ]
    },
    {
      id: 'c05',
      dimension: 'S',
      text: '朋友发来了一段120秒的语音，你？',
      options: [
        { id: 'c05a', label: '立刻听完，然后回一段更长的', scores: { S: 4 } },
        { id: 'c05b', label: '听完但回文字，因为懒得录', scores: { S: 3 } },
        { id: 'c05c', label: '等下有空再说……然后忘了', scores: { S: 1 } },
        { id: 'c05d', label: '直接拖进度条看看有没有重点', scores: { S: 0 } }
      ]
    },
    {
      id: 'c06',
      dimension: 'S',
      text: '你在微信里有多少个「联系不上但也没删」的僵尸好友？',
      options: [
        { id: 'c06a', label: '几乎没有，我定期清理通讯录', scores: { S: 3 } },
        { id: 'c06b', label: '一些，但我记得每一个人', scores: { S: 2 } },
        { id: 'c06c', label: '非常多，我也不知道他们是谁了', scores: { S: 1 } },
        { id: 'c06d', label: '我根本不知道我有多少好友', scores: { S: 0 } }
      ]
    },
    {
      id: 'c07',
      dimension: 'S',
      text: '有人在群里 @ 全体成员，你会？',
      options: [
        { id: 'c07a', label: '秒回，还带表情包', scores: { S: 4 } },
        { id: 'c07b', label: '看完不回，但已读了', scores: { S: 2 } },
        { id: 'c07c', label: '等别人回完再悄悄加一个「+1」', scores: { S: 1 } },
        { id: 'c07d', label: '群消息已全部免打扰', scores: { S: 0 } }
      ]
    },
    {
      id: 'c08',
      dimension: 'S',
      text: '下面哪句话最像你说的？',
      options: [
        { id: 'c08a', label: '来来来！我给大家介绍一下！', scores: { S: 4 } },
        { id: 'c08b', label: '哈哈哈对对对~~~', scores: { S: 3 } },
        { id: 'c08c', label: '（沉默）（点头）（微笑）', scores: { S: 1 } },
        { id: 'c08d', label: '我去买瓶水（然后没回来）', scores: { S: 0 } }
      ]
    },

    // ── 精神内耗 (E) ──
    {
      id: 'c09',
      dimension: 'E',
      text: '发完一条朋友圈，你会？',
      options: [
        { id: 'c09a', label: '反复刷新看有没有人点赞', scores: { E: 4 } },
        { id: 'c09b', label: '发完就忘，有人评论再说', scores: { E: 1 } },
        { id: 'c09c', label: '发完五分钟删掉，感觉发多了', scores: { E: 4 } },
        { id: 'c09d', label: '我已经把朋友圈权限设置成「仅自己可见」了', scores: { E: 3 } }
      ]
    },
    {
      id: 'c10',
      dimension: 'E',
      text: '跟人吵完架之后，你的大脑会？',
      options: [
        { id: 'c10a', label: '反复回放，想着自己哪句话没说好', scores: { E: 4 } },
        { id: 'c10b', label: '我才不会吵架，我会冷处理', scores: { E: 3 } },
        { id: 'c10c', label: '吵完就算了，该吃吃该睡睡', scores: { E: 0 } },
        { id: 'c10d', label: '等一下……我还在准备待会儿怎么怼回去', scores: { E: 2 } }
      ]
    },
    {
      id: 'c11',
      dimension: 'E',
      text: '凌晨三点，你在干什么？',
      options: [
        { id: 'c11a', label: '睡觉，十一点就睡了', scores: { E: 0 } },
        { id: 'c11b', label: '刷手机，也不知道在找什么', scores: { E: 2 } },
        { id: 'c11c', label: '脑子里整理三年前的尴尬瞬间', scores: { E: 4 } },
        { id: 'c11d', label: '在思考人生的意义，然后想不明白', scores: { E: 4 } }
      ]
    },
    {
      id: 'c12',
      dimension: 'E',
      text: '「你今天心情怎么样」，最接近你真实答案的是？',
      options: [
        { id: 'c12a', label: '挺好的，没什么特别', scores: { E: 0 } },
        { id: 'c12b', label: '说不清楚，但有点低落', scores: { E: 3 } },
        { id: 'c12c', label: '上午还好，下午看了条新闻直接崩了', scores: { E: 4 } },
        { id: 'c12d', label: '不知道，我很久没认真感受过自己的心情了', scores: { E: 4 } }
      ]
    },
    {
      id: 'c13',
      dimension: 'E',
      text: '你最近一次感到真正放松是什么时候？',
      options: [
        { id: 'c13a', label: '今天，我随时都很放松', scores: { E: 0 } },
        { id: 'c13b', label: '上周，懒在床上看了一天剧', scores: { E: 1 } },
        { id: 'c13c', label: '想不起来了……', scores: { E: 4 } },
        { id: 'c13d', label: '我放松的时候脑子会自动填充焦虑内容', scores: { E: 4 } }
      ]
    },
    {
      id: 'c14',
      dimension: 'E',
      text: '发了一条消息对方没回，你怎么想？',
      options: [
        { id: 'c14a', label: '他可能没看到，过会儿再说', scores: { E: 0 } },
        { id: 'c14b', label: '是不是我说错话了？', scores: { E: 3 } },
        { id: 'c14c', label: '对方是不是不想理我了？我是不是很烦？', scores: { E: 4 } },
        { id: 'c14d', label: '已经在脑内演完一场完整的绝交剧情', scores: { E: 4 } }
      ]
    },
    {
      id: 'c15',
      dimension: 'E',
      text: '假如你的脑子是一个手机，现在的状态是？',
      options: [
        { id: 'c15a', label: '96%电量，运行流畅', scores: { E: 0 } },
        { id: 'c15b', label: '60%电量，有点耗电但还行', scores: { E: 1 } },
        { id: 'c15c', label: '20%电量，低电量模式啥也做不了', scores: { E: 3 } },
        { id: 'c15d', label: '已过热，系统自动关机保护中', scores: { E: 4 } }
      ]
    },
    {
      id: 'c16',
      dimension: 'E',
      text: '关于「躺平」，你的看法是？',
      options: [
        { id: 'c16a', label: '我早就躺平了，活得很开心', scores: { E: 0 } },
        { id: 'c16b', label: '想躺平但良心不允许', scores: { E: 3 } },
        { id: 'c16c', label: '我躺着还在焦虑，躺平是不可能躺平的', scores: { E: 4 } },
        { id: 'c16d', label: '什么是躺平，我只会越躺越亢奋', scores: { E: 2 } }
      ]
    },
    {
      id: 'c17',
      dimension: 'E',
      text: '【灵魂拷问】你在乎别人说「你变了」吗？',
      options: [
        { id: 'c17a', label: '根本不在乎，我一直都在变', scores: { E: 0 } },
        { id: 'c17b', label: '有点在乎，会想想是好是坏', scores: { E: 2 } },
        { id: 'c17c', label: '非常在乎，会反思好几天', scores: { E: 4 } },
        { id: 'c17d', label: '变了好啊，说明我有成长', scores: { E: 0 } }
      ]
    },

    // ── 行动掌控 (C) ──
    {
      id: 'c18',
      dimension: 'C',
      text: '在一群朋友里，你通常扮演的角色是？',
      options: [
        { id: 'c18a', label: '决策者，最后听我的', scores: { C: 4 } },
        { id: 'c18b', label: '执行者，你们想好了叫我就行', scores: { C: 2 } },
        { id: 'c18c', label: '随波逐流者，吃什么都行', scores: { C: 1 } },
        { id: 'c18d', label: '提建议被否定的那个', scores: { C: 0 } }
      ]
    },
    {
      id: 'c19',
      dimension: 'C',
      text: '工作群里有人说了一句混乱的话，你会？',
      options: [
        { id: 'c19a', label: '当场纠正，逻辑清晰，不徐不疾', scores: { C: 4 } },
        { id: 'c19b', label: '私下和他说，给他留面子', scores: { C: 3 } },
        { id: 'c19c', label: '看不下去但选择沉默', scores: { C: 1 } },
        { id: 'c19d', label: '我自己也挺混乱的，算了', scores: { C: 0 } }
      ]
    },
    {
      id: 'c20',
      dimension: 'C',
      text: '你上一次物理意义上整理房间是什么时候？',
      options: [
        { id: 'c20a', label: '昨天，我保持每日整理习惯', scores: { C: 4 } },
        { id: 'c20b', label: '上周，大概搞了一次', scores: { C: 3 } },
        { id: 'c20c', label: '上个月？大概吧', scores: { C: 1 } },
        { id: 'c20d', label: '整理？我已经习惯在混乱中寻找东西了', scores: { C: 0 } }
      ]
    },
    {
      id: 'c21',
      dimension: 'C',
      text: '你的手机相册是什么状态？',
      options: [
        { id: 'c21a', label: '整齐分类，每张照片都有存在的意义', scores: { C: 4 } },
        { id: 'c21b', label: '随手拍，偶尔删一删', scores: { C: 2 } },
        { id: 'c21c', label: '9000张照片，其中8000张都是截图', scores: { C: 1 } },
        { id: 'c21d', label: '存储空间长期爆满，我已经麻木了', scores: { C: 0 } }
      ]
    },
    {
      id: 'c22',
      dimension: 'C',
      text: '领导说「这个方案有点问题」，你会？',
      options: [
        { id: 'c22a', label: '立刻问清楚哪里有问题，当场修改方向', scores: { C: 4 } },
        { id: 'c22b', label: '回去想想，修改之后再发过去', scores: { C: 3 } },
        { id: 'c22c', label: '说好的，然后不知道从何改起', scores: { C: 1 } },
        { id: 'c22d', label: '回去悄悄改了个标题，发过去了', scores: { C: 0 } }
      ]
    },
    {
      id: 'c23',
      dimension: 'C',
      text: '【灵魂拷问】你的待办事项 App 里有多少未完成的事？',
      options: [
        { id: 'c23a', label: '我没有待办 App，我脑子就是 App', scores: { C: 3 } },
        { id: 'c23b', label: '5条以内，全部可控', scores: { C: 4 } },
        { id: 'c23c', label: '30条，最老的一条是两年前加的', scores: { C: 1 } },
        { id: 'c23d', label: '我下载过这类 App，但忘记打开了', scores: { C: 0 } }
      ]
    },
    {
      id: 'c24',
      dimension: 'C',
      text: '有人拿你开玩笑，玩笑有点过分，你会？',
      options: [
        { id: 'c24a', label: '当场指出，说清楚边界', scores: { C: 4 } },
        { id: 'c24b', label: '笑着说算了，但心里记住了', scores: { C: 2 } },
        { id: 'c24c', label: '假笑配合，回家生闷气', scores: { C: 1 } },
        { id: 'c24d', label: '我也不知道这算不算过分……', scores: { C: 0 } }
      ]
    },
    {
      id: 'c25',
      dimension: 'C',
      text: '你怎么看待「说不」这件事？',
      options: [
        { id: 'c25a', label: '很自然，不符合我的利益就拒绝', scores: { C: 4 } },
        { id: 'c25b', label: '努力练习中，正在进化', scores: { C: 2 } },
        { id: 'c25c', label: '能不拒绝就不拒绝，太累了', scores: { C: 1 } },
        { id: 'c25d', label: '说不之后会内疚好几天', scores: { C: 0 } }
      ]
    },

    // ── 混合/搞怪题 ── （兼顾所有维度）
    {
      id: 'c26',
      dimension: 'S',
      text: '你上一条发出去的表情包，内容是什么风格？',
      options: [
        { id: 'c26a', label: '蔡徐坤/刘畊宏类明星污图', scores: { S: 4 } },
        { id: 'c26b', label: '猫猫狗狗可爱系', scores: { S: 2 } },
        { id: 'c26c', label: '沙雕文字梗图', scores: { S: 3 } },
        { id: 'c26d', label: '我没发过表情包，只用文字', scores: { S: 0 } }
      ]
    },
    {
      id: 'c27',
      dimension: 'E',
      text: '「高考」这两个字出现在你眼前，你的身体会？',
      options: [
        { id: 'c27a', label: '毫无波动，已成往事', scores: { E: 0 } },
        { id: 'c27b', label: '心跳加速，应激反应', scores: { E: 3 } },
        { id: 'c27c', label: '梦回排队进考场，腿都软了', scores: { E: 4 } },
        { id: 'c27d', label: '我还在高中呢叔', scores: { E: 2 } }
      ]
    },
    {
      id: 'c28',
      dimension: 'C',
      text: '有人给你发来「能帮个忙吗」，你的内心画面是？',
      options: [
        { id: 'c28a', label: '说吧，能帮的帮，不能帮的拒绝', scores: { C: 4 } },
        { id: 'c28b', label: '先问什么忙，再决定', scores: { C: 3 } },
        { id: 'c28c', label: '先答应下来，再看能不能做到', scores: { C: 1 } },
        { id: 'c28d', label: '心里一紧，开始想怎么推', scores: { C: 0 } }
      ]
    },
    {
      id: 'c29',
      dimension: 'S',
      text: '你在 KTV 唱歌，麦克风传给你，你会？',
      options: [
        { id: 'c29a', label: '接过来直接开唱，什么都唱', scores: { S: 4 } },
        { id: 'c29b', label: '选一首最拿手的，认真唱完', scores: { S: 3 } },
        { id: 'c29c', label: '推给旁边的人，「你来你来」', scores: { S: 1 } },
        { id: 'c29d', label: '我不去 KTV', scores: { S: 0 } }
      ]
    },
    {
      id: 'c30',
      dimension: 'E',
      text: '【灵魂拷问】你觉得自己是一个「累人」吗？',
      options: [
        { id: 'c30a', label: '不，我觉得我挺好相处的', scores: { E: 0 } },
        { id: 'c30b', label: '有时候可能会……但我在改', scores: { E: 2 } },
        { id: 'c30c', label: '是的，我感觉自己挺复杂的', scores: { E: 4 } },
        { id: 'c30d', label: '这道题让我开始内耗了', scores: { E: 4 } }
      ]
    },
    {
      id: 'c31',
      dimension: 'C',
      text: '朋友倾诉完烦恼，你一般怎么回？',
      options: [
        { id: 'c31a', label: '分析问题根因，提供可执行方案', scores: { C: 4 } },
        { id: 'c31b', label: '先共情，再问要不要听建议', scores: { C: 3 } },
        { id: 'c31c', label: '「哎这种事很正常啦」然后聊别的', scores: { C: 1 } },
        { id: 'c31d', label: '「我懂我懂」然后开始讲你自己的事', scores: { C: 0 } }
      ]
    },
    {
      id: 'c32',
      dimension: 'S',
      text: '在公共场所手机放了首歌，没带耳机，你会？',
      options: [
        { id: 'c32a', label: '直接外放，又不是什么隐秘的歌', scores: { S: 4 } },
        { id: 'c32b', label: '把声音调小一点，凑合听', scores: { S: 2 } },
        { id: 'c32c', label: '关掉，不能打扰别人', scores: { S: 1 } },
        { id: 'c32d', label: '当场从包里翻出备用耳机', scores: { S: 0 } }
      ]
    },
    {
      id: 'c33',
      dimension: 'E',
      text: '你上一次哭是因为什么？',
      options: [
        { id: 'c33a', label: '不记得了，我不怎么哭', scores: { E: 0 } },
        { id: 'c33b', label: '看了部很感人的电影', scores: { E: 1 } },
        { id: 'c33c', label: '想到了很久以前的一件事', scores: { E: 3 } },
        { id: 'c33d', label: '不知道为什么，就是哭了', scores: { E: 4 } }
      ]
    },
    {
      id: 'c34',
      dimension: 'C',
      text: '生活里遇到不讲理的人，你的处理方式是？',
      options: [
        { id: 'c34a', label: '我来讲理，帮他分析清楚', scores: { C: 4 } },
        { id: 'c34b', label: '离他远点，不值得浪费时间', scores: { C: 3 } },
        { id: 'c34c', label: '委屈自己算了，懒得扯', scores: { C: 1 } },
        { id: 'c34d', label: '到处跟别人说他有多不讲理', scores: { C: 0 } }
      ]
    },
    {
      id: 'c35',
      dimension: 'S',
      text: '「我跟你说一个秘密，但你不能告诉别人」，你能保守到几点？',
      options: [
        { id: 'c35a', label: '啊我刚才已经发给闺蜜了', scores: { S: 4 } },
        { id: 'c35b', label: '告诉了一个我最信任的人', scores: { S: 2 } },
        { id: 'c35c', label: '没有告诉任何人，但我好想说', scores: { S: 1 } },
        { id: 'c35d', label: '带进棺材，视我如金库', scores: { S: 0 } }
      ]
    },
    {
      id: 'c36',
      dimension: 'E',
      text: '你有没有对着空白的聊天框打完一段话然后全删掉？',
      options: [
        { id: 'c36a', label: '没有，我说话直接发', scores: { E: 0 } },
        { id: 'c36b', label: '偶尔有，但最终还是发了', scores: { E: 1 } },
        { id: 'c36c', label: '经常，大概发出去的只有10%', scores: { E: 3 } },
        { id: 'c36d', label: '是的，我的草稿箱是我最真实的自己', scores: { E: 4 } }
      ]
    },
    {
      id: 'c37',
      dimension: 'C',
      text: '「你要相信自己」这句话，你怎么看？',
      options: [
        { id: 'c37a', label: '是的，我非常相信自己', scores: { C: 4 } },
        { id: 'c37b', label: '努力相信，但偶尔会动摇', scores: { C: 2 } },
        { id: 'c37c', label: '我更相信他人的判断', scores: { C: 1 } },
        { id: 'c37d', label: '「相信自己」？我连自己说的话都不信', scores: { C: 0 } }
      ]
    },
    {
      id: 'c38',
      dimension: 'S',
      text: '朋友圈能看出你的状态吗？',
      options: [
        { id: 'c38a', label: '完全能，我就是真实记录生活', scores: { S: 4 } },
        { id: 'c38b', label: '能，但我只发高光时刻', scores: { S: 3 } },
        { id: 'c38c', label: '看不出，我很少发', scores: { S: 1 } },
        { id: 'c38d', label: '我的朋友圈是一片寂静', scores: { S: 0 } }
      ]
    },
    {
      id: 'c39',
      dimension: 'E',
      text: '你有「多巴胺穿搭」吗（你会用颜色/穿搭来调节心情）？',
      options: [
        { id: 'c39a', label: '有！今天心情好我就穿亮色', scores: { E: 1 } },
        { id: 'c39b', label: '没有，我穿衣服全凭随机', scores: { E: 2 } },
        { id: 'c39c', label: '有，但治标不治本，换完衣服还是焦虑', scores: { E: 4 } },
        { id: 'c39d', label: '我没有穿搭，我只有能穿的衣服', scores: { E: 3 } }
      ]
    },
    {
      id: 'c40',
      dimension: 'C',
      text: '【最终问题】你最像下面哪种状态的人？',
      options: [
        { id: 'c40a', label: '拿着计划表杀穿人生的人', scores: { C: 4 } },
        { id: 'c40b', label: '没有计划表但照样把事办了的人', scores: { C: 3 } },
        { id: 'c40c', label: '有计划表但基本没执行的人', scores: { C: 1 } },
        { id: 'c40d', label: '计划表本身就是个计划', scores: { C: 0 } }
      ]
    }
  ],

  // ────────────────────────────────────────────────────────
  // 24 种结论
  // 分数区间说明 (每维度最高约 32分):
  //   高: >= 20  中: 10~19  低: < 10
  // matchRules: reqScore>0 时计算 fit=min(用户分/阈值,1)，取平均值最高的结论
  // ────────────────────────────────────────────────────────
  results: [
    // ── 社牛高 + 内耗低 + 整顿高 ──
    {
      id: 'motherlord',
      title: '妈妈',
      subtitle: 'The Mom of the Group',
      emoji: '👩‍👧',
      color: '#FFB347',
      description: [
        '恭喜你，你是群体里的妈妈。不是因为你年纪大，而是因为你总是第一个知道谁今天不对劲，第一个帮人拿外卖，第一个把局面摆平。',
        '你同时兼顾每个人的情绪和外卖到哪了，争吵当场拉架，有你在大家都莫名其妙地心里踏实——但也丧失了思考能力。',
        '但别忘了：妈妈也需要被照顾一下。'
      ],
      strengths: ['自带稳定光环', '掌控全场', '说话有分量', '凝聚力MAX'],
      growthTips: ['也要让别人妈妈你一下', '偶尔放飞一下自我', '减少包揽'],
      matchRules: { S: 39, E: 0, C: 36 },
      rarityLabel: '🍼 圣母降临！这种操碎心的体质真的建议申遗'
    },
    // ── 整顿极高 + 社牛中 + 内耗几乎为零 ──
    {
      id: 'corporatemachine',
      title: '顶级牛马',
      subtitle: 'Corporate Super-engine',
      emoji: '🐂',
      color: '#44403C',
      description: [
        '你已经不是在工作了，你是在进行一场名为“把自己磨损成铁粉”的行为艺术。老板还没开口，你已经把方案卷到了2077年。',
        '这种变态的执行力让AI都感到汗颜，你是真正的血肉机床，在效率的祭坛上贡献了最后一根脊柱。',
        '温馨提示：你的零件编号是多少？上次像个人一样呼吸是什么时候？'
      ],
      strengths: ['执行力无上限', '责任感爆表', '不会在上班时间情绪化'],
      growthTips: ['下班做一件跟工作无关的事', '记住你不只是工具', '今晚早点睡'],
      matchRules: { S: 31, E: 0, C: 48 },
      rarityLabel: '⚙️ 顶级牛马！你已经是超越碳基生命的钢铁机器了'
    },
    // ── 社牛高 + 内耗低 + 整顿低 ──
    {
      id: 'wildcard',
      title: '野生废物',
      subtitle: 'The Wild Card',
      emoji: '🃏',
      color: '#FF6B9D',
      description: [
        '你拥有一种极其高级的无序感。社交能力拉满，计划等于自杀，你是那种“我不知道我在干嘛但我玩得很爽”的混乱中立代言人。',
        '你的朋友圈每天都有新剧情，你是不可预测的野生力量。没有人知道你下一步要做什么，包括你自己。',
        '建议你别想后天了，能活过今天这种由于过分自由带来的眩晕感就很不错了。'
      ],
      strengths: ['随遇而安', '社交天赋', '制造欢笑', '佛系快乐'],
      growthTips: ['存一点钱', '想想三天后', '别只图热闹'],
      matchRules: { S: 43, E: 0, C: 0 },
      rarityLabel: '🗑️ 野生废物！这种纯粹的快乐真是令人嫉妒'
    },
    // ── 社牛高 + 内耗高 ──
    {
      id: 'performativeexhausted',
      title: '表演型累人',
      subtitle: 'The Performative Wreck',
      emoji: '🎭',
      color: '#C084FC',
      description: [
        '外面是最活跃的那个人，里面是最疲惫的那个人。你能在所有群里镇场，但一关上门就开始反思今天说的每一句话。',
        '你是「人前社牛，人后社恐」的终极形态：既渴望融入，又极其在意自己有没有说错话。',
        '你真的很累了，摘下面具歇一会儿吧（但你也知道你摘不了太久）。'
      ],
      strengths: ['超强表现力', '共情能力强', '场控大师'],
      growthTips: ['不用每次都是那个活跃的人', '允许自己沉默', '跟自己坦诚'],
      matchRules: { S: 39, E: 43 }
    },
    // ── 社恐 + 内耗高 + 整顿低 ──
    {
      id: 'internallycollapsing',
      title: '精神废墟',
      subtitle: 'Internal Ruins',
      emoji: '🏚️',
      color: '#94A3B8',
      description: [
        '你的内心是一片废墟，但废墟里有一朵野花，仍然在努力开着。',
        '你不怎么出现，但你在的时候总有几句话让人印象深刻。你消耗的能量大部分都用在了对话自己上。',
        '高强度内耗加社恐加做事随缘，是当代赛博道士的精准画像。'
      ],
      strengths: ['独立思考', '洞察细节', '不会给别人添麻烦'],
      growthTips: ['出门晒晒太阳', '少想多做', '给自己放个假'],
      matchRules: { S: 0, E: 47, C: 0 }
    },
    // ── 社恐 + 内耗低 + 整顿高 ──
    {
      id: 'quietceo',
      title: '隐形CEO',
      subtitle: 'Quiet CEO',
      emoji: '👔',
      color: '#6366F1',
      description: [
        '你不需要社交，你只需要结果。你话不多，事做得漂亮，能量自洽，不解释不表演。',
        '别人在群里发段子，你一个人把季度计划写完了。别人在闹，你一个人在赢。',
        '唯一的问题是你偶尔让别人搞不清你到底在想什么，神秘感有点过量了。'
      ],
      strengths: ['执行力爆表', '不需要认可', '低调扛把子', '自律出圈'],
      growthTips: ['偶尔表达一下自己', '让别人进来一点', '别把自己逼太紧'],
      matchRules: { S: 0, E: 0, C: 44 }
    },
    // ── 三维均衡偏高 ──
    {
      id: 'allrounder',
      title: '万金油好人',
      subtitle: 'The All-Rounder',
      emoji: '🎈',
      color: '#F9C846',
      description: [
        '你是那种哪里都能插，哪里都不算最强，但所有人都喜欢你的那种人。',
        '你有点社牛、有时内耗、偶尔整顿，你的状态每天都不一样，但你就是能混过去。',
        '「万金油」不是贬义，你是隐形的润滑剂，没有你大家都会卡壳。'
      ],
      strengths: ['适应力强', '无处不在', '人缘好', '灵活应对'],
      growthTips: ['选一件事做深', '找到真正想要什么', '不要总是「还好还好」'],
      matchRules: { S: 27, E: 30, C: 28 }
    },
    // ── 社牛高 + 整顿高 ──
    {
      id: 'groupboss',
      title: '群主天花板',
      subtitle: 'Group Boss',
      emoji: '👑',
      color: '#FBBF24',
      description: [
        '你不只是在群里发表情包，你是那个让这个群有灵魂的人。组局、调度、活跃气氛，你一个人包圆了。',
        '你擅长在一团乱麻里找到主线，把散落的人和事拉到一起往前推进。这是一种特殊才能，不是每个人都有的。',
        '小心别把所有人的事揽到自己身上，适当让别人卷进来。'
      ],
      strengths: ['组织力超强', '号召力', '行动主导', '话题制造'],
      growthTips: ['适当放权', '让别人主导一次', '休息一下自己'],
      matchRules: { S: 43, C: 40 }
    },
    // ── 社牛高 + 内耗中 + 整顿低 ──
    {
      id: 'talker',
      title: '嘴强王者',
      subtitle: 'King of Theoretical Life',
      emoji: '🎤',
      color: '#FB923C',
      description: [
        '你是那种“能靠意念在脑内盖一座紫禁城，但现实中连个快递都懒得取”的神人。你的表达能力跑得比光速还快，导致执行力被远远甩在了另一个星系。',
        '你可以聊透宇宙的终极意义，但聊完之后该干嘛还是该干嘛。你是真正的维度建筑师，只是工地不在这。',
        '建议你下次把“我觉得我们可以……”换成“我来递个砖”，免得大家以为你活在幻觉里备份。'
      ],
      strengths: ['顶级脑补', '理论大师', '自带说服力', '气氛担当'],
      growthTips: ['下楼取个快递试试', '少规划多喘气', '实际动手做点什么'],
      matchRules: { S: 39, E: 30, C: 0 }
    },
    // ── 内耗高 + 整顿高 ──
    {
      id: 'anxiousachiver',
      title: '焦虑优等生',
      subtitle: 'Anxious Achiever',
      emoji: '📚',
      color: '#67E8F9',
      description: [
        '你把内耗转化成了生产力。你焦虑，但同时把所有能焦虑的事全都提前解决掉了，所以别人看上去你游刃有余。',
        '你的待办清单是人生驱动器，你的焦虑是隐藏的引擎，表面光鲜，内部高压。',
        '你已经很强了，不需要每件事都做到满分，差不多就行。'
      ],
      strengths: ['自律顶尖', '提前规避风险', '凡事有备', '成绩亮眼'],
      growthTips: ['允许自己犯错', '放松不等于放弃', '给焦虑放个假'],
      matchRules: { E: 43, C: 40 }
    },
    // ── 社牛高 + 内耗低 + 整顿中 ──
    {
      id: 'giftedbuttired',
      title: '有才但懒',
      subtitle: 'Gifted but Unbothered',
      emoji: '🐢',
      color: '#4ADE80',
      description: [
        '你有天赋，你有能力，你也有社交，问题是你就是……不太想使出来。不是做不到，是觉得没必要那么拼。',
        '你能在最后关头把事情做得体面，让人以为你花了很多时间——其实你没有。内心平静如水，该出手时出手，不该出手时摸鱼。',
        '这种活法看起来很爽，但你自己知道，你其实还留着一大半力气没用。（不用也行就是了）'
      ],
      strengths: ['天花板上限', '心态超好', '压力下稳定发挥', '不自我消耗'],
      growthTips: ['偶尔用全力', '发掘一下自己的上限', '别对自己太佛系'],
      matchRules: { S: 35, E: 0, C: 28 }
    },
    // ── 社恐 + 整顿高 + 内耗低 ──
    {
      id: 'silentprofessional',
      title: '不鸣则已型选手',
      subtitle: 'The Silent Professional',
      emoji: '🎯',
      color: '#86EFAC',
      description: [
        '你话很少，事情说一不二。你没兴趣解释，也不需要解释，你的成果就是你的名片。',
        '别人在开会，你已经把事情做完了。别人在讨论要不要行动，你已经知道结果了。',
        '一个字：稳。但偶尔让别人知道你是人而不是机器也挺重要的。'
      ],
      strengths: ['独立强悍', '结果导向', '不受干扰', '说话算数'],
      growthTips: ['多一点人情味', '让别人看见你', '适当敞开心扉'],
      matchRules: { S: 0, E: 0, C: 36 }
    },
    // ── 三高 ──
    {
      id: 'overloadedhero',
      title: '背负全宇宙的人',
      subtitle: 'Carrying the Universe',
      emoji: '🌍',
      color: '#F87171',
      description: [
        '你一边高度社交、一边极度内耗、一边整顿所有人——你是同时在三个频道用满格音量广播的存在。',
        '你这个人真的很容易让别人依赖，因为你有社交、有能力、有情绪。问题在于你自己谁都不依赖。',
        '求你歇一下，你不是Atlas，你不需要扛着整个世界。'
      ],
      strengths: ['全场通吃', '高共情', '高能量', '不可替代'],
      growthTips: ['学会依赖别人', '情绪要宣泄出去', '把一部分事情扔给别人'],
      matchRules: { S: 43, E: 47, C: 44 }
    },
    // ── 社恐 + 内耗高 + 整顿高 ──
    {
      id: 'internalperfectionist',
      title: '没人发现的完美主义者',
      subtitle: 'The Hidden Perfectionist',
      emoji: '🔍',
      color: '#A78BFA',
      description: [
        '你不爱社交，但你做的每一件事都要逼到极致。不达标不出手，出手就力求完美，然后没人知道你背后用了多少力气。',
        '你内耗的主要原因是你觉得自己还不够好，但在旁人眼里你已经over-deliver了。',
        '世界上最孤独的没人知道你有多努力，而你也不会说。'
      ],
      strengths: ['精益求精', '高标准', '耐得住寂寞', '深度专注'],
      growthTips: ['少一点自我苛责', '把成果展示给别人', '允许自己不完美'],
      matchRules: { S: 0, E: 43, C: 40 }
    },
    // ── 社恐 + 内耗极高 + 整顿中 ── (404 异常型)
    {
      id: 'walking404',
      title: '行走的 404',
      subtitle: 'System Exception',
      emoji: '⚠️',
      color: '#FCA5A5',
      description: [
        '你的存在是一个系统异常。极度内耗、几乎不出现、做事时却有两把刷子——这三件事按理说不该同时出现在一个人身上。',
        '当别人试图理解你时，他们的大脑会在三秒内遭遇 404：找不到参考系，页面无法渲染，请求超时。',
        '你不是没用，你只是需要一个正确的显示引擎。目前为止我们还没找到——但你说不定自己知道。'
      ],
      strengths: ['独特到无法被复制', '拥有常人没有的视角', '天然防范被理解'],
      growthTips: ['写下来，帮别人理解你', '找一个频率接近的人', '也许你不是Bug，你是彩蛋'],
      matchRules: { S: 0, E: 56, C: 28 }
    },
    // ── 社牛高 + 内耗高 + 整顿低 ──
    {
      id: 'chaosking',
      title: '逗比',
      subtitle: 'The Chaos Agent',
      emoji: '🤡',
      color: '#FCD34D',
      description: [
        '你是群里最吵最搞笑那个，但没人知道你其实非常复杂。你用笑话包裹着真实情绪，用段子掩盖着正在崩溃的自己。',
        '你不整顿别人也不整顿自己，任凭局势发展，事到临头再说，但神奇的是事情往往还能解决掉。',
        '你是真正意义上的「表面喜剧、内里苦情」，一个活体逗比。'
      ],
      strengths: ['制造欢笑', '化解尴尬', '高情感浓度', '可爱破坏力'],
      growthTips: ['别只逗别人，偶尔认真说说自己', '跟人说「我今天不太好」', '整理一下自己的房间'],
      matchRules: { S: 43, E: 47, C: 0 }
    },
    // ── 社牛中 + 内耗高 + 整顿低 ──
    {
      id: 'emotionalordinary',
      title: '情绪化普通人',
      subtitle: 'Feeling Everything',
      emoji: '🌧️',
      color: '#60A5FA',
      description: [
        '你不是特别社恐，也不是真正意义上的社牛，就是个挺普通的人——但你的情绪绝对不普通。一件小事能让你高兴半天，同样一件小事也能让你低落一周。',
        '你不整顿别人，不太整顿自己，但你内心世界比任何人都热闹，随时都有出戏在上演，配乐还挺好听的。',
        '情绪敏感也是一种礼物，你感受得比别人深。找一个能接住你的人，好好说一说。'
      ],
      strengths: ['情感丰富', '共情力强', '真实不做作', '感受力细腻'],
      growthTips: ['给情绪一个出口', '别让感受全堵在心里', '找个能懂你的人说说'],
      matchRules: { S: 24, E: 43, C: 0 }
    },
    // ── 存在感极低（低S+低E+低C但非绝对零分）──
    {
      id: 'invisiblenpc',
      title: '隐形 NPC',
      subtitle: 'Disposable Asset',
      emoji: '👤',
      color: '#D4D4D8',
      description: [
        '你存在，但不被处理。你出现在场合里，拍大合照时站在边缘，事后大家想起来说「诶那个谁……算了」。',
        '你不引起纷争，不制造波澜，不给任何人添麻烦——也几乎不留下任何痕迹。',
        '摄像头经常把你框进背景板。路人丙。填充用人形道具。这不是批评，只是……如实描述。'
      ],
      strengths: ['零存在感负担', '天然防打扰', '从不引起纷争'],
      growthTips: ['说一句让别人记住你的话', '向前站一步', '你值得被看见'],
      matchRules: { S: 12, E: 0, C: 12 }
    },
    // ── 三低 ──
    {
      id: 'ghostmode',
      title: '幽灵模式',
      subtitle: 'Ghost Mode',
      emoji: '👻',
      color: '#CBD5E1',
      description: [
        '你甚至会在自己的葬礼上因为觉得“流程太长”而悄悄溜走。你的存在感比Wi-Fi盲区的信号还要稀缺，但这正是你的舒适区。',
        '你不是不回消息，你是已经肉身实现了“一键关机”。你在三次元世界保持着一种由于过分透明而带来的绝对自由。',
        '偶尔出来吱一声，不是为了证明你还在，而是为了让大家确认你还没被系统当做垃圾文件清理掉。'
      ],
      strengths: ['独处大师', '高度清醒', '不消耗别人', '极简生活哲学'],
      growthTips: ['偶尔出现一下', '说一句话都算', '证明你还在人间'],
      matchRules: { S: 0, E: 0, C: 0 },
      rarityLabel: '🌬️ 幽灵模式！你已经脱离了这颗星球的引力'
    },
    // ── 社牛低 + 内耗中 + 整顿低 ──
    {
      id: 'quietdrifter',
      title: '低调摆烂者',
      subtitle: 'Quietly Adrift',
      emoji: '🍂',
      color: '#A8A29E',
      description: [
        '你不喜欢人多的地方，脑子里也总有点小情绪在转，但你不会说出来，就那么悄悄托着。做事嘛，能过去就行，不喜欢强迫自己卷。',
        '你看起来不温不火，实际上只是懒得解释。你的生活节奏很慢，但那是你选的，你也不后悔。',
        '偶尔站出来推一件事——不是为了证明什么，就是让自己知道：你也可以的。'
      ],
      strengths: ['随遇而安', '不制造麻烦', '心里有自己一套', '淡然处世'],
      growthTips: ['试着推一件事往前走', '把心里的小情绪说给信任的人听', '给生活加一点期待'],
      matchRules: { S: 0, E: 26, C: 0 }
    },
    // ── 社牛低 + 内耗低 + 整顿高 ──
    {
      id: 'solowarrior',
      title: '独行刺客',
      subtitle: 'Solo Operator',
      emoji: '⚔️',
      color: '#34D399',
      description: [
        '你不需要团队，你一个人可以解决90%的事情。不社交、不内耗、不废话，你把所有精力都给了做事本身。',
        '你不是那种会在群里发早安的人，你是那种早安还没人发你已经把活干完出门了的人。',
        '一个提醒：不是所有事情都要一个人扛，适当让别人加入。'
      ],
      strengths: ['超强独立性', '自我完足', '高效', '不依赖外界认可'],
      growthTips: ['组个队试试', '接受一下别人的帮助', '合作不等于依赖'],
      matchRules: { S: 0, E: 9, C: 40 }
    },
    // ── 社恐 + 高内耗 ──
    {
      id: 'overthinker',
      title: '想太多的人',
      subtitle: 'The Overthinker',
      emoji: '🌀',
      color: '#93C5FD',
      description: [
        '你的脑子24小时不停机，睡着了还在转。一件小事能在你心里变成一部完整的灾难电影，并配上OST。',
        '你不大说话，但你想的比说话的人多十倍。你的内心世界比外表丰富得多，只是没人知道而已。',
        '你最大的稳定剂其实是找个靠谱的人说出来，别一个人消化。'
      ],
      strengths: ['深度思考', '细腻敏感', '提前感知风险', '内心丰富'],
      growthTips: ['把脑内对话说出来', '找人分担一下', '做个深呼吸，现在就做'],
      matchRules: { S: 8, E: 47 }
    },
    // ── 社牛低 + 内耗中 + 整顿高 ──
    {
      id: 'stealthdoer',
      title: '隐形实干家',
      subtitle: 'The Quiet Builder',
      emoji: '🔧',
      color: '#2DD4BF',
      description: [
        '你不爱说话，心里也有些事情转来转去，但你会把这些都压下去——然后埋头把事情做完。',
        '你不需要观众，你只需要结果。不喜欢人多，有点焦虑，但一旦进入工作状态，你就是一个安静燃烧的引擎，稳定且高效。',
        '你把能量全给了做事，留给自己那份……偶尔记得补一补。'
      ],
      strengths: ['行动力强', '抗干扰', '默默输出', '稳定可靠'],
      growthTips: ['让自己被看见一次', '允许自己有情绪', '不必总是一个人扛'],
      matchRules: { S: 0, E: 22, C: 36 }
    },
    // ── 社牛中 + 整顿中 ──
    {
      id: 'chillguy',
      title: '无害系路人',
      subtitle: 'The Chill Guy',
      emoji: '🔋',
      color: '#86EFAC',
      description: [
        '你没什么特别大的问题，整体就是——过得去。不算最社牛，不算最废，不算最整顿，但所有场合你都能混进去。',
        '你是那种不起波澜但实际上很扛事的人，别人以为你在摸鱼，其实你在慢慢推进。',
        '你是真正的「无害型快乐」，世界需要更多像你这样的人。'
      ],
      strengths: ['情绪稳定', '不给人添乱', '自得其乐', '润物细无声'],
      growthTips: ['偶尔出出风头', '让别人知道你有多厉害', '适当争取一下'],
      matchRules: { S: 24, C: 24 }
    },
    // ── 社牛中 + 内耗低 + 整顿低 ──
    {
      id: 'zenslacker',
      title: '佛系散人',
      subtitle: 'Zen Drifter',
      emoji: '🍃',
      color: '#A3E635',
      description: [
        '你是个心态惊人地好的人。不焦虑、不卷、不需要赢，生活里随机出现的东西你都能接住，因为你根本没有特别强的预期。',
        '你有朋友，聊得来，但不需要非常深入的关系。你也不需要把事情做得有多好，差不多就行，没有什么大不了的。',
        '在这个焦虑星球上，你是一个异类——你真的活得挺快乐的。大家都很想知道你到底是怎么做到的。'
      ],
      strengths: ['心态无敌', '不消耗自己', '容易知足', '自在生活'],
      growthTips: ['偶尔给自己设个小目标', '无欲无求的背面是不是有点空？', '在意一件事试试'],
      matchRules: { S: 24, E: 0, C: 0 }
    },
    // ── 渣男型（高社牛 + 低整顿 + 低内耗） ──
    {
      id: 'chaoman',
      title: '海纳百川',
      subtitle: 'The Boundless Ocean of Love',
      emoji: '🌊',
      color: '#0EA5E9',
      description: [
        '你简直是行走的多巴胺收割机，你的“渣”已经脱离了低级趣味，进化成了一种带有毁灭感的人格艺术。',
        '你不是给不了爱，你只是拥有像大海一样宽广的胸怀，想给每一个路过的灵魂一个温暖（但不长久）的家。',
        '你的鱼塘里能跑航空母舰。这种过分迷人而产生的破坏力，确实是一种令人头疼的天赋。反正你也没打算改，就这样吧。'
      ],
      strengths: ['顶级多巴胺收割', '享乐天才', '活在当下', '人格魅力黑洞'],
      growthTips: ['想想别人的感受（可选）', '稍微收敛一点点（为了可持续发展）', '继续保持你的艺术感'],
      matchRules: { S: 47, E: 9, C: 8 },
      rarityLabel: '🌊 海纳百川！你的鱼塘里居然能跑航空母舰'
    },
    // ── 默认兜底 ──
    {
      id: 'mysteryperson',
      title: '谜之生命体',
      subtitle: 'Unclassified Lifeform',
      emoji: '🔮',
      color: '#E9D5FF',
      description: [
        '我们的算法分析了你的所有答案，最终得出结论：你超出了本系统的分类范畴。',
        '这不是在夸你，也不是在损你——你只是属于那种不容易被装进任何盒子里的人。',
        '也许你自己都搞不清自己是什么类型，但这本身就是一种类型：谜之生命体。'
      ],
      strengths: ['无法定义', '独特存在', '永远出乎意料'],
      growthTips: ['先搞清楚自己想要什么', '认识自己是一辈子的事', '做颗好人就完事了'],
      matchRules: { S: 16, E: 17, C: 16 }
    }
  ]
}
