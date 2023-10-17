import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
function AccordionsCurse() {
    return (
        <Accordion transitionOptions={{ transitionDuration: '0s' }} activeIndex={0}>
            <AccordionTab header="Design Digital">
                <p className="m-0">
                    Durante o primeiro ano, os alunos são imersos no universo do design digital. Esta matéria abrange uma variedade de conceitos, desde composições de imagens até a criação de layouts envolventes. Os estudantes exploram técnicas essenciais para desenvolver habilidades em design, aprendendo a harmonizar elementos visuais e a contar histórias visualmente. Esta experiência educativa oferece uma base sólida para os futuros desenvolvedores, combinando conhecimento técnico com criatividade para produzir interfaces digitais impactantes.
                </p>
            </AccordionTab>
            <AccordionTab header="Programação Web">
                <p className="m-0">
                    A matéria de Programação Web oferece uma imersão profunda no mundo em constante evolução da web. Nesta disciplina, os alunos exploram as complexidades do desenvolvimento web, desde a criação de páginas estáticas até o domínio de tecnologias avançadas como HTML, JavaScript e CSS3.
                </p>
            </AccordionTab>
            <AccordionTab header="Banco de Dados">
                <p className="m-0">
                    Ao longo desta matéria, os estudantes exploram modelos relacionais, linguagens de consulta SQL e técnicas avançadas de otimização. Eles descobrem como transformar dados brutos em informações valiosas, essenciais para a tomada de decisões informadas. Além disso, são desafiados a compreender a importância da segurança e integridade dos dados, fundamentais em um mundo digital cada vez mais interconectado.
                </p>
            </AccordionTab>
            <AccordionTab header="Aplicativos Mobile">
                <p className="m-0">
                    Na matéria de Desenvolvimento de Aplicativos Mobile os estudantes embarcam em uma jornada inovadora pelo universo dos dispositivos móveis. Neste curso dinâmico, os estudantes mergulham no desenvolvimento de aplicativos para smartphones e tablets, explorando plataformas populares como Android e iOS.
                </p>
            </AccordionTab>
            <AccordionTab header="Análise e Projeto de Sistemas">
                <p className="m-0">
                    A disciplina de Análise de Projetos de Sistemas oferece uma compreensão aprofundada sobre a arquitetura e funcionamento dos sistemas digitais modernos. Os alunos mergulham em metodologias de análise, aprendendo a desmembrar projetos complexos em componentes gerenciáveis e compreender os requisitos detalhados.
                </p>
            </AccordionTab>
            <AccordionTab header="Sistemas Embarcados">
                <p className="m-0">
                    Em Sistemas Embarcados mergulhamos fundo na essência da inovação tecnológica. Nesta matéria desafiadora, os alunos exploram o fascinante universo dos sistemas integrados em dispositivos do dia a dia, desde eletrodomésticos inteligentes até veículos autônomos.
                </p>
            </AccordionTab>
            <AccordionTab header="Fundamentos da Informática">
                <p className="m-0">
                    Nesta matéria, os alunos exploram os princípios essenciais da informática, conhecendo o universo dos computadores e da tecnologia. A disciplina abrange desde noções básicas de hardware e software até os fundamentos de sistemas operacionais e aplicativos de produtividade.
                </p>
            </AccordionTab>
            <AccordionTab header="Desenvolvimento de Sistemas">
                <p className="m-0">
                    Por fim, em desenvolvimento de sistemas os alunos são guiados através do intricado processo de criação de sistemas de software. Desde a concepção da ideia até a implementação prática, os estudantes exploram linguagens de programação modernas, metodologias ágeis e técnicas de design de software.
                </p>
            </AccordionTab>
        </Accordion>
    );
}
export default AccordionsCurse;