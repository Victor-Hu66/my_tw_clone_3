import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { useRouter  } from "next/router";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection, doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import Moment from "react-moment";
import { signIn, useSession } from "next-auth/react";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const router = useRouter()

  useEffect(() => {
    onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId, db]);

  async function sendComment() {
    await addDoc(collection(db, "posts", postId, "comment"), {
      comment: input,
      name: session.user.name,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      userId: session.user.uid
    })

    setOpen(false) 
    setInput("")
    router.push(`/posts/${postId}`)
  }

  return (
    <div>
      <h1>Comment Modal</h1>
      {open && (
        <Modal
          onRequestClose={() => setOpen(false)}
          isOpen={open}
          className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-200 rounded-xl shadow-md"
        >
          <div className="p-1">
            <div className="border-b borde   -gray-200 py-2 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-10 h-10 flex items-center justify-center"
              >
                <XIcon className="h-[23px] text-gray-700 p-0" />
              </div>
            </div>
            <div className="p-2 flex items-center space-x-1 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300"></span>
              <img
                className="h-11 w-11 rounded-full mr-4"
                src={post?.data()?.userImg}
                alt="user-img"
              />
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post?.data()?.name}
              </h4>
              <span className="text-sm sm:text-[15px]">
                @{post?.data()?.username} -{" "}
              </span>
              <span className="text-sm sm:text-[15px] hover:underline">
                <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
              </span>
            </div>
            <p className="text-gray-500 text-[15px sm:text-[16px] ml-16 mb-2 ">{post?.data()?.text}</p>

            <div className="flex p-3 space-x-3">
              <img
                src={session.user.image}
                alt="user-img"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
              />
              <div className="w-full divide-y divide-gray-200">
                <div className="">
                  <textarea
                    className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                    placeholder="Tweet your reply "
                    rows="2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <div className="flex">
                    <div
                      className=""
                      //   onClick={() => filePickerRef.current.click()}
                    >
                      <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                      {/*<input
                        type="file"
                        hidden
                        ref={filePickerRef}
                        onChange={addImageToPost}
                      /> */}
                    </div>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-slate-100" />
                  </div>
                  <button
                    onClick={sendComment}
                    disabled={!input.trim()}
                    className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
