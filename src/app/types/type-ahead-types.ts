export type Continents = string[];
export type SearchTerm = string[];

export type TypeAheadState = {
    continents: Continents;
    searchTerm: SearchTerm;
};

export type TypeAheadStateStore = {
    readonly getState: () => TypeAheadState;
    readonly setState: (newState: Partial<TypeAheadState>) => void;
    readonly subscribe: (callback: (state: TypeAheadState) => void) => void;
};
