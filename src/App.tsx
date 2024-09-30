import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
import Card from './components/card'
import { useEffect, useState } from 'react'

import DrawerRight from './components/drawer-right'
import { DeleteModal } from './components/ui/dialog'
import { CardService } from './services/cardService'
import { Filter } from './models/requests/filter'
import { CardResponse } from './models/responses/cardResponse'
import { ToastContainer } from 'react-toastify'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(0)
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardResponse>();
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    getAllCards()
  }, [])

  const getAllCards = async (name?: string) => {
    const filterRequest: Filter = {
      Name: name,
      CurrentPage: 1,
      "OrderBy.Ascendent": true,
      "OrderBy.Column": 'name',
      PageSize: 10,
    }

    const result = await CardService.GetAll(filterRequest);

    setCards(result?.items!)
  }

  const handleCardCreated = (newCard: CardResponse) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDelete = (id: number) => {
    setSelectedCardId(id);
    setOpenModal(true)
  }

  const handleCardDeleted = (id: number) => {
    setCards((prevCards) => prevCards.filter(card => card.id !== id));
  };

  const handleOpenDrawer = (card: CardResponse) => {
    setOpenDrawer(true)
    setSelectedCard(card);
  }

  const handleCardUpdated = (updatedCard: CardResponse) => {

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? { ...card, photoBase64: updatedCard.photoBase64, name: updatedCard.name } : card
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);  
    getAllCards(value); 
  };


  return (
    <div className="min-h-screen w-full bg-[#F6F4F6]">
       <ToastContainer />
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
                value={searchTerm}
                onChange={handleInputChange} 
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
            {cards.map((card) => (
              <Card key={card.id}
                onDelete={() => handleDelete(card.id)}
                onEdit={() => handleOpenDrawer(card)}
                card={card}
              />
            ))}
          </div>
          <DrawerRight
            selectedCard={selectedCard}
            openDrawer={openDrawer}
            onCardUpdated={handleCardUpdated}
            setOpenDrawer={setOpenDrawer}
            onCardCreated={handleCardCreated} />
          <DeleteModal
            onDeleteConfirmed={handleCardDeleted}
            openModal={openModal}
            id={selectedCardId}
            setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>

  )
}

export default App
