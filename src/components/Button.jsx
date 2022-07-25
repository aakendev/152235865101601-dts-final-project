const Button = ({ title, bg, txt, m, href, sx, click }) => {
  return (
    <div className={`inline-flex rounded-md shadow ${m}`}>
      <a
        href={href}
        onClick={click}
        style={sx}
        className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${txt} ${bg}`}>
        {title}
      </a>
    </div>
  );
}

export default Button;