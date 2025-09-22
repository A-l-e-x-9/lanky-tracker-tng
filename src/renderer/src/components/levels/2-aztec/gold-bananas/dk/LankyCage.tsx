import { useDkFreeLankyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeLanky: React.FC = () => {
  const freeGb = useDkFreeLankyGb()
  return (
    <AztecCheck
      id={2005}
      name="Lanky's Cage"
      region="Llama Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
  )
}

export default FreeLanky
