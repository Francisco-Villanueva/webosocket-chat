import { IMessage } from "@/types/message.type";
import { Socket } from "socket.io-client";

export default function Message({
  data,
  username,
}: {
  data: IMessage;
  socket: Socket;
  username: string;
}) {
  const { message, owner, time } = data;

  const isOwner = owner.toLowerCase() === username.toLowerCase();
  return (
    <div
      className={` ${
        isOwner ? "bg-primary self-end" : "bg-black/90"
      } p-2 m-2 rounded-md text-secondary flex flex-col items-start text-[16px] min-w-[250px] max-w-[50%] text-wrap   `}
    >
      {!isOwner && (
        <section className="  text-green-200 ">
          <p>{owner}</p>
        </section>
      )}
      <div className=" max-w-[100%] text-wrap w-full    ">
        <p className="max-w-[100%] ">{message}</p>
        <p className="text-accent/50  w-full text-right text-[11px]  ">
          {time}
        </p>
      </div>
    </div>
  );
}
