import GBPool from '@renderer/components/pools/GB'
import { useTinyPortGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MonkeyportIgloo: React.FC = () => {
  const portGb = useTinyPortGb()
  return (
  <GBPool>
    <CavesCheck
      id={6031}
      name="Tiny's Monkeyport Igloo"
      region="Caves Igloo"
      canGetLogic={portGb.in}
      canGetBreak={portGb.out}
    />
    </GBPool>
  )
}

export default MonkeyportIgloo
