import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGeneralThing, useJapesSideArea } from '@renderer/hooks/japes'
import { useAnyGun, useAnyMusic, useDive, useOrange } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachDiddyCave = useJapesSideArea()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasDiving = useDive()
const hasOranges = useOrange()
return (
    <KasplatPool>
      <JapesCheck
        id={51009}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={51010}
        name="Shuffled Kasplat: In Diddy's cave"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyCave.in}
        canGetBreak={canReachDiddyCave.out}
      />
      <JapesCheck
        id={51011}
        name="Shuffled Kasplat: In the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
    </KasplatPool>
  )
}

const LowlandKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LowlandKasplats
