"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useExtracted } from "next-intl";
import { useState } from "react";
import { useRepositoryProjects } from "../../../data/repositories";
import { LiquidFill } from "../motion/liquid-fill";
import { SectionLabel } from "../ui/section-label";

const PAGE_SIZE = 8;

export function RepositoryArchive() {
  const t = useExtracted();
  const repositories = useRepositoryProjects();
  const reducedMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(repositories.length / PAGE_SIZE);
  const visibleRepositories = repositories.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function selectPage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 0), pageCount - 1));
  }

  return (
    <section className="repository-archive bordered-section" id="archive" aria-labelledby="archive-title">
      <div className="site-shell">
        <SectionLabel number="08" label={t("PROJECT ARCHIVE / PUBLIC BUILDS")} />
        <div className="repository-archive__head">
          <h2 id="archive-title" className="section-title">{t("MORE")}<br />{t("BUILDS.")}</h2>
          <div><strong>{repositories.length.toString().padStart(2, "0")}</strong><span>{t("PUBLIC PROJECTS")}</span><p>{t("Applications, automation, data experiments, campaign sites, creative microsites, and computational tools from the public repository archive.")}</p></div>
        </div>

        <div className="repository-page" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="repository-grid"
              key={page}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {visibleRepositories.map((project, index) => {
                const repositoryIndex = page * PAGE_SIZE + index;
                return (
                  <article className="repository-card liquid-surface" key={project.id}>
                    <LiquidFill color="violet" intensity="subtle" duration={1.25} />
                    <div className="repository-card__meta"><span>{(repositoryIndex + 1).toString().padStart(2, "0")}</span><span>{project.category}</span><time>{project.year}</time></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="repository-card__stack">{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="repository-card__links">
                      {project.githubUrl && <a className="liquid-control liquid-surface" href={project.githubUrl} target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>{t("SOURCE / GITHUB")} ↗</span></a>}
                      {project.liveUrl && <a className="liquid-control liquid-surface" href={project.liveUrl} target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>{t("OPEN APPLICATION")} ↗</span></a>}
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <nav className="repository-pagination" aria-label={t("Project archive pagination")}>
          <button className="liquid-control liquid-surface" type="button" onClick={() => selectPage(page - 1)} disabled={page === 0}><LiquidFill color="violet" intensity="strong" duration={.9} /><span>← {t("PREVIOUS")}</span></button>
          <div>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                type="button"
                className={`liquid-control liquid-surface ${page === index ? "is-active" : ""}`}
                aria-current={page === index ? "page" : undefined}
                aria-label={t("Go to archive page {page}", { page: String(index + 1) })}
                onClick={() => selectPage(index)}
                key={index}
              >
                <LiquidFill color="violet" intensity="strong" duration={.8} />
                <span>{(index + 1).toString().padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <button className="liquid-control liquid-surface" type="button" onClick={() => selectPage(page + 1)} disabled={page === pageCount - 1}><LiquidFill color="violet" intensity="strong" duration={.9} /><span>{t("NEXT")} →</span></button>
        </nav>
      </div>
    </section>
  );
}
