import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobbyTiny: React.FC = () => {
const canDo = useJapesLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={67}
          name="Japes Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default JapesLobbyTiny
