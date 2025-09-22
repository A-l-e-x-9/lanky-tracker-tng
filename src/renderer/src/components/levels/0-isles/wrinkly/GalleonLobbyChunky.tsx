import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useGalleonLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const GalleonLobbyChunky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={58}
          name="Galleon Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={useGalleonLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default GalleonLobbyChunky
