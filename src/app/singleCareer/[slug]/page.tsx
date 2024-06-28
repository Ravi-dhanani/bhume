import SingleCareer from "@/components/Common/SingleCareer";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <SingleCareer slug={params.slug} />
    </div>
  );
}
