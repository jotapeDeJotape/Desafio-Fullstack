import Header from '@/components/header'
import MainPage from '@/components/mainPage'
import { IUser } from '@/types'
import { GetServerSideProps } from 'next'
import nookies from "nookies"



const DashBoard = ({name}: IUser) => {
  return (
    <>
        <Header name={name} isLogged/>
        <MainPage/>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  
    
  if(!cookies["stars.token"]){
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
  }
  return {
    props: {
        name: cookies["stars.user"]
    }
}
}


export default DashBoard