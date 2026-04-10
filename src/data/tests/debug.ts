import type { TestSuite } from '../types'

/**
 * 调试题库 —— 极简版
 * 用于快速验证开发流程中的逻辑
 */
export const debugTest: TestSuite = {
  id: 'debug',
  name: '开发测试',
  tagline: '开发者专用极简题库',
  description: '这是一个用于快速验证 UI 和 逻辑全流程的小型题库，仅包含 2 道题目。',
  estimatedMinutes: 0.5,

  dimensions: [
    {
      key: 'D',
      label: '调试度',
      description: '衡量系统当前是否处于良好的调试状态',
      lowLabel: '正式环境',
      highLabel: '开发环境'
    }
  ],

  questions: [
    {
      id: 'd1',
      dimension: 'D',
      text: '如果在写代码时遇到 Bug，你的第一反应是？',
      options: [
        { id: 'd1a', label: '沉着冷静并使用 AI 辅助', scores: { D: 10 } },
        { id: 'd1b', label: '抓耳挠腮并重启电脑', scores: { D: 0 } }
      ]
    },
    {
      id: 'd2',
      dimension: 'D',
      text: '你认为现在的 UI 风格好看吗？',
      options: [
        { id: 'd2a', label: '泰裤辣！', scores: { D: 10 } },
        { id: 'd2b', label: '还有提升空间', scores: { D: 5 } }
      ]
    }
  ],

  results: [
    {
      id: 'debug_master',
      title: '调试大师',
      subtitle: 'Debug Master',
      emoji: '🧙‍♂️',
      color: '#10b981',
      description: [
        '恭喜你！你展现出了极佳的开发者特质。',
        '在调试题库中，你的得分触碰了天花板，这意味着现在的系统逻辑工作得非常完美喵！',
        '继续保持这种对代码的热爱与严谨喵。'
      ],
      strengths: ['逻辑缜密', '善用工具', '效率极高'],
      growthTips: ['多喝热水', '保证睡眠', '记得撸猫'],
      matchRules: { D: 15 }
    },
    {
      id: 'debug_learner',
      title: '调试学者',
      subtitle: 'Debug Learner',
      emoji: '🐣',
      color: '#3b82f6',
      description: [
        '看起来系统逻辑已经跑通了，虽然你的得分没到最高，但这就是测试的意义所在喵。',
        '作为一个调试学者，你还在不断探索工具的边界。',
        '这也是开发浪漫的一部分喵！'
      ],
      strengths: ['敢于尝试', '反馈及时', '善于发现漏洞'],
      growthTips: ['多看文档', '检查日志', '再测一遍'],
      matchRules: { D: 0 }
    }
  ]
}
