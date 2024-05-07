import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import AuthLoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Iniciar Sesion EstuChat</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">¿Nuevo Usuario?</Typography>

          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Crea una cuenta aqui
          </Link>
        </Stack>
      </Stack>
      {/* Form */}
      <AuthLoginForm />

      <AuthSocial />
    </>
  );
};

export default Login;
