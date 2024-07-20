import { Box, Typography, Grid } from "@mui/material";
import { Container } from "../../../components/shared/Container";
import { servicesList } from "./mocks";
import { ServiceCard } from "../../../components/home/molecules/ServiceCard";

export const Services = () => {
  return (
    <Box
      id="services"
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[200],
      })}
    >
      <Box
        sx={{
          paddingTop: 14,
          paddingBottom: 10,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            color="primary"
            fontWeight={600}
            textAlign="center"
          >
            Nuestros servicios veterinarios
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
            Desde chequeos de rutina hasta tratamientos especializados,
            ofrecemos una amplia gama de servicios para mantener a tus mascotas
            saludables y felices.
          </Typography>
          <Grid container columnSpacing={4} rowSpacing={6} py={4}>
            {servicesList.map((service) => (
              <Grid item sm={12} md={4} key={service.title}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
