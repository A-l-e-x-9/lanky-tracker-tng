import FairyPool from '@renderer/components/pools/Fairies'
import {  } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import {  } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <FairyPool>
      <GalleonCheck
        id={44006}
        name="Shuffled Fairy: Underwater between 5DS and 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44007}
        name="Shuffled Fairy: Underwater between 5DS and Candy's"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44008}
        name="Shuffled Fairy: At the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasCam}
      />
      <GalleonCheck
        id={44014}
        name="Shuffled Fairy: In Tiny's 2DS room"
        region="Shipyard Outskirts"
        canGetLogic={canReachTiny2DS.in && hasCam}
        canGetBreak={canReachTiny2DS.out && hasCam}
      />
      <GalleonCheck
        id={44015}
        name="Shuffled Fairy: In the Foghorn"
        region="Shipyard Outskirts"
        canGetLogic={canReachSub.in && hasCam}
        canGetBreak={canReachSub.out && hasCam}
      />
    </FairyPool>
  )
}

const OutskirtFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default OutskirtFairies
