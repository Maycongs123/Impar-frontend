import * as React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer'
import { Input } from "./ui/input";
import { InputFile } from "./ui/input-file";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { CardService } from "@/services/cardService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardResponse } from "@/models/responses/cardResponse";
import { PatchRequest } from "@/models/requests/patchRequest";
import { CreateRequest } from "@/models/requests/createRequest";
import { base64ToFile, convertFileToBase64 } from "@/utils/converters/converterBase64";

interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  onCardCreated: (newCard: CardResponse) => void;
  selectedCard?: CardResponse | null;
  onCardUpdated: (updatedCard: CardResponse) => void; 
}

const DrawerRight: React.FC<DrawerProps> = ({ openDrawer, setOpenDrawer, onCardCreated, selectedCard, onCardUpdated}) => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const createOrEditCard = async () => {
    if(inputValue === ""){
      toast.warn('Você precisa digitar um nome para o card')
      return;
    }else if(selectedFile === null){
      toast.warn('Você precisa escolher uma imagem para o card')
      return;
    }

    if(selectedCard){
       editCard()
       return;
    }

    const base64File = await convertFileToBase64(selectedFile!);

    const cardRequest: CreateRequest = {
      name: inputValue,
      photo: base64File
    }

    try {
      const result = await CardService.Post(cardRequest);

      if (result) {
        toast.success('Card criado com sucesso!');
        onCardCreated(result);
        setInputValue('');
        setSelectedFile(null)
        setOpenDrawer(false);  
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro ao criar o card');
    }
  }

  const editCard = async () => {
      const base64File = await convertFileToBase64(selectedFile!);
      const patchRequest: PatchRequest = {
        name: inputValue,
        photoBase64: base64File, 
        photoId: selectedCard?.photoId!,
        status: selectedCard?.status!,
      };
  
      try {
        const result = await CardService.Patch(selectedCard?.id!, patchRequest);

        if (result) {
          toast.success('Card atualizado com sucesso!');
          onCardUpdated(result); 
          setInputValue('');
          setSelectedFile(null)

          setOpenDrawer(false);  
        }
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Erro ao atualizar o card');
      }
  };

  useEffect(() => {
  
    if (selectedCard) {
      setInputValue(selectedCard.name); 

      if (selectedCard.photoBase64) {
        const file = base64ToFile(selectedCard.photoBase64, "Card Image");
        setSelectedFile(file);
      }
    }
  }, [selectedCard]);

  return (
    <Drawer direction='right' open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerContent>
        <DrawerHeader className='flex items-center'>
          <img src="src\assets\icons\icone_criar.svg" alt="icone criar card" />
          <DrawerTitle className='text-[#5F1478] font-bold text-[32px] leading-[40px] tracking-normal font-muli'>{selectedCard ? "Editar Card" : "Criar Card"}</DrawerTitle>
        </DrawerHeader>
        <div className='ml-4 mt-[1.1rem] '>
          <div className='w-[35.8rem] border border-[#D4D4D4]'></div>
        </div>
        <div className='mt-3 flex-col ml-4'>
          <h2 className='mt-4 mb-2 text-[#454545] font-bold text-[14px] leading-[18px] tracking-normal font-muli uppercase' >Digite um nome para o card</h2>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            className='h-[60px] w-[573px] border border-[#B9B9B9] rounded-[8px]' type='text' placeholder='Digite o título'>
          </Input>
        </div>
        <div className='mt-3 flex-col ml-4'>
          <h2 className='mt-4 mb-2 text-[#454545] font-bold text-[14px] leading-[18px] tracking-normal font-muli uppercase'>Inclua uma imagem para aparecer no card</h2>
          <div className='w-[35.8rem]'>
            <InputFile 
             onFileSelect={setSelectedFile}
             selectedFile={selectedFile}
            />
          </div>

        </div>
        <div className='ml-4 mt-[3.1rem] '>
          <div className='w-[35.8rem] border border-[#D4D4D4]'></div>
        </div>
        <div className='flex justify-end mr-[2rem] mt-[1.6rem]'>
          <Button onClick={createOrEditCard} className="w-[11.125rem] h-[3rem] text-lg leading-[1.4375rem] rounded-[0.5rem] mr-[0.3125rem] font-muli" variant="custom">
          {selectedCard ? "Editar Card" : "Criar Card"}
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerRight;
