import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeid(25),
        })
      );
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]); 

  return (
    <>
      <div>
        <h1 className="h-[600px] border border-black ml-2 p-2 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </h1>
      </div>

      <form
        className="border border-black p-2 m-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Subbu",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="p-2 border border-gray-400 rounded-md"
          placeholder="Type something..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}/>

        <button className="px-2 bg-green-400 ml-3 rounded-lg border border-black">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;