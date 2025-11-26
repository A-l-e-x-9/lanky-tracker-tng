import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useNumberFairy, useDartFairy, useFactoryProductionEnabled, useFactoryProductionTop, useFactoryTesting, useDkProdGb, useDiddyBlockGb } from '@renderer/hooks/factory'
import { useShuffleFairies, useBananaportAll } from '@renderer/hooks/settings'
import { useCamera, useClimbing, useGuitar, usePunch, useTriangle, useHighGrab } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasClimbing = useClimbing()
  const hasGuitar = useGuitar()
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
      <AztecCheck
        id={13000}
        name="Shuffled Fairy: Vanilla Location #1 (tunnel to DK's number game)"
        region="Testing Room"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <AztecCheck
        id={13001}
        name="Shuffled Fairy: Vanilla Location #2 (Funky's after Tiny's dart game)"
        region="Testing Room"
        canGetLogic={vanillaFairy2}
      />
      <AztecCheck
        id={13002}
        name="Shuffled Fairy: At the vanilla entrance"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={13003}
        name="Shuffled Fairy: Down the pole to the Prod Room"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={13004}
        name="Shuffled Fairy: Bottom of Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={13005}
        name="Shuffled Fairy: Middle of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomOn.in && hasClimbing && hasCam}
        canGetBreak={prodRoomOn.out && hasCam}
      />
      <AztecCheck
        id={13006}
        name="Shuffled Fairy: Top of Prod Room"
        region="Prod Room"
        canGetLogic={prodRoomTop.in && hasCam}
        canGetBreak={prodRoomTop.out && hasCam}
      />
      <AztecCheck
        id={13007}
        name="Shuffled Fairy: In Storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={13008}
        name="Shuffled Fairy: At Cranky's/Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={13009}
        name="Shuffled Fairy: In the tunnel to the Arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <AztecCheck
        id={13010}
        name="Shuffled Fairy: Suffering through DK Arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasBananaports)}
      />
      <AztecCheck
        id={13011}
        name="Shuffled Fairy: Top of Diddy's Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in && hasCam}
        canGetBreak={canDoBlockTower.out && hasCam}
      />
      <AztecCheck
        id={13012}
        name="Shuffled Fairy: Boxes to Tiny's Dartboard"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam}
        canGetBreak={canDoTesting.out && hasCam}
      />
      <AztecCheck
        id={13013}
        name="Shuffled Fairy: Pole to the R&D Room"
        region="Testing Room"
        canGetLogic={canDoTesting.in && hasCam && hasClimbing}
        canGetBreak={canDoTesting.out && hasCam}
      />
      <AztecCheck
        id={13014}
        name="Shuffled Fairy: In Diddy's Pincode Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) && hasGuitar}
      />
      <AztecCheck
        id={13015}
        name="Shuffled Fairy: Tunnel to Tiny's Car Race"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
      <AztecCheck
        id={13016}
        name="Shuffled Fairy: In Chunky's Toy Monster Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports) && hasPrimatePunch && hasTriangle}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports) highGrab && hasPrimatePunch && hasTriangle}
      />
      <AztecCheck
        id={13017}
        name="Shuffled Fairy: At the chute to the Storage Room"
        region="R&D Room"
        canGetLogic={canDoTesting.in && hasCam && (hasClimbing || hasBananaports)}
        canGetBreak={canDoTesting.out && hasCam && (hasClimbing || hasBananaports)}
      />
      <AztecCheck
        id={13018}
        name="Shuffled Fairy: In Chunky's Dark Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <AztecCheck
        id={13019}
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
