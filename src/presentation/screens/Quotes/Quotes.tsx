import { Box, Typography, Grid } from "@mui/material";
import { Container } from "../../components/shared/Container";
import { useQuotesStore } from "../../store/useQuotesStore";
import { QuoteCard } from "../../components/quotes/molecules/QuoteCard";

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

          <Grid container columnSpacing={4} rowSpacing={3}>
            {quotes.length > 0 ? (
              quotes.map((quote) => (
                <Grid item xs={12} md={6} lg={4} key={quote.id}>
                  <QuoteCard quote={quote} />
                </Grid>
              ))
            ) : (
              <Typography>No hay citas registradas</Typography>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
