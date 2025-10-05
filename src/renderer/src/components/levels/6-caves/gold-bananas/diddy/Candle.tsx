import Miniboss from '@renderer/components/pools/Miniboss'
import { useDiddyCandleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyCandleCabin: React.FC = () => {
  const candleGb = useDiddyCandleGb()
  return (
  <Miniboss>
    <CavesCheck
      id={6013}
      name="Diddy's Upper 5 Door Cabin"
      region="Cabins Area"
      canGetLogic={candleGb}
    />
  </Miniboss>
  )
}

export default DiddyCandleCabin
