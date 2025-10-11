import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyKlaptrapGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TinyKlaptrap: React.FC = () => {
  const klaptrapGb = useTinyKlaptrapGb()
  return (
  <Miniboss>
    <AztecCheck
      id={2030}
      name="Tiny's Klaptrap Gauntlet"
      region="Tiny Temple"
      canGetLogic={klaptrapGb.in}
      canGetBreak={klaptrapGb.out}
    />
  </Miniboss>
  )
}

export default TinyKlaptrap
