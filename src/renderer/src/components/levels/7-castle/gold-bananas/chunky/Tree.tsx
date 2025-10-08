import { useChunkyTreeGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyTree: React.FC = () => {
  const treeGb = useChunkyTreeGb()
  return (
    <CastleCheck
      id={7040}
      name="Chunky's Tree Sniping Barrel"
      region="Creepy Castle Main"
      canGetLogic={treeGb.in}
      canGetBreak={treeGb.out}
    />
  )
}

export default ChunkyTree
