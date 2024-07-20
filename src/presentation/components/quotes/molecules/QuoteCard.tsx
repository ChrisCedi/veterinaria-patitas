import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Dialog,
} from "@mui/material";
import { QuoteFormValues } from "../../../../types/types";
import { useNavigate } from "react-router-dom";
import { format } from "@formkit/tempo";
import { DeleteDialog } from "./DeleteDialog";
import { useQuotesStore } from "../../../store/useQuotesStore";

interface Props {
  quote: QuoteFormValues;
}

export const QuoteCard = ({ quote }: Props) => {
  const { removeQuote } = useQuotesStore();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => handleClickOpen()}
            >
              Borrar
            </Button>{" "}
          </Grid>
        </Grid>
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DeleteDialog
          handleClose={handleClose}
          handleDelete={() => {
            removeQuote(quote.id);
            handleClose();
          }}
        />
      </Dialog>
    </Card>
  );
};
