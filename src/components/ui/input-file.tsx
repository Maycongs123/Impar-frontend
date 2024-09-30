import { useState, useRef, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CustomFileInputProps {
  onFileSelect: (file: File | null) => void;
  selectedFile?: File | null; 
}

export function InputFile({ onFileSelect, selectedFile }: CustomFileInputProps) {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");
  const fileInputRef = useRef<HTMLInputElement>(null);

  
  useEffect(() => {
    if (selectedFile) {
      setFileName(selectedFile.name); 
    }
  }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file ? file.name : "Nenhum arquivo selecionado");
    onFileSelect(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center w-[35.8rem] h-[3.75rem] bg-white border border-[#B9B9B9] rounded-[8px] overflow-hidden">
      <div className="flex-grow px-4 py-2 text-gray-500 truncate">
        {fileName}
      </div>
      <Button 
        onClick={handleButtonClick}
        className="h-[3rem] shadow-inner-custom w-[14rem] font-bold px-4 bg-white tracking-normal font-muli text-[#E76316] hover:bg-[#fff8f5] border border-[#E76316] rounded-[8px] mr-2 font-medium"
      >
        Escolher arquivo
      </Button>
      <Input
        ref={fileInputRef}
        id="picture"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
