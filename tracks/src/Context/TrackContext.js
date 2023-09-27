import createDataContext from "./createDataContext";

const TrackReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const fetchTracks = dispatch => () => {

};
const createTracks = dispatch => () => {
    
};

export const { Provider, Context } = createDataContext(
    TrackReducer,
    { fetchTracks, createTracks },
    []
);