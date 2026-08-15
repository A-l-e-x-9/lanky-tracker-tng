import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, usePathKasplat, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyGun, useAnyMusic, useDive, useLanky, useRocket, useClimbing, useOrange } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const lankyVanillaKasplat = usePathKasplat()
const isBreathing = useGeneralThing()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasDiving = useDive()
const hasSlam = useSlamCastle()
const hasLanky = useLanky()
const hasJetbarrel = useRocket()
const hasClimbing = useClimbing()
const hasOranges = useOrange()
  return (
    <KasplatPool>
      <CastleCheck
        id={57002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (by upper vanilla warp 2)"
        region="Creepy Castle Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <CastleCheck
        id={57009}
        name="Shuffled Kasplat: Behind Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57010}
        name="Shuffled Kasplat: In the pool near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
      <CastleCheck
        id={57011}
        name="Shuffled Kasplat: In front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57012}
        name="Shuffled Kasplat: At the Jetbarrel near the central warp area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57013}
        name="Shuffled Kasplat: Inside Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasLanky && hasSlam}
        canGetBreak={isBreathing.out && hasLanky && hasSlam}
      />
      <CastleCheck
        id={57018}
        name="Shuffled Kasplat: The cloud platforms near Diddy's Bonus Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
    </KasplatPool>
  )
}

const CastleMainKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CastleMainKasplats
