import CustomLink from "../components/ui/CustomLink";

function NotFoundPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-8 p-12">
      <img src="pageNotFound.png" alt="Page not found" />
      <h1 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
        Page that you are looking for does not exists yet!!
      </h1>
      <CustomLink to="/">Go to HomePage</CustomLink>
    </div>
  );
}

export default NotFoundPage;
