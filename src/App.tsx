import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { calculateGanzhi, GanzhiResult, TIAN_GAN, DI_ZHI } from "@/lib/ganzhi"
import { Flame, Calendar, Info, ChevronRight, History, Droplets, TreeDeciduous, Mountain, Gem } from "lucide-react"

function App() {
  const [year, setYear] = useState<string>("2026")
  const [result, setResult] = useState<GanzhiResult | null>(null)
  const [error, setError] = useState<string>("")

  const handleCalculate = () => {
    const yearNum = parseInt(year)
    if (isNaN(yearNum) || yearNum < 1 || yearNum > 9999) {
      setError("请输入有效的年份（1-9999）")
      setResult(null)
      return
    }
    setError("")
    setResult(calculateGanzhi(yearNum))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCalculate()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-stone-50 to-red-50 py-4 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
            干支纪年计算器
          </h1>
          <p className="text-stone-600">
            探索中国传统天干地支纪年法，查询任意年份的干支属性
          </p>
        </div>

        {/* Input Card */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              输入年份
            </CardTitle>
            <CardDescription>
              输入公历年份，查询对应的干支纪年
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="number"
                placeholder="例如：2026"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 text-lg"
                min={1}
                max={9999}
              />
              <Button 
                onClick={handleCalculate}
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto px-8"
              >
                查询
              </Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </CardContent>
        </Card>

        {/* Result Card */}
        {result && (() => {
          const config = {
            "金": { color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-500", icon: Gem },
            "木": { color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-500", icon: TreeDeciduous },
            "水": { color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200", badge: "bg-cyan-500", icon: Droplets },
            "火": { color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200", badge: "bg-rose-500", icon: Flame },
            "土": { color: "text-stone-600", bg: "bg-stone-50", border: "border-stone-200", badge: "bg-stone-500", icon: Mountain },
          }[result.nayinWuxing] || { color: "text-stone-600", bg: "bg-stone-50", border: "border-stone-200", badge: "bg-stone-500", icon: Info };
          
          const Icon = config.icon;

          return (
          <Card className={`border-2 shadow-xl ${config.border} ${config.bg}`}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <CardTitle className={`flex items-center gap-2 text-2xl ${config.color}`}>
                  <Icon className="w-6 h-6" />
                  {result.year}年
                </CardTitle>
                <Badge 
                  className={`${config.badge} text-white hover:${config.badge} text-sm py-1`}
                >
                  {result.ganzhi}年 · {result.nayin}
                </Badge>
              </div>
              <CardDescription className="text-base pt-1 sm:pt-0">
                {result.description.split('\n')[0]}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 干支详情 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white/80 rounded-lg p-3 sm:p-4 border border-stone-200 text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-stone-500 mb-1">天干</div>
                  <div className="text-xl sm:text-2xl font-bold text-stone-800">{result.tianGan}</div>
                  <div className="text-xs text-stone-500 mt-1">{result.tianGanWuxing}</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3 sm:p-4 border border-stone-200 text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-stone-500 mb-1">地支</div>
                  <div className="text-xl sm:text-2xl font-bold text-stone-800">{result.diZhi}</div>
                  <div className="text-xs text-stone-500 mt-1">{result.diZhiWuxing}</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3 sm:p-4 border border-stone-200 text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-stone-500 mb-1">纳音</div>
                  <div className="text-lg sm:text-xl font-bold text-stone-800 truncate">{result.nayin}</div>
                  <div className={`text-xs mt-1 ${config.color} truncate`}>{result.nayinWuxing}命</div>
                </div>
              </div>

              {/* 纳音含义 */}
              <div className={`bg-white/60 border ${config.border} rounded-lg p-4`}>
                <h4 className={`font-semibold ${config.color} flex items-center gap-2 mb-2`}>
                  <Icon className="w-4 h-4" />
                  {result.nayin}含义
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {result.nayinMeaning}
                </p>
                {result.isBingWu && (
                  <p className="text-red-600 text-sm mt-2 pt-2 border-t border-red-100">
                    注：丙午年还是"火火相叠"的特殊年份，火气极旺，象征热烈、外放与强大的行动力。
                  </p>
                )}
              </div>

              {/* 周期 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-stone-700 flex items-center gap-2">
                  <History className="w-4 h-4" />
                  {result.ganzhi}年周期
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-stone-500">上一个{result.ganzhi}年：</span>
                  {result.prevYears.slice(0, 2).map((y, i) => (
                    <span key={y} className="flex items-center">
                      <Badge variant="outline" className="text-stone-600">
                        {y}年
                      </Badge>
                      {i < 1 && <ChevronRight className="w-4 h-4 text-stone-400 mx-1" />}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-stone-500">下一个{result.ganzhi}年：</span>
                  {result.nextYears.slice(0, 2).map((y, i) => (
                    <span key={y} className="flex items-center">
                      <Badge variant="outline" className="text-stone-600">
                        {y}年
                      </Badge>
                      {i < 1 && <ChevronRight className="w-4 h-4 text-stone-400 mx-1" />}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-400">
                  干支纪年每60年循环一次。
                </p>
              </div>
            </CardContent>
          </Card>
          );
        })()}

        {/* Reference Table */}
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-lg">天干地支参考</CardTitle>
            <CardDescription>
              十天干与十二地支的五行属性
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-stone-700 mb-3">十天干</h4>
                <div className="grid grid-cols-5 gap-2">
                  {TIAN_GAN.map((gan) => (
                    <div 
                      key={gan} 
                      className={`text-center p-2 rounded border transition-colors duration-300 ${
                        result && gan === result.tianGan 
                          ? 'bg-orange-100 border-orange-300 ring-2 ring-orange-200 shadow-sm' 
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div className={`font-bold ${result && gan === result.tianGan ? 'text-orange-700' : 'text-stone-800'}`}>
                        {gan}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-stone-700 mb-3">十二地支</h4>
                <div className="grid grid-cols-6 gap-2">
                  {DI_ZHI.map((zhi) => (
                    <div 
                      key={zhi} 
                      className={`text-center p-2 rounded border transition-colors duration-300 ${
                        result && zhi === result.diZhi 
                          ? 'bg-orange-100 border-orange-300 ring-2 ring-orange-200 shadow-sm' 
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div className={`font-bold ${result && zhi === result.diZhi ? 'text-orange-700' : 'text-stone-800'}`}>
                        {zhi}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-stone-400 pt-4">
          <p>基于中国传统干支纪年法 | 每60年一个循环周期</p>
        </div>
      </div>
    </div>
  )
}

export default App
