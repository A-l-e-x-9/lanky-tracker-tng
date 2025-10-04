//import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/hooks/factory'
//import { useFastArcade } from '@renderer/hooks/fast-checks'
import FactoryCheck from '../../check'

const FactoryBlast: React.FC = () => {
/*  const fastArcade = useFastArcade()
    if (fastArcade) {*/
  return (
    <FactoryCheck id={3003} name="Barrel Blast course and/or DK Arcade Round 1" region="Storage And Arcade" canGetLogic={useDkBlastGb()} />
  )
/*  } else {
  return (
    <ToughGoldenBanana>
    <FactoryCheck
    id={3003}
    name="Factory DK Barrel Blast and DK Arcade Round 1"
    region="Storage And Arcade"
    canGetLogic={useDkBlastGb()}
    />
    </ToughGoldenBanana>
  )
  }*/
}

export default FactoryBlast
