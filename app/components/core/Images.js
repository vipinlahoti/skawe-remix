// import Image from "next/image";

export const Images = ({ className = "", rounded, svg, src, alt, circle }) => (
  <div
    className={`relative flex ${className} ${
      svg ? "invert-0 dark:invert" : ""
    } ${
      circle
        ? "before:items-center before:-z-10 before:aspect-square before:bg-amber-400 before:rounded-full before:absolute before:inset-0"
        : ""
    }`}
  >
    <img
      src={src}
      alt={alt}
      layout="fill"
      className={rounded ? "rounded-3xl" : ""}
    />
  </div>
);

// <Image
//   src={src}
//   alt={alt}
//   layout="fill"
//   className={rounded ? "rounded-3xl" : ""}
// />
