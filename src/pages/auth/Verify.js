import { Link as RouterLink } from "react-router-dom";
// sections
import { Stack, Typography, Link } from "@mui/material";

import VerifyForm from "../../sections/auth/VerifyForm";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Por favor de verificar OTP</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">
            Email enviado por (luis.gonzalez7880@alumnos.udg.mx)
          </Typography>
        </Stack>
      </Stack>
      {/* Form */}
      <VerifyForm />
    </>
  );
}