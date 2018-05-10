/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'allinone_bannerRotator';

interface JQuery {
  allinone_bannerRotator(options?:any): JQuery;
}