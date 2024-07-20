import { Typography } from "@mui/material";

interface Props {
  service: {
    title: string;
    description: string;
  };
}

export const ServiceCard = ({ service }: Props) => {
  return (
    <div>
      <Typography fontWeight={600} fontSize={20}>
        {service.title}
      </Typography>
      <Typography>{service.description}</Typography>
    </div>
  );
};
