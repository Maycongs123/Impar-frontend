import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'

function App() {

  return (
    <div className='w-full bg-[#F6F4F6]'>
      <div>
        <div className="bg-gradient-custom shadow-md opacity-100 h-16 w-full p-4">
          <img src="src\assets\logo-teste.png" alt="logo-teste" />
        </div>
        <div className='w-full'>
          <div className="relative">
            <img className="w-full h-64" src="src/assets/fundo-busca.png" alt="fundo-busca" />
            <Input
              type="text"
              placeholder="Digite aqui sua busca"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-2 bg-white border rounded-md h-20"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-8'>
        <div className='w-[1054px] flex-col justify-between mb-4'>
          <div className=' flex justify-between'>
            <p className="text-[#5F1478] text-[32px] leading-[40px] tracking-normal font-muli">
              Resultado de busca
            </p>
            <Button className="w-[178px] h-[48px] text-lg leading-[23px] font-muli" variant="custom">
              Novo Card
            </Button>
          </div>
          <div className='mt-6'>
            <div className='w-[234px] h-[267px] bg-[#FFFFFF]'>
              teste
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
