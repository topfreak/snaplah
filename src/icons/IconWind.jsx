const IconWind = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
    <path d="M12.59 11.59A2 2 0 1 1 14 15H2" />
    <path d="M15.59 18.59A2 2 0 1 1 17 22H2" />
  </svg>
);

export default IconWind;