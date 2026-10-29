import { WhiteContactOrbitButton } from "@/components/ui/white-contact-orbit-button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div className="relative mx-auto w-full max-w-[75rem] px-4 md:px-6">
        <Reveal delay={80}>
          <h2 className="ds-display max-w-4xl text-display-lg">
            We can build something together.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-body-lg font-light text-muted">
            Willing to work together in a team or as an intern, and also open
            to discussions or simply hanging out and chatting.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <WhiteContactOrbitButton href={profile.links.email}>
              Email me
            </WhiteContactOrbitButton>
            <WhiteContactOrbitButton
              href={profile.links.whatsapp}
              target="_blank"
            >
              WhatsApp
            </WhiteContactOrbitButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
