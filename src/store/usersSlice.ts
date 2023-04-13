import { createSlice } from '@reduxjs/toolkit'

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: []
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const existingUser = state.users.find(user => user.id === updatedUser.id);
      if (existingUser) {
        existingUser.name = updatedUser.name;
        existingUser.email = updatedUser.email;
        existingUser.address = updatedUser.address;
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(user => user.id !== id);
    }
  }
});

export const { createUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
