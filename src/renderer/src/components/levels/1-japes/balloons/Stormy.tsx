import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesKongGates, useJapesRambi } from '@renderer/hooks/japes'
import { useStand } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachStormyZone = useJapesKongGates()
const hasOStand = useStand()
const hasRambi = useJapesRambi()
  return (
    <ArenaPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: On the left of Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in}
        canGetBreak={hasRambi.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
    </ArenaPool>
  )
}

const StormyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default StormyArenas
