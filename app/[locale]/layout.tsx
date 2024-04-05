import type { Metadata } from 'next'
import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode;
  params: { locale: string };
}

// function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return [ 'en', 'es', 'que' ].map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  description: 'Revolucionando el Sistema de Salud Peruano con tecnología IA',
  icons      : [
    {
      rel: 'apple-touch-icon',
      url: '/favicon.ico'
    },
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ],
  title: 'Zeal Hackathon'
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages(locale)

  return (

    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>

  )
}
