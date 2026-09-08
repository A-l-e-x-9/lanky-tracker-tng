import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import { useWrinklyDoorItem } from '@renderer/hooks/settings'
import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobby: React.FC = () => {
const canDo = useJapesLobbyGeneric()
const [locked, doorCount, notKongless] = useDonkStore(useShallow((state) => [state.settings.lockedWrinklyDoors, state.wrinklyDoors.jungleJapes, state.ui.konglessHintDoorsOff]))
const itemType = useWrinklyDoorItem()

switch (locked, notKongless) {
  case !locked && !notKongless:
    return (
      <WrinklyPool>
          <IslesCheck
            id={65}
            name="Wrinkly Door: Japes DK"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in}
            canGetBreak={canDo.out}
          />
          <IslesCheck
            id={64}
            name="Wrinkly Door: Japes Diddy"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in}
            canGetBreak={canDo.out}
          />
          <IslesCheck
            id={66}
            name="Wrinkly Door: Japes Lanky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in}
            canGetBreak={canDo.out}
          />
          <IslesCheck
            id={67}
            name="Wrinkly Door: Japes Tiny"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in}
            canGetBreak={canDo.out}
          />
          <IslesCheck
            id={63}
            name="Wrinkly Door: Japes Chunky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in}
            canGetBreak={canDo.out}
          />
      </WrinklyPool>
    )
  case locked && !notKongless:
    return (
      <WrinklyPool>
          <IslesCheck
            id={65}
            name="Wrinkly Door: Japes DK"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && currentItemCount >= doorCount}
            canGetBreak={canDo.out && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={64}
            name="Wrinkly Door: Japes Diddy"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && currentItemCount >= doorCount}
            canGetBreak={canDo.out && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={66}
            name="Wrinkly Door: Japes Lanky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && currentItemCount >= doorCount}
            canGetBreak={canDo.out && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={67}
            name="Wrinkly Door: Japes Tiny"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && currentItemCount >= doorCount}
            canGetBreak={canDo.out && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={63}
            name="Wrinkly Door: Japes Chunky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && currentItemCount >= doorCount}
            canGetBreak={canDo.out && currentItemCount >= doorCount}
          />
      </WrinklyPool>
    )
  case !locked && notKongless:
    return (
      <WrinklyPool>
          <IslesCheck
            id={65}
            name="Wrinkly Door: Japes DK"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasDK}
            canGetBreak={canDo.out && hasDK}
          />
          <IslesCheck
            id={64}
            name="Wrinkly Door: Japes Diddy"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasDiddy}
            canGetBreak={canDo.out && hasDiddy}
          />
          <IslesCheck
            id={66}
            name="Wrinkly Door: Japes Lanky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasLanky}
            canGetBreak={canDo.out && hasLanky}
          />
          <IslesCheck
            id={67}
            name="Wrinkly Door: Japes Tiny"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasTiny}
            canGetBreak={canDo.out && hasTiny}
          />
          <IslesCheck
            id={63}
            name="Wrinkly Door: Japes Chunky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasChunky}
            canGetBreak={canDo.out && hasChunky}
          />
      </WrinklyPool>
    )
  case locked && notKongless:
    return (
      <WrinklyPool>
          <IslesCheck
            id={65}
            name="Wrinkly Door: Japes DK"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasDK && currentItemCount >= doorCount}
            canGetBreak={canDo.out && hasDK && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={64}
            name="Wrinkly Door: Japes Diddy"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasDiddy && currentItemCount >= doorCount}
            canGetBreak={canDo.out && hasDiddy && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={66}
            name="Wrinkly Door: Japes Lanky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasLanky && currentItemCount >= doorCount}
            canGetBreak={canDo.out && hasLanky && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={67}
            name="Wrinkly Door: Japes Tiny"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasTiny && currentItemCount >= doorCount}
            canGetBreak={canDo.out && hasTiny && currentItemCount >= doorCount}
          />
          <IslesCheck
            id={63}
            name="Wrinkly Door: Japes Chunky"
            region="Japes-Forest Lobbies"
            canGetLogic={canDo.in && hasChunky && currentItemCount >= doorCount}
            canGetBreak={canDo.out && hasChunky && currentItemCount >= doorCount}
          />
      </WrinklyPool>
    )
  }
}

export default JapesLobby
