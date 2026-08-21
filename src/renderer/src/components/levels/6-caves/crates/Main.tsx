import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useRocket, useTwirl, useDk } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
  return (
    <CratePool>
      <CavesCheck
        id={26046}
        name="Shuffled Melon Crate: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && (hasDK || hasJetbarrel || isHinaKagiyama)}
        canGetBreak={isBreathing.out}
      />
    </CratePool>
  )
}

const MainCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default MainCrates
