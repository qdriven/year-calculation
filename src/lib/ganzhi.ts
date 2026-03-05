// 天干
export const TIAN_GAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"] as const;

// 地支
export const DI_ZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"] as const;

// 天干五行属性
export const TIAN_GAN_WUXING: Record<string, string> = {
  "甲": "阳木",
  "乙": "阴木",
  "丙": "阳火",
  "丁": "阴火",
  "戊": "阳土",
  "己": "阴土",
  "庚": "阳金",
  "辛": "阴金",
  "壬": "阳水",
  "癸": "阴水",
};

// 地支五行属性
export const DI_ZHI_WUXING: Record<string, string> = {
  "子": "阳水",
  "丑": "阴土",
  "寅": "阳木",
  "卯": "阴木",
  "辰": "阳土",
  "巳": "阴火",
  "午": "阳火",
  "未": "阴土",
  "申": "阳金",
  "酉": "阴金",
  "戌": "阳土",
  "亥": "阴水",
};

// 六十甲子表
export function generateSixtyJiazi(): string[] {
  const result: string[] = [];
  for (let i = 0; i < 60; i++) {
    const gan = TIAN_GAN[i % 10];
    const zhi = DI_ZHI[i % 12];
    result.push(gan + zhi);
  }
  return result;
}

export const SIXTY_JIAZI = generateSixtyJiazi();

export interface NaYin {
  name: string;
  wuxing: string;
  meaning: string;
}

export const NA_YIN_DATA: NaYin[] = [
  { name: "海中金", wuxing: "金", meaning: "深藏不露，金气被水包裹，蕴藏着巨大的潜能但需挖掘。" },
  { name: "炉中火", wuxing: "火", meaning: "火力旺盛，如同火炉之火，象征积极、热情且有强大的转化力。" },
  { name: "大林木", wuxing: "木", meaning: "枝繁叶茂，森林之木，具有包容力，象征生机勃勃和团队力量。" },
  { name: "路旁土", wuxing: "土", meaning: "平实厚重，路边的尘土，象征平凡中的坚持，承载与基石。" },
  { name: "剑锋金", wuxing: "金", meaning: "锋利无比，百炼成钢，象征决断力、才华横溢及锐意进取。" },
  { name: "山头火", wuxing: "火", meaning: "势不可挡，如山顶之火，光芒四射但容易虚浮，需踏实落地。" },
  { name: "涧下水", wuxing: "水", meaning: "清澈流长，山涧细流，象征心思细腻、连绵不断及适应性强。" },
  { name: "城头土", wuxing: "土", meaning: "坚实稳固，城墙之土，象征守护、责任感及坚不可摧的意志。" },
  { name: "白蜡金", wuxing: "金", meaning: "质地柔软，矿石中的金，象征需要磨练、纯洁且富有艺术感。" },
  { name: "杨柳木", wuxing: "木", meaning: "柔韧随风，杨柳之木，象征灵活、温和及在逆境中生存的能力。" },
  { name: "泉中水", wuxing: "水", meaning: "源源不断，井泉之水，象征智慧、取之不尽及造福于人。" },
  { name: "屋上土", wuxing: "土", meaning: "居高临下，瓦片之土，象征遮风挡雨、格局较高但需根基。" },
  { name: "霹雳火", wuxing: "火", meaning: "瞬间爆发，雷电之火，象征雷厉风行、震慑力及极强的爆发力。" },
  { name: "松柏木", wuxing: "木", meaning: "傲雪凌霜，长青之木，象征坚韧不拔、长寿及高洁的品质。" },
  { name: "长流水", wuxing: "水", meaning: "奔流不息，江河之水，象征远大抱负、持续发展及广阔胸怀。" },
  { name: "砂中金", wuxing: "金", meaning: "淘沙见金，珍稀之金，象征才华被掩埋，需在磨砺中脱颖而出。" },
  { name: "山下火", wuxing: "火", meaning: "昏暗收敛，余辉之火，象征韬光养晦、内敛且不宜过分张扬。" },
  { name: "平地木", wuxing: "木", meaning: "平原之木，幼苗成材，象征厚积薄发、稳扎稳打及未来可期。" },
  { name: "壁上土", wuxing: "土", meaning: "依附守成，墙壁之土，象征忠诚、规矩及需要依托才能发挥。" },
  { name: "金箔金", wuxing: "金", meaning: "装饰华丽，贴金之木，象征追求名誉、表面光鲜但质地较薄。" },
  { name: "佛灯火", wuxing: "火", meaning: "照亮幽冥，灯芯之火，象征善良、指引他人及微弱但持久的光。" },
  { name: "天河水", wuxing: "水", meaning: "泽被万物，雨露之水，象征慷慨、博爱及超凡脱俗的气质。" },
  { name: "大驿土", wuxing: "土", meaning: "广袤平坦，驿站之土，象征交通四方、胸怀宽广及社交能力。" },
  { name: "钗钏金", wuxing: "金", meaning: "精美珍贵，首饰之金，象征柔美、注重细节及高雅的生活态度。" },
  { name: "桑柘木", wuxing: "木", meaning: "养蚕之木，实利之木，象征默默奉献、务实及对社会的价值。" },
  { name: "大溪水", wuxing: "水", meaning: "汇聚成流，溪涧之水，象征积累、多才多艺及奔向目标。" },
  { name: "沙中土", wuxing: "土", meaning: "纯净松散，沙滩之土，象征纯洁、随和但容易随波逐流。" },
  { name: "天上火", wuxing: "火", meaning: "普照大地，太阳之火，象征光明、正义感及无私的奉献精神。" },
  { name: "石榴木", wuxing: "木", meaning: "结果繁多，石榴之木，象征多子多福、坚硬及性格刚毅。" },
  { name: "大海水", wuxing: "水", meaning: "浩瀚无垠，百川归海，象征包容一切、深不可测及巨大的能量。" }
];

// 已知参考点：1984年是甲子年
const BASE_YEAR = 1984;

export interface GanzhiResult {
  year: number;
  ganzhi: string;
  tianGan: string;
  diZhi: string;
  tianGanWuxing: string;
  diZhiWuxing: string;
  isBingWu: boolean; // Deprecated, kept for now
  description: string;
  nextBingWuYears: number[]; // Deprecated, now points to next cycle years
  prevBingWuYears: number[]; // Deprecated, now points to prev cycle years
  nayin: string;
  nayinMeaning: string;
  nayinWuxing: string;
  nextYears: number[];
  prevYears: number[];
}

export function calculateGanzhi(year: number): GanzhiResult {
  // 计算年份在六十甲子中的索引
  let diff = year - BASE_YEAR;
  let index = ((diff % 60) + 60) % 60;
  
  const ganzhi = SIXTY_JIAZI[index];
  const tianGan = ganzhi[0];
  const diZhi = ganzhi[1];
  
  const isBingWu = ganzhi === "丙午";
  
  // 纳音信息
  const nayinIndex = Math.floor(index / 2);
  const nayinData = NA_YIN_DATA[nayinIndex];
  
  // 计算前后同干支年（60年周期）
  const nextYears: number[] = [];
  const prevYears: number[] = [];
  
  // 下一个同干支年
  nextYears.push(year + 60);
  nextYears.push(year + 120);
  
  // 上一个同干支年
  prevYears.push(year - 60);
  prevYears.push(year - 120);
  
  // 兼容旧字段
  const nextBingWuYears = nextYears;
  const prevBingWuYears = prevYears;
  
  // 生成描述
  const tgwx = TIAN_GAN_WUXING[tianGan];
  const dzwx = DI_ZHI_WUXING[diZhi];
  
  let description = `${year}年是${ganzhi}年，纳音为"${nayinData.name}"。`;
  description += `${tianGan}属${tgwx}，${diZhi}属${dzwx}。`;
  description += `\n${nayinData.name}：${nayinData.meaning}`;
  
  if (isBingWu) {
    description += `\n特别说明：丙午年是"火火相叠"的年份，火气很旺。`;
  }
  
  return {
    year,
    ganzhi,
    tianGan,
    diZhi,
    tianGanWuxing: TIAN_GAN_WUXING[tianGan],
    diZhiWuxing: DI_ZHI_WUXING[diZhi],
    isBingWu,
    description,
    nextBingWuYears,
    prevBingWuYears,
    nayin: nayinData.name,
    nayinMeaning: nayinData.meaning,
    nayinWuxing: nayinData.wuxing,
    nextYears,
    prevYears,
  };
}

// 获取所有六十甲子
export function getAllJiazi(): string[] {
  return SIXTY_JIAZI;
}
