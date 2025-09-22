import { useDkIglooGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const DkIgloo: React.FC = () => {
  const iglooGb = useDkIglooGb()
  return (
    <CavesCheck
      id={6002}
      name="Caves DK 5 Door Igloo"
      region="Igloo Area"
      canGetLogic={iglooGb.in}
      canGetBreak={iglooGb.out}
    />
  )
}

export default DkIgloo
