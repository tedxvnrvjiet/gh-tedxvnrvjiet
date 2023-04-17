import React from 'react'
import Modal from 'react-modal'
import { AiFillYoutube } from "react-icons/ai";
function Videobutton({props}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function handleCloseModal () {
        setIsOpen(false);
      }
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            bottom: 'auto',
            marginRight: '-40%',
            backgroundColor:"transparent",
            transform: 'translate(-50%, -50%)',
            color: 'white',
        },
    };
  return (
    <div>
        <button
                className="lg:block rounded-lg hover:bg-white  hover:text-red-700 text-white ease-in duration-300 delay-400 bg-red-800 px-2 mx-auto mobile:ml-20 lg:mx-auto w-28"
                onClick={openModal}
                >
                    {/* <img className="w-52 rounded-full" src={props.image} alt={props.name} /> */}
                    <AiFillYoutube className="  ai-5x inline" size='2.4rem'/>
                    <p className=' font-normal inline'>Talk</p>
                </button>
                <div onClick={handleCloseModal}>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        ariaHideApp={false}
                    >
                        {/* {s.video} */}
                        <iframe id="vid_frame" src={props} title={props}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mx-auto my-auto md:w-[425px] mobile:w-[280px] md:h-[252px] lg:w-[800px] lg:h-[450px]'></iframe>
                    </Modal>
                </div>
    </div>
  )
}

export default Videobutton