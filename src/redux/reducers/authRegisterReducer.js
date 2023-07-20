const initialState = [{
  isAuthenticated: false,
  registerData: [
    {
      username: "Ram Bade",
      email: "ram@gmail.com",
      birthdate: "01/01/2002",
      password: "Ram123",
    },
  ],
}];

// const addItems = (state = addItem, action) => {
//   switch (action.type) {
//       case "ADDITEM" :
//            return [
//           ...state,
//           action.payload
//       ]
const authRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      // return {
      //   ...state,
      //   isAuthenticated: true,
      //   registerData: [...state.registerData, action.payload],
      // };
      return[
        ...state,
        action.payload
      ]
    // default:
    //   return state;
  }
};

export default authRegisterReducer;
