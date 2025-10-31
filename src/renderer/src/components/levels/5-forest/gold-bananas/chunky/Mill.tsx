import GBPool from '@renderer/components/pools/GB'
import { useChunkyMillGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyMill: React.FC = () => {
  const millGb = useChunkyMillGb()
  return (
  <GBPool>
    <ForestCheck
      id={5042}
      name="Chunky's Keg Crushing"
      region="Forest Area 1"
      canGetLogic={millGb.in}
      canGetBreak={millGb.out}
    />
    </GBPool>
  )
}

export default ChunkyMill
