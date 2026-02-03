import CratePool from '@renderer/components/pools/Crates'
import { useHelmEnter, useHelmMachine, useHelmDoors } from '@renderer/hooks/helm'
import { useShuffleCrates } from '@renderer/hooks/settings'
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
    <CratePool>
      <HelmCheck
        id={28004}
        name="Shuffled Melon Crate:: Vanilla Location (on top of the Blast-O-Matic itself)"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in && hasJetbarrel}
        canGetBreak={canReachBOM.out && hasJetbarrel}
      />
      <HelmCheck
        id={28005}
        name="Shuffled Melon Crate:: Left side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={28006}
        name="Shuffled Melon Crate:: Right side of Blast-O-Matic platform"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={28007}
        name="Shuffled Melon Crate:: Under the K. Rool door"
        region="Hideout Helm"
        canGetLogic={canReachBOM.in}
        canGetBreak={canReachBOM.out}
      />
      <HelmCheck
        id={28008}
        name="Shuffled Melon Crate:: Nav room, at the computers"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={28009}
        name="Shuffled Melon Crate:: Nav room, left window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={28010}
        name="Shuffled Melon Crate:: Nav room, right window"
        region="Hideout Helm"
        canGetLogic={canReachNav.in}
        canGetBreak={canReachNav.out}
      />
      <HelmCheck
        id={28011}
        name="Shuffled Melon Crate:: Behind K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in}
        canGetBreak={canReachThrone.out}
      />
      <HelmCheck
        id={28012}
        name="Shuffled Melon Crate:: In front of K. Rool's throne"
        region="Hideout Helm"
        canGetLogic={canReachThrone.in}
        canGetBreak={canReachThrone.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
