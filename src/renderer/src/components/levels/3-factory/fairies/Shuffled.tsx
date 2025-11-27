import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useNumberFairy, useDartFairy, useFactoryProductionEnabled, useFactoryProductionTop, useFactoryTesting, useDkProdGb, useDiddyBlockGb } from '@renderer/hooks/factory'
import { useShuffleFairies, useBananaportAll } from '@renderer/hooks/settings'
import { useCamera, useClimbing, useGuitar, usePunch, useTriangle, useHighGrab } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasClimbing = useClimbing()
  const hasGuitar = useGuitar()
  const hasPrimatePunch = usePunch()
  const hasTriangle = useTriangle()
  const hasBananaports = useBananaportAll()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useNumberFairy()
  const vanillaFairy2 = useDartFairy()
  const prodRoomOn = useFactoryProductionEnabled()
  const prodRoomTop = useFactoryProductionTop()
  const crusher = useDkProdGb()
  const canDoTesting = useFactoryTesting()
  const canDoBlockTower = useDiddyBlockGb()
  const highGrab = useHighGrab()
  return (
    <FairyPool>
      <FactoryCheck
        id={43000}
        name="Shuffled Fairy: Vanilla Location #1 (tunnel to DK's number game)"
        region="Testing Room"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <FactoryCheck
        id={43001}
        name="Shuffled Fairy: Vanilla Location #2 (Funky's after Tiny's dart game)"
        region="Testing Room"
        canGetLogic={vanillaFairy2}
      />
      <FactoryCheck
        id={43002}
        name="Shuffled Fairy: At the vanilla entrance"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43003}
        name="Shuffled Fairy: Down the pole to the Prod Room"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43004}
        name="Shuffled Fairy: Bottom of Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43005}
        name="Shuffled Fairy: Middle of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomOn.in && hasClimbing && hasCam}
        canGetBreak={prodRoomOn.out && hasCam}
      />
      <FactoryCheck
        id={43006}
        name="Shuffled Fairy: Top of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomTop.in && hasCam}
        canGetBreak={prodRoomTop.out && hasCam}
      />
      <FactoryCheck
        id={43007}
        name="Shuffled Fairy: In Storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43008}
        name="Shuffled Fairy: At Cranky's/Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <FactoryCheck
        id={43009}
        name="Shuffled Fairy: In the tunnel to the Arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43010}
        name="Shuffled Fairy: Suffering through DK Arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43011}
        name="Shuffled Fairy: Top of Diddy's Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in && hasCam}
        canGetBreak={canDoBlockTower.out && hasCam}
      />
      <FactoryCheck
        id={43012}
        name="Shuffled Fairy: Boxes to Tiny's Dartboard"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam}
        canGetBreak={canDoTesting.out && hasCam}
      />
      <FactoryCheck
        id={43013}
        name="Shuffled Fairy: Pole to the R&D Room"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam && hasClimbing}
        canGetBreak={canDoTesting.out && hasCam}
      />
      <FactoryCheck
        id={43014}
        name="Shuffled Fairy: In Diddy's Pincode Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
      />
      <FactoryCheck
        id={43015}
        name="Shuffled Fairy: Tunnel to Tiny's Car Race"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43016}
        name="Shuffled Fairy: In Chunky's Toy Monster Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasPrimatePunch && hasTriangle}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) && highGrab && hasPrimatePunch && hasTriangle}
      />
      <FactoryCheck
        id={43017}
        name="Shuffled Fairy: At the chute to the Storage Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
      <FactoryCheck
        id={43018}
        name="Shuffled Fairy: In Chunky's Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <FactoryCheck
        id={43019}
        name="Shuffled Fairy: In the Crusher"
        region="Prod Room"
        canGetLogic={crusher.in && hasCam}
        canGetBreak={crusher.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
