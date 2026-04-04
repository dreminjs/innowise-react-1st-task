import { useForm } from "react-hook-form";
import { TCreatePostSchema } from "../posts.interfaces";
import { createPostSchema } from "../posts.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreatePostForm = () => {
  const { register, handleSubmit, reset } = useForm<TCreatePostSchema>({
    resolver: zodResolver(createPostSchema),
  });

  return { register, handleSubmit, reset };
};
