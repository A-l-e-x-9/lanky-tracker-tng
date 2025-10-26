import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useLankyRaceGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const BeetleRace: React.FC = () => {
  const raceGb = useLankyRaceGb()
  return (
  <GBPool>
    <ToughGoldenBanana>
      <CavesCheck
        id={6020}
        name="Lanky's Beetle Race"
        region="Crystal Caves Main"
        canGetLogic={raceGb.in}
        canGetBreak={raceGb.out}
      />
    </ToughGoldenBanana>
    </GBPool>
  )
}

export default BeetleRace
