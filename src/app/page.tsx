'use client'

import { IParams, VStack } from '@cottons-kr/react-foundation'
import { use, useEffect } from 'react'

import s from '@/styles/page.module.scss'

const PROTOCOL = 'sangle-deeplink' as const

export default function IndexPage(props: IParams<'', 'id'>) {
  const searchParams = use(props.searchParams)
  const { id } = searchParams

  useEffect(() => {
    if (!id) {
      return alert('잘못된 접근입니다.')
    }

    window.location.href = `${PROTOCOL}://share?id=${id}`
  }, [id])

  return <>
    <VStack align='center'>
      <img className={s.image} src='/assets/deeplink.png' alt='오른쪽 화살표' />
      <p className={s.content}>생글 앱으로 이동할게요...</p>
    </VStack>
  </>
}
