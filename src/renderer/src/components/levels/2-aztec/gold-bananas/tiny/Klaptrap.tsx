import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyKlaptrapGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TinyKlaptrap: React.FC = () => {
  const klaptrapGb = useTinyKlaptrapGb()
  return (
  <GBPool>
  <Miniboss>
    <AztecCheck
      id={2030}
      name="Tiny's Klaptrap Gauntlet"
      region="Tiny Temple"
      canGetLogic={klaptrapGb.in}
      canGetBreak={klaptrapGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default TinyKlaptrap
