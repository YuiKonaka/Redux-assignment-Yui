import { useAppDispatch, useAppSelector } from "./app/hook";
import { RootState } from "./app/store";
import { incrementAge } from "./features/User";

export function Documents() {
  const { profile } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incrementAge());
  };

  return (
    <div>
      <h1>Users</h1>
      <p>{profile.firstname}</p>
      <p>{profile.lastname}</p>
      <p>{profile.age}</p>
      <button onClick={handleIncrement}>Increment Age</button>
    </div>
  );
}

// export fuction Documents () {
//   const documens = useSelector((state:RootState) => state.documents.profile)
//   const dispatch = useDispatch();

//   const handleIncrement = (profile: UserType)
//   );

//   return (
//     <div>
//       <h1>Users</h1>
//       <p>Age: {age}</p>
//       <button onClick={() => dispatch(incrementAge())}>Age</button>
//     </div>
//   );
// };

// export default Documents;
