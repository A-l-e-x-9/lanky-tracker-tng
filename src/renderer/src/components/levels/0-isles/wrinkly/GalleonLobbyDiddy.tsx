import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useGalleonLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const GalleonLobbyDiddy: React.FC = () => {
const canDo = useGalleonLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={59}
          name="Galleon Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default GalleonLobbyDiddy
