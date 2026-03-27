import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import SimpleRadioIcon from './SimpleRadioIcon'
import dkPortalIcon from '../../assets/images/dk-portal.png'

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
  const [setJapesPortal, setAztecPortal, setFactoryPortal, setCavesPortal] = useDonkStore(useShallow((state) => [state.setJapesPortal, state.setAztecPortal, state.setFactoryPortal, state.setCavesPortal]))
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
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            <p>Near Diddy's prison</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at the peak of the Japes Highlands."
                storeKey="portalNearDiddy"
                prefix="shuffledJapesPortals"
                updateItem={setJapesPortal}
            />
            </>
            <h3>Angry Aztec</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            <p>Anywhere in the second half of the level or the cave leading to it</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is past the gate requiring Guitar to open."
                storeKey="secondHalfPortal"
                prefix="shuffledAztecPortals"
                updateItem={setAztecPortal}
            />
            </>
            <h3>Frantic Factory</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledFactoryPortals"
                updateItem={setFactoryPortal}
            />
            <p>The R&D Room</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the R&D Room or the two hatches leading in/out of it."
                storeKey="portalInRAndD"
                prefix="shuffledFactoryPortals"
                updateItem={setFactoryPortal}
            />
            </>
            <h3>Gloomy Galleon</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Fungi Forest</h3>
            <p className="full-grid">Coming Soon™.</p>
            <h3>Crystal Caves</h3>
            <>
            <p>Vanilla/any location not listed</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is at its vanilla location or anywhere that wouldn't affect what checks you can do."
                storeKey="vanilla"
                prefix="shuffledCavesPortals"
                updateItem={setCavesPortal}
            />
            <p>The big boulder room near Cranky's</p>
            <SimpleRadioIcon
                imgUrl={dkPortalIcon}
                title="The DK Portal is in the big boulder room."
                storeKey="bigRockPortal"
                prefix="shuffledCavesPortals"
                updateItem={setCavesPortal}
            />
            </>
            <h3>Creepy Castle</h3>
            <p className="full-grid">Coming Soon™.</p>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default ShuffledDKPortals
