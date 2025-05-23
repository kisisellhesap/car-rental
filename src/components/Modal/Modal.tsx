import { FC } from "react";
import { ICar } from "../../types";
import Images from "./Images";
import formatData from "../../utils/formatData";

type Props = {
  isOpen: boolean;
  car: ICar;
  close: () => void;
};

const Modal: FC<Props> = ({ isOpen, car, close }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] grid place-items-center z-20">
        <div className="bg-white p-6 relative max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
          <button
            className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            onClick={close}
          >
            <img src="/close.svg" alt="x" />
          </button>

          <Images car={car} />

          {formatData(car).map(([key, value]) => {
            return (
              <p className="flex justify-between gap-20" key={key}>
                <span className="capitalize">{key}</span>
                <span className="font-semibold capitalize">
                  {value === "Y" ? "Yes" : value == "N" ? "No" : value || "-"}
                </span>
              </p>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Modal;
