import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Container } from "../../components/shared/Container";
import { useQuotesStore } from "../../store/useQuotesStore";
import { format } from "@formkit/tempo";

export const QuoteDetails = () => {
  const params = useParams();
  const { quotes } = useQuotesStore();

  const quoteDetail = quotes.find((item) => item.id === params.id);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Box sx={{ paddingTop: 15 }}>
        <Container>
          <Typography variant="h4" color="primary">
            Paciente: {quoteDetail?.mascota}
          </Typography>
          <Typography variant="h5" paddingBottom={2} paddingTop={1}>
            Información de la cita
          </Typography>
          <Typography>
            Fecha: {format(quoteDetail!.fechaHora, "DD/MM/YYYY", "es")}
          </Typography>
          <Typography>
            Hora: {format(quoteDetail!.fechaHora, "h:mm a", "es")}
          </Typography>
          <Typography>Razón: {quoteDetail?.razon}</Typography>
          <Typography variant="h5" paddingBottom={2} paddingTop={1}>
            Información del dueño
          </Typography>
          <Typography>Nombre: {quoteDetail?.responsable}</Typography>
          <Typography>{quoteDetail?.email}</Typography>
          <Typography>{quoteDetail?.contacto}</Typography>
        </Container>
      </Box>
    </div>
  );
};
