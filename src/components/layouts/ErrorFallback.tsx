import { FallbackProps } from "react-error-boundary";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element {
  return (
    <div
      role="alert"
      className="flex h-screen w-screen items-center justify-center gap-4 bg-gray-50 p-6"
    >
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        className="rounded-lg bg-pink-500 text-white"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
