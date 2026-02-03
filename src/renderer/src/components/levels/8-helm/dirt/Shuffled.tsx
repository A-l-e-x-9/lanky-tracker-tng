import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useHelmMachine, useHelmDoors, usePlayHelm, useEOHDoor1 } from '@renderer/hooks/helm'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useStand, usePineapple, useVine, useRocket } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = usePlayHelm()
const hasShockwave = useShockwave()
const hasOStand = useStand()
const hasPineapples = usePineapple()
const hasVines = useVine()
const canReachBOM = useHelmMachine()
const hasJetbarrel = useRocket()
const canReachNav = useHelmDoors()
const canReachThrone = useEOHDoor1()
  return (
    <RainbowCoinPool>
      <HelmCheck
        id={38000}
        name="Shuffled Dirt Patch: First room, left of the Tag Barrel"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasShockwave}
        canGetBreak={isBreathing.out && hasShockwave}
      />
      <HelmCheck
        id={38001}
        name="Shuffled Dirt Patch: Ammo alcove in Pineapple Switch room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand && hasShockwave}
        canGetBreak={isBreathing.out && hasShockwave}
      />
      <HelmCheck
        id={38002}
        name="Shuffled Dirt Patch: Metal grating in Mini Monkey room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand && hasPineapples && hasVines && hasShockwave}
        canGetBreak={isBreathing.out && hasPineapples && hasVines && hasShockwave}
      />
      <HelmCheck
        id={38003}
        name="Shuffled Dirt Patch: Right side of Mini Monkey room"
        region="Hideout Helm"
        canGetLogic={isBreathing.in && hasOStand && hasPineapples && hasVines && hasShockwave}
        canGetBreak={isBreathing.out && hasPineapples && hasVines && hasShockwave}
      />
      <HelmCheck
        id={38004}
        name="Shuffled Dirt Patch: On top of the Blast-O-Matic itself"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasJetbarrel && hasShockwave}
        canGetBreak={canReachBOM.out && hasJetbarrel && hasShockwave}
      />
      <HelmCheck
        id={38005}
        name="Shuffled Dirt Patch: Left side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasShockwave}
        canGetBreak={canReachBOM.out && hasShockwave}
      />
      <HelmCheck
        id={38006}
        name="Shuffled Dirt Patch: Right side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasShockwave}
        canGetBreak={canReachBOM.out && hasShockwave}
      />
      <HelmCheck
        id={38007}
        name="Shuffled Dirt Patch: Under the K. Rool door"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasShockwave}
        canGetBreak={canReachBOM.out && hasShockwave}
      />
      <HelmCheck
        id={38008}
        name="Shuffled Dirt Patch: Nav room, at the computers"
        region="Hideout Helm"
        canGetLogic={canReachNav.in && hasShockwave}
        canGetBreak={canReachNav.out && hasShockwave}
      />
      <HelmCheck
        id={38009}
        name="Shuffled Dirt Patch: Nav room, left window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in && hasShockwave}
        canGetBreak={canReachNav.out && hasShockwave}
      />
      <HelmCheck
        id={38010}
        name="Shuffled Dirt Patch: Nav room, right window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in && hasShockwave}
        canGetBreak={canReachNav.out && hasShockwave}
      />
      <HelmCheck
        id={38011}
        name="Shuffled Dirt Patch: Behind K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in && hasShockwave}
        canGetBreak={canReachThrone.out && hasShockwave}
      />
      <HelmCheck
        id={38012}
        name="Shuffled Dirt Patch: In front of K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in && hasShockwave}
        canGetBreak={canReachThrone.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
