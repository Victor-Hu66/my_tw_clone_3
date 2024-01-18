import { useRecoilState } from "recoil"
import { modalState, postIdState} from "../atom/modalAtom"
import Modal from "react-modal"
import { XIcon } from "@heroicons/react/outline"

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState)
    const [postId] = useRecoilState(postIdState) 
    return (
        <div>
            <h1>Comment Modal</h1>
            {open && (
                <Modal 
                onRequestClose={() => setOpen(false)}
                isOpen={open} 
                className="max-w-lg w-[90%] h-[300px] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-200 rounded-xl shadow-md">
                    <div className="p-1">
                        <div className="border-b border-gray-200 py-2 px-1.5">
                            <div onClick={() => setOpen(false)} className="hoverEffect w-9 h-9 flex items-center justify-center">
                                <XIcon className="h-[22px] text-gray-700"/>
                            </div>
                        </div>
                        <h1>{postId}</h1>
                    </div>
                </Modal>
            )}
        </div>
    )
}