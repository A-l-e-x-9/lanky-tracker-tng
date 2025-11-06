import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobbyDiddy: React.FC = () => {
const canDo = useJapesLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={64}
          name="Japes Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default JapesLobbyDiddy
