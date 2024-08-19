import type { NextPage } from 'next'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ThreeCol } from '../components/lib/layout/threecol'

const Home: NextPage = () => {
  return (
    <>
      <ThemeToggle />
      <ThreeCol>
        <>
          <div style={{ border: '1px solid black'}}>card thing here</div>
          <div style={{ height: '100px', border: '1px solid black' }}>marijuana cross</div>
          <div style={{ height: '200px', backgroundColor: 'salmon'}}>Nothing wrong wid dis</div>
        </>
        <>
          <div style={{ height: '150px', borderRadius: '8px', backgroundColor: '#eee', border: '1px solid black'}}>
            no thing wrong wid dat
          </div>
          <div style={{ height: '100px', border: '1px solid black' }}>mary on a cross</div>
          <div style={{ height: '200px', backgroundColor: 'cornflowerblue', color: 'white'}}>
            Nothing wrong wid dis
          </div>
        </>
        <>
          <div style={{ border: '1px solid black' }}>card thing here</div>
          <div style={{ height: '100px', border: '1px solid black' }}>marijuana cross</div>
          <div style={{ height: '200px', backgroundColor: 'salmon'}}>Nothing wrong wid dis</div>
        </>
      </ThreeCol>
    </>
    
  )
}

export default Home