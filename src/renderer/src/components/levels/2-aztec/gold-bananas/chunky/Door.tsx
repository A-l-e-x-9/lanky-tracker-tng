import GBPool from '@renderer/components/pools/GB'
import { useChunky5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const ChunkyDoorTemple: React.FC = () => {
  const doorGb = useChunky5DoorGb()
  return (
  <GBPool>
    <AztecCheck
      id={2043}
      name="Chunky's 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
    </GBPool>
  )
}

export default ChunkyDoorTemple
