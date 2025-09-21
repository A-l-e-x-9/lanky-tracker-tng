import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useGalleonLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const GalleonLobbyLanky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={61}
          name="Galleon Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={useGalleonLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default GalleonLobbyLanky
