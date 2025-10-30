import GBPool from '@renderer/components/pools/GB'
import { useLankySnakeGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const LlamaBarrel: React.FC = () => {
  const snakeGb = useLankySnakeGb()
  return (
  <GBPool>
    <AztecCheck
      id={2022}
      name="Lanky's Llama Temple Barrel"
      region="Llama Temple"
      canGetLogic={snakeGb.in}
      canGetBreak={snakeGb.out}
    />
    </GBPool>
  )
}

export default LlamaBarrel
