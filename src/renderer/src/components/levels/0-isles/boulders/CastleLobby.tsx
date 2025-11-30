import BoulderPool from '@renderer/components/pools/Boulders'
import { useCastleLobby } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder on the Lanky Pad in Castle Lobby.*/
const CastleLobby: React.FC = () => {
const canDo = useCastleLobby()
  return (
    <BoulderPool>
        <IslesCheck
          id={7}
          name="Boulder on the Lanky Pad in Castle Lobby"
          region="Caves-Helm Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </BoulderPool>
  )
}

export default CastleLobby
