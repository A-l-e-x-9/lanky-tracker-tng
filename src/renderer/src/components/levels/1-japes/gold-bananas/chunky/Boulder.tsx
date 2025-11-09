import GBPool from '@renderer/components/pools/GB'
import { useChunkyBoulderGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Boulder: React.FC = () => {
  const chunkyBoulderGb = useChunkyBoulderGb()
  return (
  <GBPool>
    <JapesCheck
      id={1040}
      name="Boulder Over Chunky's Cave"
      region="Japes Lowlands"
      canGetLogic={chunkyBoulderGb.in}
      canGetBreak={chunkyBoulderGb.out}
    />
    </GBPool>
  )
}

export default Boulder
