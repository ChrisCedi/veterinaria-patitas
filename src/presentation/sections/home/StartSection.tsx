import { Grid, Typography, Button } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import dogImage from "../../../assets/gif/dog.gif";

export const StartSection = () => {
  return (
    <Grid
      container
      columnSpacing={2}
      sx={{
        height: "100vh",
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
        >
          Veterinaria Patitas
        </Typography>
        <Typography sx={{ paddingY: 3 }}>
          Nos dedicamos a ofrecer el mejor cuidado para tus fieles compañeros.
          Nuestra misión es proporcionar atención veterinaria de alta calidad en
          un ambiente cálido y acogedor.
        </Typography>
        <Button variant="contained" endIcon={<PetsIcon />}>
          Agendar cita ahora
        </Button>
      </Grid>
    </Grid>
  );
};
