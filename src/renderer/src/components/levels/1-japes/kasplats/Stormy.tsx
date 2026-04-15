import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGateKasplat, useJapesRambi, useJapesKongGates } from '@renderer/hooks/japes'
import { useDive, useAnyGun, useOrange, useAnyMusic } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const notChunkyKasplat = useGateKasplat()
const canReachRambiArea = useJapesRambi()
const canReachStormyArea = useJapesKongGates()
const hasDiving = useDive()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasAnInstrument = useAnyMusic()
return (
    <KasplatPool>
      <JapesCheck
        id={51001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Stormy Cave, near Lanky's painting room)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (near his slope barrel in the Stormy Cave)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51005}
        name="Shuffled Kasplat: Behind the Rambi Wall"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in}
        canGetBreak={canReachRambiArea.out}
      />
      <JapesCheck
        id={51012}
        name="Shuffled Kasplat: In the Rambi tunnel's pool"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={canReachRambiArea.out && hasOranges && hasDiving.out}
      />
      <JapesCheck
        id={51013}
        name="Shuffled Kasplat: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyArea.in}
        canGetBreak={canReachStormyArea.out}
      />
    </KasplatPool>
  )
}

const StormyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default StormyKasplats
