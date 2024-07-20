import { Box, Typography } from "@mui/material";

export const QuoteRegister = () => {
  return (
    <Box id="quoteRegister" sx={{ height: "100vh", paddingTop: 14 }}>
      <Typography
        variant="h4"
        fontWeight={600}
        color="primary"
        textAlign="center"
      >
        Programar cita
      </Typography>
      <Typography
        textAlign="center"
        fontSize={22}
        sx={(theme) => ({
          paddingX: 20,
          paddingY: 4,
          [theme.breakpoints.down("sm")]: {
            paddingX: 4,
            fontSize: 18,
          },
        })}
      >
        Llena el formulario a continuación para reservar la próxima visita de tu
        mascota con nuestro experimentado equipo veterinario.
      </Typography>
    </Box>
  );
};
