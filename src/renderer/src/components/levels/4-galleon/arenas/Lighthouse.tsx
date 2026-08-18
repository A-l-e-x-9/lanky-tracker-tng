import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useKevin, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { usePunch, useClimbing } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canReachLighthouse = useGalleonLighthouseInside()
const canReachCannonGame = useGalleonCannon()
const canReachTinysKasplat = useGalleonCavernTop()
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const canReachKevin = useKevin()
const canReachLankyGold = useLankyGoldGb()
const canReachShipyard = useGalleonOutskirts()
const canReachDiddyGold = useDiddyGoldGb()
const canReachChunkyShip = useGalleonSeasickShip()
const hasPrimatePunch = usePunch()
const hasClimbing = useClimbing()
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
    </ArenaPool>
  )
}

const LighthouseArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default LighthouseArenas
