import type { NextPage } from 'next'
import { Flex } from '../components/lib'
import { DynamicComponent } from '../components/dynamic'
import { TestNode } from '../components/dynamic/test'

// testing out the copy pasta component
const DynamicTest: NextPage = () => {
  return (
    <Flex>
      <DynamicComponent graph={TestNode} />
    </Flex>  
  )
}

export default DynamicTest