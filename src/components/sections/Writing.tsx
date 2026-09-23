const thoughts = [
  {
    title:
      'Imposter syndrome, social media, and measuring yourself against yesterday',
    lead:
      'It is easy to look at somebody else in tech and decide you are behind. The problem is that you are usually comparing your unfinished process against a version of their life selected specifically to be seen.',
    body: [
      `There is always going to be somebody who knows something you do not. That is not a failure condition; it is how specialization works. The person who can tear apart an engine may know very little about enterprise networking. The person who can rebuild a network may know almost nothing about HVAC. Neither fact makes either person incompetent.`,
      `Technical careers make this worse because the surface area is enormous and the internet makes everyone else's strongest moment visible at the same time. You see the certification announcement, the new job, the launch, the salary, or the finished project. You usually do not see the abandoned versions, the broken builds, the interviews that went nowhere, or the hours spent figuring out why something that should work simply does not.`,
      `You don't need to know everything. Nobody does. Learn enough to recognize what you do not know, build enough to expose the gaps, break things where it is safe to break them, fix what you can, and know when the problem needs somebody with a different specialization. Compare yourself to the person you were yesterday more often than you compare yourself to somebody else's highlight reel.`,
    ],
  },
  {
    title:
      'What should matter in tech hiring versus what actually does',
    lead:
      'Saying that degrees or certifications do not matter sounds clean. So does saying everyone needs them. Both statements collapse a system with different employers, contracts, labor categories, roles, and constraints into advice that is easier to repeat than it is to use.',
    body: [
      `There is a difference between what should matter and what does matter. Ideally, hiring would perfectly measure whether somebody can perform the work. In practice, organizations still use degrees, certifications, years of experience, clearance requirements, labor categories, internal policy, and customer requirements as filters. You can disagree with those filters and still have to account for them.`,
      `That does not mean collecting credentials without a destination is a strategy. A certification that unlocks a requirement for the work you want can be useful. A degree that satisfies a labor category or opens a path you actually intend to pursue can be useful. Experience that proves you can operate in the environment is useful. The value depends on the system you are trying to enter.`,
      `Work backward from the destination. Read the requirements for the jobs, contracts, organizations, and roles you actually want. Build the toolbox that gives you the most ways through those doors. Don't tell people to close doors just because you don't think those doors should exist.`,
    ],
  },
]

export function Writing() {
  return (
    <section
      className="section writing-section"
      id="writing"
    >
      <header className="section-heading">
        <p className="section-kicker">
          FIELD NOTES
        </p>

        <h2>
          Writing
        </h2>

        <p className="section-intro">
          Occasional writing on technical careers,
          learning, problem solving, and the
          systems that shape the work.
        </p>
      </header>

      <div className="writing-grid">
        {thoughts.map((thought) => (
          <details
            className="writing-card"
            key={thought.title}
          >
            <summary>
              <span className="writing-label">
                Field note
              </span>

              <h3>{thought.title}</h3>

              <p>{thought.lead}</p>

              <span className="writing-action">
                Read note
              </span>
            </summary>

            <div className="writing-body">
              {thought.body.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
