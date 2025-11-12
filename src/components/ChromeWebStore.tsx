export const ChromeWebStore = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="206"
      height="60"
      viewBox="0 0 206 60"
      fill="none"
    >
      <g>
        <path
          d="M193.5 0H12.5C5.59644 0 0 5.59644 0 12.5V47.5C0 54.4036 5.59644 60 12.5 60H193.5C200.404 60 206 54.4036 206 47.5V12.5C206 5.59644 200.404 0 193.5 0Z"
          fill="url(#chrome-gradient)"
        />
        <path
          d="M193.5 1H12.5C6.14873 1 1 6.14873 1 12.5V47.5C1 53.8513 6.14873 59 12.5 59H193.5C199.851 59 205 53.8513 205 47.5V12.5C205 6.14873 199.851 1 193.5 1Z"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      </g>
      <text
        x="103"
        y="35"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="500"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        CHROME WEB STORE
      </text>
      <defs>
        <linearGradient id="chrome-gradient" x1="0" y1="0" x2="206" y2="60">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  );
};

