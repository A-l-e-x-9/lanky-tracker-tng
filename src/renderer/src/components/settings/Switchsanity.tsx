import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import { useIsSwitchsanity } from '@renderer/hooks/settings'
import SwitchsanitySwitch from './SwitchsanitySwitch'

import chunkyKongIcon from '../../assets/images/chunky.png'
import chunkyGunIcon from '../../assets/images/chunky_gun.png'
import chunkyMoveIcon from '../../assets/images/chunky_move.png'
import chunkyMusicIcon from '../../assets/images/chunky_inst.png'
import chunkyPadIcon from '../../assets/images/chunkypad.png'
import diddyKongIcon from '../../assets/images/diddy.png'
import diddyGunIcon from '../../assets/images/diddy_gun.png'
import diddyMusicIcon from '../../assets/images/diddy_inst.png'
import diddyMoveIcon from '../../assets/images/diddy_move.png'
import dkKongIcon from '../../assets/images/dk.png'
import dkGunIcon from '../../assets/images/dk_gun.png'
import dkMusicIcon from '../../assets/images/dk_inst.png'
import dkMoveIcon from '../../assets/images/dk_move.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import lankyKongIcon from '../../assets/images/lanky.png'
import lankyGunIcon from '../../assets/images/lanky_gun.png'
import lankyMusicIcon from '../../assets/images/lanky_inst.png'
import lankyPadIcon from '../../assets/images/lankypad.png'
import tinyKongIcon from '../../assets/images/tiny.png'
import tinyGunIcon from '../../assets/images/tiny_gun.png'
import tinyMusicIcon from '../../assets/images/tiny_inst.png'
import tinyPadIcon from '../../assets/images/tinypad.png'
import unknownIcon from '../../assets/images/unknown-small.png'
import anyGunIcon from '../../assets/images/settings/hard_shoot.png'
import anyInstIcon from '../../assets/images/candy.png'

const allKong = [dkKongIcon, diddyKongIcon, lankyKongIcon, tinyKongIcon, chunkyKongIcon]
const allGun = [dkGunIcon, diddyGunIcon, lankyGunIcon, tinyGunIcon, chunkyGunIcon, anyGunIcon]
const allMusic = [dkMusicIcon, diddyMusicIcon, lankyMusicIcon, tinyMusicIcon, chunkyMusicIcon, anyInstIcon]

const freeDiddy = [unknownIcon].concat(allGun)
const freeTiny = [unknownIcon, diddyMoveIcon, chunkyMoveIcon]

const FreeKongSelector: React.FC = () => {
  const [switches] = useDonkStore(useShallow((state) => [state.switchsanitySwitches]))
  return (
    <>
      <p>To free Diddy:</p>
      <SwitchsanitySwitch currValue={switches.freeDiddy} storeKey="freeDiddy" images={freeDiddy} />
      <p>To free Lanky:</p>
      <SwitchsanitySwitch currValue={switches.freeLanky} storeKey="freeLanky" images={allMusic} />
      <p>To free Tiny:</p>
      <SwitchsanitySwitch currValue={switches.freeTiny} storeKey="freeTiny" images={freeTiny} />
    </>
  )
}

const StandardSwitchsanitySelector: React.FC = () => {
  const [switches] = useDonkStore(useShallow((state) => [state.switchsanitySwitches]))
  return (
    <>
      <p>To activate the Diddy Barrel in Isles:</p>
      <SwitchsanitySwitch
        currValue={switches.islesTrombone}
        storeKey="islesTrombone"
        images={allMusic}
      />
      <p>To get Chunky's hint in Aztec Lobby:</p>
      <SwitchsanitySwitch
        currValue={switches.islesAztec}
        storeKey="islesAztec"
        images={allGun}
      />
      <p>To get the infamous Forest Lobby fairy:</p>
      <SwitchsanitySwitch currValue={switches.islesForest} storeKey="islesForest" images={allGun} />
      <p>To reach the top of Krem Isle:</p>
      <SwitchsanitySwitch
        currValue={switches.islesMonkeyport}
        storeKey="islesMonkeyport"
        images={[tinyPadIcon, dkPadIcon, lankyPadIcon]}
      />
      <p>To activate the ropes in Helm Lobby:</p>
      <SwitchsanitySwitch
        currValue={switches.islesHelm}
        storeKey="islesHelm"
        images={[
          chunkyPadIcon,
          dkMoveIcon,
          diddyMoveIcon,
          dkMusicIcon,
          diddyMusicIcon,
          lankyMusicIcon,
          tinyMusicIcon,
          chunkyMusicIcon
        ]}
      />
      <p>To open the Japes Hive Area:</p>
      <SwitchsanitySwitch currValue={switches.japesHive} storeKey="japesHive" images={allGun} />
      <p>To open the Japes Rambi Cage:</p>
      <SwitchsanitySwitch currValue={switches.japesRambi} storeKey="japesRambi" images={allGun} />
      <p>To open the Japes Painting Room:</p>
      <SwitchsanitySwitch
        currValue={switches.japesPainting}
        storeKey="japesPainting"
        images={allGun}
      />
      <p>To open Diddy's early tunnel in Japes:</p>
      <SwitchsanitySwitch currValue={switches.japesSide} storeKey="japesSide" images={allGun} />
      <p>To get Aztec Early Kasplat:</p>
      <SwitchsanitySwitch
        currValue={switches.aztecBlueprint}
        storeKey="aztecBlueprint"
        images={allGun}
      />
      <p>To get Aztec Back Access:</p>
      <SwitchsanitySwitch currValue={switches.aztecBack} storeKey="aztecBack" images={allMusic} />
      <p>To enter Aztec Llama Temple 1:</p>
      <SwitchsanitySwitch currValue={switches.aztecLlama1} storeKey="aztecLlama1" images={allGun} />
      <p>To enter Aztec Llama Temple 2:</p>
      <SwitchsanitySwitch currValue={switches.aztecLlama2} storeKey="aztecLlama2" images={allGun} />
      <p>To enter Aztec Llama Temple 3:</p>
      <SwitchsanitySwitch currValue={switches.aztecLlama3} storeKey="aztecLlama3" images={allGun} />
      <p>To open Aztec Quicksand Tunnel:</p>
      <SwitchsanitySwitch
        currValue={switches.aztecDeadEnd}
        storeKey="aztecDeadEnd"
        images={allKong}
      />
      <p>To open Galleon Lighthouse Area:</p>
      <SwitchsanitySwitch
        currValue={switches.galleonLighthouse}
        storeKey="galleonLighthouse"
        images={allGun}
      />
      <p>To open Galleon Outskirts Area:</p>
      <SwitchsanitySwitch
        currValue={switches.galleonOutskirts}
        storeKey="galleonOutskirts"
        images={allGun}
      />
      <p>To reach Galleon Cannon Game:</p>
      <SwitchsanitySwitch
        currValue={switches.galleonCannon}
        storeKey="galleonCannon"
        images={allGun}
      />
      <p>To reach Forest Area 4:</p>
      <SwitchsanitySwitch
        currValue={switches.forestOwlTree}
        storeKey="forestOwlTree"
        images={allGun}
      />
      <p>First switch to open Forest Area 2:</p>
      <SwitchsanitySwitch currValue={switches.forestBean1} storeKey="forestBean1" images={allGun} />
      <p>Second switch to open Forest Area 2:</p>
      <SwitchsanitySwitch currValue={switches.forestBean2} storeKey="forestBean2" images={allGun} />
    </>
  )
}

const SwitchsanitySelector: React.FC = () => {
  const isSwitchsanity = useIsSwitchsanity()
  return (
    <section className="switchsanity-settings">
      <h4>Switchsanity</h4>
      <section>
        <FreeKongSelector />
        {isSwitchsanity ? <StandardSwitchsanitySelector /> : null}
      </section>
    </section>
  )
}

export default SwitchsanitySelector
