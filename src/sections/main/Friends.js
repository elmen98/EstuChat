import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, Slide, Stack, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchFriendRequests,
  FetchFriends,
  FetchUsers,
} from "../../redux/slices/app";
import {
  FriendElement,
  FriendRequestElement,
  UserElement,
} from "../../components/UserElements";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const UsersList = () => {
  const dispatch = useDispatch();
  console.log("Usiarios");

  useEffect(() => {
    dispatch(FetchUsers());
  },[]);

  const { users } = useSelector((state) => state.app);

  return (
    <>
      {users.map((el, idx) => {
        return <UserElement key={idx} {...el} />;
        
      })}
    </>
  );
};

const FriendsList = () => {
  const dispatch = useDispatch();
  console.log("Amigos");

  useEffect(() => {
    dispatch(FetchFriends());
  },[]);
  const { friends } = useSelector((state) => state.app);

  return (
    <>
      {friends.map((el, idx) => {
        return <FriendElement key={idx} {...el} />;
        
      })}
    </>
  );
};

const RequestsList = () => {
  const dispatch = useDispatch();
  console.log("solicitudes");

  useEffect(() => {
    dispatch(FetchFriendRequests());
  },[]);

  const { friendRequests } = useSelector((state) => state.app);

  return (
    <>
      {friendRequests.map((el, idx) => {
        return <FriendRequestElement key={idx} {...el.sender} id={el._id} />;
        
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>{"Contactos"}</DialogTitle>
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explora" />
          <Tab label="Contactos" />
          <Tab label="Solicitudes" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {/* {(() => {
              switch (value) {
                case 0: // display all users in this list
                  return <UsersList />;
                
                case 1: // display friends in this list
                  return <FriendsList />;

                // break;
                case 2: // display request in this list
                  return <RequestsList />;

                //  break;

                default:
                  break;
              }
            })()} */}

            {value === 0 && <UsersList />}
            {value === 1 && <FriendsList />}
            {value === 2 && <RequestsList />}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
