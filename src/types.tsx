export interface ICar {
  atvtype: null;
  barrels08: number;
  barrelsa08: number;
  basemodel: string;
  c240bdscr: null;
  c240dscr: null;
  charge120: number;
  charge240: number;
  charge240b: number;
  city08: number;
  city08u: number;
  citya08: number;
  citya08u: number;
  citycd: number;
  citye: number;
  cityuf: number;
  co2: number;
  co2a: number;
  co2tailpipeagpm: number;
  co2tailpipegpm: number;
  comb08: number;
  comb08u: number;
  comba08: number;
  comba08u: number;
  combe: number;
  combinedcd: number;
  combineduf: number;
  createdon: string; // Tarih formatında olabilir
  cylinders: number;
  displ: number;
  drive: string;
  eng_dscr: string[]; // Dizi olarak belirledik
  engid: string;
  evmotor: null;
  fescore: number;
  fuelcost08: number;
  fuelcosta08: number;
  fueltype: string;
  fueltype1: string;
  fueltype2: null | string;
  ghgscore: number;
  ghgscorea: null | number;
  guzzler: null;
  highway08: number;
  highway08u: number;
  highwaya08: number;
  highwaya08u: number;
  highwaycd: number;
  highwaye: number;
  highwayuf: number;
  hlv: number;
  hpv: number;
  id: string;
  lv2: number;
  lv4: number;
  make: string;
  mfrcode: string;
  model: string;
  modifiedon: string; // Tarih formatında olabilir
  mpgdata: string;
  phevblended: string; // Boolean gibi duruyor ama string olarak verilmiş
  phevcity: number;
  phevcomb: number;
  phevhwy: number;
  pv2: number;
  pv4: number;
  range: number;
  rangea: null | number;
  rangecity: number;
  rangecitya: number;
  rangehwy: number;
  rangehwya: number;
  scharger: null;
  startstop: string; // "Y" gibi değerler var, boolean olabilir ama string olarak kalmış
  tcharger: string;
  trans_dscr: null | string;
  trany: string;
  ucity: number;
  ucitya: number;
  uhighway: number;
  uhighwaya: number;
  vclass: string;
  year: string; // Normalde number olmalı ama string olarak verilmiş
  yousavespend: number;
}
