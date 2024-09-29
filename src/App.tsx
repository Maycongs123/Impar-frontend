import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
import Card from './components/card'

function App() {

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
            <Button className="w-[178px] h-[48px] text-lg leading-[23px] rounded-[8px] mr-5 font-muli" variant="custom">
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


          {/* <div className='mt-6'>
            <div className='w-[234px] h-[267px] bg-[#FFFFFF] rounded-[8px] border border-[#E4E4E4] shadow-card'>
              <div className="flex flex-col h-full mt-5">
                <div className='flex justify-center'>
                  <div className='w-[95px] h-[95px] bg-[#F6F4F6] border border-[#E4E4E4] rounded-[50px] flex justify-center items-center'>
                    <img className="w-[63px] h-[64px]" src="src\assets\icons\icon-hand.svg" alt="icone punho" />
                  </div>
                </div>
                <div className='flex justify-center mt-4'>
                  <div className='w-[169px] h-[2px] bg-[red]'></div>
                </div>
                <div className='flex justify-center mt-1'>
                  <div className='w-[161px] h-[40px] mb-11'>
                    <p className='text-[#263238] text-[16px] text-center font-muli line-clamp-3'>
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex w-[234px] h-[44px] bg-white rounded-b-lg shadow-inner-custom">
                    <div className='ml-10 flex items-center justify-center'>
                      <img className='w-[12px] h-[14px]' src="src\assets\icons\Icon-trash.svg" alt="icone excluir" />
                      <p className='ml-2 text-[15px] text-[#263238] opacity-[0.48] hover:text-[#DB2525] hover:opacity-100 cursor-pointer'>
                        Excluir
                      </p>
                    </div>
                    <div className='flex justify-center items-center ml-5'>
                      <div className='w-[1px] h-[22px] bg-[#F6F4F6] border border-[#F6F4F6]'></div>
                    </div>
                    <div className='ml-5 flex items-center justify-center'>
                      <img className='w-[12px] h-[14px]' src="src\assets\icons\Icon-edit.svg" alt="icone editar" />
                      <p className="ml-2 text-[15px] text-[#263238] opacity-[0.48] hover:text-[#DB2525] hover:opacity-100 cursor-pointer">
                        Editar
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div> */}
        </div>
      </div>
    </div>

  )
}

export default App
