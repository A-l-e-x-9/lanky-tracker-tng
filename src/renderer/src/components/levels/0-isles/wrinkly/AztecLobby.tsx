import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobbyDK: React.FC = () => {
const canDo = useAztecLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Aztec Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={15}
          name="Aztec Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={17}
          name="Aztec Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={18}
          name="Aztec Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
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

export default AztecLobbyDK
