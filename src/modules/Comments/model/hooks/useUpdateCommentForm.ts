import { useForm } from "react-hook-form";
import { TCreateCommentForm } from "../comments.interface";

export const useUpdateCommentForm = (defaultBody: string) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreateCommentForm>({
    defaultValues: { body: defaultBody },
  });

  return { register, handleSubmit, errors, reset };
};
