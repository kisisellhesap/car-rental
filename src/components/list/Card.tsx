import { FC, useState } from "react";
import { ICar } from "../../types";
import calcPrice from "../../utils/calcPrice";
import Info from "./Info";
import generateImage from "../../utils/generateImage";
import Button from "../button";
import { motion } from "motion/react";
import Modal from "../Modal/Modal";
type Props = {
  car: ICar;
};
const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      <h2 className="car-card-content-title">
        {car.make} {car.model}
      </h2>

      <div className="flex mt-7 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{calcPrice(car)}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      <div className="w-full">
        <img
          src={generateImage(car)}
          alt={car.model}
          className="w-full h-full object-fit-contain"
        />
      </div>

      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="hidden group-hover:block"
        >
          <Button
            text="Daha Fazla"
            designs="w-full text-white"
            handleClick={() => {
              setIsOpen(true);
            }}
          />

          <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
