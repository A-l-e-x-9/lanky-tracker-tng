import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobbyChunky: React.FC = () => {
const canDo = useForestLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={46}
          name="Forest Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default ForestLobbyChunky
