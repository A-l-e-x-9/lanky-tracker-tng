import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyVultureGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VultureRace: React.FC = () => {
  const vultureGb = useDiddyVultureGb()
  return (
  <GBPool>
    <ToughGoldenBanana>
      <AztecCheck
        id={2012}
        name="Diddy's Vulture Race"
        region="Aztec Main Area"
        canGetLogic={vultureGb.in}
        canGetBreak={vultureGb.out}
      />
    </ToughGoldenBanana>
    </GBPool>
  )
}

export default VultureRace
