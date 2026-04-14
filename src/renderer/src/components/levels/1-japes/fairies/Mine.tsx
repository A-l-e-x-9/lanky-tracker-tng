import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { usePaintingFairy, useJapesMine, useJapesUnderground } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy2 = usePaintingFairy()
  const canGoInMine = useJapesMine()
  const canGoUnder = useJapesUnderground()
  return (
    <FairyPool>
      <JapesCheck
        id={41001}
        name="Shuffled Fairy: Vanilla Location #2 (Lanky's painting room)"
        region="Japes Caves and Mines"
        canGetLogic={vanillaFairy2}
      />
      <JapesCheck
        id={41008}
        name="Shuffled Fairy: Inside Diddy's mine"
        region="Japes Caves and Mines"
        canGetLogic={canGoInMine.in && hasCam}
        canGetBreak={canGoInMine.out && hasCam}
      />
      <JapesCheck
        id={41009}
        name="Shuffled Fairy: Along Chunky's underground pathway"
        region="Japes Caves and Mines"
        canGetLogic={canGoUnder.in && hasCam}
        canGetBreak={canGoUnder.out && hasCam}
      />
      <JapesCheck
        id={41010}
        name="Shuffled Fairy: At the end of the Chunky underground path"
        region="Japes Caves and Mines"
        canGetLogic={canGoUnder.in && hasCam}
        canGetBreak={canGoUnder.out && hasCam}
      />
    </FairyPool>
  )
}

const MineFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default MineFairies
