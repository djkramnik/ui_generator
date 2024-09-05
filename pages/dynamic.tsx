import type { NextPage } from 'next'
import { DynamicComponent } from '../components/dynamic'
import { StripeHeroDashboard, StripePhoneNode, TestNode } from '../components/dynamic/test'

// testing out the copy pasta component
const DynamicTest: NextPage = () => {
  return (
    <div>
      <DynamicComponent graph={TestNode} />
      <DynamicComponent graph={StripePhoneNode} />
      <DynamicComponent graph={StripeHeroDashboard} />
    </div>  
  )
}

export default DynamicTest