const JumboTitle = ({ title, txt, m }) => {
  return (
    <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${m}`}>
      <span className={`block ${txt}`}>
        {title}
      </span>
    </h2>
    );
}

export default JumboTitle;