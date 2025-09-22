import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyDiddy: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={15}
          name="Aztec Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={useAztecLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default AztecLobbyDiddy
