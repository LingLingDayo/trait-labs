// ───────────────────────────────────────────────
// 通用测试数据类型定义
// 设计原则: 顶层以 TestSuite 为单位, 每个 Suite 包含完整的题库与结论映射
// ───────────────────────────────────────────────

/** 单个选项 */
export interface QuestionOption {
  /** 选项唯一标识 */
  id: string
  /** 选项显示文本 */
  label: string
  /** 该选项对各维度的得分贡献 (key: 维度key, value: 分值) */
  scores: Record<string, number>
}

/** 单道题目 */
export interface Question {
  /** 题目唯一标识 */
  id: string
  /** 题干文本 */
  text: string
  /** 选项列表 */
  options: QuestionOption[]
  /** 所属维度 (用于分组显示, 可选) */
  dimension?: string
}

/** 混合 Emoji 的单个图层定义 */
export interface EmojiLayer {
  /** Fluent UI Emoji 的文件夹名 (如 'Melting face') */
  id: string
  /** 缩放比例 (0 ~ 1) */
  scale?: number
  /** 水平偏移百分比 (-100 ~ 100) */
  x?: number
  /** 垂直偏移百分比 (-100 ~ 100) */
  y?: number
  /** 旋转角度 (0 ~ 360) */
  rotate?: number
  /** 层级顺序 */
  zIndex?: number
  /** 动画类型 (如 'pulse', 'float', 'spin', 'bounce') */
  animation?: 'pulse' | 'float' | 'spin' | 'bounce' | 'shake'
}

/** 人格结论 */
export interface PersonalityResult {
  /** 结论唯一标识 (如 INTJ / wolf / architect) */
  id: string
  /** 结论标题 */
  title: string
  /** 副标题 / 别名 */
  subtitle: string
  /** 详细描述 (多段落) */
  description: string[]
  /** 代表 emoji (支持单个字符或复合图层) */
  emoji: string | { layers: (string | EmojiLayer)[] }
  /** 结果配图 (可选), 若无则显示 emoji */
  image?: string
  /** 主色调 (用于 UI 渲染) */
  color: string
  /** 优势标签 */
  strengths: string[]
  /** 成长建议标签 */
  growthTips: string[]
  /** 匹配规则: 各维度得分超过阈值时命中该结论 */
  matchRules: Record<string, number>
  /** 自定义稀有度标签 (可选) */
  rarityLabel?: string
}

/** 完整测试套件 */
export interface TestSuite {
  /** 套件唯一标识 (与 HomeStage testTypes id 对应) */
  id: string
  /** 测试名称 */
  name: string
  /** 测试标语 */
  tagline: string
  /** 测试简介 */
  description: string
  /** 预计完成时间 (分钟) */
  estimatedMinutes: number
  /** 测试维度定义 */
  dimensions: DimensionMeta[]
  /** 题目列表 */
  questions: Question[]
  /** 结论列表 */
  results: PersonalityResult[]
  /** 选项是否随机展示 (可选) */
  randomizeOptions?: boolean
}

/** 维度元信息 */
export interface DimensionMeta {
  /** 维度 key */
  key: string
  /** 维度显示名 */
  label: string
  /** 维度说明 */
  description: string
  /** 低分极端描述 */
  lowLabel: string
  /** 高分极端描述 */
  highLabel: string
}
