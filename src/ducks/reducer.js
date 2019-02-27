const initialState = {
  build: {
    id: 0,
    user_id: null,
    cpu_brand: 'Intel',
    cpu_name: 'Core i5-8600K',
    cpu_price: 10,
    cpu_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/aa134167a714bcf301976f148b735237.1600.jpg',
    cpu_tier: 3,
    socket: 'LGA2011',
    //
    mobo_brand: 'MSI',
    mobo_name: 'Z370M Mortar',
    mobo_size: 'mATX',
    mobo_price: 20,
    mobo_image: 'https://images-na.ssl-images-amazon.com/images/I/51XXxxhFdqL.jpg',
    mobo_type: 3,
    ram_slots: 4,
    //
    case_brand: 'NZXT',
    case_name: 'H400',
    case_size: 'mATX',
    case_price: 30,
    case_image:'https://images-eu.ssl-images-amazon.com/images/I/51nTmcc81AL.jpg',
    max_aio: 2,
    max_air: 1,
    psu_size: 2,
    //
    ram_brand: 'Corsair',
    ram_name: 'Vengeance LPX',
    ram_size: 16,
    ram_speed: 3200,
    ram_price: 40,
    ram_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/0d7ccc6bb32c1a857bdfc56d9eb74081.1600.jpg',
    //
    cooler_brand: 'Cooler Master',
    cooler_name: 'Hyper 212 EVO',
    cooler_price: 50,
    cooler_image: 'https://cdn.pcpartpicker.com/static/forever/images/product/ddea57de9797549e80d05fb3acb2e83d.med.1600.jpg',
    //
    gpu_brand: 'Nvidia',
    gpu_name: 'GTX 1070',
    gpu_price: 60,
    gpu_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5330/5330700cv12d.jpg',
    //
    psu_brand: 'EVGA',
    psu_name: '450BT',
    psu_price: 70,
    psu_image: 'https://images-na.ssl-images-amazon.com/images/I/51bHLROlXRL.jpg',
  },
  user: {}
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


    // case UPDATE_USER:
    // const {id, username, profile_pic} = payload;
    // return {...state.user, id, username, profile_pic}

    default:
    return state;
  }
}