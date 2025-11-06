import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyChunky } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyChunky: React.FC = () => {
const canDo = useAztecLobbyChunky()
  return (
    <WrinklyPool>
        <IslesCheck
          id={14}
          name="Aztec Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default AztecLobbyChunky
