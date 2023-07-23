import React , {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcOnlineSupport } from "react-icons/fc";
import { setChatWith } from "../Redux/UserSlice";

const Chats = () => {
  const [showChat, setShowChat] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.allUsers;
  });
  const chatWith = useSelector((state) => {
    return state.chatWith;
  });
  console.log(chatWith);

  console.log(users);
  const liClickHandler = async(user) => {
    await dispatch(setChatWith(user));
    setShowChat(true)
  };
  return (
    <div className="chat-container">


      {showChat && <div className="detail-chat">
        <img src={chatWith.profilepicture} className="photo"></img>
        <h5>Thank you for contacting</h5>
        <h3>@{chatWith.name}</h3>
        <p>
          Please Don't bother yourself while typing messages , just pick up your
          phone and call on {chatWith.phone}
        </p>
        <h3>Thank You</h3>
        <button className="signout" onClick={()=>{setShowChat(false)}}>Close</button>
      </div>}


        <div>
        {users.map((obj) => {
          return (
            <div className="li"
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid azure",
              }}
              key={obj.id}
            >
              <li
                key={obj.id}
                onClick={() => {
                  liClickHandler(obj);
                }}
              >
                <span>
                  <img
                    src={obj.profilepicture}
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </span>
                <span>{obj.name}</span>
                <span>
                  <FcOnlineSupport />
                </span>
              </li>
            </div>
          );
        })}
      </div>


    </div>
  );
};

export default Chats;
