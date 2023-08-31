import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type ProjectsCardProps = {
	logo: string;
	logoAlt: string;
	content: React.ReactNode;
}

function ProjectComponent({logo, logoAlt, content}: ProjectsCardProps) {
	const cancelButtonRef = useRef(null)
	const [open, setOpen] = useState(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)
    const handleShowModal = (content: React.ReactNode) => {
        setModalContent(content)
        setOpen(!open);
    }

	return (
		<>
			<div className='cursor-pointer h-[6.5rem] rounded-xl transition-all flex justify-center items-center hover:scale-105 md:h-[5.5rem] sm:w-2/3 sm:h-[5.2rem] xs:w-3/4' itemProp="name" onClick={() => handleShowModal(content)}>
				<img className='px-0 max-h-[55px] max-w-[215px] lg:max-w-[200px] lg:max-h-[50px] md:max-w-[165px] md:max-h-[47px] sm:max-h-[44px] sm:max-w-[140px] xs:max-h-[35px] xs:max-w-[115px]' src={logo} alt={logoAlt} style={logoAlt === 'Kasa' || logoAlt === 'Booki' || logoAlt === 'Menu Maker by Qwenta' ? { paddingInline: '4.5%'} : {}}/>
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
						<Dialog.Panel className="relative w-1/2 bg-color13 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all xl:w-7/12 lg:w-2/3 lg:min-h-fit lg:mb-20 md:w-3/4 sm:w-5/6">
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

// Dialog.Panel => h-96 (24rem) - - after Diploma