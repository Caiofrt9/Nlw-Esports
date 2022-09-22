import { MagnifyingGlassPlus } from "phosphor-react";
import { Trigger } from "@radix-ui/react-dialog";

interface Props {
  onClick?: () => void;
}

export function CreateAdBanner({ onClick }: Props) {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black">
            Não encontrou o seu duo?
          </strong>
          <span className="block text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Trigger
          onClick={onClick}
          className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex item-center gap-3"
        >
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Trigger>
      </div>
    </div>
  );
}
