import { projects } from "@/data/projects";
import { resolveAssociation } from "@/data/resolve";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  if (projects.length === 0) return null;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const associations = project.associatedWith
            ?.map(resolveAssociation)
            .filter((label): label is string => Boolean(label));

          return (
            <Card key={project.id}>
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">
                {project.description}
              </p>
              {associations && associations.length > 0 && (
                <p className="mt-2 text-xs text-foreground/60">
                  Built for: {associations.join(", ")}
                </p>
              )}
              {project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
              {project.links && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
                    >
                      Live
                    </a>
                  )}
                  {project.links.writeup && (
                    <a
                      href={project.links.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
                    >
                      Write-up
                    </a>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
