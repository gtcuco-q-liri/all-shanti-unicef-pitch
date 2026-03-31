import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'
import Slide01Cover from './components/slides/Slide01Cover'
import Slide02Crisis from './components/slides/Slide02Crisis'
import Slide03Countries from './components/slides/Slide03Countries'
import Slide04Economic from './components/slides/Slide04Economic'
import Slide05Treatment from './components/slides/Slide05Treatment'
import Slide06Solution from './components/slides/Slide06Solution'
import Slide07Advantages from './components/slides/Slide07Advantages'
import Slide08Alignment from './components/slides/Slide08Alignment'
import Slide09Strategy from './components/slides/Slide09Strategy'
import Slide10Timeline from './components/slides/Slide10Timeline'
import Slide11Impact from './components/slides/Slide11Impact'
import Slide12Partnership from './components/slides/Slide12Partnership'
import Slide13NextSteps from './components/slides/Slide13NextSteps'
import Slide14Thanks from './components/slides/Slide14Thanks'

const slides = [
  { component: Slide01Cover, title: 'Capa' },
  { component: Slide02Crisis, title: 'A Crise' },
  { component: Slide03Countries, title: 'Países Afetados' },
  { component: Slide04Economic, title: 'Impacto Económico' },
  { component: Slide05Treatment, title: 'Tratamentos Atuais' },
  { component: Slide06Solution, title: 'A Solução' },
  { component: Slide07Advantages, title: 'Vantagens' },
  { component: Slide08Alignment, title: 'Alinhamento UNICEF' },
  { component: Slide09Strategy, title: 'Estratégia' },
  { component: Slide10Timeline, title: 'Timeline' },
  { component: Slide11Impact, title: 'Impacto' },
  { component: Slide12Partnership, title: 'Parceria' },
  { component: Slide13NextSteps, title: 'Próximos Passos' },
  { component: Slide14Thanks, title: 'Obrigado' },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [key, setKey] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, index))
    setCurrent(next)
    setKey(k => k + 1)
  }, [])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const SlideComponent = slides[current].component

  return (
    <div className="flex flex-col h-screen w-screen bg-black select-none">
      {/* Slide area — 16:9 centered */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div
          className="relative shadow-2xl overflow-hidden"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: 'calc(100vh * 16/9)',
            maxHeight: 'calc(100vw * 9/16)',
          }}
        >
          <div key={key} className="w-full h-full slide-enter">
            <SlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-gray-900 border-t border-gray-800 flex items-center justify-between px-6 py-3 flex-shrink-0">
        {/* Slide counter + title */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-gray-400 text-sm font-mono">
            {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
          </span>
          <span className="text-white text-sm font-medium truncate">
            {slides[current].title}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-5 h-2 bg-unicef'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            title="Fullscreen (F)"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}
