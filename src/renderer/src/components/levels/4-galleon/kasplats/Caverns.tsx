import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useVineKasplat, useCannonKasplat } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'
import { usePunch } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const lankyVanillaKasplat = useCannonKasplat()
const tinyVanillaKasplat = useVineKasplat()
const isBreathing = useGeneralThing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (the cannon game room)"
        region="Galleon Caves"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (near vanilla warp 3 in the cave)"
        region="Galleon Caves"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54006}
        name="Shuffled Kasplat: At the vanilla Battle Arena"
        region="Galleon Caves"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={54007}
        name="Shuffled Kasplat: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54012}
        name="Shuffled Kasplat: Just above the cave to Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54013}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54014}
        name="Shuffled Kasplat: In Chunky's right chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
    </KasplatPool>
  )
}

const CavernKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CavernKasplats
