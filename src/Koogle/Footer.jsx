const Footer = () => {
  return (
    <div className="flex justify-between items-center h-10 bg-green-300 text-white border-green-500 border-y-1">
      <div className="ml-4">(this is not a real website)</div>
      <div>
        Made with{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-violet-700 hover:text-white underline"
        >
          Tailwind css
        </a>
      </div>
      <div className="mr-4">Created By Pier Y</div>
    </div>
  );
};

export default Footer;
