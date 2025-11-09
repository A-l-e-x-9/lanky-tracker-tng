import GBPool from '@renderer/components/pools/GB'
import { useChunkyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const ChunkyTimedCage: React.FC = () => {
  const cage = useChunkyCagedGb()
  return (
  <GBPool>
    <JapesCheck
      id={1041}
      name="Chunky's Timed Caged Banana"
      region="Japes Hillside"
      canGetLogic={cage.in}
      canGetBreak={cage.out}
    />
    </GBPool>
  )
}

export default ChunkyTimedCage
