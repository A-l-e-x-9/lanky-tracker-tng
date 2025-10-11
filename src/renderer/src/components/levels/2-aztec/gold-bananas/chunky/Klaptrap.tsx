import Miniboss from '@renderer/components/pools/Miniboss'
import { useChunkyKlaptrapGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const ChunkyKlaptrap: React.FC = () => {
  const klaptrapGb = useChunkyKlaptrapGb()
  return (
  <Miniboss>
    <AztecCheck
      id={2041}
      name="Chunky's Rotating Klaptrap Room"
      region="Tiny Temple"
      canGetLogic={klaptrapGb.in}
      canGetBreak={klaptrapGb.out}
    />
  </Miniboss>
  )
}

export default ChunkyKlaptrap
