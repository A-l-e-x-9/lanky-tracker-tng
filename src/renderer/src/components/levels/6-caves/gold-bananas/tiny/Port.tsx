import { useTinyPortGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MonkeyportIgloo: React.FC = () => {
  const portGb = useTinyPortGb()
  return (
    <CavesCheck
      id={6031}
      name="Tiny's Monkeyport Igloo"
      region="Caves Igloo"
      canGetLogic={portGb}
    />
  )
}

export default MonkeyportIgloo
