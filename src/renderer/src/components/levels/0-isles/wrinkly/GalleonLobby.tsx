import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useGalleonLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const GalleonLobbyDK: React.FC = () => {
const canDo = useGalleonLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={60}
          name="Galleon Lobby DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={59}
          name="Galleon Lobby Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={61}
          name="Galleon Lobby Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={62}
          name="Galleon Lobby Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={58}
          name="Galleon Lobby Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default GalleonLobbyDK
