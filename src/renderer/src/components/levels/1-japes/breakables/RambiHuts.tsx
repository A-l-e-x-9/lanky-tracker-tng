import BreakablePool from '@renderer/components/pools/Breakable'
import JapesCheck from '../check'
import { useJapesKongGates, useJapesRambi } from '@renderer/hooks/japes'

const RambiHuts: React.FC = () => {
const canReachStormyZone = useJapesKongGates()
const hasRambi = useJapesRambi()
  return (
    <BreakablePool>
      <JapesCheck
        id={16700}
        name="DK's Rambi Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasRambi.in}
        canGetBreak={canReachStormyZone.out && hasRambi.out}
      />
      <JapesCheck
        id={16701}
        name="Diddy's Rambi Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasRambi.in}
        canGetBreak={canReachStormyZone.out && hasRambi.out}
      />
      <JapesCheck
        id={16702}
        name="Lanky's Rambi Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasRambi.in}
        canGetBreak={canReachStormyZone.out && hasRambi.out}
      />
      <JapesCheck
        id={16703}
        name="Tiny's Rambi Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasRambi.in}
        canGetBreak={canReachStormyZone.out && hasRambi.out}
      />
    </BreakablePool>
  )
}

export default RambiHuts
