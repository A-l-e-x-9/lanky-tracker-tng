import CratePool from '@renderer/components/pools/Crates'
import { useGalleonLighthousePlatform, useGalleonSeasickShip } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useDive, useLanky } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const canReachChunkyShip = useGalleonSeasickShip()
const hasDiving = useDive()
const hasLanky = useLanky()
  return (
    <CratePool>
      <GalleonCheck
        id={24017}
        name="Shuffled Melon Crate: Near Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24018}
        name="Shuffled Melon Crate: Near DK's pad on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24019}
        name="Shuffled Melon Crate: Next to the ladder on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24020}
        name="Shuffled Melon Crate: Under the Enguarde box"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24021}
        name="Shuffled Melon Crate: In the alcove locked by an Enguarde icon"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24022}
        name="Shuffled Melon Crate: In front of the Mermaid's house"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24023}
        name="Shuffled Melon Crate: Underneath Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24025}
        name="Shuffled Melon Crate: Behind Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24033}
        name="Shuffled Melon Crate: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24037}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24040}
        name="Shuffled Melon Crate: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24042}
        name="Shuffled Melon Crate: Left of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24043}
        name="Shuffled Melon Crate: In front of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24044}
        name="Shuffled Melon Crate: Right of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24045}
        name="Shuffled Melon Crate: In the corner of Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24046}
        name="Shuffled Melon Crate: Behind the pyramid of non-spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={24047}
        name="Shuffled Melon Crate: Behind the spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
    </CratePool>
  )
}

const LighthouseCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default LighthouseCrates
