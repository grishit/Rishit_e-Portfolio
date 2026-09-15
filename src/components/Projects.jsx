import { useMemo, useState } from 'react'
import projects, { projectCategories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => a.priority - b.priority)
    if (activeCategory === 'All') return sorted
    return sorted.filter((project) => project.categories.includes(activeCategory))
  }, [activeCategory])

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, activeCategory === 'All' ? 9 : 12)

  const featuredProjects = projects.filter((project) => project.featured).length

  const handleCategory = (category) => {
    setActiveCategory(category)
    setShowAll(category !== 'All')
  }

  return (
    <>
      <section className="section section-anchor projects-section" id="projects">
        <div className="container">
          <div className="section-heading section-heading-split project-heading">
            <div>
              <span className="section-kicker">Selected Work</span>
              <h2>Projects & Analytics Portfolio</h2>
            </div>

            <div className="project-heading-copy">
              <p>
                A growing portfolio of dashboards, Excel analysis, SQL work,
                operations projects, supply-chain studies, quality improvement
                and technology-enabled problem solving.
              </p>
              <div className="project-summary">
                <span><strong>{projects.length}</strong> projects</span>
                <span><strong>{featuredProjects}</strong> featured</span>
                <span><strong>{projectCategories.length - 1}</strong> categories</span>
              </div>
            </div>
          </div>

          <div className="project-filter-wrap">
            <div className="project-filters" role="group" aria-label="Project filters">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`project-filter ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard project={project} onOpen={setActiveProject} key={project.id} />
            ))}
          </div>

          {activeCategory === 'All' && filteredProjects.length > 9 && (
            <div className="projects-load-more">
              <button type="button" className="btn btn-outline-custom" onClick={() => setShowAll((current) => !current)}>
                {showAll ? 'Show Selected Projects' : `View All ${filteredProjects.length} Projects`}
                <i className={`bi ${showAll ? 'bi-arrow-up' : 'bi-arrow-down'} ms-2`}></i>
              </button>
            </div>
          )}

          <div className="project-update-note">
            <div><i className="bi bi-pencil-square"></i></div>
            <div>
              <strong>Designed to stay editable.</strong>
              <p>
                Projects are stored in <code>src/data/projects.js</code>.
                Add, remove, reorder or update a project there without rebuilding the visual layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}

export default Projects
