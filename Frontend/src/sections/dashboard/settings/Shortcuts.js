import {

  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Crt", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Crt", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archivar Chat",
    combination: ["Crt", "Shift", "E"],
  },
  {
    key: 3,
    title: "Borrar Chat",
    combination: ["Crt", "Shift", "U"],
  },
  {
    key: 4,
    title: "Marcar Chat",
    combination: ["Crt", "Shift", "P"],
  },
  {
    key: 5,
    title: "Buscar",
    combination: ["Crt", "F"],
  },
  {
    key: 6,
    title: "Buscar Chat",
    combination: ["Crt", "Shift", "F"],
  },
  {
    key: 7,
    title: "Proximo Chat",
    combination: ["Crt", "N"],
  },
  {
    key: 8,
    title: "Proximo Paso",
    combination: ["Crt", "Tap"],
  },
  {
    key: 9,
    title: "Retoceder Paso",
    combination: ["Crt", "Shift", "Tap"],
  },
  {
    key: 10,
    title: "Nuevo Grupo",
    combination: ["Crt", "Shift", "N"],
  },
  {
    key: 11,
    title: "Perfil",
    combination: ["Crt", "P"],
  },
  {
    key: 12,
    title: "Aumenta velocidad msg voz",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Disminuye velocidad msg voz",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Ajustes",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Panel Emojis",
    combination: ["Crt", "E"],
  },
  {
    key: 16,
    title: "Panel Stickers",
    combination: ["Crt", "S"],
  },
];
const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({key,title,combination}) => (
                
                <Grid key={key} container item xs={6}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent={"space-between"}
                    spacing={3}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="caption" sx={{fontSize: 14}}>
                        {title}
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                        {combination.map((el)=>{
                            return <Button disabled variant="contained" sx={{color: "#212121"}}>
                                {el}
                            </Button>
                        })}

                    </Stack>
                  </Stack>
                </Grid>
        
            
              
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
