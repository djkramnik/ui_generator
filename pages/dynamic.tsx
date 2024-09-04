import type { NextPage } from 'next'
import { DynamicComponent } from '../components/dynamic'
import { StripePhoneNode, TestNode } from '../components/dynamic/test'

// testing out the copy pasta component
const DynamicTest: NextPage = () => {
  return (
    <div>
      <DynamicComponent graph={TestNode} />
      <DynamicComponent graph={StripePhoneNode} />
    </div>  
  )
}

export default DynamicTest