import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import { WrinklyDoorSelector } from './HelmDoorSelector'
import CheckIcon from './CheckIcon'
import CountSelector from './CountSelector'
import { useWrinklyDoorItem } from '@renderer/hooks/settings'
import gbIcon from '../../assets/images/GB.png'
import blueprintIcon from '../../assets/images/lanky_bp.png'
import crownIcon from '../../assets/images/crown.png'
import keyIcon from '../../assets/images/key.png'
import medalIcon from '../../assets/images/settings/bananamedal.gif'
import fairyIcon from '../../assets/images/fairy.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'
import pearlIcon from '../../assets/images/pearl.png'
import cbIcon from '../../assets/images/settings/rainbow_bananas.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#000000',
    color: '#ffffff'
  }
}

const SlamShuffler: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const wrinklyDoorShuffler = useDonkStore(useShallow((state) => state.settings.lockedWrinklyDoors)) ? '' : 'locked-wrinkly'
  const [setUi, setWrinklyDoorCount] = useDonkStore(useShallow((state) => [state.setUi, state.setWrinklyDoorCount]))
  const wrinklyDoorItem = useWrinklyDoorItem()
  const capRemoved = useDonkStore(useShallow((state) => state.ui.itemCountModifier))
  const wrinklyDoorItemToIcon = (num): string => {
    return num == 1 ? blueprintIcon : num == 2 ? crownIcon : num == 3 ? keyIcon : num == 4 ? medalIcon : num == 5 ? fairyIcon : num == 6 ? rainbowCoinIcon : num == 7 ? pearlIcon : num == 8 ? cbIcon : gbIcon
  }

  return (
    <span>
      <span className={`${wrinklyDoorShuffler}`} onClick={openModal} title="Click to open Wrinkly door settings.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Wrinkly Door Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Wrinkly Door Settings</h2>
          <p><strong>WARNING:</strong> For some incredibly bizarre-ass reason, whenever Wrinkly doors are in the rotation, passing by a locked Wrinkly door won't cause her to say "I will not reveal my secret until X items" like she would when they are out, thus completely killing the purpose of this tool. Even worse, your spoiler log will only tell you the maximum amount of an item you need, not the amount for each level. I might make it in the future so that you only need to put in the max amount, and this tracker will determine the rest by multiplying by sevenths, but that's hard. In the meantime, please go <a href="https://github.com/2dos/DK64-Randomizer/issues">yell at 2Dos to fix this Randomizer issue</a> if he hasn't already.</p>
          <p>Also, assuming it even needs to, this tool currently doesn't account for shuffled Wrinkly/Troff 'n' Scoff Doors or Progressive Hints, because I hate those settings and want them to die. This is probably why I don't actually participate in the races seen on the DK64 Speedrunning YouTube channel. D:</p>
          <section className="pool">
          <p></p>
          <p></p>
          <p>What item locks Wrinkly Kong's doors for your current seed?</p>
          <WrinklyDoorSelector />
          <p></p>
          <p></p>
          <hr class="full-grid" style={{ margin: `10px 0px` }} />
          <p>Number of the item needed for Japes:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Jungle Japes?"
            storeKey="jungleJapes"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p>Number of the item needed for Aztec:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Angry Aztec?"
            storeKey="angryAztec"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p>Number of the item needed for Factory:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Frantic Factory?"
            storeKey="franticFactory"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p>Number of the item needed for Galleon:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Gloomy Galleon?"
            storeKey="gloomyGalleon"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p>Number of the item needed for Forest:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Fungi Forest?"
            storeKey="fungiForest"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p>Number of the item needed for Caves:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Crystal Caves?"
            storeKey="crystalCaves"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p></p>
          <p></p>
          <p>Number of the item needed for Castle:</p>
          <CountSelector
            imgUrl={wrinklyDoorItemToIcon(wrinklyDoorItem)}
            title="How much of the indicated item do you need for Creepy Castle?"
            storeKey="creepyCastle"
            prefix="wrinklyDoors"
            setCount={setWrinklyDoorCount}
            maxValue={wrinklyDoorItem == 1 ? 40 : wrinklyDoorItem == 2 ? (capRemoved ? 255 : 10) : wrinklyDoorItem == 3 ? 8 : wrinklyDoorItem == 4 ? (capRemoved ? 255 : 40) : wrinklyDoorItem == 5 ? (capRemoved ? 255 : 20) : wrinklyDoorItem == 6 ? (capRemoved ? 255 : 16) : wrinklyDoorItem == 7 ? (capRemoved ? 255 : 5) : wrinklyDoorItem == 8 ? 3500 : (capRemoved ? 255 : 201)}
          />
          <p></p>
          <p></p>
          <hr class="full-grid" style={{ margin: `10px 0px` }} />
          <p>Are you playing the original game or a seed with "Kongless Hint Doors" off?<br />
          Enabling this will also make the doors Kong-locked.</p>
          <CheckIcon storeKey="konglessHintDoorsOff" prefix="ui" updateItem={setUi} />
          <p></p>
          <p></p>
          <p>Does your seed have off the option to make the Forest Lobby doors available normally?<br />
          Enabling this will cause you to need Gorilla Grab for every Wrinkly Door there except for DK's.</p>
          <CheckIcon storeKey="fungiLobbyOptionOff" prefix="ui" updateItem={setUi} />
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default SlamShuffler
