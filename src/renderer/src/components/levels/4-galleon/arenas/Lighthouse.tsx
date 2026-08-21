import ArenaPool from '@renderer/components/pools/Arenas'
import { useGalleonLighthousePlatform, useGalleonSeasickShip, useKevin } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const canReachChunkyShip = useGalleonSeasickShip()
const canReachKevin = useKevin()
  return (
    <ArenaPool>
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Near Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Near DK's pad on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Next to the ladder on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Underneath Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Left of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: In front of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Right of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: In the corner of Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Kevin's platform"
        region="Lighthouse Area"
        canGetLogic={canReachKevin.in}
        canGetBreak={canReachKevin.out}
      />
    </ArenaPool>
  )
}

const LighthouseArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default LighthouseArenas
