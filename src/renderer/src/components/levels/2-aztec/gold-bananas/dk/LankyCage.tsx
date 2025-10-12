import { useDkFreeLankyGb } from '@renderer/hooks/aztec'
import KongCheck from '@renderer/components/pools/Kong'
import AztecCheck from '../../check'

const FreeLanky: React.FC = () => {
  const freeGb = useDkFreeLankyGb()
  return (
  <KongCheck>
    <AztecCheck
      id={2005}
      name="Lanky's Cage"
      region="Llama Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
  </KongCheck>
  )
}

export default FreeLanky
