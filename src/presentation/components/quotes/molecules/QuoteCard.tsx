import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import { QuoteFormValues } from "../../../../types/types";
import { useNavigate } from "react-router-dom";
import { format } from "@formkit/tempo";

interface Props {
  quote: QuoteFormValues;
}

export const QuoteCard = ({ quote }: Props) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography color="primary" fontWeight={600}>
              Paciente: {quote.mascota}
            </Typography>
            <Typography>
              Fecha: {format(quote.fechaHora, "DD/MM/YYYY", "es")}
            </Typography>
            <Typography>
              Hora: {format(quote.fechaHora, "h:mm a", "es")}
            </Typography>
            <Typography>
              Estatus:{" "}
              {new Date(quote.fechaHora) > new Date()
                ? "Pendiente"
                : "Realizada"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              color="info"
              size="small"
              onClick={() => navigate(`/quotes/${quote.id}`)}
            >
              Detalles
            </Button>
            <Button variant="outlined" color="error" size="small">
              Borrar
            </Button>{" "}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
