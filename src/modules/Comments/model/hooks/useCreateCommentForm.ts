import { useForm } from "react-hook-form";
import { TCreateCommentForm } from "../comments.interface";
import { createCommentFormSchema } from "../comments.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateCommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreateCommentForm>({
    resolver: zodResolver(createCommentFormSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
};
