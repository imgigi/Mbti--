
import { QuestionNode, MBTIProfile, Language } from './types';

// --- UI TEXT TRANSLATIONS ---
export const UI_TEXT = {
  zh: {
    heroTag: "MBTI SPEED RUN",
    heroTitle: "30秒 MBTI",
    heroSubtitle: "快速人格测评",
    heroQuestion: "✨我到底是什么样的人✨",
    intro: "本测评基于 <span class='font-bold text-slate-700'>MBTI 四大维度理论</span>，结合实际行为场景设定，让你用最自然的选择，在 <span class='font-bold text-slate-700'>8题以内</span> 就能找到与你最接近的人格原型。",
    statsQuestion: "题目数量",
    statsTime: "预计时长",
    statsQValue: "8 题",
    statsTValue: "30 秒",
    sellPoint1Title: "速通版简单直接",
    sellPoint1Desc: "30 秒就能测完，不用答一大堆题。",
    sellPoint2Title: "真实情境好选择",
    sellPoint2Desc: "题目都是日常场景，不会卡住。",
    sellPoint3Title: "可反复测试",
    sellPoint3Desc: "随时重测、随时刷新。",
    previewTitle: "测评结果包含：",
    preview1: "主人格类型",
    preview2: "副人格类型 / 潜意识",
    preview3: "社交特质、思考模式",
    preview4: "职业建议 & 情感风格",
    startBtn: "开始测试",
    disclaimer: "本测试参考 MBTI 理论与行为心理学模型，仅供自我认知参考，不构成专业心理诊断。",
    quizProgress: "题目",
    quizTitle: "MBTI 速通版",
    resultSecondary: "潜意识 / 副人格",
    resultArchetype: "人格原型",
    resultFictional: "虚构代表",
    resultReal: "现实代表",
    resultMindMap: "心灵地图",
    resultAbility: "能力分析",
    resultSuperpower: "天赋优势",
    resultBlindspot: "潜在盲点",
    resultGalaxy: "关系星系",
    resultMatch: "最佳拍档",
    resultClash: "相爱相杀",
    resultCareer: "天命职业",
    resultGrowth: "成长指南",
    resultAiCookie: "AI 能量饼干",
    resultAiLoading: "正在读取宇宙信号...",
    btnRetake: "再测一次",
    btnSave: "保存长图",
    btnSaving: "生成中...",
    mainPersonality: "主人格"
  },
  en: {
    heroTag: "MBTI SPEED RUN",
    heroTitle: "30s MBTI",
    heroSubtitle: "Personality Speed Run",
    heroQuestion: "✨Who am I really?✨",
    intro: "Based on <span class='font-bold text-slate-700'>MBTI Theory</span> and behavioral scenarios, this test helps you find your personality archetype in <span class='font-bold text-slate-700'>under 8 questions</span>.",
    statsQuestion: "Questions",
    statsTime: "Time",
    statsQValue: "8 Qs",
    statsTValue: "30 Sec",
    sellPoint1Title: "Fast & Direct",
    sellPoint1Desc: "Get results in 30 seconds. No long questionnaires.",
    sellPoint2Title: "Real Scenarios",
    sellPoint2Desc: "Easy-to-answer daily life situations.",
    sellPoint3Title: "Retake Anytime",
    sellPoint3Desc: "Refresh and retake as you grow.",
    previewTitle: "Result Includes:",
    preview1: "Main Personality Type",
    preview2: "Sub-Personality / Subconscious",
    preview3: "Social & Thinking Patterns",
    preview4: "Career & Relationship Advice",
    startBtn: "Start Quiz",
    disclaimer: "Based on MBTI theory and behavioral psychology. For self-discovery purposes only.",
    quizProgress: "Question",
    quizTitle: "MBTI Speed Run",
    resultSecondary: "Subconscious / Secondary",
    resultArchetype: "Archetypes",
    resultFictional: "Fictional",
    resultReal: "Real World",
    resultMindMap: "Mind Map",
    resultAbility: "Analysis",
    resultSuperpower: "Superpowers",
    resultBlindspot: "Blind Spots",
    resultGalaxy: "Relationships",
    resultMatch: "Best Match",
    resultClash: "Challenge",
    resultCareer: "Career Path",
    resultGrowth: "Growth Guide",
    resultAiCookie: "AI Fortune Cookie",
    resultAiLoading: "Receiving cosmic signals...",
    btnRetake: "Retake",
    btnSave: "Save Result",
    btnSaving: "Saving...",
    mainPersonality: "Main Type"
  }
};

// --- DECISION TREE (CHINESE) ---
const QUESTION_TREE_ZH: Record<string, QuestionNode> = {
  'Q1': {
    id: 'Q1',
    text: '陌生社交场合，你通常？',
    options: [
      { label: 'A. 很紧张，不知道说什么，希望没人注意我', nextId: 'Q2', scores: { I: 2 } },
      { label: 'B. 只跟熟人玩，陌生人我能回应但不主动', nextId: 'Q2', scores: { I: 1 } },
      { label: 'C. 陌生人来聊我能接住，但不主动', nextId: 'Q6_E', scores: { E: 1 } },
      { label: 'D. 我会主动找人聊，很快融入', nextId: 'Q6_E', scores: { E: 2 } }
    ]
  },
  'Q2': {
    id: 'Q2',
    text: '面对社交时，你通常？',
    options: [
      { label: 'A. 活动前会焦虑，结束后需要独处恢复', nextId: 'Q3', scores: { I: 2 } },
      { label: 'B. 不社恐，只是不喜欢无意义的社交', nextId: 'Q3', scores: { I: 1 } },
      { label: 'C. 看活动内容', nextId: 'Q3', scores: { I: 0.5 } },
      { label: 'D. 不确定', nextId: 'Q3', scores: {} }
    ]
  },
  'Q3': {
    id: 'Q3',
    text: '你觉得自己“有点奇怪/跟别人不一样”吗？',
    options: [
      { label: 'A. 是', nextId: 'Q4', scores: { N: 2 } },
      { label: 'B. 否', nextId: 'Q4', scores: { S: 2 } },
      { label: 'C. 不确定', nextId: 'Q4', scores: {} }
    ]
  },
  'Q4': {
    id: 'Q4',
    text: '别人会觉得你难相处吗？',
    options: [
      { label: 'A. 会，我标准高、不太好接近', nextId: 'Q5', scores: { T: 1, J: 1 } },
      { label: 'B. 不会，我算温和好相处', nextId: 'Q5', scores: { F: 2 } },
      { label: 'C. 看情况', nextId: 'Q5', scores: {} },
      { label: 'D. 不确定', nextId: 'Q5', scores: {} }
    ]
  },
  'Q5': {
    id: 'Q5',
    text: '朋友情绪很差时，你通常？',
    options: [
      { label: 'A. 会开始分析原因、帮想办法', nextId: 'Q6_I', scores: { T: 2 } },
      { label: 'B. 会陪伴、安慰、支持', nextId: 'Q6_I', scores: { F: 2 } },
      { label: 'C. 会倾听，但不太知道怎么帮', nextId: 'Q6_I', scores: { F: 0.5, T: 0.5 } },
      { label: 'D. 不确定', nextId: 'Q6_I', scores: {} }
    ]
  },
  'Q6_I': {
    id: 'Q6_I',
    text: '你更常关注什么？',
    options: [
      { label: 'A. 经常思考未来的可能性', nextId: 'Q7_I', scores: { N: 1 } },
      { label: 'B. 更关注当下具体的事', nextId: 'Q7_I', scores: { S: 1 } },
      { label: 'C. 会在两者间切换', nextId: 'Q7_I', scores: {} },
      { label: 'D. 不确定', nextId: 'Q7_I', scores: {} }
    ]
  },
  'Q7_I': {
    id: 'Q7_I',
    text: '计划被打乱或情况不确定时，你通常？',
    options: [
      { label: 'A. 会不安，需要重新制定计划', scores: { J: 2 } }, 
      { label: 'B. 顺其自然，不太焦虑', scores: { P: 2 } }, 
      { label: 'C. 有点不舒服但能调整接受', scores: { J: 0.5, P: 0.5 } }, 
      { label: 'D. 不确定', scores: {} } 
    ]
  },
  'Q6_E': {
    id: 'Q6_E',
    text: '与陌生人熟悉的速度？',
    options: [
      { label: 'A. 主动找话题', nextId: 'Q7_E', scores: { E: 2 } },
      { label: 'B. 对方来我能接住', nextId: 'Q7_E', scores: { E: 1 } },
      { label: 'C. 看心情', nextId: 'Q7_E', scores: { E: 0.5 } },
      { label: 'D. 不确定', nextId: 'Q7_E', scores: {} }
    ]
  },
  'Q7_E': {
    id: 'Q7_E',
    text: '你觉得自己“有点奇怪/跟别人不一样”？',
    options: [
      { label: 'A. 是', nextId: 'Q8', scores: { N: 2 } },
      { label: 'B. 否', nextId: 'Q8', scores: { S: 2 } },
      { label: 'C. 不确定', nextId: 'Q8', scores: {} }
    ]
  },
  'Q8': {
    id: 'Q8',
    text: '你面对“规则”的态度？',
    options: [
      { label: 'A. 不合理的规则我会突破', nextId: 'Q9', scores: { P: 2, N: 1 } },
      { label: 'B. 我通常按规定来', nextId: 'Q9', scores: { J: 2 } },
      { label: 'C. 我会评估，合理就遵守，不合理就变通', nextId: 'Q9', scores: { J: 0.5, P: 0.5 } },
      { label: 'D. 会照做，但心里会吐槽', nextId: 'Q9', scores: { J: 1, N: 0.5 } }
    ]
  },
  'Q9': {
    id: 'Q9',
    text: '你更关注未来还是现在？',
    options: [
      { label: 'A. 常常规划未来', nextId: 'Q10', scores: { N: 1, J: 1 } },
      { label: 'B. 喜欢活在当下', nextId: 'Q10', scores: { S: 1, P: 1 } },
      { label: 'C. 看情况切换', nextId: 'Q10', scores: {} },
      { label: 'D. 不确定', nextId: 'Q10', scores: {} }
    ]
  },
  'Q10': {
    id: 'Q10',
    text: '朋友情绪不好时，你通常？',
    options: [
      { label: 'A. 分析原因', scores: { T: 2 } }, 
      { label: 'B. 陪伴安慰', scores: { F: 2 } }, 
      { label: 'C. 倾听但不知道怎么帮', scores: { F: 0.5, T: 0.5 } }, 
      { label: 'D. 不确定', scores: {} } 
    ]
  }
};

// --- DECISION TREE (ENGLISH) ---
const QUESTION_TREE_EN: Record<string, QuestionNode> = {
  'Q1': {
    id: 'Q1',
    text: 'At a social event with strangers, you usually:',
    options: [
      { label: 'A. Feel nervous, hope no one notices me', nextId: 'Q2', scores: { I: 2 } },
      { label: 'B. Stick to friends, only respond if spoken to', nextId: 'Q2', scores: { I: 1 } },
      { label: 'C. Can handle it if approached, but don\'t initiate', nextId: 'Q6_E', scores: { E: 1 } },
      { label: 'D. Actively mingle and blend in quickly', nextId: 'Q6_E', scores: { E: 2 } }
    ]
  },
  'Q2': {
    id: 'Q2',
    text: 'How do you feel about socializing?',
    options: [
      { label: 'A. Anxious before, need recharge after', nextId: 'Q3', scores: { I: 2 } },
      { label: 'B. Not anxious, just dislike meaningless chat', nextId: 'Q3', scores: { I: 1 } },
      { label: 'C. Depends on the activity', nextId: 'Q3', scores: { I: 0.5 } },
      { label: 'D. Not sure', nextId: 'Q3', scores: {} }
    ]
  },
  'Q3': {
    id: 'Q3',
    text: 'Do you feel you are "a bit weird/different"?',
    options: [
      { label: 'A. Yes', nextId: 'Q4', scores: { N: 2 } },
      { label: 'B. No', nextId: 'Q4', scores: { S: 2 } },
      { label: 'C. Not sure', nextId: 'Q4', scores: {} }
    ]
  },
  'Q4': {
    id: 'Q4',
    text: 'Do others find you hard to get along with?',
    options: [
      { label: 'A. Yes, I have high standards / am distant', nextId: 'Q5', scores: { T: 1, J: 1 } },
      { label: 'B. No, I am easygoing', nextId: 'Q5', scores: { F: 2 } },
      { label: 'C. Depends', nextId: 'Q5', scores: {} },
      { label: 'D. Not sure', nextId: 'Q5', scores: {} }
    ]
  },
  'Q5': {
    id: 'Q5',
    text: 'When a friend is upset, you usually:',
    options: [
      { label: 'A. Analyze the cause and offer solutions', nextId: 'Q6_I', scores: { T: 2 } },
      { label: 'B. Offer comfort and support', nextId: 'Q6_I', scores: { F: 2 } },
      { label: 'C. Listen but don\'t know how to help', nextId: 'Q6_I', scores: { F: 0.5, T: 0.5 } },
      { label: 'D. Not sure', nextId: 'Q6_I', scores: {} }
    ]
  },
  'Q6_I': {
    id: 'Q6_I',
    text: 'What do you focus on more?',
    options: [
      { label: 'A. Future possibilities', nextId: 'Q7_I', scores: { N: 1 } },
      { label: 'B. Current facts and details', nextId: 'Q7_I', scores: { S: 1 } },
      { label: 'C. Switch between both', nextId: 'Q7_I', scores: {} },
      { label: 'D. Not sure', nextId: 'Q7_I', scores: {} }
    ]
  },
  'Q7_I': {
    id: 'Q7_I',
    text: 'When plans change suddenly, you:',
    options: [
      { label: 'A. Feel uneasy, need to re-plan', scores: { J: 2 } }, 
      { label: 'B. Go with the flow, not anxious', scores: { P: 2 } }, 
      { label: 'C. Uncomfortable but can adjust', scores: { J: 0.5, P: 0.5 } }, 
      { label: 'D. Not sure', scores: {} } 
    ]
  },
  'Q6_E': {
    id: 'Q6_E',
    text: 'How fast do you warm up to strangers?',
    options: [
      { label: 'A. I initiate topics', nextId: 'Q7_E', scores: { E: 2 } },
      { label: 'B. I respond well if they talk', nextId: 'Q7_E', scores: { E: 1 } },
      { label: 'C. Depends on mood', nextId: 'Q7_E', scores: { E: 0.5 } },
      { label: 'D. Not sure', nextId: 'Q7_E', scores: {} }
    ]
  },
  'Q7_E': {
    id: 'Q7_E',
    text: 'Do you feel you are "a bit weird/different"?',
    options: [
      { label: 'A. Yes', nextId: 'Q8', scores: { N: 2 } },
      { label: 'B. No', nextId: 'Q8', scores: { S: 2 } },
      { label: 'C. Not sure', nextId: 'Q8', scores: {} }
    ]
  },
  'Q8': {
    id: 'Q8',
    text: 'Your attitude towards rules?',
    options: [
      { label: 'A. Break them if unreasonable', nextId: 'Q9', scores: { P: 2, N: 1 } },
      { label: 'B. Usually follow them', nextId: 'Q9', scores: { J: 2 } },
      { label: 'C. Follow if reasonable, bend if not', nextId: 'Q9', scores: { J: 0.5, P: 0.5 } },
      { label: 'D. Follow but complain internally', nextId: 'Q9', scores: { J: 1, N: 0.5 } }
    ]
  },
  'Q9': {
    id: 'Q9',
    text: 'Do you focus more on the future or present?',
    options: [
      { label: 'A. Often plan for future', nextId: 'Q10', scores: { N: 1, J: 1 } },
      { label: 'B. Live in the moment', nextId: 'Q10', scores: { S: 1, P: 1 } },
      { label: 'C. Switch based on situation', nextId: 'Q10', scores: {} },
      { label: 'D. Not sure', nextId: 'Q10', scores: {} }
    ]
  },
  'Q10': {
    id: 'Q10',
    text: 'When a friend is upset, you usually:',
    options: [
      { label: 'A. Analyze the cause', scores: { T: 2 } }, 
      { label: 'B. Offer comfort', scores: { F: 2 } }, 
      { label: 'C. Listen but unsure how to help', scores: { F: 0.5, T: 0.5 } }, 
      { label: 'D. Not sure', scores: {} } 
    ]
  }
};

// --- PROFILES (CHINESE) ---
const PROFILES_DATA_ZH: Record<string, MBTIProfile> = {
  'INTJ': {
    code: 'INTJ',
    name: '建筑师',
    slogan: '战略布局者，理性至上的大师',
    keywords: ['理性', '远见', '独立', '逻辑', '高效'],
    archetype: { fictional: '斯蒂芬·霍金', historical: '埃隆·马斯克' },
    radarStats: { logic: 95, control: 90, social: 40, abstract: 90 },
    drivers: ['效率', '知识', '远见'],
    superpowers: [
      { title: '战略洞察力强到近乎“预判未来”', desc: 'INTJ 的大脑天生以结构方式处理信息，他们不会只看到表面，而是习惯从长期趋势、隐形逻辑、系统结构中推断未来。别人看到的是“现在发生什么”，INTJ 看到的是“接下来会发生什么”。因此，他们在做决策时稳定而精准，很少误判方向。' },
      { title: '高效执行与独立推进能力', desc: 'INTJ 是少数不需要监督、甚至讨厌被干扰的人。他们设定目标后，会自动拆解路径，按照最高效率执行。他们不会依赖外界动力，而是依靠内部驱动前进，是天生的“自我驱动型人才”。' },
      { title: '学习能力强，能迅速抓住底层规律', desc: 'INTJ 不喜欢浅层知识，他们的学习是从本质到结构，从结构到应用。这让他们在陌生领域也能迅速掌握关键知识，并建立自己的认知体系。他们不是“会一点点”，而是“会到别人来问他”。' }
    ],
    blindspots: [
      { title: '情感表达困难，容易被误解为冷漠', desc: 'INTJ 并非没有感情，而是不擅长表达。他们习惯直接讨论问题本身，而不是提供安慰或共情，因此经常被误会为“无情”“不好相处”。但实际上，他们是用“解决问题”的方式表达关心。' },
      { title: '对他人要求高，容易产生失望与不耐烦', desc: 'INTJ 对效率和质量的要求很高，因此对自己严格，也对别人严格。当别人无法达到他们心中的标准时，INTJ 会感到沮丧、烦躁，甚至忍不住接管全部工作，进一步加重关系压力。' },
      { title: '完美主义导致行动延迟或压力内化', desc: 'INTJ 对自己想做的事情会要求极高，但这种完美主义会让他们“做不好就不想做”，或者陷入尝试前的过度思考。他们常常压力内化，不愿示弱、不愿寻求帮助，让自己承担过多。' }
    ],
    relationships: { strong: ['INTP', 'ENTJ'], weak: ['ESFJ', 'ISFJ'] },
    careers: [
      { title: '战略与商业分析类', desc: '（咨询、投研、战略规划）INTJ 擅长拆解复杂系统、预测长期结果，因此非常适合做商业分析师、战略咨询顾问、研究员、量化分析师等岗位。' },
      { title: '深度知识领域', desc: '（科研、工程、技术研发）INTJ 喜欢长期做一件事并追求最高标准，因此科研人员、AI 工程师、系统架构师、数据科学家等岗位会让他们如鱼得水。' },
      { title: '高层决策岗位', desc: '（组织管理、C-suite 角色）INTJ 拥有宏观视角和长期战略眼光，非常适合担任 CEO、COO、首席战略官、产品负责人等职务。' }
    ],
    growth: [
      { title: '练习“情绪表达最小单位”', desc: '不需要情绪化，只需用 1–2 句话表达状态，例如：“我需要一点安静思考”“我不是生气，只是专注”。这能迅速减少误会，让关系更顺畅。' },
      { title: '学会降低预期，把“完美”降级为“可用”', desc: '为所有事情设一个“80% 完成就停止”的上限，剩下的允许别人来做。这不仅减少精神负担，也帮助你更好地分工与协作。' },
      { title: '给自己安排“无效率时间”', desc: '每周安排至少1次不以成果为目的的放松时间，例如散步、看电影、静坐。INTJ 的大脑需要休息来恢复洞察力，否则理性过载会耗尽能量。' }
    ]
  },
  'INTP': {
    code: 'INTP',
    name: '逻辑学家',
    slogan: '思维工匠，为思考而生的哲学家',
    keywords: ['逻辑', '好奇', '独立', '分析', '创新'],
    archetype: { fictional: '谢耳朵', historical: '爱因斯坦' },
    radarStats: { logic: 95, control: 30, social: 20, abstract: 95 },
    drivers: ['知识', '真理', '理解'],
    superpowers: [
      { title: '逻辑推演能力强，能迅速找出真相结构', desc: 'INTP 喜欢拆解问题，他们的思考方式不是线性的，而是跳跃式找出“本质因果”。当别人还在疑惑表面现象时，INTP 已经能看出问题的根源，并建立一个完整的逻辑模型。' },
      { title: '创造力来自“思想实验室”', desc: 'INTP 的脑内世界非常庞大，他们喜欢不断实验想法、构建假设、交叉推演新可能。与艺术家不同，INTP 的创造力来自“系统创新”，能把抽象概念变成真正可用的新结构。' },
      { title: '深度独立思考者，不受主流影响', desc: '他们不会因为别人怎么想而改变观点，也不盲从权威。INTP 的想法往往领先环境多年，他们是真正意义上的思想发明家。' }
    ],
    blindspots: [
      { title: '行动力不足，容易陷入“过度分析”', desc: 'INTP 热爱思考，但不一定热爱执行。他们常常把所有可能性都分析完，却迟迟不迈出第一步，错过不少好机会。' },
      { title: '社交过滤器薄弱，说话容易太直', desc: '他们以为自己在“描述事实”，但听者可能觉得他们冷淡、无情或不考虑情绪。INTP 不擅长包装语言，也常忽略对方感受。' },
      { title: '对现实细节不敏感，容易遗漏重要琐事', desc: '生活、行政、流程类任务对 INTP 来说毫无吸引力，因此他们的生活常显凌乱，甚至出现账单忘记付、资料忘记提交等状况。' }
    ],
    relationships: { strong: ['ENTJ', 'ENFP'], weak: ['ESFJ', 'ISFJ'] },
    careers: [
      { title: '科学 & 理论研究', desc: '（学者、物理学家、研究工程师）INTP 的思考方式本质上是“验证世界如何运作”。他们非常适合在科学领域深耕，把抽象理论转化为突破性的理解。' },
      { title: '技术创新', desc: '（软件工程师、算法工程师、系统架构师）技术是 INTP 的自然生态，因为它既满足逻辑结构、又能自由创造。他们喜欢构建系统，而不是重复执行任务。' },
      { title: '创意理论类职业', desc: '（哲学家、发明家、策略顾问）INTP 的强项在于“提出别人从未想到的观点”。这些岗位能让他们自由探索思想，成为领域内的创新者。' }
    ],
    growth: [
      { title: '设定行动 deadline', desc: '把想法从脑内拉到现实，给每个项目加一个明确时间点——即使不完美，也要开始执行。行动会反过来增强你的逻辑结构。' },
      { title: '练习“缓冲语言”', desc: '让观点更易被接受。使用 “我认为…/依我观察…” 开头，而不是直接指出错误，有助于减少社交摩擦。' },
      { title: '建立一个最小化的生活结构系统', desc: '不用复杂，只需一套“默认流程”：付款日、资料整理日、固定任务清单。能显著降低生活混乱度。' }
    ]
  },
  'ENTJ': {
    code: 'ENTJ',
    name: '指挥官',
    slogan: '天生的将领，效率至上的指挥官',
    keywords: ['自信', '果断', '领导力', '高效', '慕强'],
    archetype: { fictional: '玛薇丝·米里根', historical: '史蒂夫·乔布斯' },
    radarStats: { logic: 90, control: 95, social: 80, abstract: 85 },
    drivers: ['成就', '权力', '效率'],
    superpowers: [
      { title: '天然领导力，能在混乱中迅速定方向', desc: 'ENTJ 遇到任何需要协调、指挥、规划的场景时，会本能地站到掌控位置。他们能在短时间内评估局势并给出可执行方案，让团队迅速运转起来。' },
      { title: '极强的目标驱动力，效率近乎激进', desc: 'ENTJ 不做无意义的事。他们对达成目标有强迫般的执着，行动速度快、标准高，是团队的“推进器”和“加速器”。' },
      { title: '冷静客观，能在压力下做出最理性选择', desc: '即使在高压环境中，他们也不会被恐慌或情绪影响决策。他们擅长权衡利弊、迅速做出判断，是危机场景中的顶级选手。' }
    ],
    blindspots: [
      { title: '强势沟通容易让别人感到压力', desc: 'ENTJ 讲话直、快、准，但容易像“命令式表达”。他们的语气常被误解为不耐烦或强硬，特别是对敏感类型的人。' },
      { title: '低容忍度让团队关系紧绷', desc: 'ENTJ 很容易对能力不足或效率低的人失去耐心，甚至直接替对方做事，这会造成团队依赖性与情绪紧张。' },
      { title: '容易忽略情绪层面，伤到亲密关系', desc: '他们习惯解决问题，却忽略对方的“需要被理解”。久而久之，亲密关系可能被“高压与忽略”侵蚀。' }
    ],
    relationships: { strong: ['INTJ', 'INTP'], weak: ['ISFP', 'ESFP'] },
    careers: [
      { title: '高层管理与经营', desc: '（CEO、COO、企业负责人）ENTJ 擅长制定长期战略并带领团队前进，适合站在组织的最前端。' },
      { title: '投资与金融决策', desc: '（投行、并购、基金管理）这里需要强逻辑、强决策力、强抗压性，而这些都是 ENTJ 的天赋能力。' },
      { title: '大型项目或组织推动者', desc: '（项目经理、运营总监）ENTJ 能协调人、资源、目标，是大型项目的天然指挥官。' }
    ],
    growth: [
      { title: '在沟通前“加一句情绪缓冲”', desc: '例如：“我说得比较直接，但不是针对你。”这会显著减少紧张感。' },
      { title: '学会倾听，不要急着给解决方案', desc: '先听完情绪，再给建议，会让关系稳固许多。' },
      { title: '允许团队犯错，让别人一起成长', desc: '“放手”是 ENTJ 的必修课，才能让团队更强大。' }
    ]
  },
  'ENTP': {
    code: 'ENTP',
    name: '辩论家',
    slogan: '思维挑战者，永不停止的智力探险家',
    keywords: ['机智', '创新', '善辩', '好奇', '独立'],
    archetype: { fictional: '托尼·斯塔克', historical: '苏格拉底' },
    radarStats: { logic: 85, control: 30, social: 85, abstract: 90 },
    drivers: ['智力挑战', '可能性', '自由'],
    superpowers: [
      { title: '思维敏捷，反应速度几乎无上限', desc: 'ENTP 的大脑永远在高速运转。他们能迅速理解新概念，并立即提出不同角度的观点，是讨论场景中的“瞬间点子王”。' },
      { title: '创新天赋强，擅长打破旧规则', desc: '他们不满足于做别人做过的事，而是喜欢颠覆、重组、改造。他们看到的是“可能性”，不是“限制”。' },
      { title: '适应能力极强，能在变化中成长', desc: 'ENTP 不害怕不确定性，甚至会因为“不确定”而更兴奋。他们在动态环境中最能发挥潜力。' }
    ],
    blindspots: [
      { title: '容易争论过头，忽略气氛与情绪', desc: 'ENTP 争论是为了“探索想法”，但别人听起来像“攻击”。他们很容易因为辩论过度而伤害关系。' },
      { title: '执行力不足，点子多但落地少', desc: 'ENTP 的大脑会不断生成新想法，但他们常常在做一半时发现新的兴趣点，然后转向，导致结果不稳定。' },
      { title: '注意力不集中，难以坚持长期目标', desc: '对于重复、机械、长期的事物，他们难以维持专注，这让他们容易“虎头蛇尾”。' }
    ],
    relationships: { strong: ['INTJ', 'INFJ'], weak: ['ISFJ', 'ESFJ'] },
    careers: [
      { title: '创新与创业', desc: '（创业者、产品创新负责人）ENTP 是最适合创业的 MBTI 之一。他们拥有点子、演讲能力、行业洞察和冒险精神。' },
      { title: '咨询 & 策略类', desc: '（策略顾问、品牌策划）ENTP 喜欢找新思路，而咨询与策略行业给了他们充分的表达与挑战空间。' },
      { title: '创意类职业', desc: '（编剧、广告创意、内容策划）他们脑洞大、有故事感，擅长构建世界观和反套路叙事。' }
    ],
    growth: [
      { title: '为每个想法设“执行保底”', desc: '规定自己至少将 20% 的想法落地，训练执行肌肉。' },
      { title: '在争论前先问一句', desc: '“你想要倾听还是解决方案？”能避免许多关系冲突。' },
      { title: '为长期目标拆分短周期任务', desc: '把 1 年任务拆成 1 周任务，ENTP 就不会被长期枯燥吓走。' }
    ]
  },
  'INFJ': {
    code: 'INFJ',
    name: '提倡者',
    slogan: '心灵导师，深邃的理想主义引路人',
    keywords: ['深刻', '理想主义', '共情', '直觉', '原则'],
    archetype: { fictional: '邓布利多', historical: '卡尔·荣格' },
    radarStats: { logic: 60, control: 75, social: 60, abstract: 95 },
    drivers: ['意义', '成长', '和谐'],
    superpowers: [
      { title: '深度洞察他人内心的能力', desc: 'INFJ 能读懂别人情绪背后的真正需求。他们不仅能共情，还能理解对方为什么会这样想。许多人觉得 INFJ “能看到灵魂深处”，因为他们处理情感不是表象层，而是内核层。' },
      { title: '对意义与使命感有强大驱动力', desc: 'INFJ 的人生不是“活着”，而是“活出价值”。只要一件事对他们而言是有意义的，他们能展现惊人的毅力与专注。他们往往成为团队里“照亮愿景的人”。' },
      { title: '内外兼具的创造力与组织能力', desc: '该类型兼具 N（想象力）和 J（规划力），能把抽象灵感化为现实路径。许多伟大的作家、心理学者、艺术家都属于 INFJ，因为他们能把思想具象、把复杂内容结构化。' }
    ],
    blindspots: [
      { title: '完美主义导致精神压力过高', desc: 'INFJ 对自己要求极高，经常因为没有做到“心中理想的样子”而自我苛责。这让他们容易产生内耗，甚至过度疲惫。' },
      { title: '容易把需求藏起来，导致关系失衡', desc: '他们习惯先满足别人，再考虑自己。久而久之，不被理解的委屈累积，让他们突然“一次性爆发”结束关系。' },
      { title: '不擅长面对冲突，容易选择退让', desc: '冲突会让 INFJ 消耗巨大能量，因此他们常常“息事宁人”，但未表达的情绪会悄悄累积，最终变成距离。' }
    ],
    relationships: { strong: ['ENFP', 'INFP'], weak: ['ESTP', 'ISTP'] },
    careers: [
      { title: '心理咨询与情绪疗愈', desc: '（咨询师、治疗师）INFJ 的共情力与深度倾听能力极为罕见，非常适合心理治疗、家庭咨询、情绪辅导等领域。' },
      { title: '教育与知识传递', desc: '（教师、导师、作者）他们天生善于解释抽象概念，也擅长激发别人内在潜力，是优秀的教育者与指导者。' },
      { title: '写作与内容领域', desc: '（作家、编辑、自媒体作者）INFJ 的表达既柔软又有力量，他们的文字能触及人心深处，非常适合写作、文案、思想内容创作。' }
    ],
    growth: [
      { title: '把需求说出口，不要等待别人“猜”', desc: '练习用最简单的句子表达需求，例如：“我现在需要休息”、“我需要一些空间”。这能显著减少误会。' },
      { title: '学会给自己降低标准', desc: '完美主义不能让你更强，只会让你更累。试着把“必须做到最好”变成“做到足够好”。' },
      { title: '允许自己不和谐，让真实比完美更重要', desc: '你不需要总是温柔、体贴、理解别人。真实的你，本来就值得被理解。' }
    ]
  },
  'INFP': {
    code: 'INFP',
    name: '调停者',
    slogan: '心灵诗人，永远的理想主义者',
    keywords: ['敏感', '共情', '理想主义', '创意', '善良'],
    archetype: { fictional: '卢娜·洛夫古德', historical: '梵高' },
    radarStats: { logic: 30, control: 40, social: 50, abstract: 90 },
    drivers: ['和谐', '真实', '意义'],
    superpowers: [
      { title: '深度共情，能够真正理解他人痛点', desc: 'INFP 能感知他人情绪最细微的变化，他们的理解不是技巧，而是天生的“心灵共振”。别人和他们聊天会感到被理解、被接纳、被看见。' },
      { title: '想象力丰富，能从情感中创造作品', desc: '他们的创造力往往具有独特的灵性特质，适合艺术、写作、音乐、设计等工作。他们的创作带有强烈“灵魂气息”。' },
      { title: '坚定的价值观，能在混乱中保持初心', desc: 'INFP 不会盲从大众，也不会屈从现实。他们会忠于自己的“内在准则”，哪怕世界让他们妥协，他们也会选择自己的道路。' }
    ],
    blindspots: [
      { title: '容易情绪化，内部体验过于丰富', desc: 'INFP 的感受非常鲜活，因此容易因为一句话或一个表情触发情绪波动。他们会把感受内化成故事，有时难以抽离。' },
      { title: '做决定困难，被“理想 vs 现实”拉扯', desc: '在现实需要决断时，INFP 容易反复犹豫，因为他们担心做错选择、伤害别人或违背自己的价值观。' },
      { title: '抗打击能力弱，容易陷入自我怀疑', desc: '被否定时，INFP 会陷入“是不是我不够好”的循环，把普通反馈当作个人否定。' }
    ],
    relationships: { strong: ['ENFJ', 'INFJ'], weak: ['ESTJ', 'ISTJ'] },
    careers: [
      { title: '心理咨询与治疗', desc: '（咨询师、情绪教练）你天生会倾听与理解，能为别人提供“被看见的安全感”，这是治疗工作最宝贵的能力。' },
      { title: '艺术、创意与写作职业', desc: '（作家、插画师、编剧）INFP 的作品能传递情绪本身。他们的创作带有疗愈力量，对敏感型人格来说，这是职业天赋。' },
      { title: '教育与儿童相关行业', desc: '（教师、儿童心理工作者）他们对孩子的想象力、情绪、梦想特别敏感，能真心陪伴与支持，让孩子在善意中成长。' }
    ],
    growth: [
      { title: '对自己更宽容，把理想“放轻一点”', desc: '你不是不够好，只是你的标准太高。允许自己不完美，你会轻松许多。' },
      { title: '学会设定边界，不必让所有人都满意', desc: '你不是每个人的救赎者，可以拒绝无意义的情绪消耗。' },
      { title: '给梦想加一个“最小行动”', desc: '不需要一步到位，只要每天完成 10% 的行动，就能逐渐靠近理想。' }
    ]
  },
  'ENFJ': {
    code: 'ENFJ',
    name: '主人公',
    slogan: '人心凝聚者，天生的激励型领袖',
    keywords: ['魅力', '共情', '领导力', '热情', '理想主义'],
    archetype: { fictional: '木兰', historical: '马丁·路德·金' },
    radarStats: { logic: 40, control: 80, social: 95, abstract: 75 },
    drivers: ['和谐', '成长', '影响力'],
    superpowers: [
      { title: '天生沟通高手，能让所有人愿意倾听', desc: 'ENFJ 的表达温暖、有感染力、又充满信念。他们善于将复杂的内容讲得简单，让人感到被理解又被激励。' },
      { title: '强大的组织与协调能力', desc: '他们能快速整合团队资源，让不同性格的人互相理解、互相支持，是团队里的“灵魂粘合剂”。' },
      { title: '深刻洞察他人情绪与需求', desc: '他们不仅能听懂别人说什么，还能理解别人“没说出口的部分”。这是领导和治愈他人的核心能力。' }
    ],
    blindspots: [
      { title: '过度关注他人需求，忽略了自己', desc: 'ENFJ 经常把自己放在最后，导致精力透支、情绪疲惫，甚至出现“突然消失模式”。' },
      { title: '害怕被误解，容易过度迎合', desc: '为了维持关系和谐，他们会说一些“别人喜欢听”的话，而不是“自己真正的想法”，久了会失去自我。' },
      { title: '承担太多，导致压力无法消化', desc: 'ENFJ 常觉得“所有事情都需要我来处理”，长期累积会让他们突然崩溃。' }
    ],
    relationships: { strong: ['INFP', 'INFJ'], weak: ['ISTP', 'ESTP'] },
    careers: [
      { title: '教育与培训', desc: '（教师、讲师、培训顾问）他们擅长启发与引导，非常适合解释知识、激励学生、促进成长。' },
      { title: '心理咨询与 HR', desc: '（咨询师、HRBP、组织发展）ENFJ 对人性的理解深刻，能处理情绪、冲突、团队氛围，是天然的情绪协调者。' },
      { title: '公共演说与传播', desc: '（主持人、自媒体、演讲者）他们声音有力量，语言有深度，非常适合需要“表达影响力”的工作。' }
    ],
    growth: [
      { title: '学会拒绝，把自己从过度付出中解放出来', desc: '拒绝不是冷漠，而是一种对自己的负责。你值得被理解，也值得被照顾。' },
      { title: '建立“自我空间”，不要把心灵全部开放', desc: '为自己保留 30% 的个人时间，你的能量才能稳定。' },
      { title: '不要害怕表达真实想法', desc: '你不用永远当“善良的圆滑者”。真实比完美更能建立真正的关系。' }
    ]
  },
  'ENFP': {
    code: 'ENFP',
    name: '竞选者',
    slogan: '灵感源泉，永远的热情探索者',
    keywords: ['热情', '创意', '乐观', '好奇', '善交际'],
    archetype: { fictional: '神山齐史', historical: '华特·迪士尼' },
    radarStats: { logic: 40, control: 20, social: 90, abstract: 80 },
    drivers: ['可能性', '灵感', '自由'],
    superpowers: [
      { title: '极强的创造力与灵感捕捉能力', desc: 'ENFP 能在任何情境中看到可能性。他们的心思活泼、想象力丰富，是团队的“创意发动机”。' },
      { title: '感染力极强，能点燃团队情绪', desc: '不管是在社交场合还是合作项目中，他们都能让气氛变得轻松愉快，让所有人愿意参与。' },
      { title: '理解力强，能从不同角度看问题', desc: 'ENFP 的思维没有固定框架，他们乐于理解他人观点，因此常常能提出兼容并包的解决方案。' }
    ],
    blindspots: [
      { title: '难以坚持长期任务，容易半途而废', desc: '他们热情来得快，去得也快。在重复性工作中容易失去兴趣，影响成果稳定性。' },
      { title: '对情绪过于敏感，容易内耗', desc: 'ENFP 的情绪像海浪一样丰富，容易因为一句话产生过强反应，并过度分析其意义。' },
      { title: '容易被新鲜感牵着走，忽视现实后果', desc: '好奇心旺盛导致他们不断切换新的兴趣点，导致时间分配混乱。' }
    ],
    relationships: { strong: ['INFJ', 'INTJ'], weak: ['ISTJ', 'ESTJ'] },
    careers: [
      { title: '创意行业', desc: '（广告创意、品牌策划、内容创作者）他们的脑洞和表达力非常适合制作内容与讲故事。' },
      { title: '教育与启蒙行业', desc: '（教师、培训师、教练）ENFP 能让知识变得有趣，让复杂概念变得生动，极受学生欢迎。' },
      { title: '心理咨询、人际服务', desc: '（咨询师、职业教练、情绪支持）他们能感知情绪，又能提供鼓励，是非常温暖的引导者。' }
    ],
    growth: [
      { title: '给每个目标设“最低持续标准”', desc: '例如：每天写 15 分钟、每周学习一次。长期坚持比一次爆发更重要。' },
      { title: '管理情绪输入，避免过度刺激', desc: '减少无意义社交、减少碎片信息，能让 ENFP 情绪更加稳定。' },
      { title: '在做选择时加入“成本评估”', desc: '问自己：这个选择需要投入多少？会不会影响现有计划？它是真需求，还是一时冲动？' }
    ]
  },
  'ISTJ': {
    code: 'ISTJ',
    name: '物流师',
    slogan: '秩序基石，最值得信赖的实干家',
    keywords: ['尽责', '务实', '有条理', '可靠', '传统'],
    archetype: { fictional: '赫敏·格兰杰', historical: '乔治·华盛顿' },
    radarStats: { logic: 80, control: 90, social: 40, abstract: 30 },
    drivers: ['责任', '秩序', '安全'],
    superpowers: [
      { title: '极强的执行力，让事情稳定落地', desc: 'ISTJ 是少数说到就做到的人。他们把承诺放在心里最重要的位置，不会拖延、不会敷衍。他们的可靠性让团队安心，因为知道只要 ISTJ 接手，事情就一定会按时完成。' },
      { title: '注重细节，能把复杂流程标准化', desc: '他们能在项目中发现别人都忽略的小问题，例如文件格式、流程漏洞、风险节点等。他们天然适合做“系统打磨者”，让混乱流程变得清晰有序。' },
      { title: '长期坚持力强，能扛住枯燥与重复', desc: 'ISTJ 不是靠激情做事，而是靠责任与习惯。他们可以在长时间无反馈的情况下保持稳定，这种能力是许多团队的核心支柱。' }
    ],
    blindspots: [
      { title: '过度坚持规则，可能显得刻板', desc: 'ISTJ 崇尚传统与规则，因此当变化太快时，他们容易感到不安或抗拒，甚至对创新抱持怀疑态度。别人可能因此觉得他们“太固执”。' },
      { title: '不善表达情绪，容易被误解为冷淡', desc: '他们的关心常常以“帮忙做事”的方式呈现，而不是语言上的支持。情感需求无法表达，会让亲密关系出现沟通断层。' },
      { title: '难以应对突发变化，压力容易内化', desc: '当计划突然被打乱时，ISTJ 内心会波动很大。他们不会发脾气，但会变得沉默、焦虑，把压力压在心里。' }
    ],
    relationships: { strong: ['ESTJ', 'ISFJ'], weak: ['ENFP', 'INFP'] },
    careers: [
      { title: '财务 / 审计 / 统计类', desc: '（会计师、审计师、财务主管）这些岗位需要严谨、稳定、高度细节敏感度，非常契合 ISTJ 的优势。' },
      { title: '行政与组织管理', desc: '（行政经理、系统管理员）ISTJ 能把流程优化到极致，让团队运行顺畅，是优秀的组织维护者。' },
      { title: '法律与政府体系', desc: '（法律助理、政府人员）他们信任制度与规则，逻辑清晰、责任心重，非常适合制度性岗位。' }
    ],
    growth: [
      { title: '练习对变化保持开放', desc: '从“这不行”改成“我可以试试看”，让自己逐步适应变化，减少不安。' },
      { title: '在关系中多表达内心', desc: '而不是只做事。一句“我担心你”会比帮对方解决问题更能传递爱。' },
      { title: '给自己安排轻松时间', desc: '避免过度压抑。ISTJ 容易把压力扛久了，强迫自己每周安排无目的的休息非常重要。' }
    ]
  },
  'ISFJ': {
    code: 'ISFJ',
    name: '守卫者',
    slogan: '默默守护者，最可靠的温暖港湾',
    keywords: ['尽责', '体贴', '传统', '务实', '善良'],
    archetype: { fictional: '山田浅卫门', historical: '特蕾莎修女' },
    radarStats: { logic: 40, control: 80, social: 70, abstract: 20 },
    drivers: ['责任', '和谐', '服务'],
    superpowers: [
      { title: '天生的照护者，能让人感到安心安全', desc: 'ISFJ 对他人的细节记忆惊人，例如某人的习惯、喜好、情绪波动。他们能在别人没说出口前，就已经做好周全准备，是团队与家庭最温暖的力量。' },
      { title: '责任心强，能承担长期任务', desc: '他们做事细致认真，能把长期重复的任务做得稳定而出色。他们的可靠性，是团队信任的基础。' },
      { title: '情绪敏感度高，擅长营造和谐氛围', desc: '他们能迅速感知环境情绪变化，并主动让气氛变得更轻松、温暖。这种情绪智慧在团队协作中价值极高。' }
    ],
    blindspots: [
      { title: '过度付出，容易累积委屈', desc: 'ISFJ 很难说“不”。他们会把别人需求放在自己之前，导致长期被压榨或利用，却不敢表达不满。' },
      { title: '害怕冲突，选择沉默以求和谐', desc: '对他们来说，不和谐等同于压力。因此他们宁愿自己辛苦，也不愿意表达真实想法。' },
      { title: '抵触快速变化，尤其是未经讨论的改变', desc: 'ISFJ 喜欢有序与可控，一旦变化太快，他们会感到焦虑甚至混乱。' }
    ],
    relationships: { strong: ['ESFJ', 'ISTJ'], weak: ['ENTP', 'INTP'] },
    careers: [
      { title: '护理与医疗照护', desc: '（护士、护理师、医学助理）ISFJ 非常适合提供稳定支持，能用细心与温柔照顾他人。' },
      { title: '教育行业', desc: '（幼教、助教、班主任）他们耐心、细腻，能够理解学生的情绪与潜力。' },
      { title: '行政与支持类岗位', desc: '（行政助理、人事助理）这些岗位需要严谨与服务意识，ISFJ 能让组织运作如同被精细维护的机器。' }
    ],
    growth: [
      { title: '学会温柔而坚定地说“不”', desc: '你可以拒绝别人，而不失善良。设立界限是保护自己，而不是伤害别人。' },
      { title: '给自己足够的休息', desc: '不必总是“随叫随到”。别人会习惯你无条件的付出，因此你更要为自己留空间。' },
      { title: '尝试接受适度变化', desc: '逐步提升适应力。从小事做起，例如尝试新路线、新活动，都会让你更自在。' }
    ]
  },
  'ESTJ': {
    code: 'ESTJ',
    name: '总经理',
    slogan: '秩序守护者，现实主义的实干家',
    keywords: ['务实', '尽责', '有条理', '高效', '传统'],
    archetype: { fictional: '米涅瓦', historical: '玛格丽特·撒切尔' },
    radarStats: { logic: 85, control: 90, social: 80, abstract: 30 },
    drivers: ['秩序', '责任', '效率'],
    superpowers: [
      { title: '天生的组织者，能迅速建立秩序', desc: 'ESTJ 在面对混乱场景时，会本能地站出来整理规则、分配任务、建立结构。他们是“混乱终结者”。' },
      { title: '执行力与责任感极强，是团队的定海神针', desc: '他们说到做到、效率极高、抗压能力强，是团队中最稳定的力量。' },
      { title: '决策迅速，擅长资源整合', desc: 'ESTJ 能快速评估信息，做出清晰决策。他们能推动整个团队向目标前进，是优秀的执行领导者。' }
    ],
    blindspots: [
      { title: '容易太强势，让人感到压迫', desc: '他们直接、坦率、速度快，但这种风格对敏感型人格是一种压力，需要更多柔和表达。' },
      { title: '对改变或抽象想法不够开放', desc: 'ESTJ 很容易否定那些“不够现实”的建议，不自觉压制创新。' },
      { title: '情感表达不够细腻', desc: '他们常常用“解决问题”代替“表达关心”，让亲密关系感到被忽略。' }
    ],
    relationships: { strong: ['ISFJ', 'ESFJ'], weak: ['INFP', 'ENFP'] },
    careers: [
      { title: '管理与组织类岗位', desc: '（运营、项目经理）ESTJ 的结构化思维与执行力，在协调资源时发挥巨大优势。' },
      { title: '法律、政府系统', desc: '（公务员、法律相关职位）他们信任规则、程序化流程，非常适合制度性岗位。' },
      { title: '财务、审计、工程管理类岗位', desc: '这些岗位需求严谨、务实、效率高的性格，ESTJ 完全符合。' }
    ],
    growth: [
      { title: '尝试倾听，不要急着下判断', desc: '你说得快、做得快，但别人需要时间。给别人一分钟，会换来更好的合作。' },
      { title: '学会接受不同节奏的人', desc: '不是每个人都像你一样高效。降低预期能让团队更稳定。' },
      { title: '在关系中加入情感表达', desc: '一句“辛苦了，你做得很好” 会比任务指令更能建立信任。' }
    ]
  },
  'ESFJ': {
    code: 'ESFJ',
    name: '执政官',
    slogan: '和谐维护者，最温暖的社会粘合剂',
    keywords: ['热心', '尽责', '友善', '传统', '务实'],
    archetype: { fictional: '莫妮卡', historical: '戴安娜王妃' },
    radarStats: { logic: 30, control: 85, social: 95, abstract: 20 },
    drivers: ['和谐', '责任', '归属'],
    superpowers: [
      { title: '情绪共振能力强，能快速建立亲近关系', desc: 'ESFJ 拥有极强的社交感知力，能第一时间读懂他人情绪并做出回应。他们的出现常让气氛变得更轻松与温暖。' },
      { title: '责任感强，是团队最可靠的支持者', desc: '他们愿意承担繁琐任务并维护整体和谐，是1个团队中的核心稳定力量。' },
      { title: '擅长协调人际关系，让团队顺畅运作', desc: '无论是冲突调解、氛围管理还是支持他人，ESFJ 都能把团队“黏合”起来。' }
    ],
    blindspots: [
      { title: '过度依赖他人评价，容易焦虑', desc: 'ESFJ 习惯从外界获得肯定，当别人沉默或忽略时，他们会陷入自我怀疑。' },
      { title: '抗拒突发变化，希望所有事按计划进行', desc: '他们喜欢可控、有序的环境，快速变化会让他们压力倍增。' },
      { title: '容易忽略个人需求', desc: '为了维持和谐，ESFJ 常常牺牲自己的时间与精力，导致长期疲惫。' }
    ],
    relationships: { strong: ['ISFJ', 'ESTJ'], weak: ['INTP', 'ENTP'] },
    careers: [
      { title: '社会服务及教育类', desc: '（教师、班主任）ESFJ 善于照顾、理解、支持他人，是优秀的教育者。' },
      { title: '客户服务、销售', desc: '（客户经理、顾问）他们的友善、亲和力与责任心，特别适合关系导向型职业。' },
      { title: '医疗与护理', desc: '（护士、康复师）ESFJ 能给人情绪上的安全感，是极佳的照护者。' }
    ],
    growth: [
      { title: '学会倾听自己的感受', desc: '而不是只关注他人需求。把注意力的一部分转向内心，你的能量会更稳定。' },
      { title: '接受不同意见，不必因为批评而自责', desc: '别人不同意不是否定你，你可以保持温柔与坚定。' },
      { title: '放过自己，不必追求人人满意', desc: '你不需要同时维护所有人的情绪，你值得休息。' }
    ]
  },
  'ISTP': {
    code: 'ISTP',
    name: '鉴赏家',
    slogan: '机械大师，活在当下的冷静观察者',
    keywords: ['冷静', '务实', '独立', '灵活', '动手能力强'],
    archetype: { fictional: '詹姆斯·邦德', historical: '克林特·伊斯特伍德' },
    radarStats: { logic: 85, control: 30, social: 30, abstract: 40 },
    drivers: ['自由', '效率', '实用'],
    superpowers: [
      { title: '天生的“问题解决专家”，动手能力极强', desc: 'ISTP 对工具、机械、结构拥有天然理解。他们不只是会修东西，而是能“看一眼就知道问题在哪里”。他们擅长从实际情况出发，做出最快速、最有效的处理方案。' },
      { title: '冷静的危机处理者，能在混乱中保持清晰', desc: '无论是突发状况、技术故障还是团队慌乱，ISTP 都能维持稳定的冷静。他们不受情绪影响，而是立刻判断风险、行动处理，是现实中的“临危不乱型高手”。' },
      { title: '高度适应性，能迅速学习任何实用技能', desc: '新环境、新工具、新系统对 ISTP 来说不是障碍，而是挑战。他们能以极快速度掌握技能，并用在实际中，是“实际智能”最强的 MBTI 类型之一。' }
    ],
    blindspots: [
      { title: '容易逃避情绪与长期承诺', desc: '情绪表达对 ISTP 来说非常不自然，他们更愿意沉浸在动作、任务或兴趣中，而不是讨论“感受”。这导致他们在人际关系中显得疏远或冷漠。' },
      { title: '缺乏长期规划，未来方向容易模糊', desc: 'ISTP 活在当下，不喜欢被未来束缚。他们容易在短期冲动下做决定，却忽略长期影响，例如职业路线、财务规划等。' },
      { title: '冲动行动可能带来风险', desc: '因为喜欢体验新鲜与刺激，他们容易做出冒险行为，例如突然跳槽、冲动购买、无计划旅行等，有时会让生活变得不稳定。' }
    ],
    relationships: { strong: ['ESTP', 'ISFP'], weak: ['ENFJ', 'INFJ'] },
    careers: [
      { title: '工程、机械、技术维护', desc: '（工程师、技师、飞行员）ISTP 的动手能力与问题判断能力非常适合机械、工程、航空等领域，他们天生拥有“技能型大脑”。' },
      { title: '应急响应行业', desc: '（消防员、救援队、急诊技术员）危机越大，他们越冷静。ISTP 是突发状况处理的一流选手。' },
      { title: '安全、技术、现场运营', desc: '（安保专家、系统运维、户外教练）需要快速分析、即时处理与高度灵活性的工作对 ISTP 来说最自然不过。' }
    ],
    growth: [
      { title: '学习表达基本需求，让关系更稳定', desc: '不需要讲复杂情绪，只要用简单句式表达，例如：“我想一个人静静”，“我需要时间思考”。这能显著改善亲密关系。' },
      { title: '给人生设“最低规划线”', desc: '无需完整路线图，只需设基本安全底线：储蓄比例、职业方向、健康习惯。你会更自由、更安心。' },
      { title: '行动前思考 10 秒，避免冲动决策', desc: '对 ISTP 来说，“暂停一下”是改变人生质量最重要的技能。' }
    ]
  },
  'ISFP': {
    code: 'ISFP',
    name: '探险家',
    slogan: '美感追求者，活在当下的温柔艺术家',
    keywords: ['敏感', '艺术', '温和', '务实', '灵活'],
    archetype: { fictional: '宫园薰', historical: '迈克尔·杰克逊' },
    radarStats: { logic: 30, control: 20, social: 50, abstract: 60 },
    drivers: ['和谐', '美感', '自由'],
    superpowers: [
      { title: '美感天赋卓越，能捕捉生活的细节之美', desc: 'ISFP 的感知力异常敏锐，他们能注意到光影、色彩、声音、情绪的细微变化。他们天生属于艺术世界，是审美与温柔的结合体。' },
      { title: '安静但极具感染力，能让人自然放松', desc: 'ISFP 的存在本身就让人觉得温和且安全。他们不用说太多话，却能让场上氛围柔和下来。这种气质非常罕见。' },
      { title: '灵活适应当下，行动自然、顺畅', desc: '他们不喜欢僵硬规则，更擅长凭直觉做决定。他们的适应力来自敏锐观察，能优雅地在变动中调整。' }
    ],
    blindspots: [
      { title: '过度敏感，批评容易刺痛内心', desc: 'ISFP 对细节敏感，因此对批评也格外敏感。一句无恶意的话也可能被他们反复回想，造成情绪负担。' },
      { title: '避免冲突，容易委屈自己', desc: '他们喜欢和谐，不喜欢争执，所以常常把不满藏在心里，久而久之变成内心压力。' },
      { title: '缺乏长期方向，容易随波逐流', desc: '因为太活在当下，ISFP 在职业规划、长期目标上容易迷茫，不知道自己真正想要什么。' }
    ],
    relationships: { strong: ['ESFP', 'ISTP'], weak: ['ENTJ', 'INTJ'] },
    careers: [
      { title: '艺术与设计创作', desc: '（画家、摄影师、设计师）高审美 + 高感知，是他们的天然优势。他们的作品往往能打动人心。' },
      { title: '护理与照护行业', desc: '（护士、康复治疗、宠物护理）ISFP 的温柔、同理心与细致能给他人极大安全感。' },
      { title: '生活方式与体验产业', desc: '（花艺师、瑜伽老师、导游）他们喜欢把美好体验分享给别人，非常适合和“感受”相关的行业。' }
    ],
    growth: [
      { title: '表达需求，不要总让自己受伤', desc: '你可以温柔但坚定地说：“我不太喜欢这样。”这不会破坏关系，反而增加尊重。' },
      { title: '练习适度规划，让生活方向更清晰', desc: '不需要太复杂，只需设小目标，例如“每月学习一项技能”或“半年完成一个作品”。' },
      { title: '减少自我批评，允许不完美', desc: '你已经够温柔了，不需要再对自己苛刻。' }
    ]
  },
  'ESTP': {
    code: 'ESTP',
    name: '企业家',
    slogan: '行动先锋，永不停止的冒险家',
    keywords: ['精力充沛', '务实', '灵活', '冒险', '善交际'],
    archetype: { fictional: '杰克', historical: '唐纳德·特朗普' },
    radarStats: { logic: 80, control: 20, social: 90, abstract: 40 },
    drivers: ['刺激', '自由', '结果'],
    superpowers: [
      { title: '超强适应力，能在任何场景快速上手', desc: 'ESTP 是现实场景中的“生存王者”。无论新环境、突发状况还是混乱局面，他们都能第一时间找出重点并采取行动。' },
      { title: '行动力爆发式强，是最敢做的人', desc: '别人还在讨论时，ESTP 已经行动。他们大胆、果断、速度快，是团队里的“推进力引擎”。' },
      { title: '天然的社交高手，能迅速拉近距离', desc: 'ESTP 的存在感强而不做作。他们的魅力让人感到有趣、好玩、真实，很容易变成人群中心。' }
    ],
    blindspots: [
      { title: '冲动决策，忽略后果', desc: '因为过于活在当下，ESTP 容易为了刺激或兴趣做冲动决定，例如突然辞职、突然买大件、或者突然进入关系。' },
      { title: '难以坚持长期任务', desc: '重复、枯燥、没有即时反馈的任务对他们来说是折磨，因此很难维持长期规划。' },
      { title: '容易无意伤害他人情绪', desc: 'ESTP 的话语直接、行动快速，不敏感的人觉得爽快，但敏感的人容易觉得被冲击。' }
    ],
    relationships: { strong: ['ISTP', 'ESFP'], weak: ['INFJ', 'ENFJ'] },
    careers: [
      { title: '销售与商务拓展', desc: '（销售总监、BD 经理）ESTP 的社交力 + 行动力 = 顶级销售人才。他们能自然影响别人，完成目标。' },
      { title: '创业与市场行业', desc: '（创业者、市场推广）需要快速反应、资源整合、临场发挥的职业对 ESTP 完全天然。' },
      { title: '体育与户外', desc: '（运动员、教练、户外领队）他们需要动起来才能发挥天赋，高能量职业最适合他们。' }
    ],
    growth: [
      { title: '在行动前问自己“后果是什么？”', desc: '这个问题能让你减少 70% 的冲动决定。' },
      { title: '为长期目标设置短期奖励', desc: '这样会让持续性任务更符合你的动力模式。' },
      { title: '学会倾听敏感型人格的情绪', desc: '不是你不好，而是你的强度对别人太高。放慢一点，会收获更深的关系。' }
    ]
  },
  'ESFP': {
    code: 'ESFP',
    name: '表演者',
    slogan: '派对灵魂，永远的热情活力源泉',
    keywords: ['热情', '活力', '友善', '务实', '灵活'],
    archetype: { fictional: '派对咖', historical: '玛丽莲·梦露' },
    radarStats: { logic: 30, control: 20, social: 95, abstract: 40 },
    drivers: ['乐趣', '刺激', '联系'],
    superpowers: [
      { title: '超级感染力，能瞬间点亮场合', desc: 'ESFP 是活力与魅力的集合，他们的出现能让任何场合变得热闹、轻松且快乐。他们让人感到“活着真好”。' },
      { title: '卓越的社交感知力，让人感到被关注', desc: '他们能敏锐捕捉他人的情绪，用适当的方式让对方感到被理解与支持，这是一种非常强大的社交天赋。' },
      { title: '强烈的体验驱动力，能把生活过得多彩', desc: 'ESFP 不会被常规框住，他们擅长发现生活的美好，把平凡的事做得有趣、鲜活、充满生命力。' }
    ],
    blindspots: [
      { title: '缺乏长期规划，容易迷失方向', desc: '虽然 ESFP 活得精彩，但常常没有清晰的未来路线，因此在事业与人生规划上容易卡住。' },
      { title: '容易被情绪推进，缺少稳定性', desc: '他们的情绪上下波动较大，会因为“当下的感觉”做决定，而不是基于长期利益。' },
      { title: '容易过度依赖他人关注', desc: '外界的掌声与认可对 ESFP 很重要，如果得不到，会让他们感到焦虑与自我怀疑。' }
    ],
    relationships: { strong: ['ISFP', 'ESTP'], weak: ['INTJ', 'ENTJ'] },
    careers: [
      { title: '表演艺术', desc: '（演员、主持人、舞者）ESFP 的表达力与舞台感极强，这类职业能让他们闪耀。' },
      { title: '旅游与体验行业', desc: '（导游、旅行 KOL）他们热爱体验、热爱分享，非常适合与“活力”相关的行业。' },
      { title: '销售、公关、活动策划', desc: 'ESFP 的魅力和沟通力让他们容易成为销售冠军或公关明星。' }
    ],
    growth: [
      { title: '给未来设一个轻量级结构', desc: '不需要详细计划，只要确定一个大方向，会让你更安心，也更容易成功。' },
      { title: '学会管理情绪输入', desc: '减少与消耗你的人或内容的接触，你会更稳定、更自信。' },
      { title: '不必讨好所有人，把注意力放回自己', desc: '真正爱你的人不需要你永远欢乐，你可以允许自己脆弱。' }
    ]
  }
};

// --- PROFILES (ENGLISH) ---
// Full translation of all 16 personality types
const PROFILES_DATA_EN: Record<string, MBTIProfile> = {
  'INTJ': {
    code: 'INTJ',
    name: 'Architect',
    slogan: 'Strategic Mastermind, Rationality Above All',
    keywords: ['Rational', 'Visionary', 'Independent', 'Logic', 'Efficient'],
    archetype: { fictional: 'Dr. Strange', historical: 'Elon Musk' },
    radarStats: { logic: 95, control: 90, social: 40, abstract: 90 },
    drivers: ['Efficiency', 'Knowledge', 'Vision'],
    superpowers: [
      { title: 'Strategic Insight', desc: 'INTJs naturally process information structurally, inferring future trends from hidden logic. They see "what happens next" rather than just "what is happening now".' },
      { title: 'High Efficiency Execution', desc: 'They dislike supervision and interference. Once a goal is set, they disassemble the path and execute with maximum efficiency, driven internally.' },
      { title: 'Rapid Learning of Principles', desc: 'INTJs grasp the underlying structure of knowledge quickly, allowing them to master new fields and build their own cognitive systems fast.' }
    ],
    blindspots: [
      { title: 'Difficulty Expressing Emotion', desc: 'Often misunderstood as cold because they discuss problems directly rather than offering comfort. They express care by solving problems.' },
      { title: 'High Standards for Others', desc: 'Strict with themselves and others. Can become impatient or frustrated when others don\'t meet their standards of efficiency.' },
      { title: 'Analysis Paralysis', desc: 'Perfectionism can lead to overthinking before acting. They may internalize stress rather than seeking help.' }
    ],
    relationships: { strong: ['INTP', 'ENTJ'], weak: ['ESFJ', 'ISFJ'] },
    careers: [
      { title: 'Strategy & Analysis', desc: 'Business Analyst, Strategy Consultant, Quant. Perfect for dismantling complex systems.' },
      { title: 'Deep Knowledge Fields', desc: 'Scientist, AI Engineer, System Architect. Allows for deep, independent work.' },
      { title: 'Executive Roles', desc: 'CEO, COO, CSO. Requires macro perspective and long-term strategic vision.' }
    ],
    growth: [
      { title: 'Express State of Mind', desc: 'Say "I need quiet time to think" instead of just being silent to avoid misunderstanding.' },
      { title: 'Lower Expectations', desc: 'Set an "80% is good enough" limit for some tasks to reduce burden and delegate better.' },
      { title: 'Schedule "Non-Productive" Time', desc: 'Rest is crucial for your insight. Schedule walks or relaxation to prevent logic overload.' }
    ]
  },
  'INTP': {
    code: 'INTP',
    name: 'Logician',
    slogan: 'The Thinker, Architect of Ideas',
    keywords: ['Logic', 'Curious', 'Independent', 'Analytical', 'Innovative'],
    archetype: { fictional: 'Sheldon Cooper', historical: 'Albert Einstein' },
    radarStats: { logic: 95, control: 30, social: 20, abstract: 95 },
    drivers: ['Knowledge', 'Truth', 'Understanding'],
    superpowers: [
      { title: 'Logical Deduction', desc: 'Non-linear thinking that finds the root cause quickly. They build complete logical models while others are stuck on surface issues.' },
      { title: 'Intellectual Innovation', desc: 'Their mind is a lab. They constantly experiment with ideas, creating "systemic innovations" rather than just artistic ones.' },
      { title: 'Independent Thinker', desc: 'Unaffected by mainstream opinion or authority. Their ideas often differ from and lead the environment.' }
    ],
    blindspots: [
      { title: 'Analysis Paralysis', desc: 'Love thinking, hate executing. They analyze all possibilities but delay taking the first step.' },
      { title: 'Weak Social Filter', desc: 'They speak "facts" which can seem cold or blunt to others. Often ignore emotional nuances.' },
      { title: 'Insensitive to Details', desc: 'Admin and routine tasks are boring, leading to a messy life or missed deadlines.' }
    ],
    relationships: { strong: ['ENTJ', 'ENFP'], weak: ['ESFJ', 'ISFJ'] },
    careers: [
      { title: 'Research & Science', desc: 'Physicist, Researcher. Probing how the world works.' },
      { title: 'Technical Innovation', desc: 'Software Architect, Algorithm Engineer. Building logical systems.' },
      { title: 'Theoretical Strategy', desc: 'Philosopher, Strategist. Proposing novel viewpoints.' }
    ],
    growth: [
      { title: 'Set Deadlines', desc: 'Force ideas into reality with time limits. Action reinforces logic.' },
      { title: 'Use Buffer Language', desc: 'Start with "I think..." to soften corrections and reduce social friction.' },
      { title: 'Minimal Life Structure', desc: 'Automate bills and routines to reduce chaos without over-planning.' }
    ]
  },
  'ENTJ': {
    code: 'ENTJ',
    name: 'Commander',
    slogan: 'Born Leader, Efficiency First',
    keywords: ['Confident', 'Decisive', 'Leadership', 'Efficient', 'Ambitious'],
    archetype: { fictional: 'Mavis', historical: 'Steve Jobs' },
    radarStats: { logic: 90, control: 95, social: 80, abstract: 85 },
    drivers: ['Achievement', 'Power', 'Efficiency'],
    superpowers: [
      { title: 'Natural Leadership', desc: 'Instinctively takes charge in chaotic situations. Evaluates situations quickly and gives actionable plans.' },
      { title: 'Goal-Driven Efficiency', desc: 'Obsessed with achieving goals. Fast-acting with high standards, they act as the team\'s accelerator.' },
      { title: 'Calm Under Pressure', desc: 'Rational and objective even in crises. Excellent at weighing pros and cons quickly.' }
    ],
    blindspots: [
      { title: 'Intimidating Communication', desc: 'Direct and fast, often sounding like orders. Can be misunderstood as impatient or aggressive.' },
      { title: 'Low Tolerance for Inefficiency', desc: 'Loses patience quickly with incompetence, sometimes taking over work and creating dependency.' },
      { title: 'Neglects Emotion', desc: 'Focuses on solving problems but ignores the need for emotional understanding, hurting intimate relationships.' }
    ],
    relationships: { strong: ['INTJ', 'INTP'], weak: ['ISFP', 'ESFP'] },
    careers: [
      { title: 'Executive Management', desc: 'CEO, COO. Strategic planning and leading teams.' },
      { title: 'Finance & Investment', desc: 'Investment Banking, Fund Management. Requires strong logic and decisiveness.' },
      { title: 'Project Management', desc: 'Director of Operations. Coordinating resources and goals.' }
    ],
    growth: [
      { title: 'Use Emotional Buffers', desc: 'Add "I\'m being direct, not personal" to reduce tension.' },
      { title: 'Listen First', desc: 'Listen to emotions before offering solutions to strengthen relationships.' },
      { title: 'Allow Mistakes', desc: 'Learning to let go and let others grow through errors is key.' }
    ]
  },
  'ENTP': {
    code: 'ENTP',
    name: 'Debater',
    slogan: 'The Challenger, Intellectual Explorer',
    keywords: ['Witty', 'Innovative', 'Argumentative', 'Curious', 'Independent'],
    archetype: { fictional: 'Tony Stark', historical: 'Socrates' },
    radarStats: { logic: 85, control: 30, social: 85, abstract: 90 },
    drivers: ['Challenge', 'Possibility', 'Freedom'],
    superpowers: [
      { title: 'Agile Thinking', desc: 'Fast processor. Understands new concepts instantly and offers unique perspectives.' },
      { title: 'Innovation', desc: 'Loves disrupting and rebuilding. Sees possibilities where others see limits.' },
      { title: 'High Adaptability', desc: 'Thrives in uncertainty and dynamic environments.' }
    ],
    blindspots: [
      { title: 'Argues too Much', desc: 'Debates for fun but others feel attacked. Can hurt relationships.' },
      { title: 'Poor Execution', desc: 'Great at generating ideas but gets bored easily, leaving things unfinished.' },
      { title: 'Lack of Focus', desc: 'Hard to maintain attention on repetitive tasks.' }
    ],
    relationships: { strong: ['INTJ', 'INFJ'], weak: ['ISFJ', 'ESFJ'] },
    careers: [
      { title: 'Entrepreneurship', desc: 'Founder, Innovator. Combines ideas, speech, and risk-taking.' },
      { title: 'Consulting & Strategy', desc: 'Brand Planner, Consultant. Finding new approaches.' },
      { title: 'Creative Industries', desc: 'Screenwriter, Ad Creative. Building worlds and narratives.' }
    ],
    growth: [
      { title: 'Execution Floor', desc: 'Commit to finishing at least 20% of your ideas.' },
      { title: 'Clarify Intent', desc: 'Ask "Do you want listening or solutions?" before debating.' },
      { title: 'Break Down Goals', desc: 'Split long-term goals into short bursts to maintain interest.' }
    ]
  },
  'INFJ': {
    code: 'INFJ',
    name: 'Advocate',
    slogan: 'The Mentor, Deep Idealist',
    keywords: ['Profound', 'Idealistic', 'Empathetic', 'Intuitive', 'Principled'],
    archetype: { fictional: 'Dumbledore', historical: 'Carl Jung' },
    radarStats: { logic: 60, control: 75, social: 60, abstract: 95 },
    drivers: ['Meaning', 'Growth', 'Harmony'],
    superpowers: [
      { title: 'Deep Insight', desc: 'Reads souls. Understands the needs behind emotions, not just surface feelings.' },
      { title: 'Driven by Meaning', desc: 'Lives for value. Shows amazing perseverance for meaningful causes.' },
      { title: 'Creative Organization', desc: 'Combines imagination with planning. Turns abstract ideas into reality.' }
    ],
    blindspots: [
      { title: 'Perfectionist Stress', desc: 'Self-critical when reality doesn\'t match their ideal. prone to burnout.' },
      { title: 'Hides Needs', desc: 'Prioritizes others until they snap and cut off relationships ("Door Slam").' },
      { title: 'Conflict Avoidant', desc: 'Absorbs negative energy and withdraws instead of addressing conflict.' }
    ],
    relationships: { strong: ['ENFP', 'INFP'], weak: ['ESTP', 'ISTP'] },
    careers: [
      { title: 'Counseling & Therapy', desc: 'Therapist, Counselor. Rare empathy and listening skills.' },
      { title: 'Education', desc: 'Teacher, Mentor. Inspiring potential in others.' },
      { title: 'Writing & Content', desc: 'Writer, Editor. Touching hearts with words.' }
    ],
    growth: [
      { title: 'Voice Your Needs', desc: 'Say "I need rest" simply. Don\'t wait for others to guess.' },
      { title: 'Lower Standards', desc: 'Aim for "good enough" to reduce exhaustion.' },
      { title: 'Be Real', desc: 'You don\'t always have to be gentle. Realness builds trust.' }
    ]
  },
  'INFP': {
    code: 'INFP',
    name: 'Mediator',
    slogan: 'The Poet, Eternal Idealist',
    keywords: ['Sensitive', 'Empathetic', 'Idealistic', 'Creative', 'Kind'],
    archetype: { fictional: 'Luna Lovegood', historical: 'Van Gogh' },
    radarStats: { logic: 30, control: 40, social: 50, abstract: 90 },
    drivers: ['Harmony', 'Authenticity', 'Meaning'],
    superpowers: [
      { title: 'Deep Empathy', desc: 'Feels others\' emotions vividly. Makes people feel truly seen and accepted.' },
      { title: 'Soulful Creativity', desc: 'Creates art with spiritual depth. Unique imagination.' },
      { title: 'Unwavering Values', desc: 'Loyal to inner principles regardless of external pressure.' }
    ],
    blindspots: [
      { title: 'Overly Emotional', desc: 'Internal experiences are intense. Easily hurt by small comments.' },
      { title: 'Indecisive', desc: 'Fear of making the wrong choice or hurting others leads to hesitation.' },
      { title: 'Self-Doubt', desc: 'Takes feedback as personal rejection.' }
    ],
    relationships: { strong: ['ENFJ', 'INFJ'], weak: ['ESTJ', 'ISTJ'] },
    careers: [
      { title: 'Therapy & Coaching', desc: 'Counselor. Providing safe space for others.' },
      { title: 'Arts & Writing', desc: 'Artist, Writer. Expressing emotion through work.' },
      { title: 'Education', desc: 'Teacher. Nurturing children\'s dreams.' }
    ],
    growth: [
      { title: 'Be Kinder to Yourself', desc: 'You aren\'t inadequate, your standards are just high.' },
      { title: 'Set Boundaries', desc: 'You are not everyone\'s savior.' },
      { title: 'Small Steps', desc: 'Do 10% of a task to get started towards your dream.' }
    ]
  },
  'ENFJ': {
    code: 'ENFJ',
    name: 'Protagonist',
    slogan: 'The Unifier, Inspiring Leader',
    keywords: ['Charismatic', 'Empathetic', 'Leader', 'Passionate', 'Idealist'],
    archetype: { fictional: 'Mulan', historical: 'Martin Luther King Jr.' },
    radarStats: { logic: 40, control: 80, social: 95, abstract: 75 },
    drivers: ['Harmony', 'Growth', 'Influence'],
    superpowers: [
      { title: 'Master Communicator', desc: 'Warm and inspiring. Makes complex ideas feel simple and motivating.' },
      { title: 'Team Builder', desc: 'The glue of the team. Coordinates different personalities effectively.' },
      { title: 'Emotional Insight', desc: 'Understands what is unspoken. Key for leadership and healing.' }
    ],
    blindspots: [
      { title: 'Self-Neglect', desc: 'Puts others first until exhausted.' },
      { title: 'People Pleasing', desc: 'Agrees to maintain harmony, losing their own voice.' },
      { title: 'Over-Responsibility', desc: 'Feels responsible for everyone\'s problems.' }
    ],
    relationships: { strong: ['INFP', 'INFJ'], weak: ['ISTP', 'ESTP'] },
    careers: [
      { title: 'Education', desc: 'Teacher, Trainer. Guiding and inspiring growth.' },
      { title: 'HR & Counseling', desc: 'HRBP, Counselor. Managing team atmosphere and emotions.' },
      { title: 'Public Speaking', desc: 'Host, Speaker. Influencing through expression.' }
    ],
    growth: [
      { title: 'Learn to Refuse', desc: 'Saying no is responsible, not mean.' },
      { title: 'Me Time', desc: 'Reserve 30% of your time for yourself.' },
      { title: 'Be Authentic', desc: 'You don\'t always have to be the nice one.' }
    ]
  },
  'ENFP': {
    code: 'ENFP',
    name: 'Campaigner',
    slogan: 'The Spark, Enthusiastic Explorer',
    keywords: ['Enthusiastic', 'Creative', 'Optimistic', 'Curious', 'Social'],
    archetype: { fictional: 'Genie', historical: 'Walt Disney' },
    radarStats: { logic: 40, control: 20, social: 90, abstract: 80 },
    drivers: ['Possibility', 'Inspiration', 'Freedom'],
    superpowers: [
      { title: 'Creative Engine', desc: 'Sees possibilities everywhere. The team\'s idea generator.' },
      { title: 'Infectious Energy', desc: 'Lights up the room and makes everyone want to participate.' },
      { title: 'Open Minded', desc: 'Understands diverse viewpoints and connects dots.' }
    ],
    blindspots: [
      { title: 'Starts but Doesn\'t Finish', desc: 'Loses interest once the novelty wears off.' },
      { title: 'Overthinking', desc: 'Reads too much into simple words.' },
      { title: 'Distracted', desc: 'Chasing new shiny things leads to chaos.' }
    ],
    relationships: { strong: ['INFJ', 'INTJ'], weak: ['ISTJ', 'ESTJ'] },
    careers: [
      { title: 'Creative Arts', desc: 'Advertising, Branding. Storytelling.' },
      { title: 'Education', desc: 'Teacher, Coach. Making learning fun.' },
      { title: 'Counseling', desc: 'Life Coach. Encouraging others.' }
    ],
    growth: [
      { title: 'Minimum Viable Consistency', desc: 'Commit to 15 mins a day rather than big bursts.' },
      { title: 'Manage Input', desc: 'Reduce noise to stabilize emotions.' },
      { title: 'Cost Assessment', desc: 'Ask "What does this choice cost me?" before jumping in.' }
    ]
  },
  'ISTJ': {
    code: 'ISTJ',
    name: 'Logistician',
    slogan: 'The Rock, Reliable Realist',
    keywords: ['Responsible', 'Pragmatic', 'Organized', 'Reliable', 'Traditional'],
    archetype: { fictional: 'Hermione Granger', historical: 'George Washington' },
    radarStats: { logic: 80, control: 90, social: 40, abstract: 30 },
    drivers: ['Responsibility', 'Order', 'Security'],
    superpowers: [
      { title: 'Super Execution', desc: 'They do what they say. Reliable and punctual, the backbone of any team.' },
      { title: 'Detail Oriented', desc: 'Catches errors others miss. Standardizes complex processes.' },
      { title: 'Endurance', desc: 'Can sustain focus on repetitive tasks through sheer responsibility.' }
    ],
    blindspots: [
      { title: 'Rigid', desc: 'Dislikes change. Can seem stubborn or stuck in their ways.' },
      { title: 'Emotionally Reserved', desc: 'Shows care through acts of service, not words. Can seem cold.' },
      { title: 'Stressed by Chaos', desc: 'Sudden changes cause internal anxiety.' }
    ],
    relationships: { strong: ['ESTJ', 'ISFJ'], weak: ['ENFP', 'INFP'] },
    careers: [
      { title: 'Finance & Audit', desc: 'Accountant, Auditor. Precision and stability.' },
      { title: 'Administration', desc: 'Admin Manager. Optimizing workflows.' },
      { title: 'Law & Gov', desc: 'Lawyer, Civil Servant. Rules and structure.' }
    ],
    growth: [
      { title: 'Be Open', desc: 'Try saying "I\'ll try it" instead of "No".' },
      { title: 'Express Feelings', desc: 'Say "I worry about you" rather than just fixing things.' },
      { title: 'Relax', desc: 'Schedule unstructured rest time.' }
    ]
  },
  'ISFJ': {
    code: 'ISFJ',
    name: 'Defender',
    slogan: 'The Protector, Warm Guardian',
    keywords: ['Responsible', 'Considerate', 'Traditional', 'Pragmatic', 'Kind'],
    archetype: { fictional: 'Samwise Gamgee', historical: 'Mother Teresa' },
    radarStats: { logic: 40, control: 80, social: 70, abstract: 20 },
    drivers: ['Responsibility', 'Harmony', 'Service'],
    superpowers: [
      { title: 'Natural Caretaker', desc: 'Remembers details about people. Provides safety and warmth.' },
      { title: 'Reliable', desc: 'Meticulous and steady. Handles long-term tasks well.' },
      { title: 'Harmonizer', desc: 'Senses emotional atmosphere and keeps things peaceful.' }
    ],
    blindspots: [
      { title: 'Over-Gives', desc: 'Hard time saying no. Can be exploited.' },
      { title: 'Avoids Conflict', desc: 'Chooses silence over confrontation, leading to resentment.' },
      { title: 'Fears Change', desc: 'Anxious about the unknown.' }
    ],
    relationships: { strong: ['ESFJ', 'ISTJ'], weak: ['ENTP', 'INTP'] },
    careers: [
      { title: 'Healthcare', desc: 'Nurse, Medical Assistant. Caring for others.' },
      { title: 'Education', desc: 'Teacher. Patient guidance.' },
      { title: 'Admin Support', desc: 'HR Assistant. Service and detail.' }
    ],
    growth: [
      { title: 'Say No', desc: 'Boundaries protect you.' },
      { title: 'Rest', desc: 'Don\'t be on call 24/7.' },
      { title: 'Try New Things', desc: 'Small changes build adaptability.' }
    ]
  },
  'ESTJ': {
    code: 'ESTJ',
    name: 'Executive',
    slogan: 'The Supervisor, Order Maker',
    keywords: ['Pragmatic', 'Responsible', 'Organized', 'Efficient', 'Traditional'],
    archetype: { fictional: 'Minerva McGonagall', historical: 'Margaret Thatcher' },
    radarStats: { logic: 85, control: 90, social: 80, abstract: 30 },
    drivers: ['Order', 'Responsibility', 'Efficiency'],
    superpowers: [
      { title: 'Organizer', desc: 'Creates order from chaos. Assigns tasks and builds structure.' },
      { title: 'Execution Machine', desc: 'High efficiency and high standards. The anchor of the team.' },
      { title: 'Decisive', desc: 'Quick to evaluate and act. Moves the team forward.' }
    ],
    blindspots: [
      { title: 'Too Dominant', desc: 'Can be overpowering and stressful for others.' },
      { title: 'Closed Minded', desc: 'Dismisses abstract or unproven ideas.' },
      { title: 'Blunt', desc: 'Ignores feelings in favor of facts.' }
    ],
    relationships: { strong: ['ISFJ', 'ESFJ'], weak: ['INFP', 'ENFP'] },
    careers: [
      { title: 'Management', desc: 'Operations Manager. Coordinating resources.' },
      { title: 'Law & Gov', desc: 'Judge, Officer. Systems and rules.' },
      { title: 'Finance', desc: 'Auditor. Precision and efficiency.' }
    ],
    growth: [
      { title: 'Listen More', desc: 'Wait a minute before judging.' },
      { title: 'Accept Differences', desc: 'Not everyone is as fast as you.' },
      { title: 'Show Appreciation', desc: 'Say "Good job" to build trust.' }
    ]
  },
  'ESFJ': {
    code: 'ESFJ',
    name: 'Consul',
    slogan: 'The Provider, Social Glue',
    keywords: ['Warm', 'Responsible', 'Friendly', 'Traditional', 'Pragmatic'],
    archetype: { fictional: 'Monica Geller', historical: 'Princess Diana' },
    radarStats: { logic: 30, control: 85, social: 95, abstract: 20 },
    drivers: ['Harmony', 'Responsibility', 'Belonging'],
    superpowers: [
      { title: 'Social Connection', desc: 'Instantly reads emotions and connects. Makes people feel welcome.' },
      { title: 'Reliable Support', desc: 'Maintains harmony and handles details for the team.' },
      { title: 'Coordinator', desc: 'Great at managing people and events.' }
    ],
    blindspots: [
      { title: 'Needs Approval', desc: 'Anxious if not validated by others.' },
      { title: 'Rigid', desc: 'Dislikes sudden changes to plans.' },
      { title: 'Self-Sacrificing', desc: 'Neglects own needs to keep peace.' }
    ],
    relationships: { strong: ['ISFJ', 'ESTJ'], weak: ['INTP', 'ENTP'] },
    careers: [
      { title: 'Social Service', desc: 'Teacher, Social Worker. Caring for people.' },
      { title: 'Sales & Service', desc: 'Account Manager. Building relationships.' },
      { title: 'Healthcare', desc: 'Nurse. Emotional support.' }
    ],
    growth: [
      { title: 'Listen to Yourself', desc: 'What do YOU want?' },
      { title: 'Accept Disagreement', desc: 'Conflict doesn\'t mean failure.' },
      { title: 'Rest', desc: 'You don\'t have to fix everyone.' }
    ]
  },
  'ISTP': {
    code: 'ISTP',
    name: 'Virtuoso',
    slogan: 'The Crafter, Cool Observer',
    keywords: ['Calm', 'Pragmatic', 'Independent', 'Flexible', 'Skilled'],
    archetype: { fictional: 'James Bond', historical: 'Clint Eastwood' },
    radarStats: { logic: 85, control: 30, social: 30, abstract: 40 },
    drivers: ['Freedom', 'Efficiency', 'Utility'],
    superpowers: [
      { title: 'Problem Solver', desc: 'Practical genius. Fixes things instantly.' },
      { title: 'Crisis Manager', desc: 'Calm under fire. Acts quickly when things break.' },
      { title: 'Adaptable', desc: 'Learns new skills and tools rapidly.' }
    ],
    blindspots: [
      { title: 'Emotionally Distant', desc: 'Hard to get close to. Avoids emotional talks.' },
      { title: 'Short-Term Focus', desc: 'Dislikes long-term planning.' },
      { title: 'Risky', desc: 'Prone to impulsive, thrill-seeking behavior.' }
    ],
    relationships: { strong: ['ESTP', 'ISFP'], weak: ['ENFJ', 'INFJ'] },
    careers: [
      { title: 'Engineering', desc: 'Engineer, Pilot. Hands-on logic.' },
      { title: 'Emergency Response', desc: 'Firefighter, EMT. Crisis action.' },
      { title: 'Field Ops', desc: 'Technician. Practical skills.' }
    ],
    growth: [
      { title: 'Express Needs', desc: 'Say "I need space" clearly.' },
      { title: 'Basic Plan', desc: 'Have a safety net for finances/career.' },
      { title: 'Pause', desc: 'Think 10 seconds before acting.' }
    ]
  },
  'ISFP': {
    code: 'ISFP',
    name: 'Adventurer',
    slogan: 'The Artist, Gentle Soul',
    keywords: ['Sensitive', 'Artistic', 'Gentle', 'Pragmatic', 'Flexible'],
    archetype: { fictional: 'Harry Potter', historical: 'Michael Jackson' },
    radarStats: { logic: 30, control: 20, social: 50, abstract: 60 },
    drivers: ['Harmony', 'Aesthetics', 'Freedom'],
    superpowers: [
      { title: 'Aesthetic Sense', desc: 'Notices beauty in details. Natural artist.' },
      { title: 'Calming Presence', desc: 'Gentle and accepting. Makes others feel safe.' },
      { title: 'Adaptable', desc: 'Flows with the moment gracefully.' }
    ],
    blindspots: [
      { title: 'Sensitive to Criticism', desc: 'Easily hurt by negative feedback.' },
      { title: 'Conflict Avoidant', desc: 'Swallows feelings to keep peace.' },
      { title: 'Lack of Direction', desc: 'Drifts without long-term goals.' }
    ],
    relationships: { strong: ['ESFP', 'ISTP'], weak: ['ENTJ', 'INTJ'] },
    careers: [
      { title: 'Arts & Design', desc: 'Designer, Photographer. Visual expression.' },
      { title: 'Care', desc: 'Vet, Therapist. Gentle support.' },
      { title: 'Lifestyle', desc: 'Florist, Instructor. Sharing beauty.' }
    ],
    growth: [
      { title: 'Speak Up', desc: 'Expressing dislike increases respect.' },
      { title: 'Mild Planning', desc: 'Set small monthly goals.' },
      { title: 'Stop Self-Criticism', desc: 'You are enough.' }
    ]
  },
  'ESTP': {
    code: 'ESTP',
    name: 'Entrepreneur',
    slogan: 'The Dynamo, Risk Taker',
    keywords: ['Energetic', 'Pragmatic', 'Flexible', 'Adventurous', 'Social'],
    archetype: { fictional: 'Rocket Raccoon', historical: 'Donald Trump' },
    radarStats: { logic: 80, control: 20, social: 90, abstract: 40 },
    drivers: ['Excitement', 'Freedom', 'Results'],
    superpowers: [
      { title: 'Adaptability', desc: 'Thrives in chaos. Finds solutions instantly.' },
      { title: 'Action Oriented', desc: 'Moves while others talk. The engine of the team.' },
      { title: 'Charisma', desc: 'Natural charm and fun to be around.' }
    ],
    blindspots: [
      { title: 'Impulsive', desc: 'Leaps before looking. Ignores consequences.' },
      { title: 'Bored Easily', desc: 'Hates routine and long-term tasks.' },
      { title: 'Insensitive', desc: 'Can be blunt and hurt sensitive people.' }
    ],
    relationships: { strong: ['ISTP', 'ESFP'], weak: ['INFJ', 'ENFJ'] },
    careers: [
      { title: 'Sales', desc: 'Sales Director. Closing deals.' },
      { title: 'Entrepreneurship', desc: 'Founder. Taking risks.' },
      { title: 'Sports', desc: 'Athlete, Coach. Physical action.' }
    ],
    growth: [
      { title: 'Check Consequences', desc: 'Ask "What happens next?"' },
      { title: 'Short Rewards', desc: 'Gamify your long-term tasks.' },
      { title: 'Listen to Emotions', desc: 'Slow down for others.' }
    ]
  },
  'ESFP': {
    code: 'ESFP',
    name: 'Entertainer',
    slogan: 'The Star, Life of the Party',
    keywords: ['Enthusiastic', 'Vibrant', 'Friendly', 'Pragmatic', 'Flexible'],
    archetype: { fictional: 'Penny (Big Bang)', historical: 'Marilyn Monroe' },
    radarStats: { logic: 30, control: 20, social: 95, abstract: 40 },
    drivers: ['Fun', 'Excitement', 'Connection'],
    superpowers: [
      { title: 'Infectious Joy', desc: 'Lights up any room. Makes life feel alive.' },
      { title: 'Social Awareness', desc: 'Reads the room perfectly. Connects with everyone.' },
      { title: 'Experience Driven', desc: 'Finds joy in the ordinary. Lives fully.' }
    ],
    blindspots: [
      { title: 'No Planning', desc: 'Gets lost without a roadmap.' },
      { title: 'Emotional Volatility', desc: 'Driven by momentary feelings.' },
      { title: 'Needs Attention', desc: 'Anxious without validation.' }
    ],
    relationships: { strong: ['ISFP', 'ESTP'], weak: ['INTJ', 'ENTJ'] },
    careers: [
      { title: 'Performance', desc: 'Actor, Host. Being seen.' },
      { title: 'Tourism', desc: 'Guide. Sharing experiences.' },
      { title: 'PR & Events', desc: 'Event Planner. Creating fun.' }
    ],
    growth: [
      { title: 'Light Structure', desc: 'Pick a general direction.' },
      { title: 'Filter Input', desc: 'Avoid drama.' },
      { title: 'Validate Yourself', desc: 'You are worthy even when quiet.' }
    ]
  }
};

// --- EXPORTS ---

export const getQuestions = (lang: Language) => {
  return lang === 'zh' ? QUESTION_TREE_ZH : QUESTION_TREE_EN;
};

export const getProfile = (lang: Language, code: string) => {
  return lang === 'zh' ? PROFILES_DATA_ZH[code] : PROFILES_DATA_EN[code];
};

// Maintain backward compatibility for imports if any
export { PROFILES_DATA_ZH as PROFILES, QUESTION_TREE_ZH as QUESTION_TREE };
