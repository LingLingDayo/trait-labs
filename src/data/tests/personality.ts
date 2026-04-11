import type { TestSuite } from '../types'

// ───────────────────────────────────────────────
// 人格测试套件 —— 基于大五人格 (OCEAN) 模型
// 5 个维度: O(开放性) C(尽责性) E(外向性) A(亲和性) N(情绪稳定性)
// 18 种结论: 由各维度高/低分组合推导
// ───────────────────────────────────────────────

export const personalityTest: TestSuite = {
  id: 'personality',
  name: '人格测评',
  tagline: '洞察真实的<br /><span class="text-primary-500">内在人格</span>',
  description: '基于大五人格 (OCEAN) 心理学模型，通过 50 道精心设计的题目，为你绘制独一无二的人格图谱。',
  estimatedMinutes: 8,

  dimensions: [
    {
      key: 'O',
      label: '开放性',
      description: '对新体验、新想法的接受程度',
      lowLabel: '务实传统',
      highLabel: '富有想象力'
    },
    {
      key: 'C',
      label: '尽责性',
      description: '做事有计划、自律、追求目标的程度',
      lowLabel: '随性灵活',
      highLabel: '严谨自律'
    },
    {
      key: 'E',
      label: '外向性',
      description: '从社交互动中获得能量的程度',
      lowLabel: '内敛独处',
      highLabel: '热情外向'
    },
    {
      key: 'A',
      label: '亲和性',
      description: '对他人友善、合作、信任的程度',
      lowLabel: '独立直接',
      highLabel: '温暖亲切'
    },
    {
      key: 'N',
      label: '情绪稳定性',
      description: '在压力下保持情绪平稳的能力',
      lowLabel: '情绪敏感',
      highLabel: '沉稳冷静'
    }
  ],

  questions: [
    // ── 开放性 (O) ── 10题
    {
      id: 'q01',
      dimension: 'O',
      text: '我经常沉迷于一些稀奇的想法，甚至会在脑中构建出完整的世界。',
      options: [
        { id: 'q01a', label: '非常符合', scores: { O: 4 } },
        { id: 'q01b', label: '比较符合', scores: { O: 3 } },
        { id: 'q01c', label: '有点符合', scores: { O: 2 } },
        { id: 'q01d', label: '不太符合', scores: { O: 1 } },
        { id: 'q01e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q02',
      dimension: 'O',
      text: '面对一个问题，我更倾向于寻找前所未有的解决方案，而不是沿用惯例。',
      options: [
        { id: 'q02a', label: '非常符合', scores: { O: 4 } },
        { id: 'q02b', label: '比较符合', scores: { O: 3 } },
        { id: 'q02c', label: '有点符合', scores: { O: 2 } },
        { id: 'q02d', label: '不太符合', scores: { O: 1 } },
        { id: 'q02e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q03',
      dimension: 'O',
      text: '艺术、音乐或文学能让我产生强烈的情感共鸣。',
      options: [
        { id: 'q03a', label: '非常符合', scores: { O: 4 } },
        { id: 'q03b', label: '比较符合', scores: { O: 3 } },
        { id: 'q03c', label: '有点符合', scores: { O: 2 } },
        { id: 'q03d', label: '不太符合', scores: { O: 1 } },
        { id: 'q03e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q04',
      dimension: 'O',
      text: '我喜欢尝试来自不同文化的食物、音乐或生活方式。',
      options: [
        { id: 'q04a', label: '非常符合', scores: { O: 4 } },
        { id: 'q04b', label: '比较符合', scores: { O: 3 } },
        { id: 'q04c', label: '有点符合', scores: { O: 2 } },
        { id: 'q04d', label: '不太符合', scores: { O: 1 } },
        { id: 'q04e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q05',
      dimension: 'O',
      text: '当我独处时，我的脑子里总是充满各种天马行空的想法。',
      options: [
        { id: 'q05a', label: '非常符合', scores: { O: 4 } },
        { id: 'q05b', label: '比较符合', scores: { O: 3 } },
        { id: 'q05c', label: '有点符合', scores: { O: 2 } },
        { id: 'q05d', label: '不太符合', scores: { O: 1 } },
        { id: 'q05e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q06',
      dimension: 'O',
      text: '相比于实用性，我更关注事物的美感和艺术价值。',
      options: [
        { id: 'q06a', label: '非常符合', scores: { O: 4 } },
        { id: 'q06b', label: '比较符合', scores: { O: 3 } },
        { id: 'q06c', label: '有点符合', scores: { O: 2 } },
        { id: 'q06d', label: '不太符合', scores: { O: 1 } },
        { id: 'q06e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q07',
      dimension: 'O',
      text: '我喜欢探索未知的领域，哪怕需要承担一定的风险。',
      options: [
        { id: 'q07a', label: '非常符合', scores: { O: 4 } },
        { id: 'q07b', label: '比较符合', scores: { O: 3 } },
        { id: 'q07c', label: '有点符合', scores: { O: 2 } },
        { id: 'q07d', label: '不太符合', scores: { O: 1 } },
        { id: 'q07e', label: '完全不符合', scores: { O: 0 } }
      ]
    },
    {
      id: 'q08',
      dimension: 'O',
      text: '我更喜欢按部就班、有迹可循的生活方式，不喜欢频繁变化。',
      options: [
        { id: 'q08a', label: '非常符合', scores: { O: 0 } },
        { id: 'q08b', label: '比较符合', scores: { O: 1 } },
        { id: 'q08c', label: '有点符合', scores: { O: 2 } },
        { id: 'q08d', label: '不太符合', scores: { O: 3 } },
        { id: 'q08e', label: '完全不符合', scores: { O: 4 } }
      ]
    },
    {
      id: 'q09',
      dimension: 'O',
      text: '对于抽象的哲学理论，我通常觉得枯燥乏味，更偏好具体实用的人和事。',
      options: [
        { id: 'q09a', label: '非常符合', scores: { O: 0 } },
        { id: 'q09b', label: '比较符合', scores: { O: 1 } },
        { id: 'q09c', label: '有点符合', scores: { O: 2 } },
        { id: 'q09d', label: '不太符合', scores: { O: 3 } },
        { id: 'q09e', label: '完全不符合', scores: { O: 4 } }
      ]
    },
    {
      id: 'q10',
      dimension: 'O',
      text: '比起去新的地方旅行，我更喜欢去我已经熟悉和感到舒适的地方。',
      options: [
        { id: 'q10a', label: '非常符合', scores: { O: 0 } },
        { id: 'q10b', label: '比较符合', scores: { O: 1 } },
        { id: 'q10c', label: '有点符合', scores: { O: 2 } },
        { id: 'q10d', label: '不太符合', scores: { O: 3 } },
        { id: 'q10e', label: '完全不符合', scores: { O: 4 } }
      ]
    },

    // ── 尽责性 (C) ── 10题
    {
      id: 'q11',
      dimension: 'C',
      text: '做任何事情之前，我都会提前规划好每个步骤。',
      options: [
        { id: 'q11a', label: '非常符合', scores: { C: 4 } },
        { id: 'q11b', label: '比较符合', scores: { C: 3 } },
        { id: 'q11c', label: '有点符合', scores: { C: 2 } },
        { id: 'q11d', label: '不太符合', scores: { C: 1 } },
        { id: 'q11e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q12',
      dimension: 'C',
      text: '即使没有人监督，我也能严格完成自己设定的目标。',
      options: [
        { id: 'q12a', label: '非常符合', scores: { C: 4 } },
        { id: 'q12b', label: '比较符合', scores: { C: 3 } },
        { id: 'q12c', label: '有点符合', scores: { C: 2 } },
        { id: 'q12d', label: '不太符合', scores: { C: 1 } },
        { id: 'q12e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q13',
      dimension: 'C',
      text: '面对截止日期，我总是提前完成，极少拖到最后一刻。',
      options: [
        { id: 'q13a', label: '非常符合', scores: { C: 4 } },
        { id: 'q13b', label: '比较符合', scores: { C: 3 } },
        { id: 'q13c', label: '有点符合', scores: { C: 2 } },
        { id: 'q13d', label: '不太符合', scores: { C: 1 } },
        { id: 'q13e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q14',
      dimension: 'C',
      text: '我的工位/桌面总是整洁有序的，物品各归其位。',
      options: [
        { id: 'q14a', label: '非常符合', scores: { C: 4 } },
        { id: 'q14b', label: '比较符合', scores: { C: 3 } },
        { id: 'q14c', label: '有点符合', scores: { C: 2 } },
        { id: 'q14d', label: '不太符合', scores: { C: 1 } },
        { id: 'q14e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q15',
      dimension: 'C',
      text: '在开始一件新事情时，我会详细研究再行动，而不是边做边学。',
      options: [
        { id: 'q15a', label: '非常符合', scores: { C: 4 } },
        { id: 'q15b', label: '比较符合', scores: { C: 3 } },
        { id: 'q15c', label: '有点符合', scores: { C: 2 } },
        { id: 'q15d', label: '不太符合', scores: { C: 1 } },
        { id: 'q15e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q16',
      dimension: 'C',
      text: '我总是尽力做到最好，即使别人觉得“差不多就行了”。',
      options: [
        { id: 'q16a', label: '非常符合', scores: { C: 4 } },
        { id: 'q16b', label: '比较符合', scores: { C: 3 } },
        { id: 'q16c', label: '有点符合', scores: { C: 2 } },
        { id: 'q16d', label: '不太符合', scores: { C: 1 } },
        { id: 'q16e', label: '完全不符合', scores: { C: 0 } }
      ]
    },
    {
      id: 'q17',
      dimension: 'C',
      text: '我经常一时兴起改变计划，跟着感觉走。',
      options: [
        { id: 'q17a', label: '非常符合', scores: { C: 0 } },
        { id: 'q17b', label: '比较符合', scores: { C: 1 } },
        { id: 'q17c', label: '有点符合', scores: { C: 2 } },
        { id: 'q17d', label: '不太符合', scores: { C: 3 } },
        { id: 'q17e', label: '完全不符合', scores: { C: 4 } }
      ]
    },
    {
      id: 'q18',
      dimension: 'C',
      text: '我经常因为分心而难以完成正在进行的工作。',
      options: [
        { id: 'q18a', label: '非常符合', scores: { C: 0 } },
        { id: 'q18b', label: '比较符合', scores: { C: 1 } },
        { id: 'q18c', label: '有点符合', scores: { C: 2 } },
        { id: 'q18d', label: '不太符合', scores: { C: 3 } },
        { id: 'q18e', label: '完全不符合', scores: { C: 4 } }
      ]
    },
    {
      id: 'q19',
      dimension: 'C',
      text: '对于个人物品的摆放，我比较随意，不太在意是否整齐。',
      options: [
        { id: 'q19a', label: '非常符合', scores: { C: 0 } },
        { id: 'q19b', label: '比较符合', scores: { C: 1 } },
        { id: 'q19c', label: '有点符合', scores: { C: 2 } },
        { id: 'q19d', label: '不太符合', scores: { C: 3 } },
        { id: 'q19e', label: '完全不符合', scores: { C: 4 } }
      ]
    },
    {
      id: 'q20',
      dimension: 'C',
      text: '相比于长远的目标，我更倾向于享受当下的安逸，缺乏行动的紧迫感。',
      options: [
        { id: 'q20a', label: '非常符合', scores: { C: 0 } },
        { id: 'q20b', label: '比较符合', scores: { C: 1 } },
        { id: 'q20c', label: '有点符合', scores: { C: 2 } },
        { id: 'q20d', label: '不太符合', scores: { C: 3 } },
        { id: 'q20e', label: '完全不符合', scores: { C: 4 } }
      ]
    },

    // ── 外向性 (E) ── 10题
    {
      id: 'q21',
      dimension: 'E',
      text: '在一个热闹的派对上，我往往是最活跃、最开心的那一个。',
      options: [
        { id: 'q21a', label: '非常符合', scores: { E: 4 } },
        { id: 'q21b', label: '比较符合', scores: { E: 3 } },
        { id: 'q21c', label: '有点符合', scores: { E: 2 } },
        { id: 'q21d', label: '不太符合', scores: { E: 1 } },
        { id: 'q21e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q22',
      dimension: 'E',
      text: '与一群人相处一整天后，我会感到精力充沛，而不是疲惫。',
      options: [
        { id: 'q22a', label: '非常符合', scores: { E: 4 } },
        { id: 'q22b', label: '比较符合', scores: { E: 3 } },
        { id: 'q22c', label: '有点符合', scores: { E: 2 } },
        { id: 'q22d', label: '不太符合', scores: { E: 1 } },
        { id: 'q22e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q23',
      dimension: 'E',
      text: '我主动认识陌生人，享受结交新朋友的过程。',
      options: [
        { id: 'q23a', label: '非常符合', scores: { E: 4 } },
        { id: 'q23b', label: '比较符合', scores: { E: 3 } },
        { id: 'q23c', label: '有点符合', scores: { E: 2 } },
        { id: 'q23d', label: '不太符合', scores: { E: 1 } },
        { id: 'q23e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q24',
      dimension: 'E',
      text: '我喜欢成为人群的中心，享受被关注的感觉。',
      options: [
        { id: 'q24a', label: '非常符合', scores: { E: 4 } },
        { id: 'q24b', label: '比较符合', scores: { E: 3 } },
        { id: 'q24c', label: '有点符合', scores: { E: 2 } },
        { id: 'q24d', label: '不太符合', scores: { E: 1 } },
        { id: 'q24e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q25',
      dimension: 'E',
      text: '在会议或群体讨论中，我倾向于主导话题、带动节奏。',
      options: [
        { id: 'q25a', label: '非常符合', scores: { E: 4 } },
        { id: 'q25b', label: '比较符合', scores: { E: 3 } },
        { id: 'q25c', label: '有点符合', scores: { E: 2 } },
        { id: 'q25d', label: '不太符合', scores: { E: 1 } },
        { id: 'q25e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q26',
      dimension: 'E',
      text: '我表达情感时很直接，很少掩饰自己的喜悦或兴奋。',
      options: [
        { id: 'q26a', label: '非常符合', scores: { E: 4 } },
        { id: 'q26b', label: '比较符合', scores: { E: 3 } },
        { id: 'q26c', label: '有点符合', scores: { E: 2 } },
        { id: 'q26d', label: '不太符合', scores: { E: 1 } },
        { id: 'q26e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q27',
      dimension: 'E',
      text: '我喜欢快节奏和充满活力的生活环境。',
      options: [
        { id: 'q27a', label: '非常符合', scores: { E: 4 } },
        { id: 'q27b', label: '比较符合', scores: { E: 3 } },
        { id: 'q27c', label: '有点符合', scores: { E: 2 } },
        { id: 'q27d', label: '不太符合', scores: { E: 1 } },
        { id: 'q27e', label: '完全不符合', scores: { E: 0 } }
      ]
    },
    {
      id: 'q28',
      dimension: 'E',
      text: '独处一整个周末对我来说是一种享受，而不是一种折磨。',
      options: [
        { id: 'q28a', label: '非常符合', scores: { E: 0 } },
        { id: 'q28b', label: '比较符合', scores: { E: 1 } },
        { id: 'q28c', label: '有点符合', scores: { E: 2 } },
        { id: 'q28d', label: '不太符合', scores: { E: 3 } },
        { id: 'q28e', label: '完全不符合', scores: { E: 4 } }
      ]
    },
    {
      id: 'q29',
      dimension: 'E',
      text: '在人多的场合，我通常倾向于保持安静，做一个边缘的倾听者。',
      options: [
        { id: 'q29a', label: '非常符合', scores: { E: 0 } },
        { id: 'q29b', label: '比较符合', scores: { E: 1 } },
        { id: 'q29c', label: '有点符合', scores: { E: 2 } },
        { id: 'q29d', label: '不太符合', scores: { E: 3 } },
        { id: 'q29e', label: '完全不符合', scores: { E: 4 } }
      ]
    },
    {
      id: 'q30',
      dimension: 'E',
      text: '与人过度交往会耗尽我的精力，需要足够长的独处才能恢复。',
      options: [
        { id: 'q30a', label: '非常符合', scores: { E: 0 } },
        { id: 'q30b', label: '比较符合', scores: { E: 1 } },
        { id: 'q30c', label: '有点符合', scores: { E: 2 } },
        { id: 'q30d', label: '不太符合', scores: { E: 3 } },
        { id: 'q30e', label: '完全不符合', scores: { E: 4 } }
      ]
    },

    // ── 亲和性 (A) ── 10题
    {
      id: 'q31',
      dimension: 'A',
      text: '朋友遇到困难时，我会第一时间主动出手帮忙。',
      options: [
        { id: 'q31a', label: '非常符合', scores: { A: 4 } },
        { id: 'q31b', label: '比较符合', scores: { A: 3 } },
        { id: 'q31c', label: '有点符合', scores: { A: 2 } },
        { id: 'q31d', label: '不太符合', scores: { A: 1 } },
        { id: 'q31e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q32',
      dimension: 'A',
      text: '我宁愿妥协退让，也不想与别人产生激烈的冲突。',
      options: [
        { id: 'q32a', label: '非常符合', scores: { A: 4 } },
        { id: 'q32b', label: '比较符合', scores: { A: 3 } },
        { id: 'q32c', label: '有点符合', scores: { A: 2 } },
        { id: 'q32d', label: '不太符合', scores: { A: 1 } },
        { id: 'q32e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q33',
      dimension: 'A',
      text: '我对陌生人也充满善意，倾向于相信大多数人是好的。',
      options: [
        { id: 'q33a', label: '非常符合', scores: { A: 4 } },
        { id: 'q33b', label: '比较符合', scores: { A: 3 } },
        { id: 'q33c', label: '有点符合', scores: { A: 2 } },
        { id: 'q33d', label: '不太符合', scores: { A: 1 } },
        { id: 'q33e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q34',
      dimension: 'A',
      text: '我善于倾听，能让倾诉者感到被真正理解和接纳。',
      options: [
        { id: 'q34a', label: '非常符合', scores: { A: 4 } },
        { id: 'q34b', label: '比较符合', scores: { A: 3 } },
        { id: 'q34c', label: '有点符合', scores: { A: 2 } },
        { id: 'q34d', label: '不太符合', scores: { A: 1 } },
        { id: 'q34e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q35',
      dimension: 'A',
      text: '在团队中，我天然会承担调和矛盾、维系关系的角色。',
      options: [
        { id: 'q35a', label: '非常符合', scores: { A: 4 } },
        { id: 'q35b', label: '比较符合', scores: { A: 3 } },
        { id: 'q35c', label: '有点符合', scores: { A: 2 } },
        { id: 'q35d', label: '不太符合', scores: { A: 1 } },
        { id: 'q35e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q36',
      dimension: 'A',
      text: '我很容易对别人的不幸遭遇产生强烈的同理心和同情。',
      options: [
        { id: 'q36a', label: '非常符合', scores: { A: 4 } },
        { id: 'q36b', label: '比较符合', scores: { A: 3 } },
        { id: 'q36c', label: '有点符合', scores: { A: 2 } },
        { id: 'q36d', label: '不太符合', scores: { A: 1 } },
        { id: 'q36e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q37',
      dimension: 'A',
      text: '当别人的意见与我不合时，我会尽量站在他们的角度去体会和思考。',
      options: [
        { id: 'q37a', label: '非常符合', scores: { A: 4 } },
        { id: 'q37b', label: '比较符合', scores: { A: 3 } },
        { id: 'q37c', label: '有点符合', scores: { A: 2 } },
        { id: 'q37d', label: '不太符合', scores: { A: 1 } },
        { id: 'q37e', label: '完全不符合', scores: { A: 0 } }
      ]
    },
    {
      id: 'q38',
      dimension: 'A',
      text: '我很少在意别人的感受，更关注效率和结果是否达到预期。',
      options: [
        { id: 'q38a', label: '非常符合', scores: { A: 0 } },
        { id: 'q38b', label: '比较符合', scores: { A: 1 } },
        { id: 'q38c', label: '有点符合', scores: { A: 2 } },
        { id: 'q38d', label: '不太符合', scores: { A: 3 } },
        { id: 'q38e', label: '完全不符合', scores: { A: 4 } }
      ]
    },
    {
      id: 'q39',
      dimension: 'A',
      text: '为了达到目的，我偶尔会采取强硬手段，即使这可能会损害别人的利益。',
      options: [
        { id: 'q39a', label: '非常符合', scores: { A: 0 } },
        { id: 'q39b', label: '比较符合', scores: { A: 1 } },
        { id: 'q39c', label: '有点符合', scores: { A: 2 } },
        { id: 'q39d', label: '不太符合', scores: { A: 3 } },
        { id: 'q39e', label: '完全不符合', scores: { A: 4 } }
      ]
    },
    {
      id: 'q40',
      dimension: 'A',
      text: '我认为在充满竞争的社会中，必须足够果断无情才能保全自己。',
      options: [
        { id: 'q40a', label: '非常符合', scores: { A: 0 } },
        { id: 'q40b', label: '比较符合', scores: { A: 1 } },
        { id: 'q40c', label: '有点符合', scores: { A: 2 } },
        { id: 'q40d', label: '不太符合', scores: { A: 3 } },
        { id: 'q40e', label: '完全不符合', scores: { A: 4 } }
      ]
    },

    // ── 情绪稳定性 (N) ── 10题 (高分代表情绪稳定)
    {
      id: 'q41',
      dimension: 'N',
      text: '面对突发变故，我通常能很快冷静下来，制定理性的应对方案。',
      options: [
        { id: 'q41a', label: '非常符合', scores: { N: 4 } },
        { id: 'q41b', label: '比较符合', scores: { N: 3 } },
        { id: 'q41c', label: '有点符合', scores: { N: 2 } },
        { id: 'q41d', label: '不太符合', scores: { N: 1 } },
        { id: 'q41e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q42',
      dimension: 'N',
      text: '被批评或否定后，我很少过多纠结，能迅速调整心态继续前进。',
      options: [
        { id: 'q42a', label: '非常符合', scores: { N: 4 } },
        { id: 'q42b', label: '比较符合', scores: { N: 3 } },
        { id: 'q42c', label: '有点符合', scores: { N: 2 } },
        { id: 'q42d', label: '不太符合', scores: { N: 1 } },
        { id: 'q42e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q43',
      dimension: 'N',
      text: '即便事情出了问题，我也很少陷入长期的自我怀疑或内耗中。',
      options: [
        { id: 'q43a', label: '非常符合', scores: { N: 4 } },
        { id: 'q43b', label: '比较符合', scores: { N: 3 } },
        { id: 'q43c', label: '有点符合', scores: { N: 2 } },
        { id: 'q43d', label: '不太符合', scores: { N: 1 } },
        { id: 'q43e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q44',
      dimension: 'N',
      text: '在压力巨大的环境下，我仍能保持较高的工作效率和逻辑清晰度。',
      options: [
        { id: 'q44a', label: '非常符合', scores: { N: 4 } },
        { id: 'q44b', label: '比较符合', scores: { N: 3 } },
        { id: 'q44c', label: '有点符合', scores: { N: 2 } },
        { id: 'q44d', label: '不太符合', scores: { N: 1 } },
        { id: 'q44e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q45',
      dimension: 'N',
      text: '我能够平和地面对他人的愤怒或指责，而不被轻易激怒。',
      options: [
        { id: 'q45a', label: '非常符合', scores: { N: 4 } },
        { id: 'q45b', label: '比较符合', scores: { N: 3 } },
        { id: 'q45c', label: '有点符合', scores: { N: 2 } },
        { id: 'q45d', label: '不太符合', scores: { N: 1 } },
        { id: 'q45e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q46',
      dimension: 'N',
      text: '对于过去犯下的错误，我通常能很快释怀，从中吸取教训而不是反复咀嚼。',
      options: [
        { id: 'q46a', label: '非常符合', scores: { N: 4 } },
        { id: 'q46b', label: '比较符合', scores: { N: 3 } },
        { id: 'q46c', label: '有点符合', scores: { N: 2 } },
        { id: 'q46d', label: '不太符合', scores: { N: 1 } },
        { id: 'q46e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q47',
      dimension: 'N',
      text: '我很少无缘无故感到焦虑或莫名的不安全感。',
      options: [
        { id: 'q47a', label: '非常符合', scores: { N: 4 } },
        { id: 'q47b', label: '比较符合', scores: { N: 3 } },
        { id: 'q47c', label: '有点符合', scores: { N: 2 } },
        { id: 'q47d', label: '不太符合', scores: { N: 1 } },
        { id: 'q47e', label: '完全不符合', scores: { N: 0 } }
      ]
    },
    {
      id: 'q48',
      dimension: 'N',
      text: '我的情绪容易因外界细微的因素而大起大落，有时难以自控。',
      options: [
        { id: 'q48a', label: '非常符合', scores: { N: 0 } },
        { id: 'q48b', label: '比较符合', scores: { N: 1 } },
        { id: 'q48c', label: '有点符合', scores: { N: 2 } },
        { id: 'q48d', label: '不太符合', scores: { N: 3 } },
        { id: 'q48e', label: '完全不符合', scores: { N: 4 } }
      ]
    },
    {
      id: 'q49',
      dimension: 'N',
      text: '我经常为未来的各种可能性感到担忧甚至恐慌，哪怕那些事大概率不会发生。',
      options: [
        { id: 'q49a', label: '非常符合', scores: { N: 0 } },
        { id: 'q49b', label: '比较符合', scores: { N: 1 } },
        { id: 'q49c', label: '有点符合', scores: { N: 2 } },
        { id: 'q49d', label: '不太符合', scores: { N: 3 } },
        { id: 'q49e', label: '完全不符合', scores: { N: 4 } }
      ]
    },
    {
      id: 'q50',
      dimension: 'N',
      text: '一点微小的挫折或不顺心，也会让我的心情低落很久无法调整。',
      options: [
        { id: 'q50a', label: '非常符合', scores: { N: 0 } },
        { id: 'q50b', label: '比较符合', scores: { N: 1 } },
        { id: 'q50c', label: '有点符合', scores: { N: 2 } },
        { id: 'q50d', label: '不太符合', scores: { N: 3 } },
        { id: 'q50e', label: '完全不符合', scores: { N: 4 } }
      ]
    }
  ],

  // ────────────────────────────────────────────────────────
  // 18 种人格结论
  // matchRules: 各维度得分 >= 阈值时命中 (满分各40分)
  // 匹配逻辑建议: 遍历结论列表, 取命中分最高的优先匹配
  // ────────────────────────────────────────────────────────
  results: [
    {
      id: 'visionary',
      title: '远见者',
      subtitle: 'The Visionary',
      emoji: '🔭',
      color: '#A78BFA',
      description: [
        '你是一个天生的思想家，脑海中永远涌动着对未来的构想。你不满足于表面的现象，习惯于深挖本质、寻找规律，并将这些洞察转化为独到的愿景。',
        '你的创造力和前瞻性思维常常让身边的人叹为观止。你喜欢挑战常规，对那些"一直都是这样做的"答案感到不耐烦。',
        '你的弱点在于有时会沉浸在宏大的蓝图里，而忽略了落地执行的细节。学会将想法拆解为可操作的步骤，你的潜力将无可限量。'
      ],
      strengths: ['创意无限', '战略眼光', '洞察力强', '激励他人'],
      growthTips: ['加强执行力', '关注细节', '建立反馈机制'],
      matchRules: { O: 30, C: 23, N: 23 } // 高O, 偏高C, 情绪稳定
    },
    {
      id: 'commander',
      title: '指挥官',
      subtitle: 'The Commander',
      emoji: '⚔️',
      color: '#FF8DA1',
      description: [
        '你天生具备领导气质，决断力强，行动力出众。你清楚地知道自己要什么，并有能力推动周围的人朝着目标前进。',
        '你不惧怕冲突，甚至认为适当的张力是激活团队的催化剂。你直接坦诚，不绕弯子，也因此赢得了许多人的尊重与信任。',
        '成长的关键在于学会倾听不同的声音，适当放慢节奏，让团队的多元智慧融入你的决策中。'
      ],
      strengths: ['决策果断', '执行力强', '目标清晰', '天生领袖'],
      growthTips: ['提升同理心', '学会授权', '耐心倾听'],
      matchRules: { C: 30, E: 26, N: 23 } // 高C, 高E, 情绪稳定
    },
    {
      id: 'mediator',
      title: '调和者',
      subtitle: 'The Mediator',
      emoji: '🕊️',
      color: '#B5EAD7',
      description: [
        '你有着与生俱来的共情能力，能够敏锐地感知他人的情绪，并以温柔而坚定的方式化解矛盾。在你所在的地方，人们往往能感受到一种安心与包容。',
        '你善于在不同立场之间搭建桥梁，让每一方都感到被尊重和理解。你的存在本身就是团队凝聚力的源泉。',
        '注意不要过于压抑自己真实的需求。学会适时表达自己的边界，是成长中重要的一课。'
      ],
      strengths: ['高共情力', '善于聆听', '化解冲突', '凝聚团队'],
      growthTips: ['明确个人边界', '表达真实需求', '避免过度讨好'],
      matchRules: { A: 30, N: 23 } // 高亲和力, 情绪稳定
    },
    {
      id: 'analyst',
      title: '分析师',
      subtitle: 'The Analyst',
      emoji: '🔬',
      color: '#A2C2E1',
      description: [
        '你是一个追求精确与逻辑的人。面对任何问题，你都会本能地收集数据、梳理逻辑、建立模型。你享受将复杂事物抽丝剥茧后的那种清晰感。',
        '你有时会被人认为"冷静得有些冷淡"，但这恰恰是因为你相信理性是解决问题最有力的工具。你在专业领域往往能达到极高的深度。',
        '尝试在严谨的分析框架外，留出一些空间给直觉与人情，这会让你的判断更加全面立体。'
      ],
      strengths: ['逻辑严密', '深度思考', '客观冷静', '专业精深'],
      growthTips: ['信任直觉', '重视人际关系', '接受不确定性'],
      matchRules: { O: 23, C: 26, E: 0, A: 0 } // 偏高O, 高C, 偏内向
    },
    {
      id: 'connector',
      title: '连接者',
      subtitle: 'The Connector',
      emoji: '🌟',
      color: '#FFDAC1',
      description: [
        '你是人际网络的天才，走到哪里都能自然而然地与人建立联结。你的社交能量具有感染力，能够激发他人的热情与参与感。',
        '你擅长发现每个人的闪光点，并将不同的人和资源串联起来，创造出意想不到的化学反应。你的价值往往不在于单打独斗，而在于居中协调。',
        '注意在广泛社交的同时，也要保持一定的深度关系，过于分散的精力有时会让你显得不够专注。'
      ],
      strengths: ['社交达人', '资源整合', '激发他人', '沟通高手'],
      growthTips: ['培养深度关系', '提高专注力', '学会推辞'],
      matchRules: { E: 30, A: 26 } // 高E, 高A
    },
    {
      id: 'guardian',
      title: '守护者',
      subtitle: 'The Guardian',
      emoji: '🛡️',
      color: '#C7CEEA',
      description: [
        '你是可靠与稳定的象征，是那个在风雨来临时人们第一个想到的人。你对承诺极为认真，一旦答应的事就会全力以赴地完成。',
        '你有着极强的责任感和使命感，不仅保护自己在乎的人，也默默维护着团队的秩序与规范。你是组织正常运转的基石。',
        '适当放松对"完美执行"的执念，允许自己和他人犯错并从中学习，是你进一步成长的关键。'
      ],
      strengths: ['值得信赖', '责任心强', '细心周到', '坚守承诺'],
      growthTips: ['接受不完美', '学会放权', '关照自身需求'],
      matchRules: { C: 30, A: 26, N: 26 } // 高尽责, 高亲和, 情绪稳定
    },
    {
      id: 'explorer',
      title: '探险家',
      subtitle: 'The Explorer',
      emoji: '🧭',
      color: '#E2F0CB',
      description: [
        '你生来就是运动的，拒绝一成不变。新的地方、新的面孔、新的挑战——这些都是让你眼睛发光的事物。你用亲身实践代替理论推演，在体验中积累智慧。',
        '你充满活力，乐观开朗，是团队中士气的天然来源。你能够在复杂的环境中快速适应，并找到意想不到的出路。',
        '如何在激情与专注之间找到平衡，是你的人生课题。试着为某些值得深耕的方向多付出一些耐心。'
      ],
      strengths: ['适应力强', '行动力爆表', '乐观感染力', '善于即兴应变'],
      growthTips: ['培养专注力', '深耕某一领域', '做好长期规划'],
      matchRules: { O: 26, E: 26 } // 高开放性, 高外向性
    },
    {
      id: 'sentinel',
      title: '哨兵',
      subtitle: 'The Sentinel',
      emoji: '🗼',
      color: '#96B1AC',
      description: [
        '你是秩序与规则的守护者，天生对风险保持高度敏感。你能在他人注意不到的地方察觉潜在的问题，并在灾难发生前就做好预防。',
        '你做事严谨，不喜欢依赖运气，更愿意通过充分的准备来掌控结果。你的存在让整个系统更加稳固可靠。',
        '学会与变化和不确定性共存，适当接受"足够好"而非"绝对完美"，会让你的生活质量大大提升。'
      ],
      strengths: ['风险感知', '严谨务实', '高度自律', '注重细节'],
      growthTips: ['拥抱不确定性', '适时放手', '信任他人能力'],
      matchRules: { C: 33, N: 26 } // 极高尽责性, 情绪稳定
    },
    {
      id: 'idealist',
      title: '理想主义者',
      subtitle: 'The Idealist',
      emoji: '✨',
      color: '#FFD1DC',
      description: [
        '你相信世界可以变得更好，也愿意为此付出真实的努力。你对意义和价值的追求贯穿于生活的每一个选择，这让你的行为常常带有一股令人动容的真诚。',
        '你敏感而富有洞察力，能够感受到他人难以捕捉的微妙情绪，并将这些感受转化为深刻的表达。',
        '当现实与理想碰撞时，你需要学会与"不完美"和解，在坚守价值的同时，也给自己多一些宽容与耐心。'
      ],
      strengths: ['价值驱动', '高情商', '真诚待人', '充满灵感'],
      growthTips: ['接受现实局限', '培养行动力', '建立心理边界'],
      matchRules: { O: 26, A: 26 } // 高开放, 高亲和
    },
    {
      id: 'architect',
      title: '建筑师',
      subtitle: 'The Architect',
      emoji: '🏛️',
      color: '#D0F0C0',
      description: [
        '你的世界是由逻辑、结构和系统搭建而成的。你看问题总能看到背后的框架，并本能地想要将其优化得更加精妙。你享受那种"把对的东西放在对的位置"的掌控感。',
        '你的规划能力和执行力堪称一流，能将模糊的愿景转化为精密的执行路线图。你的同事往往折服于你的系统性思维。',
        '记得留出空间给那些无法被量化的事物——情感、直觉、偶发的灵感。这些"噪音"往往蕴含着最珍贵的信号。'
      ],
      strengths: ['系统性思维', '高度自律', '战略规划', '结果导向'],
      growthTips: ['拥抱模糊性', '信任直觉', '重视情感联结'],
      matchRules: { O: 23, C: 33 } // 偏高开放, 极高尽责
    },
    {
      id: 'harmonizer',
      title: '共鸣者',
      subtitle: 'The Harmonizer',
      emoji: '🌊',
      color: '#B2E2F2',
      description: [
        '你有一种神奇的能力：走进任何一个房间，都能感受到那里情绪的流动，并自然而然地调节氛围，让所有人都感到舒适。',
        '你是链接人心的纽带，对情感的感知力极为精细。你的陪伴让人有一种"被完全接纳"的温暖感。',
        '你的成长课题是学会区分"理解他人的情绪"与"为他人的情绪负责"这两件截然不同的事，为自己的内心留出空间。'
      ],
      strengths: ['情感感知力', '包容理解', '创造安全感', '善于共情'],
      growthTips: ['建立自我边界', '区分同情与同感', '优先照顾自己'],
      matchRules: { A: 33, E: 23 } // 极高亲和, 偏高外向
    },
    {
      id: 'strategist',
      title: '战略家',
      subtitle: 'The Strategist',
      emoji: '♟️',
      color: '#D4BBFF',
      description: [
        '你以几步之遥的眼光看待当下，总在下棋时就想好了下三步如何走。你对人性、局势和趋势有着敏锐的感知，并善于将这些洞察转化为精准的行动策略。',
        '你不怒而威，话不多但字字有分量。你善于在复杂博弈中找到最优解，让对手在不知不觉中按你设计的路线行进。',
        '注意不要让"掌控全局"的倾向演变成对他人的不信任。真正高级的战略，往往建立在充分授权与信任之上。'
      ],
      strengths: ['前瞻思维', '洞察人性', '精准判断', '资源调配'],
      growthTips: ['培养信任感', '分享决策权', '关注过程体验'],
      matchRules: { O: 26, C: 30, N: 20 } // 高开放, 高尽责, 中等稳定
    },
    {
      id: 'innovator',
      title: '创变者',
      subtitle: 'The Innovator',
      emoji: '💡',
      color: '#FFF176',
      description: [
        '你是打破陈规的急先锋，讨厌停滞不前。你的思维极其活跃，总能在看似毫无关联的事物之间找到连接点，并由此催生出颠覆性的绝妙点子。',
        '你的自由内核常常鼓舞着身边的人共同拥抱变化。你善于在变动和未知中找寻乐趣并脱颖而出。',
        '创意往往需要落地才能发挥最大价值，试着在构思时引入少许现实考量，或找寻能帮你落实细节的搭档。'
      ],
      strengths: ['颠覆式创新', '拥抱变化', '思想活跃', '跨界连接'],
      growthTips: ['寻找落地搭档', '学会适度妥协', '建立执行清单'],
      matchRules: { O: 30, E: 26, C: 0 } // 极高O, 高E, 对尽责性无要求或偏低
    },
    {
      id: 'protector',
      title: '庇护者',
      subtitle: 'The Protector',
      emoji: '🤗',
      color: '#F48FB1',
      description: [
        '你有无私的一面，像一棵大树般为周围的人提供阴凉与保护。那些处于弱势或者需要帮助的人，总能在你这里找到温暖的避风港。',
        '你的坚韧不拔和强烈的责任心，加上你在细微之处的关怀备至，让你成为家庭或团队不可或缺的灵魂人物。',
        '保护他人虽然是种美德，但也要注意不要剥夺了他们独立成长的机会。授人以渔会是你更长远的庇护之法。'
      ],
      strengths: ['庇护弱小', '坚定温柔', '高度负责', '细致耐心'],
      growthTips: ['鼓励他人独立', '避免过度牺牲', '放开掌控欲'],
      matchRules: { A: 30, C: 26, N: 20 } // 极高亲和, 高尽责, 中等稳定
    },
    {
      id: 'performer',
      title: '表演者',
      subtitle: 'The Performer',
      emoji: '🎭',
      color: '#CE93D8',
      description: [
        '哪里有你，哪里就是舞台。你拥有极强的个人魅力和舞台表现力，能够轻而易举地吸引所有人的目光，并带动整场的气氛。',
        '你对生活充满着澎湃的激情和表现欲，你的喜怒哀乐也总是毫无保留地感染着每一位观众。这就是你特有的真性情。',
        '繁华落尽后的平静可能会让你感到虚无落差。学会与独处和寂寞和解，在聚光灯外的世界里找到自我价值。'
      ],
      strengths: ['极具魅力', '调动气氛', '情绪感染力', '直率奔放'],
      growthTips: ['学会在独处中沉淀', '平复情绪落差', '重视长期承诺'],
      matchRules: { E: 33, O: 20 } // 极高外向, 中等开放
    },
    {
      id: 'scholar',
      title: '学者',
      subtitle: 'The Scholar',
      emoji: '📚',
      color: '#90CAF9',
      description: [
        '你是知识的信徒，沉静且深邃。面对未知的世界，你用探究的眼光和极大的耐心去研究底层的原理和长久的真理。',
        '由于习惯长期的独立钻研和思考，你不喜欢无谓的喧嚣和过于肤浅的社交。知识构筑了你最坚不可摧的精神城堡。',
        '有时候真理并不全在书本和实验室中，偶尔走出堡垒，去感受热气腾腾的生活与人情，也会带来不同的启发。'
      ],
      strengths: ['探究真理', '知识渊博', '深度专注', '持之以恒'],
      growthTips: ['增加社交频次', '分享知识', '避免过度理论化'],
      matchRules: { O: 33, C: 26, E: 0 } // 极高开放, 高尽责, 偏内向
    },
    {
      id: 'artisan',
      title: '手艺人',
      subtitle: 'The Artisan',
      emoji: '🛠️',
      color: '#BCAAA4',
      description: [
        '你信奉"少说多做"，更愿意用自己的手艺和实际产出来证明自己的价值。你沉得下心，能在重复枯燥的打磨中看到事物渐近完美的乐趣。',
        '你安静内敛但行事可靠，有着非常务实和接地气的人生态度。你那份对于细节和质量的死磕精神令人肃然起敬。',
        '在默默耕耘的同时，适当地宣传自己的成果，让大众更好地认识你的价值，并不会削弱你的专注。'
      ],
      strengths: ['精益求精', '吃苦耐劳', '踏实务实', '专注工艺'],
      growthTips: ['学会自我营销', '打开视野', '接受新的工具流'],
      matchRules: { C: 33, N: 23, E: 0 } // 极高尽责, 情绪稳定, 偏内向
    },
    {
      id: 'diplomat',
      title: '外交家',
      subtitle: 'The Diplomat',
      emoji: '🤝',
      color: '#80CBC4',
      description: [
        '你是天生的高级协调官，兼具亲和力和极强的社交手腕。在错综复杂的利益和人际关系网中，你总能优雅地找到双赢的平衡点。',
        '你言谈举止间自带礼节和分寸感，做事周全紧凑。你在维护和谐的同时，也能极好地推进各项事务的顺利发展。',
        '在长期迎合各方需求的过程中，不要迷失了自己内心真正向往的东西。在外交场合外，找回自己的主场。'
      ],
      strengths: ['人际润滑', '双赢思维', '进退有度', '多方协调'],
      growthTips: ['坚持个人底线', '寻找真正热爱的事业', '不必面面俱到'],
      matchRules: { A: 26, E: 26, C: 26 } // 高亲和, 高外向, 高尽责
    }
  ]
}
