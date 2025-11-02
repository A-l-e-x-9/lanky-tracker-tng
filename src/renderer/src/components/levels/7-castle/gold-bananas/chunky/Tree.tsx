import GBPool from '@renderer/components/pools/GB'
import { useChunkyTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyTree: React.FC = () => {
  const treeGb = useChunkyTreeGb()
  return (
  <GBPool>
    <CastleCheck
      id={7040}
      name="Chunky's Tree Sniping Barrel"
      region="Creepy Castle Main"
      canGetLogic={treeGb.in}
      canGetBreak={treeGb.out}
    />
    </GBPool>
  )
}

export default ChunkyTree
