import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobbyLanky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={66}
          name="Japes Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={useJapesLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default JapesLobbyLanky
