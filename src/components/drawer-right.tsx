import * as React from "react";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer'
import { Input } from "./ui/input";
import { InputFile } from "./ui/input-file";
import { Button } from "./ui/button";
import { useState } from "react";

interface DrawerProps {
    openDrawer: boolean;
    setOpenDrawer: (open: boolean) => void;
  }
  
  const DrawerRight: React.FC<DrawerProps> = ({ openDrawer, setOpenDrawer }) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <Drawer direction='right' open={openDrawer} onOpenChange={setOpenDrawer}>
    <DrawerContent>
      <DrawerHeader className='flex items-center'>
        <img src="src\assets\icons\icone_criar.svg" alt="icone criar card" />
        <DrawerTitle className='text-[#5F1478] font-bold text-[32px] leading-[40px] tracking-normal font-muli'>Criar card</DrawerTitle>
      </DrawerHeader>
      <div className='ml-4 mt-[1.1rem] '>
        <div className='w-[35.8rem] border border-[#D4D4D4]'></div>
      </div>
      <div className='mt-3 flex-col ml-4'>
        <h2 className='mt-4 mb-2 text-[#454545] font-bold text-[14px] leading-[18px] tracking-normal font-muli' >DIGITE UM NOME PARA O CARD</h2>
        <Input className='h-[60px] w-[573px] border border-[#B9B9B9] rounded-[8px]' type='text' placeholder='Digite o título'></Input>
      </div>
      <div className='mt-3 flex-col ml-4'>
        <h2 className='mt-4 mb-2 text-[#454545] font-bold text-[14px] leading-[18px] tracking-normal font-muli'>INCLUA UMA IMAGEM PARA APARECER NO CARD</h2>
        <div className='w-[35.8rem]'>
        <InputFile onFileSelect={setSelectedFile}/>
        </div>
   
      </div>
      <div className='ml-4 mt-[3.1rem] '>
        <div className='w-[35.8rem] border border-[#D4D4D4]'></div>
      </div>
      <div className='flex justify-end mr-[2rem] mt-[1.6rem]'>
        <Button className="w-[11.125rem] h-[3rem] text-lg leading-[1.4375rem] rounded-[0.5rem] mr-[0.3125rem] font-muli" variant="custom">
          Criar card
        </Button>
      </div>
    </DrawerContent>
  </Drawer>
  );
};

export default DrawerRight;
