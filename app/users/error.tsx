'use client';  // Error components must be Client components
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useEffect } from "react";

interface UserErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: UserErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (<div>
    <ErrorMessage text={error.message} />
    <button style={{ marginLeft: '2rem' }} onClick={() => reset()}>Try Again</button>
  </div>
  );
}