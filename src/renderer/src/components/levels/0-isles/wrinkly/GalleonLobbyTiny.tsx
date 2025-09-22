import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useGalleonLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const GalleonLobbyTiny: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={62}
          name="Galleon Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={useGalleonLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default GalleonLobbyTiny
