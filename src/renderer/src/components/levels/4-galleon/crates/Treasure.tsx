import CratePool from '@renderer/components/pools/Crates'
import { useLankyGoldGb, useDiddyGoldGb, useGalleonTreasureRoom } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useDive, useLanky, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLankyGold = useLankyGoldGb()
const canReachDiddyGold = useDiddyGoldGb()
const canReachTreasureRoom = useGalleonTreasureRoom()
const hasDiving = useDive()
const hasLanky = useLanky()
const hasAnyGun = useAnyGun()
const hasOranges = useOrange()
  return (
    <CratePool>
      <GalleonCheck
        id={24030}
        name="Shuffled Melon Crate: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in}
        canGetBreak={canReachLankyGold.out}
      />
      <GalleonCheck
        id={24031}
        name="Shuffled Melon Crate: Underwater in the gold room"
        region="Treasure Room"
        canGetLogic={canReachTreasureRoom.in && hasDiving.in && hasLanky}
        canGetBreak={canReachTreasureRoom.out && hasDiving.out && (hasAnyGun || hasOranges)}
      />
      <GalleonCheck
        id={24039}
        name="Shuffled Melon Crate: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
    </CratePool>
  )
}

const TreasureCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default TreasureCrates
