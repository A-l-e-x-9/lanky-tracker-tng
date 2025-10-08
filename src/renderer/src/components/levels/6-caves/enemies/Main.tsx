import DropPool from '@renderer/components/pools/Drops'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const MainEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CavesCheck
        id={6300}
        name="Enemy at the Start"
        region="Crystal Caves Main"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6301}
        name="Enemy Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Enemy Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <CavesCheck
        id={6306}
        name="Enemy Near Tiny's Bonus Room"
        region="Crystal Caves Main"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
      <CavesCheck
        id={6305}
        name="Enemy Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
    </DropPool>
  )
}

export default MainEnemies
