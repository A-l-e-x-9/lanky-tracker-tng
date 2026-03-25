import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#404000',
    color: '#ffffff'
  }
}

const SlamShuffler: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const slamShuffler = useDonkStore(useShallow((state) => state.settings.progressiveSlams)) ? '' : 'slam-shuffler'

  return (
    <span>
      <span className={`${slamShuffler}`} onClick={openModal} title="Click to open the Progressive Slam Shuffler.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Progressive Slam Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Progressive Slam Shuffler</h2>
          <section className="pool">
            <p className="full-grid">Coming whenever I play a seed where I messed with the Simian Slam levels. ^^</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default SlamShuffler
