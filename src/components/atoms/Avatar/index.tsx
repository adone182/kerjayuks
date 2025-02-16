type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Avatar = ({ src, alt, className }: AvatarProps) => {
  return <img className={className} src={src} alt={alt} />;
};
