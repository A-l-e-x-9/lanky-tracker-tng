import { useTinyPortGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const MonkeyportIgloo: React.FC = () => {
  const portGb = useTinyPortGb()
  return (
    <CavesCheck
      id={6031}
      name="Caves Tiny Monkeyport Igloo"
      region="Igloo Area"
      canGetLogic={portGb}
    />
  )
}

export default MonkeyportIgloo
