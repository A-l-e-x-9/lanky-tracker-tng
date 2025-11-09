import DropPool from '@renderer/components/pools/Drops'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useAngryCaves } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const MainEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CavesCheck
        id={6300}
        name="Enemy at the Start"
        region="Crystal Caves Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong} //no angy Caves check here because it's in an "exempt" area
      />
      <CavesCheck
        id={6301}
        name="Enemy Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={inStage.in && !angery && anyKong}
        canGetBreak={(inStage.out || angery) && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Enemy Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={inStage.in && !angery && zinger.in}
        canGetBreak={(inStage.out || angery) && zinger.out}
      />
      <CavesCheck
        id={6306}
        name="Enemy Near Tiny's Bonus Room"
        region="Crystal Caves Main"
        canGetLogic={inStage.in && !angery && kosha.in}
        canGetBreak={(inStage || angery) && kosha.out}
      />
      <CavesCheck
        id={6305}
        name="Enemy Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={inStage.in && !angery && kosha.in}
        canGetBreak={(inStage.in || angery) && kosha.out}
      />
    </DropPool>
  )
}

export default MainEnemies
