import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useAztecLobbyChunky } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyChunky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={14}
          name="Aztec Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={useAztecLobbyChunky()}
        />
    </WrinklyPool>
  )
}

export default AztecLobbyChunky
