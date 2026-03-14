import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useProductionTopKasplat, useProductionBaseKasplat, useResearchKasplat, useStorageKasplat, useBlockKasplat, useFactoryHut, useFactoryProductionEnabled, useFactoryProductionTop } from '@renderer/hooks/galleon'
import { useShuffleKasplats, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, usePunch, useMini, useDk, useTwirl, useCoconut, useTrombone } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useProductionTopKasplat()
const diddyVanillaKasplat = useProductionBaseKasplat()
const lankyVanillaKasplat = useResearchKasplat()
const tinyVanillaKasplat = useStorageKasplat()
const chunkyVanillaKasplat = useBlockKasplat()
const isBreathing = useGeneralThing()
const canReachHut = useFactoryHut()
const canDoTinyProd = useFactoryProductionTop()
const hasClimbing = useClimbing()
const hasAllBananaports = useBananaportAll()
const hasPrimatePunch = usePunch()
const hasMiniMonkey = useMini()
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
const hasCoconuts = useCoconut()
const hasTrombone = useTrombone()
const prodRoomOn = useFactoryProductionEnabled()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54000}
        name="Shuffled Kasplat: DK's Vanilla Location (top of the Prod)"
        region="Prod Room"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <GalleonCheck
        id={54001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (bottom of the Prod)"
        region="Prod Room"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (guarding R&D secrets)"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (bottom of the pole to the Arcade)"
        region="Storage and Arcade Area"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (at the Block Tower)"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54005}
        name="Shuffled Kasplat: At the window in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54006}
        name="Shuffled Kasplat: In front of the Power Hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in}
        canGetBreak={canReachHut.out}
      />
      <GalleonCheck
        id={54007}
        name="Shuffled Kasplat: Halfway down the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54008}
        name="Shuffled Kasplat: In the Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={54009}
        name="Shuffled Kasplat: A step up in the Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomOn.in || hasAllBananaports}
        canGetBreak={prodRoomOn.out}
      />
      <GalleonCheck
        id={54010}
        name="Shuffled Kasplat: Window shopping"
        region=""
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54011}
        name="Shuffled Kasplat: Inside the Power Hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts}
        canGetBreak={canReachHut.out && hasCoconuts}
      />
      <GalleonCheck
        id={54012}
        name="Shuffled Kasplat: By the car race entrance"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54013}
        name="Shuffled Kasplat: At Tiny's dartboard"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in && hasMiniMonkey}
        canGetBreak={chunkyVanillaKasplat.out && hasMiniMonkey}
      />
      <GalleonCheck
        id={54014}
        name="Shuffled Kasplat: In the crusher"
        region="Prod Room"
        canGetLogic={prodRoomOn.in}
        canGetBreak={prodRoomOn.out}
      />
      <GalleonCheck
        id={54015}
        name="Shuffled Kasplat: Past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in && isHinaKagiyama}
        canGetBreak={canDoTinyProd.out && hasDK}
      />
      <GalleonCheck
        id={54016}
        name="Shuffled Kasplat: Ripping his hair out while playing Lanky's damn piano game"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in && hasTrombone}
        canGetBreak={lankyVanillaKasplat.out && hasTrombone}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
