import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { CaretLeft } from "phosphor-react";
import AuthResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          ¿Olvidaste tu contraseña?
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          
          Por favor en proporciona la direccion email de tu cuenta 
          y nosotros te mandaremos un link para que puedas cambiar tu contraseña.
        </Typography>
      </Stack>

      {/* Reset Password Form */}
      <AuthResetPasswordForm />

      <Link
        component={RouterLink}
        to={"/auth/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={24} />
        Return to sign in
      </Link>
    </>
  );
};

export default ResetPassword;