import Network from "./Network";

export default function Social() {
  return (
    <div className="flex gap-4 text-white">
      <Network networkName={"github"} />
      <Network networkName={"x-twitter"} />
      <Network networkName={"linkedin"} />
    </div>
  );
}
