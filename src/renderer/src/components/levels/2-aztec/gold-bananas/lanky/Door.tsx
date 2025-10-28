import GBPool from '@renderer/components/pools/GB'
import { useLanky5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LankyDoorTemple: React.FC = () => {
  const doorGb = useLanky5DoorGb()
  return (
  <GBPool>
    <AztecCheck
      id={2021}
      name="Lanky's 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
    </GBPool>
  )
}

export default LankyDoorTemple
