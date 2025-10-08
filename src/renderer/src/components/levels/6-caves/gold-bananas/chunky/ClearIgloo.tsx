import { useChunkyClearGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TransparentIgloo: React.FC = () => {
  const clearGb = useChunkyClearGb()
  return (
    <CavesCheck
      id={6041}
      name="Chunky's Transparent Igloo to the Giant Kosha"
      region="Caves Igloo"
      canGetLogic={clearGb.in}
      canGetBreak={clearGb.out}
    />
  )
}

export default TransparentIgloo
