import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

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
          <p>Also, assuming it even needs to, this tool currently doesn't account for shuffled Wrinkly/Troff 'n' Scoff Doors or Progressive Hints, because Alex hates those settings and wants them to die.</p>
          <section className="pool">
          <p>What item locks Wrinkly Kong's doors for your current seed?</p>
          //put selector like the one for the Helm doors here
          <hr />
          <p>Number of the indicated item for Japes:</p> //put CountSelector here
          <p>Number of the indicated item for Aztec:</p> //put CountSelector here
          <p>Number of the indicated item for Factory:</p> //put CountSelector here
          <p>Number of the indicated item for Galleon:</p> //put CountSelector here
          <p>Number of the indicated item for Forest:</p> //put CountSelector here
          <p>Number of the indicated item for Caves:</p> //put CountSelector here
          <p>Number of the indicated item for Castle:</p> //put CountSelector here
          <hr /> //<---Imagine still having to use XHTML-style tags in 2026. Why did the TypeScript makers design their code this way? -_-;;;
          <p>Are you playing the original game or a seed with "Kongless Hint Doors" off?<br />
          Enabling this will also make the doors Kong-locked.</p> //put checkbox here
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default SlamShuffler
