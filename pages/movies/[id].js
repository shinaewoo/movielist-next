import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      <Seo title={router.query.title} />
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
