import ArenaPool from '@renderer/components/pools/Arenas'
import { useHelmMachine, useHelmDoors, usePlayHelm, useEOHDoor1 } from '@renderer/hooks/helm'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useStand, usePineapple, useVine, useRocket } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = usePlayHelm()
const hasOStand = useStand()
const hasPineapples = usePineapple()
const hasVines = useVine()
const canReachBOM = useHelmMachine()
const hasJetbarrel = useRocket()
const canReachNav = useHelmDoors()
const canReachThrone = useEOHDoor1()
  return (
    <ArenaPool>
      <HelmCheck
        id={18000}
        name="Shuffled Battle Arena: First room, left of the Tag Barrel"
        region="Hideout Helm"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18001}
        name="Shuffled Battle Arena: Ammo alcove in Pineapple Switch room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand}
        canGetBreak={isBreathing.out}
      />
      <HelmCheck
        id={18002}
        name="Shuffled Battle Arena: Metal grating in Mini Monkey room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={isBreathing.out && hasPineapples && hasVines}
      />
      <HelmCheck
        id={18003}
        name="Shuffled Battle Arena: Right side of Mini Monkey room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={isBreathing.out && hasPineapples && hasVines}
      />
      <HelmCheck
        id={18004}
        name="Shuffled Battle Arena: Vanilla Location (on top of the Blast-O-Matic itself)"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasJetbarrel}
        canGetBreak={canReachBOM.out && hasJetbarrel}
      />
      <HelmCheck
        id={18005}
        name="Shuffled Battle Arena: Left side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={18006}
        name="Shuffled Battle Arena: Right side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={18007}
        name="Shuffled Battle Arena: Under the K. Rool door"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={18008}
        name="Shuffled Battle Arena: Nav room, at the computers"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={18009}
        name="Shuffled Battle Arena: Nav room, left window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={18010}
        name="Shuffled Battle Arena: Nav room, right window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={18011}
        name="Shuffled Battle Arena: Behind K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in}
        canGetBreak={canReachThrone.out}
      />
      <HelmCheck
        id={18012}
        name="Shuffled Battle Arena: In front of K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in}
        canGetBreak={canReachThrone.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
