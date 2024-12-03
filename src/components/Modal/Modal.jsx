import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1101',
    overflow: 'hidden',
    position: 'fixed',
  },
};

Modal.setAppElement('#root');

export const ModalElement =({item, isModalOpen, onClose}) => {
    if (!item) {
        return null;
    }
    
        return (
             <Modal
                    isOpen={isModalOpen}
                    onRequestClose={onClose}
                    style={customStyles}
                    contentLabel="Image Modal">
                    <img src={item.largeImageURL} alt={item.tags} />
                </Modal>
         )     
}

