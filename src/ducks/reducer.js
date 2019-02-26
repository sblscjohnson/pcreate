const initialState = {
  build: {
    id: 0,
    user_id: null,
    cpu_name: 'Core i5-8600K',
    cpu_tier: 3,
    socket: 'LGA2011',
    cpu_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/aa134167a714bcf301976f148b735237.1600.jpg',
    mobo_name: 'Z370M Mortar',
    mobo_type: 3,
    ram_slots: 4,
    mobo_image: 'https://images-na.ssl-images-amazon.com/images/I/51XXxxhFdqL.jpg',
    case_name: 'H400',
    max_aio: 2,
    max_air: 1,
    psu_size: 2,
    case_image:'https://images-eu.ssl-images-amazon.com/images/I/51nTmcc81AL.jpg',
    ram_name: 'Vengeance LPX',
    ram_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/0d7ccc6bb32c1a857bdfc56d9eb74081.1600.jpg',
    cooler_name: 'Hyper 212 EVO',
    cooler_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/ddea57de9797549e80d05fb3acb2e83d.med.1600.jpg',
    gpu: 'GTX 1070',
    gpu_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5330/5330700cv12d.jpg',
    psu_name: '450BT',
    psu_image: 'https://images-na.ssl-images-amazon.com/images/I/51bHLROlXRL.jpg',
  },
  user: {}
};

const UPDATE_CPU = 'UPDATE_CPU';
const UPDATE_MOBO = 'UPDATE_MOBO';
const UPDATE_RAM = 'UPDATE_RAM';
const UPDATE_CASE = 'UPDATE_CASE';
const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  }
};

export function updateCpu(cpuObj) {
  return {
    type: UPDATE_CPU,
    payload: cpuObj
  }
};

export function updateMobo(moboObj) {
  return {
    type: UPDATE_MOBO,
    payload: moboObj
  }
};

export function updateRam(ramObj) {
  return {
    type: UPDATE_RAM,
    payload: ramObj
  }
}
export function updateCase(caseObj) {
  return {
    type: UPDATE_CASE,
    payload: caseObj
  }
}


export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case UPDATE_CPU:
    const {cpu_name, cpu_tier, socket, cpu_image} = payload;
    return {...state, build: {...state.build, cpu_name, cpu_tier, socket, cpu_image}};
    case UPDATE_MOBO:
    const {mobo_name, mobo_type, ram_slots, mobo_image} = payload;
    return {...state, build: {...state.build, mobo_name, mobo_type, ram_slots, mobo_image}};

    case UPDATE_RAM:
    const {ram_name, ram_image} = payload;
    return {...state, build: {...state.build, ram_name, ram_image}};

    case UPDATE_CASE:
    const {case_name, max_air, max_aio, psu_size, case_image} = payload;
    return {...state, build: {...state.build, case_name, max_air, max_aio, psu_size, case_image}};

    // case UPDATE_USER:
    // const {id, username, profile_pic} = payload;
    // return {...state.user, id, username, profile_pic}

    default:
    return state;
  }
}