import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const LankyIgloo: React.FC = () => {
  const iglooGb = useLankyIglooGb()
  return (
  <GBPool>
  <Miniboss>
    <CavesCheck
      id={6022}
      name="Lanky's 5 Door Igloo"
      region="Caves Igloo"
      canGetLogic={iglooGb.in}
      canGetBreak={iglooGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default LankyIgloo
