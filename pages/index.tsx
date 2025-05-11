import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import '@tldraw/tldraw/tldraw.css'

const Tldraw = dynamic(() => import('@tldraw/tldraw').then((mod) => mod.Tldraw), {
  ssr: false,
})

export default function Home() {
  const tldrawRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.app = tldrawRef.current
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
      <Tldraw ref={tldrawRef} persistenceKey="tldraw-sdk-app" />
    </div>
  )
}
