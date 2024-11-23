import { ILayoutProps } from '@cottons-kr/react-foundation'
import localFont from 'next/font/local'

import '@/styles/app.scss'
import '@cottons-kr/react-foundation/dist/styles.css'

const wantedSansVariable = localFont({
  src: '/fonts/WantedSansVariable.ttf',
  display: 'swap',
})

export default function Layout(props: ILayoutProps) {
  return <>
    <html lang='ko'>
      <body className={wantedSansVariable.className}>{props.children}</body>
    </html>
  </>
}
