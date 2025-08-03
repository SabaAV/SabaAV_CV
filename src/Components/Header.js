import { useState, useEffect, useMemo } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    let position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ZeroOnes = useMemo(
    () =>
      Array.from({ length: 100 }, () => ({
        symbol: Math.random() > 0.5 ? "0" : "1",
        position: Math.random() * 100 + "%",
        delay: Math.random() * -30 + "s",
      })),
    []
  );

  return (
    <header>
      <div className="NumberContainer">
        {ZeroOnes.map((symbol, index) => (
          <span
            key={index}
            className="ZeroOne"
            style={{
              left: symbol.position,
              animationDelay: symbol.delay,
            }}
          >
            {symbol.symbol}
          </span>
        ))}
      </div>
      <h1
        style={{
          transform: "translateY(" + scrollPosition / 2 + "px)",
          opacity: 1 / (scrollPosition / 5 / 10),
        }}
      >
        Saba Avlokhashvili
      </h1>
      <h2
        style={{
          transform: "translateY(" + scrollPosition / 2 + "px)",
          opacity: 1 / (scrollPosition / 5 / 10),
        }}
      >
        Web Developer
      </h2>
    </header>
  );
}

export default Header;
