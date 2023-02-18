export const Avatar = ({ image }: { image: string | null }) => {
  return image ? (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
