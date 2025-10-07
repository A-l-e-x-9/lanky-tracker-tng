import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useLankyRaceGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const RabbitRace: React.FC = () => {
  const raceGb = useLankyRaceGb()
  return (
    <ToughGoldenBanana>
      <ForestCheck
        id={5022}
        name="The Infamous Rabbit Race"
        region="Forest Area 4"
        canGetLogic={raceGb.in}
        canGetBreak={raceGb.out}
      />
    </ToughGoldenBanana>
  )
}

export default RabbitRace
