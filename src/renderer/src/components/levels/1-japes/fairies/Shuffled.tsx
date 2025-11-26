import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useRambiFairy, usePaintingFairy, useMtnCrate, useJapesHive, useTinyHiveGb, useJapesKongGates, useJapesUnderground, useJapesMine } from '@renderer/hooks/japes'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useRambiFairy()
  const vanillaFairy2 = usePaintingFairy()
  const canReachUpperArea = useMtnCrate()
  const canGoPastGates = useJapesKongGates()
  const canReachHiveArea = useJapesHive()
  const canGoInMine = useJapesMine()
  const canGoInHive = useTinyHiveGb()
  const canGoUnder = useJapesUnderground()
  return (
    <FairyPool>
      <JapesCheck
        id={11000}
        name="Shuffled Fairy: Vanilla Location #1 (pool after Rambi door)"
        region="Stormy Area"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <JapesCheck
        id={11001}
        name="Shuffled Fairy: Vanilla Location #2 (Lanky's painting room)"
        region="Japes Caves and Mines"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <JapesCheck
        id={11002}
        name="Shuffled Fairy: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachUpperArea.in && hasCam}
        canGetBreak={canReachUpperArea.out && hasCam}
      />
      <JapesCheck
        id={11003}
        name="Shuffled Fairy: Overlooking Diddy's mine"
        region="Japes Hillside"
        canGetLogic={canReachUpperArea.in && hasCam}
        canGetBreak={canReachUpperArea.out && hasCam}
      />
      <JapesCheck
        id={11004}
        name="Shuffled Fairy: Over Chunky's cave entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11005}
        name="Shuffled Fairy: In the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasCam}
        canGetBreak={canReachHiveArea.out && hasCam}
      />
      <JapesCheck
        id={11006}
        name="Shuffled Fairy: In the hive itself"
        region="Hive Area"
        canGetLogic={canGoInHive.in && hasCam}
        canGetBreak={canGoInHive.out && hasCam}
      />
      <JapesCheck
        id={11007}
        name="Shuffled Fairy: At Cranky's"
        region="Stormy Area"
        canGetLogic={canGoPastGates.in && hasCam}
        canGetBreak={canGoPastGates.out && hasCam}
      />
      <JapesCheck
        id={11008}
        name="Shuffled Fairy: Inside Diddy's mine"
        region="Japes Caves and Mines"
        canGetLogic={canGoInMine.in && hasCam}
        canGetBreak={canGoInMine.out && hasCam}
      />
      <JapesCheck
        id={11009}
        name="Shuffled Fairy: Along Chunky's underground pathway"
        region="Japes Caves and Mines"
        canGetLogic={canGoUnder.in && hasCam}
        canGetBreak={canGoUnder.out && hasCam}
      />
      <JapesCheck
        id={11010}
        name="Shuffled Fairy: At the end of the Chunky underground path"
        region="Japes Caves and Mines"
        canGetLogic={canGoUnder.in && hasCam}
        canGetBreak={canGoUnder.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
