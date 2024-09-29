import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
import Card from './components/card'
import { useState } from 'react'

import DrawerRight from './components/drawer-right'
import { DeleteModal } from './components/ui/dialog'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openModal, setOpenModal] = useState(false)

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
            <Card onDelete={() => setOpenModal(true)} onEdit={() => setOpenDrawer(true)} description="Lorem Ipsu amet dolor" />
            <Card onDelete={() => setOpenModal(true)} onEdit={() => setOpenDrawer(true)} description="Lorem Ipsu amet dolor" />
          </div>
          <DrawerRight openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          <DeleteModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>

  )
}

export default App
