import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getTeamMembers } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  const members = await getTeamMembers(locale);

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">Team</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{locale === "tr" ? "Ekip" : "Team"}</h1>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {members.map((member) => (
          <article key={member.id} className="border border-gray-2/40 bg-navy-2 p-6">
            <div className="relative mb-5 overflow-hidden rounded-xl">
              <Image
                src="/images/team/avatar-placeholder.svg"
                alt={`${member.name} portrait placeholder`}
                width={800}
                height={500}
                className="duotone h-44 w-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium">{member.name}</h2>
            <p className="mt-2 text-gray-1">{member.role}</p>
            <p className="mt-3 whitespace-pre-line text-gray-1">{member.bio}</p>
            {member.linkedin ? <a href={member.linkedin} className="mt-4 inline-flex text-cyan hover:text-cyan-2">LinkedIn</a> : null}
          </article>
        ))}
      </section>
    </div>
  );
}
