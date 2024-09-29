import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
import Card from './components/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './components/ui/drawer'
import { useState } from 'react'
import { InputFile } from './components/ui/input-file'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#F6F4F6]">
      <div>
        <div className="bg-gradient-custom shadow-md opacity-100 h-16 w-full p-4 fixed top-0 left-0 z-50">
          <img src="src/assets/logo-teste.png" alt="logo teste" />
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              className="w-full h-64"
              src="src/assets/fundo-busca.png"
              alt="fundo-busca"
            />
            <div className="w-[1046px] absolute top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
              <Input
                type="text"
                placeholder="Digite aqui sua busca"
                className="w-full p-4 pr-12 bg-white border rounded-[8px] h-20"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img src="src\assets\icons\lupa.svg" alt="search icon" className="w-[49px] h-[49px] mr-4 mb-2" />
              </span>
            </div>
          </div>
        </div>

      </div>
      <div className='flex flex-col justify-center items-center mt-8'>
        <div className='w-[1054px] flex-col justify-between mb-4'>
          <div className=' flex justify-between'>
            <p className="text-[#5F1478] text-[32px] leading-[40px] tracking-normal font-muli">
              Resultado de busca
            </p>
            <Button onClick={() => setOpenDrawer(true)} className="w-[178px] h-[48px] text-lg leading-[23px] rounded-[8px] mr-5 font-muli" variant="custom">
              Novo Card
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
            <Card description="Lorem Ipsu amet dolor" />
          </div>
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

        </div>
      </div>
    </div>

  )
}

export default App
