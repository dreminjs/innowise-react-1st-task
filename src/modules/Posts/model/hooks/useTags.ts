import { useState } from "react";

export const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags((prev) => [...prev, tag]);
    }
  };

  const handleReset = () => {
    setTags([]);
  };

  return { tags, handleAddTag, handleReset };
};
