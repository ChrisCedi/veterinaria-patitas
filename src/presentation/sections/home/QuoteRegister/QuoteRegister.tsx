import { Box, Typography } from "@mui/material";
import { QuoteForm } from "../../../components/home/molecules/QuoteForm";

export const QuoteRegister = () => {
  return (
    <Box id="quoteRegister" sx={{ paddingTop: 14, paddingBottom: 10 }}>
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
          [theme.breakpoints.down("md")]: {
            paddingX: 4,
            fontSize: 18,
          },
        })}
      >
        Llena el formulario a continuación para reservar la próxima visita de tu
        mascota con nuestro experimentado equipo veterinario.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={(theme) => ({
            maxWidth: "550px",

            [theme.breakpoints.down("sm")]: {
              minWidth: "300px",
              maxWidth: "450px",
            },
          })}
        >
          <QuoteForm />
        </Box>
      </Box>
    </Box>
  );
};
