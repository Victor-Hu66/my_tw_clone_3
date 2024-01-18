import { useRecoilState } from "recoil"
import { modalState} from "../atom/modalAtom"
import Modal from "react-modal"

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState )
    return (
        <div>
            <h1>Comment Modal</h1>
            {open && (
                <Modal 
                onRequestClose={() => setOpen(false)}
                isOpen={open} 
                className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-200 rounded-xl shadow-md">
                    <h1>Comment Modal</h1>
                </Modal>
            )}
        </div>
    )
}