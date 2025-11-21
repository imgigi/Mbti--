
export interface QuestionNode {
  id: string;
  text: string;
  options: OptionNode[];
}

export interface OptionNode {
  label: string;
  nextId?: string;
  // Map of dimension to score added (e.g., { I: 2, N: 1 })
  scores?: Partial<Record<'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P', number>>; 
}

export interface RadarData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ResultData {
  mainCode: string;
  subCode: string;
  percentages: {
    I: number;
    E: number;
    N: number;
    S: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
}

export interface MBTIContentItem {
  title: string;
  desc: string;
}

export interface MBTIProfile {
  code: string;
  name: string;
  slogan: string;
  keywords: string[];
  archetype: {
    fictional: string;
    historical: string;
  };
  radarStats: {
    logic: number; // Rational Logic
    control: number; // Planning/Control
    social: number; // Social Connection/Independence (Inverted for Independent)
    abstract: number; // Macro/Abstract
  };
  drivers: string[];
  
  // Updated complex fields
  superpowers: MBTIContentItem[];
  blindspots: MBTIContentItem[];
  
  relationships: {
    strong: string[];
    weak: string[];
  };
  
  careers: MBTIContentItem[];
  growth: MBTIContentItem[];
}
