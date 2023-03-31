import { AuthProvider } from '@/contexts/authContext'
import { ListsProvider } from '@/contexts/lists.Context'
import { ClientContextProvider } from '@/contexts/clientContext'
import custonTheme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ContactProviderContext } from '@/contexts/contactContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={custonTheme}>
      <AuthProvider>
      <ClientContextProvider>
      <ListsProvider>
      <ContactProviderContext>
      <Component {...pageProps} />
      </ContactProviderContext>
      </ListsProvider>
      </ClientContextProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}
