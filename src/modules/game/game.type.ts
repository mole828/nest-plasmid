export interface GameConf {
  id: number;
  roomId: string | number;
  title: string;
  mgr: string;
  aiHosters: number[];
  mapId: number;
  team: {
    [key: string]: {
      index: number;
      isAI: boolean;
      isChicken: boolean;
      isSpectator: boolean;
      team: number;
    };
  };
  [key: string]: any;
}
