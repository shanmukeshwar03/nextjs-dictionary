export default function () {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[600px] rounded-[10px] bg-white p-10 text-center shadow-card md:py-[55px] md:px-[70px]">
          <div className="mx-auto mb-14 text-center">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/404/image-07.svg"
              alt="404 image"
              className="mx-auto w-full max-w-full"
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold text-black sm:text-3xl">
            Sorry, we can't find that page
          </h2>
          <p className="mb-5 text-base text-body-color">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <a
            href="/"
            className="inline-flex items-center text-base font-medium text-primary hover:text-black"
          >
            Go Back to Home
            <span className="pl-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="fill-current"
              >
                <path d="M19.2188 8.90632L17.0625 6.34382C16.875 6.12507 16.5312 6.09382 16.2813 6.28132C16.0625 6.46882 16.0313 6.81257 16.2188 7.06257L18.25 9.46882H0.9375C0.625 9.46882 0.375 9.71882 0.375 10.0313C0.375 10.3438 0.625 10.5938 0.9375 10.5938H18.25L16.2188 13.0001C16.0313 13.2188 16.0625 13.5626 16.2813 13.7813C16.375 13.8751 16.5 13.9063 16.625 13.9063C16.7813 13.9063 16.9375 13.8438 17.0313 13.7188L19.1875 11.1563C19.75 10.4688 19.75 9.53132 19.2188 8.90632Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
