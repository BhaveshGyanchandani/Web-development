import { CoreConcept } from "./coreConcept";
import { CORE_CONCEPTS } from "../data";
import '../index.css';

export function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                 {/* <CoreConcept title="component"
              description="new world"
              image={logo}
            />
              <CoreConcept title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

                {CORE_CONCEPTS.map((conceptItems) => (
                    <CoreConcept key={conceptItems.title} {...conceptItems} />
                ))}

            </ul>
        </section>
    );

}