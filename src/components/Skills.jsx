import { skillGroups, toolRibbon } from '../data/skills'

function Skills() {
  return (
    <section className="section section-anchor skills-section" id="skills">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">Capabilities</span>
            <h2>Tools are useful only when they improve the decision.</h2>
          </div>
          <p>
            My skill set combines analytics, databases, programming, operations,
            quality and professional problem solving — allowing me to work across
            both business and technical contexts.
          </p>
        </div>

        <div className="tool-ribbon">
          {toolRibbon.map((tool) => (
            <div className="tool-ribbon-item" key={tool.name}>
              <i className={`bi ${tool.icon}`}></i>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="skills-bento">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-group-card skill-group-${index + 1}`}
              key={group.title}
            >
              <div className="skill-group-head">
                <div className="skill-group-icon">
                  <i className={`bi ${group.icon}`}></i>
                </div>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-chip-grid">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
