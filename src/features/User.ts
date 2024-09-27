import { createSlice } from "@reduxjs/toolkit";

// export type UserType = {
//   id: number;
//   firstname: string;
//   lastname: string;
//   age: number;
// };

// type StateType = {
//   firstname: string;
//   lastname: string;
//   age: number;
//   error: Error | null;
//   isLoading: boolean;
// };

// const initialState: StateType = {
//   firstname: "Joseph",
//   lastname: "Olmeda",
//   age: 27,
//   error: null,
//   isLoading: false,
// };

export type UserType = {
  firstname: string;
  lastname: string;
  age: number;
};

type StateType = {
  profile: UserType;
  error: Error | null;
  isLoading: boolean;
};

const initialState: StateType = {
  profile: {
    firstname: "Joseph",
    lastname: "Olmeda",
    age: 27,
  },
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.profile.age += 1; //    increment: (state, action: PayloadAction<UserType> => {
      //     state.profiles = state.profile.map((profile)) =>
      //         Profiler.id === isAction.payload.id
      //         ?{ ...profile, age:profile.age +1 }
      //         :profile
    },
  },
});

export const { incrementAge } = userSlice.actions;
export const userRecucer = userSlice.reducer;
