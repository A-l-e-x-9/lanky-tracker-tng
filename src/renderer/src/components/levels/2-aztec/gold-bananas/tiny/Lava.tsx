import GBPool from '@renderer/components/pools/GB'
import { useTinyLavaGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LavaPedestal: React.FC = () => {
  const lavaGb = useTinyLavaGb()
  return (
  <GBPool>
    <AztecCheck
      id={2033}
      name="Tiny's Lava Pedestals"
      region="Llama Temple"
      canGetLogic={lavaGb.in}
      canGetBreak={lavaGb.out}
    />
    </GBPool>
  )
}

export default LavaPedestal
