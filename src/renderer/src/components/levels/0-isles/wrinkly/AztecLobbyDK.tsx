import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyDK: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Aztec Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={useAztecLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default AztecLobbyDK
