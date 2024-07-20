import { AppBar, Typography, Box } from "@mui/material";
import { Container } from "../Container";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../navigation/routes";
import { LinkHeader } from "./atoms/LinkHeader";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ paddingY: 3 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              display="flex"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Patitas <PetsIcon sx={{ marginLeft: 1 }} fontSize="small" />
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            {routes.map((route) => (
              <LinkHeader
                key={route.id}
                label={route.label!}
                path={route.path}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
