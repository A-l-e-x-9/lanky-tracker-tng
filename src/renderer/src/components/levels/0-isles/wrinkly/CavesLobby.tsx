import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useCavesLobbyGeneric } from '@renderer/hooks/isles'
import { useRocket } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyDK: React.FC = () => {
const canDo = useCavesLobbyGeneric()
const check = useRocket()
  return (
    <WrinklyPool>
        <IslesCheck
          id={34}
          name="Caves Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={29}
          name="Caves Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
        <IslesCheck
          id={35}
          name="Caves Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={36}
          name="Caves Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={28}
          name="Caves Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyDK
