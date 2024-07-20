import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, MenuItem, Grid, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubmitDialog } from "./SubmitDialog";
import { useQuotesStore } from "../../../store/useQuotesStore";
import { type QuoteFormValues } from "../../../../types/types";

export const QuoteForm: React.FC = () => {
  const { addQuote } = useQuotesStore();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const toQuotes = () => {
    navigate("/quotes");
  };
  const currentDateTime = new Date().toISOString().slice(0, 16);

  const onSubmit: SubmitHandler<QuoteFormValues> = (data) => {
    const newData = {
      ...data,
      id: `id-${Date.now()}`,
    };
    addQuote(newData);
    handleClickOpen();
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Controller
          name="responsable"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre del Responsable"
              fullWidth
              error={!!errors.responsable}
              helperText={errors.responsable ? errors.responsable.message : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo electrónico inválido",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="contacto"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[0-9]+$/, // Solo números
              message: "Solo se permiten números",
            },
            minLength: {
              value: 10,
              message: "Debe tener al menos 10 dígitos",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Número de Contacto"
              fullWidth
              error={!!errors.contacto}
              helperText={errors.contacto ? errors.contacto.message : ""}
              inputProps={{
                maxLength: 15, // Opcional: limita el número máximo de dígitos, puedes ajustarlo según necesites
                inputMode: "numeric", // Muestra el teclado numérico en dispositivos móviles
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="mascota"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre de la Mascota"
              fullWidth
              error={!!errors.mascota}
              helperText={errors.mascota ? errors.mascota.message : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="razon"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Razón de la Visita"
              fullWidth
              error={!!errors.razon}
              helperText={errors.razon ? errors.razon.message : ""}
            >
              <MenuItem value="Cuidado Preventivo">Cuidado Preventivo</MenuItem>
              <MenuItem value="Servicios de Diagnóstico">
                Servicios de Diagnóstico
              </MenuItem>
              <MenuItem value="Procedimientos Quirúrgicos">
                Procedimientos Quirúrgicos
              </MenuItem>
              <MenuItem value="Cuidado Dental">Cuidado Dental</MenuItem>
              <MenuItem value="Servicios de Grooming">
                Servicios de Grooming
              </MenuItem>
              <MenuItem value="Hospedaje y Guardería">
                Hospedaje y Guardería
              </MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="fechaHora"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es obligatorio",
            validate: (value) => {
              if (new Date(value) < new Date(currentDateTime)) {
                return "La fecha no puede ser anterior";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Fecha y Hora"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              error={!!errors.fechaHora}
              helperText={errors.fechaHora ? errors.fechaHora.message : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          fullWidth
        >
          Programar Cita
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <SubmitDialog handleClose={handleClose} toQuotes={toQuotes} />
        </Dialog>
      </Grid>
    </Grid>
  );
};
