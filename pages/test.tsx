import { Copy } from "../components/lib/atomics"

const TestPage = () => {
  return (
    <div style={{ backgroundColor: '#aaa'}}>
      <Copy $variant="white">
        Get 3 days for free!<br /> Then we will begin the invoicing.
      </Copy>
    </div>
  )
}

export default TestPage