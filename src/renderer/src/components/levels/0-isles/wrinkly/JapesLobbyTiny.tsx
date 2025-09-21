import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobbyTiny: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={67}
          name="Japes Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={useJapesLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default JapesLobbyTiny
