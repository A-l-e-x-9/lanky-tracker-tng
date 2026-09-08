import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import { useDk, useDiddy, useLanky, useTiny, useChunky } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobby: React.FC = () => {
const canDo = useJapesLobbyGeneric()
const [locked, kongLocked] = useDonkStore(useShallow((state) => [state.settings.lockedWrinklyDoors, state.ui.konglessHintDoorsOff]))
const hasDK = useDk()
const hasDiddy = useDiddy()
const hasLanky = useLanky()
const hasTiny = useTiny()
const hasChunky = useChunky()

if (!locked && !kongLocked) {
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
  } else if (locked && !kongLocked) {
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
  } else if (!locked && kongLocked) {
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
  } else {
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
  }
}

export default JapesLobby
