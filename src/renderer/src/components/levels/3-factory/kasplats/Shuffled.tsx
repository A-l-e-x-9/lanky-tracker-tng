import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useProductionTopKasplat, useProductionBaseKasplat, useResearchKasplat, useBlockKasplat, useFactoryProductionEnabled, useFactoryProductionTop } from '@renderer/hooks/factory'
import { useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useMini, useDk, useTwirl, useTrombone } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'
import StartKasplats from './Start'
import StarcadeKasplats from './Starcade'

const ShuffledKasplats: React.FC = () => {
const DKVanillaKasplat = useProductionTopKasplat()
const diddyVanillaKasplat = useProductionBaseKasplat()
const lankyVanillaKasplat = useResearchKasplat()
const chunkyVanillaKasplat = useBlockKasplat()
const isBreathing = useGeneralThing()
const canDoTinyProd = useFactoryProductionTop()
const hasClimbing = useClimbing()
const hasAllBananaports = useBananaportAll()
const hasMiniMonkey = useMini()
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
const hasTrombone = useTrombone()
const prodRoomOn = useFactoryProductionEnabled()
  return (
    <KasplatPool>
      <StartKasplats />
      <StarcadeKasplats />
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
        id={53004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (at the Block Tower)"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53007}
        name="Shuffled Kasplat: Halfway down the hatch"
        region="Prod Room"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={53009}
        name="Shuffled Kasplat: A step up in the Prod Room"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in || prodRoomOn.in || hasAllBananaports}
        canGetBreak={canDoTinyProd.out || prodRoomOn.out}
      />
      <FactoryCheck
        id={53010}
        name="Shuffled Kasplat: Window shopping"
        region=""
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={53012}
        name="Shuffled Kasplat: By the car race entrance"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53013}
        name="Shuffled Kasplat: At Tiny's dartboard"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in && hasMiniMonkey}
        canGetBreak={chunkyVanillaKasplat.out && hasMiniMonkey}
      />
      <FactoryCheck
        id={53014}
        name="Shuffled Kasplat: In the crusher"
        region="Prod Room"
        canGetLogic={prodRoomOn.in}
        canGetBreak={prodRoomOn.out}
      />
      <FactoryCheck
        id={53015}
        name="Shuffled Kasplat: Past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in && isHinaKagiyama}
        canGetBreak={canDoTinyProd.out && hasDK}
      />
      <FactoryCheck
        id={53016}
        name="Shuffled Kasplat: Ripping his hair out while playing Lanky's damn piano game"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in && hasTrombone}
        canGetBreak={lankyVanillaKasplat.out && hasTrombone}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
