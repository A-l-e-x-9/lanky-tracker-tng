import GBPool from '@renderer/components/pools/GB'
import { useChunkyUndergroundGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Underground: React.FC = () => {
  const chunkyUndergroundGb = useChunkyUndergroundGb()
  return (
  <GBPool>
    <JapesCheck
      id={1043}
      name="Chunky's Cave"
      region="Japes Caves and Mines"
      canGetLogic={chunkyUndergroundGb.in}
      canGetBreak={chunkyUndergroundGb.out}
    />
    </GBPool>
  )
}

export default Underground
