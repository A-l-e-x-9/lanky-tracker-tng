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
            <h3>Jungle Japes</h3>
            <>
            <p>Vanilla location</p>
            <input type="radio" id="vanilla" name="shuffledJapesPortals" value="vanilla" />
            <p>Near Diddy's prison</p>
            <input type="radio" id="portalNearDiddy" name="shuffledJapesPortals" value="portalNearDiddy" />
            </>
            <h3>Angry Aztec</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Frantic Factory</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Gloomy Galleon</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Fungi Forest</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Crystal Caves</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Creepy Castle</h3>
            <p className="full-grid">Coming Soon™.</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default ShuffledDKPortals
