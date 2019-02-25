const initialState = {
  build: {
    id: 0,
    user_id: null,
    cpu_name: '',
    cpu_tier: null,
    socket: '',
    cpu_image: '',
    mobo_name: 'Z370M Mortar',
    mobo_type: '3',
    ram_slots: 4,
    mobo_image: '',
    case_name: 'H400',
    aio_size: null,
    air_size: 2,
    psu_size: '',
    case_image:'',
    ram_name: 'Vengeance LPX',
    ram_image: '',
    cooler_name: 'Hyper 212 EVO',
    cooler_image: '',
    gpu: 'GTX 1070',
    gpu_image: '',
    psu_name: '450BT',
    psu_image: '',
  },
  user: {}
};

const UPDATE_CPU = 'UPDATE_CPU';

// export function updateUser(userObj) {
//   return {
//     type: UPDATE_USER,
//     payload: userObj
//   }
// };

export function updateCpu(cpuObj) {
  return {
    type: UPDATE_CPU,
    payload: cpuObj
  }
};

export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case UPDATE_CPU:
    console.log(JSON.stringify(payload))
    const {cpu_name, cpu_tier, socket, cpu_image} = payload;
    return {...state.build, cpu_name, cpu_tier, socket, cpu_image}

    default:
    return state
  }
}