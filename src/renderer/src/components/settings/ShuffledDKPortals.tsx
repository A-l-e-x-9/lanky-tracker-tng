import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#200040',
    color: '#ffffff'
  }
}

const ShuffledDKPortals: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const portalShuffler = useDonkStore(useShallow((state) => state.settings.shuffleDKPortals)) ? '' : 'portal-shuffler'

  return (
    <span>
      <span className={`${portalShuffler}`} onClick={openModal} title="Click to open the DK Portal Shuffler.">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="DK Portal Shuffler"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>DK Portal Shuffler</h2>
          <section className="pool">
            <p className="full-grid">Coming Soon™.</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default ShuffledDKPortals
