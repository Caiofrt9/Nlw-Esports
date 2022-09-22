import { ButtonHTMLAttributes } from "react";
import { Trigger } from "@radix-ui/react-dialog";

import "../../styles/main.css";

interface GameBannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <Trigger onClick={props.onClick} className={props.className}>
      <img
        src={props.bannerUrl}
        alt={props.title}
        className="h-[292px] w-[219px]"
      />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} Anúncio{props.adsCount === 1 ? "" : "s"}
        </span>
      </div>
    </Trigger>
  );
}
