import * as React from "react";
import iconTrash from '/src/assets/icons/Icon-trash.svg';
import iconEdit from '/src/assets/icons/Icon-edit.svg';
import { CardResponse } from "@/models/responses/cardResponse";

interface CardProps {
  card: CardResponse;
  onDelete: (id: number) => void;
  onEdit: () => void;
}

const Card: React.FC<CardProps> = ({ card, onDelete, onEdit }) => {
  return (
    <div className="mt-6">
      <div className="w-[234px] h-[267px] bg-[#FFFFFF] rounded-[8px] border border-[#E4E4E4] shadow-card">
        <div className="flex flex-col h-full mt-5">
          <div className="flex justify-center">
            <div className="w-[95px] h-[95px] bg-[#F6F4F6] border border-[#E4E4E4] rounded-full flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`data:image/jpeg;base64,${card.photoBase64}`}
                alt="Imagem Card"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="w-[169px] h-[2px] bg-[red]"></div>
          </div>

          <div className="flex justify-center mt-1">
            <div className="w-[161px] h-[40px] mb-11">
              <p className="text-[#263238] text-[16px] text-center font-muli line-clamp-3">
                {card.name}
              </p>
            </div>
          </div>

          <div className="flex items-end rounded-[8px]">
            <div className="flex w-[234px] h-[44px] bg-white rounded-b-lg shadow-inner-custom">
              <div className="ml-10 flex items-center justify-center">
                <img className="w-[12px] h-[14px]" src={iconTrash} alt="icone excluir" />
                <p
                  onClick={() => onDelete(card.id)}
                  className="ml-2 text-[15px] text-[#263238] opacity-[0.48] hover:text-[#DB2525] hover:opacity-100 cursor-pointer"
                >
                  Excluir
                </p>
              </div>
              <div className="flex justify-center items-center ml-5">
                <div className="w-[1px] h-[22px] bg-[#F6F4F6] border border-[#F6F4F6]"></div>
              </div>
              <div className="ml-5 flex items-center justify-center">
                <img className="w-[12px] h-[14px]" src={iconEdit} alt="icone editar" />
                <p
                  onClick={onEdit}
                  className="ml-2 text-[15px] text-[#263238] opacity-[0.48] hover:text-[#DB2525] hover:opacity-100 cursor-pointer"
                >
                  Editar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
