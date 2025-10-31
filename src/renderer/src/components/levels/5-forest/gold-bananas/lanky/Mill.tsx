import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyMillGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const LankyMill: React.FC = () => {
  const millGb = useLankyMillGb()
  return (
  <GBPool>
  <Miniboss>
    <ForestCheck
      id={5020}
      name="Lanky's Attic Shooting"
      region="Forest Area 1"
      canGetLogic={millGb.in}
      canGetBreak={millGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default LankyMill
