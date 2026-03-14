import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useProductionTopKasplat, useProductionBaseKasplat, useResearchKasplat, useStorageKasplat, useBlockKasplat, useFactoryHut, useDkTunnelGb, useAztecBack, useAztecLlamaTemple, useAztecTinyTemple, useTinyTempleIce, useDk5DoorGb, useFactoryProductionEnabled } from '@renderer/hooks/factory'
import { useShuffleKasplats, useBananaportAll } from '@renderer/hooks/settings'
import { useDive, useVine, useClimbing, useRocket, useDiddy, useTiny, usePineapple, useGrape, usePunch } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useProductionTopKasplat()
const diddyVanillaKasplat = useProductionBaseKasplat()
const lankyVanillaKasplat = useResearchKasplat()
const tinyVanillaKasplat = useStorageKasplat()
const chunkyVanillaKasplat = useBlockKasplat()
const isBreathing = useGeneralThing()
const canReachHut = useFactoryHut()
const canDoQSGB = useDkTunnelGb()
const canEnterBack = useAztecBack()
const canGoInLlamaTemple = useAztecLlamaTemple()
const canGoInTinyTemple = useAztecTinyTemple()
const canGetPastTTIce = useTinyTempleIce()
const canDoDK5DT = useDk5DoorGb()
const hasDiving = useDive()
const hasVines = useVine()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasPineapples = usePineapple()
const hasGrapes = useGrape()
const hasAllBananaports = useBananaportAll()
const hasPrimatePunch = usePunch()
const prodRoomOn = useFactoryProductionEnabled()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53000}
        name="Shuffled Kasplat: DK's Vanilla Location (top of the Prod)"
        region="Prod Room"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <FactoryCheck
        id={53001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (bottom of the Prod)"
        region="Prod Room"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (guarding R&D secrets)"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (bottom of the pole to the Arcade)"
        region="Storage and Arcade Area"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (at the Block Tower)"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53005}
        name="Shuffled Kasplat: At the window in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={53006}
        name="Shuffled Kasplat: In front of the Power Hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in}
        canGetBreak={canReachHut.out}
      />
      <FactoryCheck
        id={53007}
        name="Shuffled Kasplat: Halfway down the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={53008}
        name="Shuffled Kasplat: In the Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={53009}
        name="Shuffled Kasplat: A step up in the Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomOn || hasAllBananaports}
        canGetBreak={isBreathing.out && hasPineapples}
      />
      <FactoryCheck
        id={53010}
        name="Shuffled Kasplat: Back top of the 5-Door Temple"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <FactoryCheck
        id={53011}
        name="Shuffled Kasplat: Platform near Snide's"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <FactoryCheck
        id={53012}
        name="Shuffled Kasplat: Behind the Llama"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in}
        canGetBreak={canGoInLlamaTemple.out}
      />
      <FactoryCheck
        id={53013}
        name="Shuffled Kasplat: At Tiny's Prison"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && canGetPastTTIce.in && hasDiving.in}
        canGetBreak={canGoInTinyTemple.out && canGetPastTTIce.out && hasDiving.out}
      />
      <FactoryCheck
        id={53014}
        name="Shuffled Kasplat: Behind Diddy's gongs"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <FactoryCheck
        id={53015}
        name="Shuffled Kasplat: A contestant on Match Game '64"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasGrapes}
        canGetBreak={canGoInLlamaTemple.out && hasGrapes}
      />
      <FactoryCheck
        id={53016}
        name="Shuffled Kasplat: At Tiny's barrel in the Tiny Temple"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in}
        canGetBreak={canGoInTinyTemple.out}
      />
      <FactoryCheck
        id={53017}
        name="Shuffled Kasplat: Inside DK's 5DT room"
        region="5 Door Temple"
        canGetLogic={canDoDK5DT.in}
        canGetBreak={canDoDK5DT.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
