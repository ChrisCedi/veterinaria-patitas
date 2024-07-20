import { Grid, Typography, Button, Box } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import dogImage from "../../../assets/gif/dog.gif";

export const StartSection = () => {
  return (
    <Grid
      container
      columnSpacing={2}
      sx={{
        height: "100vh",
        paddingTop: 5,
      }}
    >
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            height: "50%",
          },
        })}
      >
        <img src={dogImage} style={{ width: "80%" }} />
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            paddingBottom: 20,
            height: "50%",
          },
        })}
      >
        <Typography
          variant="h3"
          fontWeight={600}
          color="primary"
          sx={{ paddingBottom: 4 }}
          textAlign="center"
        >
          Veterinaria Patitas
        </Typography>
        <Typography sx={{ paddingY: 3 }}>
          Nos dedicamos a ofrecer el mejor cuidado para tus fieles compañeros.
          Nuestra misión es proporcionar atención veterinaria de alta calidad en
          un ambiente cálido y acogedor.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            backgroundImage: "url(../../../assets/png/main-background.png)",
          }}
        >
          <Button variant="contained">Conoce nuestros servicios</Button>
          <Button
            variant="contained"
            endIcon={<PetsIcon />}
            sx={{ marginTop: 3 }}
          >
            Agendar cita ahora
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
