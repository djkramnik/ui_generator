import type { NextPage } from 'next'
import { ThemeToggle } from '../components/lib/theme_toggle'

const Home: NextPage = () => {
  return (
    <>
      <ThemeToggle />
      <div>hi</div>
    </>
    
  )
}

export default Home