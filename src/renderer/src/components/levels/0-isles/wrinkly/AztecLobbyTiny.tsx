import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyTiny: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={18}
          name="Aztec Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={useAztecLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default AztecLobbyTiny
