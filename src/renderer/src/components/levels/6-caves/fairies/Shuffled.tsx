import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useCabinFairy, useIglooFairy, useIceWalls, useTinyCaveGb, useCavesMiniFunky, useLankyCastleGb, useChunkyIglooGb, useCavesIgloo, useCavesLankyCabin } from '@renderer/hooks/caves'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, usePunch, useGuitar, useTriangle } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useCabinFairy()
  const vanillaFairy2 = useIglooFairy()
  const hasPunch = usePunch()
  const wallsAlreadyPunched = useIceWalls()
  const canReachBonusCave = useTinyCaveGb()
  const canReachBlueprintCave = useCavesMiniFunky()
  const canDoIceCastle = useLankyCastleGb()
  const spearAndMagicHelmet = useChunkyIglooGb()
  const canReachIgloo = useCavesIgloo()
  const hasGuitar = useGuitar()
  const canReachLankyCabin = useCavesLankyCabin()
  const hasTriangle = useTriangle()
  return (
    <FairyPool>
      <CavesCheck
        id={46000}
        name="Shuffled Fairy: Vanilla Location #1 (Diddy's upper 5DC room)"
        region="Caves Cabins"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <CavesCheck
        id={46001}
        name="Shuffled Fairy: Vanilla Location #2 (Tiny's 5DI room)"
        region="Caves Igloo"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <CavesCheck
        id={46002}
        name="Shuffled Fairy: At vanilla level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46003}
        name="Shuffled Fairy: In the Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={(hasPunch || wallsAlreadyPunched) && isBreathing.in}
        canGetBreak={(hasPunch || wallsAlreadyPunched) && isBreathing.out}
      />
      <CavesCheck
        id={46004}
        name="Shuffled Fairy: Getting lunch at White Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46005}
        name="Shuffled Fairy: Boulder behind the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46006}
        name="Shuffled Fairy: At the Warp 5 pillar"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46007}
        name="Shuffled Fairy: Inside the giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={(hasPunch || wallsAlreadyPunched) && isBreathing.in}
        canGetBreak={(hasPunch || wallsAlreadyPunched) && isBreathing.out}
      />
      <CavesCheck
        id={46008}
        name="Shuffled Fairy: Tiny's bonus cave"
        region="Crystal Caves Main"
        canGetLogic={canReachBonusCave.in && hasCam}
        canGetBreak={canReachBonusCave.out && hasCam}
      />
      <CavesCheck
        id={46009}
        name="Shuffled Fairy: Over the 5-Door Igloo"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46010}
        name="Shuffled Fairy: Near Diddy's waterfall GB"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46011}
        name="Shuffled Fairy: In the Blueprint cave"
        region="Crystal Caves Main"
        canGetLogic={canReachBlueprintCave.in && hasCam}
        canGetBreak={canReachBlueprintCave.out && hasCam}
      />
      <CavesCheck
        id={46012}
        name="Shuffled Fairy: Lodging at the 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46013}
        name="Shuffled Fairy: Lodging at Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46014}
        name="Shuffled Fairy: Underneath the bridge to Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={46015}
        name="Shuffled Fairy: Inside the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in && hasCam}
        canGetBreak={canDoIceCastle.out && hasCam}
      />
      <CavesCheck
        id={46016}
        name="Shuffled Fairy: Twying to KILL THE WABBIT again"
        region="Caves Igloo"
        canGetLogic={spearAndMagicHelmet.in && hasCam}
        canGetBreak={spearAndMagicHelmet.out && hasCam}
      />
      <CavesCheck
        id={46017}
        name="Shuffled Fairy: Fretting over Diddy's barrel puzzle"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasGuitar && hasCam}
        canGetBreak={canReachIgloo.out && hasGuitar && hasCam}
      />
      <CavesCheck
        id={46018}
        name="Shuffled Fairy: Over DK's ice wall maze"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasGuitar && hasCam}
        canGetBreak={canReachIgloo.out && hasGuitar && hasCam}
      />
      <CavesCheck
        id={46019}
        name="Shuffled Fairy: Inside Lanky's Cabin"
        region="Caves Cabins"
        canGetLogic={canReachLankyCabin.in && hasCam}
        canGetBreak={canReachLankyCabin.out && hasCam}
      />
      <CavesCheck
        id={46020}
        name="Shuffled Fairy: AVoiding the spotlight in Chunky's 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasTriangle}
        canGetBreak={isBreathing.out && hasTriangle}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
