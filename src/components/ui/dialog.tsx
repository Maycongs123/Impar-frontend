import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button" 

import { cn } from "@/lib/utils"
import { CardService } from "@/services/cardService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full w-[27.3rem] h-[27.5rem] translate-x-[-50%] translate-y-[-50%] bg-white p-6 shadow-lg sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
        <Cross2Icon className="h-4 w-4 text-red-500" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col items-center space-y-2", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-center space-x-4 mt-6", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl font-semibold text-red-500", className)} // Ajustado para a cor e estilo do título
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export function DeleteModal({ openModal, setOpenModal, id, onDeleteConfirmed }: 
   { openModal: boolean, setOpenModal: (open: boolean) => void, id: number, onDeleteConfirmed: (id: number) => void }) {

  const handleDelete = async () => {
    await CardService.Delete(id);  
    onDeleteConfirmed(id);
    toast.success('Card excluido com sucesso!')
    setOpenModal(false); 
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent>
        <DialogHeader className="mt-3">
          <div className="flex justify-center mb-4 border-[6px] border-[#E4E4E4] rounded-[100px] w-[9.9rem] h-[9.9rem] items-center bg-[#DB25250F]">
            <img
              src="src\assets\icons\Icon-trash.svg"
              alt="Ícone de exclusão"
              className="w-[64px] h-[64px]"
            />
          </div>

          <DialogTitle className="text-[2rem]">Excluir</DialogTitle>
          <DialogDescription className="opacity-1 uppercase text-[#454545] text-[0.7rem] leading-[0.9rem] font-bold tracking-normal font-muli">
            Certeza que deseja excluir?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <div className="w-[24rem] border border-[#D4D4D4]"></div>
        </div>
        <DialogFooter>
          <Button onClick={handleDelete} className="text-[#FFFFFF] text-[1.1rem] border-[#DB2525]  leading-[1.4rem] tracking-normal font-muli bg-red-500 px-4 py-2 rounded-lg w-[10rem] h-[3rem] rounded-[0.5rem] hover:bg-red-500">
            Excluir
          </Button>
          <DialogClose asChild>
            <Button variant="outline" className="border-red-500 text-[#DB2525] hover:text-[#DB2525] text-[1.1rem] leading-[1.4rem] tracking-normal font-muli px-4 py-2 rounded-lg w-[10rem] h-[3rem] rounded-[0.5rem] hover:bg-transparent">
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
