import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type ProjectsCardProps = {
	logo: string;
	logoAlt: string;
	content: React.ReactNode;
}

function ProjectComponent({logo, logoAlt, content}: ProjectsCardProps) {
	const [open, setOpen] = useState(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)
    const handleShowModal = (content: React.ReactNode) => {
        setModalContent(content)
        setOpen(!open);
    }
    const cancelButtonRef = useRef(null)
	return (
		<>
			<div className='cursor-pointer rounded-full h-[6.5rem] w-[70%] bg-color13 flex justify-center items-center shadow-inner shadow-color17' onClick={() => handleShowModal(content)}>
				<img className='px-3 max-h-11 mt-px' src={logo} alt={logoAlt} style={logoAlt === 'Kasa' ? { marginTop: '0.35rem' } : logoAlt === 'Booki' ? { marginTop: '0.25rem' } : logoAlt === 'Sophie Bluel - Architecte d’intérieur' ? { paddingLeft: '1.1rem', paddingRight: '1.1rem', marginTop: '0.3rem', } : {}}/>
			</div>
			{open && 
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
				<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
				<div className="fixed inset-0 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex bg-gradient-to-r from-color13/30 to-color17/20 min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
					<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
						<Dialog.Panel className="relative h-96 w-1/2 bg-color13 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						{modalContent}
						</Dialog.Panel>
					</Transition.Child>
					</div>
				</div>
				</Dialog>
			</Transition.Root>
			}
		</>
	)
}

export default ProjectComponent