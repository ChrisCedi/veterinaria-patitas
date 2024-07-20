import { Box, Typography } from "@mui/material";
import { Container } from "../../components/shared/Container";
import { useQuotesStore } from "../../store/useQuotesStore";

export const Quotes = () => {
  const { quotes } = useQuotesStore();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Box sx={{ paddingTop: 15 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={600}
            color="primary"
            sx={{ paddingBottom: 4 }}
          >
            Registro de citas
          </Typography>

          {quotes.length > 0 ? (
            `${quotes.length}`
          ) : (
            <Typography>No hay citas registradas</Typography>
          )}
        </Container>
      </Box>
    </div>
  );
};
