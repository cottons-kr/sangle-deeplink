import { VStack } from '@cottons-kr/react-foundation'

import s from '@/styles/page.module.scss'

export default function IndexPage() {
  return <>
    <VStack align='center'>
      <img className={s.image} src='/assets/deeplink.png' alt='오른쪽 화살표' />
      <p className={s.content}>생글 앱으로 이동할게요...</p>
    </VStack>
  </>
}
