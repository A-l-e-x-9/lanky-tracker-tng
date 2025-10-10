import { useDkFreeLankyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeLanky: React.FC = () => {
  const freeGb = useDkFreeLankyGb()
  return (
    <AztecCheck
      id={2004}
      name="Freeing Lanky Kong"
      region="Llama Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
  )
}

export default FreeLanky
