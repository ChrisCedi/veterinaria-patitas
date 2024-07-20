import { Box, Button, Typography } from "@mui/material";

interface Props {
  handleDelete: () => void;
  handleClose: () => void;
}
export const DeleteDialog = ({ handleClose, handleDelete }: Props) => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography sx={{ paddingY: 4 }}>¿Deseas eliminar esta cita?</Typography>
      <Button
        variant="contained"
        sx={{ marginRight: 3 }}
        onClick={handleDelete}
      >
        Aceptar
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Cancelar
      </Button>
    </Box>
  );
};
