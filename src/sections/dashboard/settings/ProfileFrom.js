import React, { useCallback, useState } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../../components/hook-form/FormProvider";
import { RHFTextField } from "../../../components/hook-form";
import { Stack, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
// import { UpdateUserProfile } from "../../../redux/slices/app";
// import { AWS_S3_REGION, S3_BUCKET_NAME } from "../../../config";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const { user } = useSelector((state) => state.app);

  const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().required("El Nombre es Requerido"),
    about: Yup.string().required("Estado Requerido"),
    avatar: Yup.string().required("Foto de Perfil Requerida").nullable(true),
  });

  const defaultValues = {
    firstName:"Nombre", //user?.firstName,
    about: "Estado",//user?.about,
    avatar: ""//`https://${S3_BUCKET_NAME}.s3.${AWS_S3_REGION}.amazonaws.com/${user?.avatar}`,
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    // formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      // dispatch(
      //   UpdateUserProfile({
      //     firstName: data?.firstName,
      //     about: data?.about,
      //     avatar: file,
      //   })
      // );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFile(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatar", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {/* <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} /> */}

        <RHFTextField
          helperText={"Este nombre es visible a tus contactos"}
          name="firstName"
          label="Nombre"
        />
        <RHFTextField multiline rows={4} name="about" label="Estado" />

        <Stack direction={"row"} justifyContent="end">
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitSuccessful || isSubmitting}
          >
            Guardar
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;