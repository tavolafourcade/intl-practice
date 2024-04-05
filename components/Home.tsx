import { useTranslations } from 'next-intl'
import React from 'react'

const Home = () => {
  const t = useTranslations()
  return (
    <div>
      Home {t('saludo')}
    </div>
  )
}

export default Home
