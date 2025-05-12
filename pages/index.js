import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

// ✅ Load the tldraw CSS from CDN
import 'https://cdn.jsdelivr.net/npm/@tldraw/tldraw@1.4.0/dist/tldraw.css'

const Tldraw = dynamic(() => import('@tldraw/tldraw').then((mod) => mod.Tldraw), {
  ssr: false,
})

export default function Home() {
  const tldrawRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && tldrawRef.current) {
      window.app = tldrawRef.current
      console.log('tldraw app initialized:', window.app)
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
      <Tldraw
        ref={tldrawRef}
        persistenceKey="tldraw-sdk-app"
        showMenu={true}
        showMultiplayerMenu={false}
      />
    </div>
  )
}
