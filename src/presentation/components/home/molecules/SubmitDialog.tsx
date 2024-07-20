import { Button, Typography, Box } from "@mui/material";

interface Props {
  handleClose: () => void;
  toQuotes: () => void;
}

export const SubmitDialog = ({ handleClose, toQuotes }: Props) => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h5" fontWeight={600} color="secondary">
        Cita registrada exitosamente
      </Typography>
      <Typography paddingY={2}>
        Puedes consultar tus citas en la opción de citas en la parte superior
      </Typography>

      <div>
        <Button
          variant="contained"
          sx={{ marginRight: 2 }}
          onClick={handleClose}
        >
          Aceptar
        </Button>
        <Button variant="contained" onClick={toQuotes}>
          ver citas
        </Button>
      </div>
    </Box>
  );
};
