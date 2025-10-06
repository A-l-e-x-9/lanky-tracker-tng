import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyBeetleGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const BeetleRace: React.FC = () => {
  const beetleGb = useTinyBeetleGb()
  return (
    <ToughGoldenBanana>
      <AztecCheck
        id={2032}
        name="Tiny's Beetle Race"
        region="Aztec Main Area"
        canGetLogic={beetleGb.in}
        canGetBreak={beetleGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default BeetleRace
