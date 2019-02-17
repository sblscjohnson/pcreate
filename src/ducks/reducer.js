const initialState = {
    id: 0,
    user_id: '',
    cpu: '',
    cooler: '',
    mobo: '',
    ram: '',
    gpu: '',
    psu: '',
    compcase: ''

};

const UPDATE_BUILD = 'UPDATE_BUILD';

export function updateBuild(buildObj) {
  return {
    type: UPDATE_BUILD,
    payload: buildObj
  }
};

export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case UPDATE_BUILD:
    const {id, user_id, cpu, cooler, mobo, ram, gpu, psu, compcase} = payload;
    return {...state, id, user_id, cpu, cooler, mobo, ram, gpu, psu, compcase}

    default:
    return state
  }
}