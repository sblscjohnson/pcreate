const initialState = {
  build: {
    id: 0,
    user_id: null,
    cpu_brand: '',
    cpu_name: '',
    cpu_price: null,
    cpu_image: '',
    cpu_tier: null,
    socket: '',
    //
    mobo_brand: '',
    mobo_name: '',
    mobo_size: '',
    mobo_price: null,
    mobo_image: '',
    mobo_type: null,
    ram_slots: null,
    //
    case_brand: '',
    case_name: '',
    case_size: '',
    case_price: null,
    case_image:'',
    max_aio: null,
    max_air: null,
    psu_size: null,
    //
    ram_brand: '',
    ram_name: '',
    ram_size: null,
    ram_speed: null,
    ram_price: null,
    ram_image: '',
    //
    cooler_brand: '',
    cooler_name: '',
    cooler_price: null,
    cooler_image: '',
    //
    gpu_brand: '',
    gpu_name: '',
    gpu_price: null,
    gpu_image: '',
    //
    psu_brand: '',
    psu_name: '',
    psu_price: null,
    psu_image: '',
  },
  user: {
    id: null,
    email: '',
    pic_link: ''
  }
};

const UPDATE_CPU = 'UPDATE_CPU';
const UPDATE_MOBO = 'UPDATE_MOBO';
const UPDATE_RAM = 'UPDATE_RAM';
const UPDATE_CASE = 'UPDATE_CASE';
const UPDATE_COOLER = 'UPDATE_COOLER';
const UPDATE_GPU = 'UPDATE_GPU';
const UPDATE_PSU = 'UPDATE_PSU';
const CLEAR_BUILD = 'CLEAR_BUILD';
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
};

export function updateCase(caseObj) {
  return {
    type: UPDATE_CASE,
    payload: caseObj
  }
};

export function updateCooler(coolerObj) {
  return {
    type: UPDATE_COOLER,
    payload: coolerObj
  }
};

export function updateGpu(gpuObj) {
  return {
    type: UPDATE_GPU,
    payload: gpuObj
  }
};

export function updatePsu(psuObj) {
  return {
    type: UPDATE_PSU,
    payload: psuObj
  }
};

export function clearBuild(clearObj) {
  return {
    type: CLEAR_BUILD,
    payload: clearObj
  }
};

export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case UPDATE_CPU:
    const {cpu_brand, cpu_price, cpu_name, cpu_tier, socket, cpu_image} = payload;
    return {...state, build: {...state.build, cpu_brand, cpu_price, cpu_name, cpu_tier, socket, cpu_image}};

    case UPDATE_MOBO:
    const {mobo_brand, mobo_price, mobo_name, mobo_type, mobo_size, ram_slots, mobo_image} = payload;
    return {...state, build: {...state.build, mobo_brand, mobo_price, mobo_size, mobo_name, mobo_type, ram_slots, mobo_image}};

    case UPDATE_CASE:
    const {case_brand, case_size, case_price, case_name, max_air, max_aio, psu_size, case_image} = payload;
    return {...state, build: {...state.build, case_brand, case_size, case_price, case_name, max_air, max_aio, psu_size, case_image}};

    case UPDATE_RAM:
    const {ram_brand, ram_size, ram_speed, ram_price, ram_name, ram_image} = payload;
    return {...state, build: {...state.build, ram_brand, ram_size, ram_speed, ram_price, ram_name, ram_image}};

    case UPDATE_COOLER:
    const {cooler_brand, cooler_price, cooler_name, cooler_image} = payload;
    return {...state, build: {...state.build, cooler_brand, cooler_price, cooler_name, cooler_image}};

    case UPDATE_GPU:
    const {gpu_brand, gpu_price, gpu_name, gpu_image} = payload;
    return {...state, build: {...state.build, gpu_brand, gpu_price, gpu_name, gpu_image}};

    case UPDATE_PSU:
    const {psu_name, psu_image, psu_brand, psu_price, psu_efficency} = payload;
    return {...state, build: {...state.build, psu_brand, psu_price, psu_efficency, psu_name, psu_image}};

    case CLEAR_BUILD:
    return {...state, build: {
      id: 0,
    user_id: null,
    cpu_brand: '',
    cpu_name: '',
    cpu_price: null,
    cpu_image: '',
    cpu_tier: null,
    socket: '',
    //
    mobo_brand: '',
    mobo_name: '',
    mobo_size: '',
    mobo_price: null,
    mobo_image: '',
    mobo_type: null,
    ram_slots: null,
    //
    case_brand: '',
    case_name: '',
    case_size: '',
    case_price: null,
    case_image: '',
    max_aio: null,
    max_air: null,
    psu_size: null,
    //
    ram_brand: '',
    ram_name: '',
    ram_size: null,
    ram_speed: null,
    ram_price: null,
    ram_image: '',
    //
    cooler_brand: '',
    cooler_name: '',
    cooler_price: null,
    cooler_image: '',
    //
    gpu_brand: '',
    gpu_name: '',
    gpu_price: null,
    gpu_image: '',
    //
    psu_brand: '',
    psu_name: '',
    psu_price: null,
    psu_image: '',
    }};


    case UPDATE_USER:
    const {id, email, pic_link} = payload;
    return {...state, user: {id, email, pic_link}}

    default:
    return state;
  }
}