export const Avatar = ({ image }: { image: string | null | undefined }) => {
  return image ? (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={image} />
      </div>
    </div>
  ) : (
    <div className="placeholder avatar">
      <div className="w-24 rounded-full bg-neutral-focus text-neutral-content">
        <span className="text-3xl">K</span>
      </div>
    </div>
  );
};
