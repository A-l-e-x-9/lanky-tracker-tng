import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useOasisKasplat, useGeneralThing } from '@renderer/hooks/aztec'
import { useVine, useClimbing, useRocket, useDiddy } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const diddyVanillaKasplat = useOasisKasplat()
const isBreathing = useGeneralThing()
const hasVines = useVine()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasDiddy = useDiddy()
return (
    <KasplatPool>
      <AztecCheck
        id={52001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (on top of the Tiny Temple)"
        region="Aztec Main Area"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <AztecCheck
        id={52006}
        name="Shuffled Kasplat: On the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={52007}
        name="Shuffled Kasplat: On top of the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in && hasClimbing && (hasVines || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasDiddy || hasTiny)}
      />
      <AztecCheck
        id={52010}
        name="Shuffled Kasplat: Back top of the 5-Door Temple"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52011}
        name="Shuffled Kasplat: Platform near Snide's"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52014}
        name="Shuffled Kasplat: Behind Diddy's gongs"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
    </KasplatPool>
  )
}

const AztecMainKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default AztecMainKasplats
