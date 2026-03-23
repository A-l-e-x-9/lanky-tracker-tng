import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#004000',
    color: '#ffffff'
  }
}

const LoadingZoneRandomizer: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const lzrShuffler = useDonkStore(useShallow((state) => state.settings.shuffleLoadingZones)) ? '' : 'lzr-shuffler'

  return (
    <span>
      <span className={`${lzrShuffler}`} onClick={openModal} title="Click to open the Loading Zone Randomizer.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="LZR Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Loading Zone Randomizer</h2>
          <section className="pool">
            <p className="full-grid">Coming Soon™.</p>
            <p className="full-grid">And by "soon", I mean "when Satoru Iwata comes back to Nintendo". I absolutely HATE LZR, so this will probably be the last thing I ever do along with shuffling the colored bananas. =_=; If YOU have a solution, why don't you edit this damn thing yourself and make a pull request? -Alex</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default LoadingZoneRandomizer
